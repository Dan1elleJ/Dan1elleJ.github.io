/**
 * Banner Component
 *
 * Hero section with rotating background carousel and artist statement overlay.
 * Creates an engaging introduction to Danielle's portfolio with personal narrative.
 */

'use client'  // Required for state management in Next.js App Router

import { useState, useEffect, useMemo } from 'react';

/**
 * Banner Function Component
 *
 * Creates a full-width hero section with:
 * - Rotating background images of artwork
 * - Semi-transparent overlay for text readability
 * - Centered artist statement and philosophy
 */
function Banner() {
  // Array of background images for rotation
  // These should be high-quality artwork images that represent Danielle's style
  const bannerImages = useMemo(() => [
    '/images/banner-bg-1.jpg',
    '/images/banner-bg-2.jpg',
    '/images/banner-bg-3.jpg'
  ], []);

  // State for current image index and loading status
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all banner images and track loading status
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = bannerImages.length;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
      }
    };

    bannerImages.forEach(src => {
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Count errors as loaded
      img.src = src;
    });
  }, [bannerImages]);

  // Auto-rotate images every 5 seconds, but only after images are loaded
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerImages, imagesLoaded]);

  return (
    <div className="relative min-h-screen sm:h-[70vh] overflow-hidden">
      {/* Dual-layer background images for seamless crossfade */}
      {imagesLoaded && bannerImages.map((imageSrc, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${imageSrc})`,
            filter: 'blur(8px)'
          }}
        />
      ))}

      {/* Loading state background */}
      {!imagesLoaded && (
        <div className="absolute inset-0 bg-secondary opacity-80"></div>
      )}

      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-secondary opacity-60 z-10"></div>

      {/* Text overlay layer */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
        {/* Main headline - artist's philosophy */}
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-dark drop-shadow-lg leading-tight">
          Jack of all trades, master of none
        </h1>

        {/* Personal artist statement */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-dark drop-shadow-md leading-relaxed max-w-prose">
          All my life I&apos;ve never been a big fan of school. I would just stare out the window as the teachers dragged on about cells or the pythagorean theorem or whatever tedious subject we were learning that day. Every day it was 7 hours of boredom and 40 minutes of excitement, which was art class. I loved the feeling of taking a blank piece of paper and turning it into something beautiful. My love of art spilled into my other subjects as well. When creating a presentation I found myself more focused on the colour scheme or which font best suited which layout, rather than on the actual assignment. I loved figuring out how to relate the subject to the design of each slide. It would always bother me how un-aesthetically pleasing the presentations of other students and teachers were, and how I could improve them if I had the chance. Art class was the only class that I really liked. I was not always the most talented artist in the class, but I tried the hardest and I loved what I was doing.
        </p>
      </div>
    </div>
  );
}

export default Banner;