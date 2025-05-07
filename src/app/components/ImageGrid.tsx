import React, { useState } from 'react';
import Image from 'next/image'; // If using Next.js for optimized images

interface Image {
  src: string;
  alt: string;
}

interface ImageGridProps {
  images: Image[];
}

function ImageGrid({ images }: ImageGridProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="grid grid-cols-3 gap-4 justify-between">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-md shadow-md cursor-pointer"
          onClick={() => openModal(image)}
          style={{ height: '50vh', width: '50vh' }} 
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="transition-transform transform hover:scale-105"
          />
        </div>
      ))}

      {isModalOpen && selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <div className="relative bg-[#FEF3E2] rounded-md p-8 max-w-3xl max-h-screen overflow-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 focus:outline-none rounded-full w-6 h-6 flex items-center justify-center text-black"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M15.78 14.36a1 1 0 01-1.42 1.42L12 13.4l-2.36 2.36a1 1 0 11-1.42-1.42L10.6 12l-2.36-2.36a1 1 0 111.42-1.42L12 10.6l2.36-2.36a1 1 0 111.42 1.42L13.4 12l2.36 2.36z" clipRule="evenodd" />
              </svg>
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGrid;