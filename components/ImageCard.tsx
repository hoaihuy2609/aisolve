import React, { memo } from 'react';
import { X } from 'lucide-react';

interface ImageCardProps {
  previewUrl: string;
  onRemove: () => void;
}

/**
 * ImageCard component - Displays a preview of an uploaded image with remove button
 * Memoized to prevent unnecessary re-renders
 */
const ImageCard: React.FC<ImageCardProps> = memo(({ previewUrl, onRemove }) => {
  return (
    <div className="relative group rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
      <img
        src={previewUrl}
        alt="Math problem preview"
        className="w-full h-32 object-cover"
        loading="lazy"
      />
      <button
        onClick={onRemove}
        className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
        title="Remove image"
        aria-label="Remove this image"
      >
        <X size={14} />
      </button>
    </div>
  );
});

ImageCard.displayName = 'ImageCard';

export default ImageCard;
