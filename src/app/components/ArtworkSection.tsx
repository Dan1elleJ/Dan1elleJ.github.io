/**
 * ArtworkSection Component
 *
 * Main gallery section with tabbed interface for different artwork categories.
 * Displays Danielle's portfolio organized by medium: Print Making, Photography, and Mixed Media.
 */

"use client"; // Required for interactive tabs in Next.js App Router

import { useEffect } from 'react';
import { Tabs, Tab } from "@heroui/react";
import ImageGrid from "./ImageGrid";

// Print Making artwork collection (15 pieces)
// These images should showcase Danielle's printmaking techniques and style
const grid1Images = [
  { src: "/images/printmaking_1.jpg", alt: "Artwork from Grid 1 - 1" },
  { src: "/images/printmaking_2.jpg", alt: "Artwork from Grid 1 - 2" },
  { src: "/images/printmaking_3.jpg", alt: "Artwork from Grid 1 - 3" },
  { src: "/images/printmaking_4.jpg", alt: "Artwork from Grid 1 - 4" },
  { src: "/images/printmaking_5.jpg", alt: "Artwork from Grid 1 - 5" },
  { src: "/images/printmaking_6.jpg", alt: "Artwork from Grid 1 - 6" },
  { src: "/images/printmaking_7.jpg", alt: "Artwork from Grid 1 - 7" },
  { src: "/images/printmaking_8.jpg", alt: "Artwork from Grid 1 - 8" },
  { src: "/images/printmaking_9.jpg", alt: "Artwork from Grid 1 - 9" },
  { src: "/images/printmaking_10.jpg", alt: "Artwork from Grid 1 - 10" },
  { src: "/images/printmaking_11.jpg", alt: "Artwork from Grid 1 - 11" },
  { src: "/images/printmaking_12.jpg", alt: "Artwork from Grid 1 - 12" },
  { src: "/images/printmaking_13.jpg", alt: "Artwork from Grid 1 - 13" },
  { src: "/images/printmaking_14.jpg", alt: "Artwork from Grid 1 - 14" },
  { src: "/images/printmaking_15.jpg", alt: "Artwork from Grid 1 - 15" },
];

// Photography collection (15 pieces)
// Digital and analog photography showcasing Danielle's visual perspective
const grid2Images = [
  { src: "/images/photography_1.jpg", alt: "Artwork from Grid 2 - 1" },
  { src: "/images/photography_2.jpg", alt: "Artwork from Grid 2 - 2" },
  { src: "/images/photography_3.jpg", alt: "Artwork from Grid 2 - 3" },
  { src: "/images/photography_4.jpg", alt: "Artwork from Grid 2 - 4" },
  { src: "/images/photography_5.jpg", alt: "Artwork from Grid 2 - 5" },
  { src: "/images/photography_6.jpg", alt: "Artwork from Grid 2 - 6" },
  { src: "/images/photography_7.jpg", alt: "Artwork from Grid 2 - 7" },
  { src: "/images/photography_8.jpg", alt: "Artwork from Grid 2 - 8" },
  { src: "/images/photography_9.jpg", alt: "Artwork from Grid 2 - 9" },
  { src: "/images/photography_10.jpg", alt: "Artwork from Grid 2 - 10" },
  { src: "/images/photography_11.jpg", alt: "Artwork from Grid 2 - 11" },
  { src: "/images/photography_12.jpg", alt: "Artwork from Grid 2 - 12" },
  { src: "/images/photography_13.jpg", alt: "Artwork from Grid 2 - 13" },
  { src: "/images/photography_14.jpg", alt: "Artwork from Grid 2 - 14" },
  { src: "/images/photography_15.jpg", alt: "Artwork from Grid 2 - 15" },
];

