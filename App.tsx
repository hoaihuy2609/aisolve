import React, { useState, useCallback, useMemo } from 'react';
import { Upload, ImagePlus, Loader2, Sparkles, Trash2, AlertCircle } from 'lucide-react';
import { ImageFile } from './types';
import ImageCard from './components/ImageCard';
import LatexOutput from './components/LatexOutput';
import { solveProblemsFromImages } from './services/geminiService';
import { APP_CONFIG, ERROR_MESSAGES } from './constants';
import { validateFile, generateUniqueId } from './utils';

const App: React.FC = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  /**
   * Handles file selection and validation
   */
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;

    const files: File[] = Array.from(fileList);

    // Check max images limit
    if (images.length + files.length > APP_CONFIG.MAX_IMAGES) {
      setError(ERROR_MESSAGES.MAX_IMAGES_EXCEEDED(APP_CONFIG.MAX_IMAGES));
      return;
    }

    // Validate each file
    const validationErrors: string[] = [];
    const validFiles: File[] = [];

    files.forEach((file) => {
      const validation = validateFile(file);
      if (validation.valid) {
        validFiles.push(file);
      } else if (validation.error) {
        validationErrors.push(`${file.name}: ${validation.error}`);
      }
    });

    // Show validation errors if any
    if (validationErrors.length > 0) {
      setError(validationErrors.join('\n'));
      return;
    }

    // Create image objects with preview URLs
    const newImages: ImageFile[] = validFiles.map((file: File) => ({
      id: generateUniqueId(),
      file,
      previewUrl: URL.createObjectURL(file)
    }));

    setImages(prev => [...prev, ...newImages]);
    setError(null);
    // Reset input so the same file can be selected again if needed
    e.target.value = '';
  }, [images.length]);

  /**
   * Removes a single image by ID
   */
  const removeImage = useCallback((id: string) => {
    setImages(prev => {
      const filtered = prev.filter(img => img.id !== id);
      const removed = prev.find(img => img.id === id);
      if (removed) URL.revokeObjectURL(removed.previewUrl);
      return filtered;
    });
  }, []);

  /**
   * Clears all images and results
   */
  const clearAll = useCallback(() => {
    images.forEach(img => URL.revokeObjectURL(img.previewUrl));
    setImages([]);
    setResult('');
    setError(null);
  }, [images]);

  /**
   * Sends images to AI for solving
   */
  const handleSolve = useCallback(async () => {
    if (images.length === 0) return;

    setLoading(true);
    setResult('');
    setError(null);

    try {
      const latex = await solveProblemsFromImages(images.map(img => img.file));
      setResult(latex);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred while solving.");
    } finally {
      setLoading(false);
    }
  }, [images]);

  /**
   * Computed values
   */
  const canUploadMore = useMemo(() => images.length < APP_CONFIG.MAX_IMAGES, [images.length]);
  const canSolve = useMemo(() => !loading && images.length > 0, [loading, images.length]);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl mb-4">
            <Sparkles className="text-blue-600" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">
            LaTeX Math Solver AI
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Upload images of math problems and get complete LaTeX code with step-by-step solutions instantly.
          </p>
        </header>

        {/* Main Interface */}
        <main className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 sm:p-8">
            {/* Upload Area */}
            <section className="mb-8">
              <label
                className={`
                  relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-xl cursor-pointer 
                  transition-all duration-200
                  ${!canUploadMore ? 'bg-slate-50 border-slate-200 cursor-not-allowed' : 'hover:bg-blue-50 border-slate-300 hover:border-blue-400'}
                `}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-10 h-10 text-slate-400 mb-3" />
                  <p className="mb-2 text-sm text-slate-600">
                    <span className="font-semibold text-blue-600">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-slate-500">
                    PNG, JPG or WebP (Max {APP_CONFIG.MAX_IMAGES} images)
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  disabled={!canUploadMore}
                  aria-label="Upload images"
                />
              </label>
            </section>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 flex items-start gap-3 text-red-700" role="alert">
                <AlertCircle size={20} className="mt-0.5 shrink-0" />
                <p className="text-sm font-medium whitespace-pre-line">{error}</p>
              </div>
            )}

            {/* Previews */}
            {images.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                    Selected Images ({images.length}/{APP_CONFIG.MAX_IMAGES})
                  </h2>
                  <button
                    onClick={clearAll}
                    className="text-xs font-medium text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors"
                    aria-label="Clear all images"
                  >
                    <Trash2 size={14} />
                    Clear All
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {images.map(img => (
                    <ImageCard
                      key={img.id}
                      previewUrl={img.previewUrl}
                      onRemove={() => removeImage(img.id)}
                    />
                  ))}
                  {canUploadMore && (
                    <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                      <ImagePlus size={24} className="text-slate-400" />
                      <input
                        type="file"
                        className="hidden"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        aria-label="Add more images"
                      />
                    </label>
                  )}
                </div>
              </section>
            )}

            {/* Action Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSolve}
                disabled={!canSolve}
                className={`
                  flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-lg transition-all shadow-lg
                  ${!canSolve
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02] active:scale-95'}
                `}
                aria-label="Solve math problems"
              >
                {loading ? (
                  <>
                    <Loader2 size={24} className="animate-spin" />
                    Analyzing Problems...
                  </>
                ) : (
                  <>
                    <Sparkles size={24} />
                    Solve and Generate LaTeX
                  </>
                )}
              </button>
            </div>
          </div>
        </main>

        {/* Results */}
        {result && <LatexOutput content={result} />}

        {/* Info Footer */}
        <footer className="mt-12 text-center text-slate-500 text-sm">
          <p>© 2024 LaTeX Math Solver AI • Powered by Gemini Flash</p>
          <div className="mt-2 flex justify-center gap-4">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Multi-image Processing
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              LaTeX Specialist
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
