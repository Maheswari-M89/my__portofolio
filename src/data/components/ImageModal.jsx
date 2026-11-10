import React, { useEffect } from 'react';
import { X, ZoomIn, Info } from 'lucide-react';

export default function ImageModal({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-plum-950/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full glass-panel rounded-2xl overflow-hidden border border-gold-400/25 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-plum-700/60 bg-plum-900/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse"></span>
            <h4 className="text-sm sm:text-base font-medium text-slate-100 line-clamp-1">
              {image.title || 'Photograph Preview'}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-gold-300 hover:bg-plum-800/80 transition-colors"
            aria-label="Close image modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image display */}
        <div className="relative bg-plum-950 flex items-center justify-center max-h-[70vh] overflow-hidden p-2">
          <img
            src={image.src || image.url}
            alt={image.caption || image.title || "Portfolio photograph"}
            className="w-auto h-auto max-h-[68vh] max-w-full object-contain rounded-lg shadow-inner"
            loading="lazy"
          />
        </div>

        {/* Caption */}
        {(image.caption || image.category) && (
          <div className="p-4 sm:p-5 border-t border-plum-700/60 bg-plum-900/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
            <p className="text-slate-300 italic flex-1">
              "{image.caption}"
            </p>
            {image.category && (
              <span className="px-2.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-gold-500/15 text-gold-300 border border-gold-500/20 whitespace-nowrap">
                {image.category}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

