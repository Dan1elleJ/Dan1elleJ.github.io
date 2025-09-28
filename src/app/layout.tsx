/**
 * Root Layout Component
 *
 * This is the main layout wrapper that applies to all pages in the application.
 * It sets up the global structure, font loading, and theme providers.
 */

import type { Metadata } from "next";
import { Special_Elite } from "next/font/google";
import { Providers } from "./providers";
import Header from './components/Header';
import Footer from './components/Footer';
import "../styles/globals.css";

// Configure Special Elite font from Google Fonts
// This typewriter-style font gives the portfolio a vintage, artistic feel
const specialElite = Special_Elite({
  subsets: ['latin'],    // Load Latin character subset
  weight: '400',         // Regular weight (Special Elite only has 400)
});

// SEO metadata that appears in browser tabs and search results
export const metadata: Metadata = {
  title: "Home - Danielle Jackson",
  description: "A showcase of my artwork and contact information",
};

// TypeScript interface for component props
interface RootLayoutProps {
  children: React.ReactNode;  // Page content that gets rendered inside the layout
}

/**
 * Root Layout Function Component
 *
 * Creates the basic HTML structure with:
 * - Font integration
 * - Theme providers for HeroUI components
 * - Consistent header and footer
 * - Main content area for page-specific content
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className='light'><body className={`${specialElite.className}`}>
        {/* HeroUI provider wrapper for component theming */}
        <Providers>
          {/* Site navigation and branding */}
          <Header />

          {/* Main content area - pages render here */}
          <main>
            {children}
          </main>

          {/* Site footer with contact info */}
          <Footer />
        </Providers>
      </body></html>
  );
}
