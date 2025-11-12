import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  srcSet?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  sizes,
  srcSet,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      if (srcSet) link.imageSrcset = srcSet;
      if (sizes) link.imageSizes = sizes;
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [src, srcSet, sizes, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setIsError(true);
    onError?.();
  };

  // Generate WebP srcset if not provided
  const isExternalUrl = /^https?:\/\//.test(src);

  const generateSrcSet = () => {
    if (srcSet) return srcSet;
    // Avoid generating srcSet for external URLs like Unsplash
    if (isExternalUrl) return undefined;
    const baseUrl = src.split('.').slice(0, -1).join('.');
    const extension = src.split('.').pop();
    if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
      return `${baseUrl}.webp 1x, ${baseUrl}@2x.webp 2x`;
    }
    return undefined;
  };

  // Generate fallback srcset for older formats
  const generateFallbackSrcSet = () => {
    if (srcSet) return srcSet;
    // Avoid for external URLs; let browser handle original src
    if (isExternalUrl) return undefined;
    const baseUrl = src.split('.').slice(0, -1).join('.');
    return `${baseUrl}@2x.${src.split('.').pop()} 2x`;
  };

  return (
    <div className={`optimized-image-container ${className}`} style={{ position: 'relative', display: 'inline-block' }}>
      {!isLoaded && !isError && (
        <div 
          className="image-skeleton"
          style={{
            width: width || '100%',
            height: height || '200px',
            backgroundColor: '#f0f0f0',
            borderRadius: '4px',
            animation: 'pulse 2s infinite',
          }}
        />
      )}
      
      {isError ? (
        <div 
          className="image-error"
          style={{
            width: width || '100%',
            height: height || '200px',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '14px',
            borderRadius: '4px',
          }}
        >
          Image failed to load
        </div>
      ) : (
        <picture>
          {/* WebP format with fallback */}
          <source
            srcSet={generateSrcSet()}
            sizes={sizes}
            type="image/webp"
          />
          <source
            srcSet={generateFallbackSrcSet()}
            sizes={sizes}
            type={`image/${src.split('.').pop()}`}
          />
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            decoding={priority ? 'sync' : 'async'}
            onLoad={handleLoad}
            onError={handleError}
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
              display: 'block',
              width: '100%',
              height: 'auto',
            }}
            className={className}
          />
        </picture>
      )}
      
      <style>{`
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage;