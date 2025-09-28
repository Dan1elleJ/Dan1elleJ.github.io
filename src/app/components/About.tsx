/**
 * About Component
 *
 * Personal biography section showcasing Danielle's background, education,
 * and artistic philosophy alongside her portrait photo.
 */

'use client'  // Required for HeroUI Image component in Next.js App Router

import { Image } from "@heroui/react";

/**
 * About Function Component
 *
 * Creates the about section with:
 * - Professional biography text
 * - Personal portrait photo
 * - Side-by-side layout (text left, image right)
 * - Orange/cream color scheme matching site theme
 */
function About() {
  return (
    <section id="about" className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 text-center bg-secondary">  {/* Anchor for navigation */}
      {/* Section heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-primary">About Me</h2>

      {/* Content container with flexbox layout */}
      <div className="max-w-6xl mx-auto text-left leading-relaxed text-primary flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
        {/* Biography text - responsive width */}
        <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 lg:mb-0 lg:max-w-[65%] leading-relaxed'>
          Hello! I am a multidisciplinary Graphic Design student with a minor in Print & Publishing. I started my pursuit of digital design at OCAD, but quickly fell in love with analog design methods. From screen printing, relief, collage, writing and photography- All of these creative outlets have helped to form my design process. I hope to further my love of art post OCAD and continue creating.
        </p>

        {/* Portrait photo with HeroUI Image component */}
        <Image
          alt="Danielle"                        // Accessibility description
          src="/images/danielle.jpg"            // Path to portrait photo
          className='border-2 border-primary rounded-lg shadow-lg flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 aspect-[3/4] object-cover' // Responsive sizing with correct 3:4 aspect ratio
        />
      </div>
    </section>
  );
}

export default About;