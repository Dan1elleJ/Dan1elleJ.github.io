/**
 * ImageGrid Component
 *
 * Reusable image gallery component with modal lightbox functionality.
 * Displays images in a responsive 3-column grid with click-to-expand feature.
 */

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Play } from 'lucide-react';

// TypeScript interface for individual media objects (images and videos)
interface MediaItem {
  src: string;        // Path to grid thumbnail image
  modalSrc: string;   // Path to larger modal image/video
  alt: string;        // Alternative text for accessibility
  type: 'image' | 'video';  // Media type
}

// TypeScript interface for component props
interface ImageGridProps {
  images: MediaItem[];  // Array of media items to display in the grid
  categoryName?: string;  // Optional category name for modal header
}

/**
 * ImageGrid Function Component
 *
 * Creates a responsive image gallery with:
 * - 3-column grid layout
 * - Square aspect ratio images with hover effects
 * - Modal lightbox for full-size viewing
 * - Click outside or X button to close modal
 *
 * @param images - Array of image objects to display
 */
function ImageGrid({ images, categoryName }: ImageGridProps) {
  // State management for modal functionality
  const [isModalOpen, setIsModalOpen] = useState(false);           // Controls modal visibility
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);  // Currently viewed media
  const [imagesLoaded, setImagesLoaded] = useState(false);         // Track if images are preloaded
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set()); // Track failed images

  /**
   * Opens modal with selected media
   * @param media - Media object to display in modal
   */
  const openModal = (media: MediaItem) => {
    setSelectedImage(media);
    setIsModalOpen(true);
  };

  /**
   * Closes modal and clears selected image while preventing any scroll changes
   */
  const closeModal = () => {
    // Capture the exact visual scroll position
    const savedScrollY = Math.abs(parseInt(document.body.style.top || '0'));

    // Disable ALL scrolling behaviors temporarily
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';

    // Close modal instantly
    setIsModalOpen(false);
    setSelectedImage(null);

    // Immediately restore position without any animation
    requestAnimationFrame(() => {
      // Clear any scroll restoration attempts
      window.history.scrollRestoration = 'manual';

      // Force exact position with no visible movement
      window.scrollTo({
        top: savedScrollY,
        left: 0,
        behavior: 'auto'
      });

      // Keep scroll behavior disabled briefly to prevent any animation
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = '';
        document.body.style.scrollBehavior = '';
        window.history.scrollRestoration = 'auto';
      }, 50);
    });
  };

  // Initialize image errors and preload images when component mounts
  useEffect(() => {
    setImageErrors(new Set());
    setImagesLoaded(false);

    // Preload all images
    const imagePromises = images
      .filter(item => item.type === 'image')
      .map((image) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => {
            setImageErrors(prev => new Set(prev).add(image.src));
            resolve(); // Still resolve to not block other images
          };
          img.src = image.src;
        });
      });

    // When all images are loaded, show the grid
    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, [images]);

  // Handle scroll lock when modal is open (coordinated with closeModal)
  useEffect(() => {
    if (isModalOpen) {
      // Save current scroll position globally
      const scrollY = window.scrollY;
      (window as unknown as { modalScrollY: number }).modalScrollY = scrollY;

      // Apply scroll lock
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore styles without auto-scrolling
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';

      // Don't auto-scroll here - let closeModal handle it
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);


  return (
    <div className={`safari-explicit-grid transition-opacity duration-500 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>  {/* Responsive grid with explicit Safari support */}
      {/* Render each image in the grid */}
      {images.map((image, index) => (
        <div
          key={index}
          className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 overflow-hidden rounded-md shadow-md cursor-pointer bg-gray-200 transition-all hover:shadow-2xl hover:shadow-primary/60 hover:ring-2 hover:ring-primary duration-300"
          onClick={() => openModal(image)}  // Open modal on click
        >
          {/* Show error state for failed images */}
          {imageErrors.has(image.src) ? (
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
              <div className="text-center">
                <div className="mb-2">📷</div>
                <div>Image not available</div>
              </div>
            </div>
          ) : (
            <>
              {/* Optimized img tag */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-300"
                loading="lazy"
                decoding="async"
                onError={() => setImageErrors(prev => new Set(prev).add(image.src))}
              />

              {/* Add play icon overlay for videos */}
              {image.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 rounded-full p-3">
                    <Play className="text-white w-8 h-8" fill="white" />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      ))}

      {/* Modal portal - renders at document root */}
      {isModalOpen && selectedImage && typeof window !== 'undefined' &&
        createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex justify-center items-center p-4 sm:p-6 md:p-8">
            {/* Modal content container */}
            <div className="relative bg-secondary rounded-xl shadow-2xl w-auto max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
              {/* Modal header with close button */}
              <div className="relative flex justify-center items-center px-4 sm:px-6 py-4 sm:py-5 bg-secondary flex-shrink-0 rounded-t-xl">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary text-center">
                  <span className="sm:hidden">
                    {categoryName === "Print Making" ? "Print" :
                     categoryName === "Photography and Video Editing" ? "Photo & Video" :
                     categoryName === "Mixed Media" ? "Mixed Media" :
                     'Artwork'}
                  </span>
                  <span className="hidden sm:inline">{categoryName || 'Artwork'}</span>
                </h3>
                <button
                  onClick={closeModal}
                  className="absolute right-4 sm:right-6 flex-shrink-0 rounded-full w-7 h-7 flex items-center justify-center bg-primary text-secondary hover:bg-dark transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary"
                  aria-label="Close modal"
                >
                  <X size={14} strokeWidth={2} />
                </button>
              </div>

              {/* Image container with balanced spacing */}
              <div className="flex justify-center items-center bg-secondary pt-0 pb-4 px-4 sm:pt-0 sm:pb-6 sm:px-6 md:pt-0 md:pb-8 md:px-8 flex-1 min-h-0 rounded-b-xl overflow-hidden">
                {selectedImage.type === 'video' ? (
                  <video
                    src={selectedImage.modalSrc}
                    controls
                    autoPlay
                    className="max-w-full max-h-full object-contain rounded shadow-lg border-2 border-primary"
                  />
                ) : (
                  <img
                    src={selectedImage.modalSrc}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-full object-contain rounded shadow-lg border-2 border-primary"
                  />
                )}
              </div>
            </div>
          </div>,
          document.body
        )
      }
    </div>
  );
}

export default ImageGrid;