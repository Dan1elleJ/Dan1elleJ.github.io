/**
 * Header Component
 *
 * Site navigation header with branding, navigation links, and social media buttons.
 * Uses HeroUI Navbar components with custom orange/cream color scheme.
 */

'use client'  // Required for interactive components in Next.js App Router

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";

/**
 * Header Function Component
 *
 * Creates a responsive navigation bar with:
 * - Artist name/brand on the left
 * - Navigation links in the center (hidden on mobile)
 * - Social media buttons on the right (hidden on mobile)
 */
function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <Navbar className="text-[#FA812F] bg-[#FEF3E2] w-full">  {/* Orange text on cream background */}
      {/* Left side - Artist branding */}
      <NavbarBrand>
        <p className="font-bold text-sm sm:text-base md:text-lg">danielle jackson</p>
      </NavbarBrand>

      {/* Center - Navigation links (hidden on small screens) */}
      <NavbarContent className="hidden sm:flex gap-3 md:gap-4 lg:gap-6" justify="center">
        <NavbarItem>
          {/* Smooth scroll to artwork section */}
          <Link className="text-inherit text-sm md:text-base lg:text-lg hover:text-dark transition-colors" href="#artwork">
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem>
          {/* Smooth scroll to about section */}
          <Link className="text-inherit text-sm md:text-base lg:text-lg hover:text-dark transition-colors" href="#about">
            About Me
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right side - Social media buttons (visible on all screens) */}
      <NavbarContent className="flex gap-4" justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            aria-label="Instagram"
            className="rounded-full bg-primary hover:bg-dark w-10 h-10"
            as="a"
            href="https://www.instagram.com/danielle___jackson"
          >
            {/* Clean Instagram SVG icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-secondary">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            isIconOnly
            aria-label="LinkedIn"
            className="rounded-full bg-primary hover:bg-dark w-10 h-10"
            as="a"
            href="http://www.linkedin.com/in/danielle-jackson-94011b384"
          >
            {/* Clean LinkedIn SVG icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-secondary">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </div>
  );
}

export default Header;