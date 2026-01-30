import React, { useState, useCallback, memo } from 'react';
import { Copy, Check, FileCode, Download } from 'lucide-react';
import { APP_CONFIG } from '../constants';

interface LatexOutputProps {
  content: string;
}

/**
 * LatexOutput component - Displays generated LaTeX code with copy functionality
 * Memoized to prevent unnecessary re-renders
 */
const LatexOutput: React.FC<LatexOutputProps> = memo(({ content }) => {
  const [copied, setCopied] = useState(false);

  /**
   * Copies LaTeX content to clipboard
   */
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), APP_CONFIG.COPY_FEEDBACK_DURATION);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  }, [content]);

  /**
   * Downloads LaTeX content as .tex file
   */
  const handleDownload = useCallback(() => {
    try {
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `math-solution-${Date.now()}.tex`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to download file:', err);
    }
  }, [content]);

  if (!content) return null;

  return (
    <section
      className="mt-8 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-[600px] animate-fade-in"
      aria-label="Generated LaTeX output"
    >
      <header className="bg-gradient-to-r from-slate-50 to-blue-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
        <div className="flex items-center gap-2 text-slate-700 font-semibold">
          <FileCode size={20} className="text-blue-600" />
          <h2 className="text-base">Generated LaTeX Code</h2>
          <span className="text-xs text-slate-500 ml-2">({content.split('\n').length} lines)</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-300 rounded-md text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm"
            aria-label="Download LaTeX file"
          >
            <Download size={16} />
            Download .tex
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
            aria-label={copied ? 'LaTeX code copied' : 'Copy LaTeX code to clipboard'}
          >
            {copied ? <Check size={16} className="text-white" /> : <Copy size={16} />}
            {copied ? 'Copied!' : 'Copy LaTeX'}
          </button>
        </div>
      </header>
      <div className="flex-1 overflow-auto p-6 bg-slate-900">
        <pre className="text-sm leading-relaxed whitespace-pre-wrap font-mono">
          <code className="latex-code">{content}</code>
        </pre>
      </div>
    </section>
  );
});

LatexOutput.displayName = 'LatexOutput';

export default LatexOutput;

