/**
 * Footer Component
 *
 * Site footer with contact information and copyright notice.
 * Uses orange background with cream text to match site theme.
 */

import { Spacer } from "@heroui/react";

/**
 * Footer Function Component
 *
 * Creates the site footer with:
 * - Contact email address
 * - Dynamic copyright year
 * - Orange background with cream text
 * - Centered layout with spacing
 */
function Footer() {
  return (
    <footer className="bg-primary text-secondary py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 text-center">
      {/* Container with centered content and vertical padding */}
      <div className="container mx-auto py-2 sm:py-3 md:py-4">
        {/* Contact email - primary contact method */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
          <b>Email</b>: 1jacksondan2@gmail.com
        </p>

        {/* Vertical spacing between email and copyright */}
        <Spacer y={2} />

        {/* Copyright notice with dynamic year */}
        <p className="text-xs sm:text-sm md:text-base">
          &copy; {new Date().getFullYear()} Danielle Jackson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;