// Mixed Media collection (15 pieces)
// Experimental works combining multiple artistic techniques and materials
const grid3Images = [
  { src: "/images/mixedmedia_1.jpg", alt: "Artwork from Grid 3 - 1" },
  { src: "/images/mixedmedia_2.jpg", alt: "Artwork from Grid 3 - 2" },
  { src: "/images/mixedmedia_3.jpg", alt: "Artwork from Grid 3 - 3" },
  { src: "/images/mixedmedia_4.jpg", alt: "Artwork from Grid 3 - 4" },
  { src: "/images/mixedmedia_5.jpg", alt: "Artwork from Grid 3 - 5" },
  { src: "/images/mixedmedia_6.jpg", alt: "Artwork from Grid 3 - 6" },
  { src: "/images/mixedmedia_7.jpg", alt: "Artwork from Grid 3 - 7" },
  { src: "/images/mixedmedia_8.jpg", alt: "Artwork from Grid 3 - 8" },
  { src: "/images/mixedmedia_9.jpg", alt: "Artwork from Grid 3 - 9" },
  { src: "/images/mixedmedia_10.jpg", alt: "Artwork from Grid 3 - 10" },
  { src: "/images/mixedmedia_11.jpg", alt: "Artwork from Grid 3 - 11" },
  { src: "/images/mixedmedia_12.jpg", alt: "Artwork from Grid 3 - 12" },
  { src: "/images/mixedmedia_13.jpg", alt: "Artwork from Grid 3 - 13" },
  { src: "/images/mixedmedia_14.jpg", alt: "Artwork from Grid 3 - 14" },
  { src: "/images/mixedmedia_15.jpg", alt: "Artwork from Grid 3 - 15" },
];

// Tab configuration for HeroUI Tabs component
// Each tab contains a label, ID, and corresponding ImageGrid content
const tabs = [
  {
    id: "grid1",
    label: "Print Making",
    content: <ImageGrid images={grid1Images} categoryName="Print Making" />, // Renders printmaking gallery
  },
  {
    id: "grid2",
    label: "Photography and Video Editing",
    content: <ImageGrid images={grid2Images} categoryName="Photography and Video Editing" />, // Renders photography gallery
  },
  {
    id: "grid3",
    label: "Mixed Media",
    content: <ImageGrid images={grid3Images} categoryName="Mixed Media" />, // Renders mixed media gallery
  },
];

/**
 * ArtworkSection Function Component
 *
 * Creates the main gallery interface with:
 * - Section heading "Gallery"
 * - Tabbed interface for artwork categories
 * - Orange/cream themed cards containing image grids
 * - Responsive layout that centers content
 */
function ArtworkSection() {
  // Comprehensive scroll prevention for tab and modal interactions
  useEffect(() => {
    let isInteracting = false;
    let savedScrollY = 0;

    const preventScroll = () => {
      if (isInteracting) {
        window.scrollTo(0, savedScrollY);
      }
    };

    const handleInteractionStart = () => {
      isInteracting = true;
      savedScrollY = window.scrollY;
    };

    const handleInteractionEnd = () => {
      setTimeout(() => {
        isInteracting = false;
      }, 100); // Small delay to catch any delayed scrolling
    };

    // Target both tab clicks and modal interactions
    const tabButtons = document.querySelectorAll('[role="tab"]');
    tabButtons.forEach(button => {
      button.addEventListener('mousedown', handleInteractionStart);
      button.addEventListener('click', handleInteractionEnd);
    });

    // Also prevent scroll during any window scroll events when interacting
    window.addEventListener('scroll', preventScroll, { passive: false });

    return () => {
      tabButtons.forEach(button => {
        button.removeEventListener('mousedown', handleInteractionStart);
        button.removeEventListener('click', handleInteractionEnd);
      });
      window.removeEventListener('scroll', preventScroll);
    };
  }, []);

  return (
    <section
      id="artwork"
      className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 text-center scroll-mt-8 bg-secondary"
    >
      {" "}
      {/* Anchor for navigation */}
      {/* Section heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-primary">Gallery</h2>
      {/* Tab container with full width and centered alignment */}
      <div className="flex w-full flex-col items-center">
        {/* HeroUI Tabs with custom styling */}
        <Tabs
          aria-label="Dynamic Tabs" // Accessibility label
          items={tabs} // Tab configuration array
          radius="full" // Rounded tab edges
          color="warning" // Orange theme color
          shouldSelectOnPressUp={false}  // Prevent focus issues
        >
          {/* Render function for each tab */}
          {(item) => (
            <Tab
              key={item.id}
              title={
                <span>
                  <span className="sm:hidden">
                    {item.id === "grid1" ? "Print" :
                     item.id === "grid2" ? "Photo & Video" :
                     "Mixed Media"}
                  </span>
                  <span className="hidden sm:inline">{item.label}</span>
                </span>
              }
            >
              {/* Direct div wrapper for tab content with custom styling and smooth transitions */}
              <div className="bg-secondary border-primary border-2 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] transition-all duration-300 ease-in-out">
                <div className="opacity-100 transition-opacity duration-200">
                  {item.content}{/* Renders the ImageGrid component for this category */}
                </div>
              </div>
            </Tab>
          )}
        </Tabs>
      </div>
    </section>
  );
}

export default ArtworkSection;
