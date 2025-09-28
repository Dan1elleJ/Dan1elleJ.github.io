/**
 * Homepage Component
 *
 * This is the main landing page that showcases Danielle's portfolio.
 * It orchestrates the three main sections in a specific order to tell
 * her artistic story from introduction to gallery to personal bio.
 */

import Banner from './components/Banner';
import ArtworkSection from './components/ArtworkSection';
import About from './components/About';

/**
 * Home Page Function Component
 *
 * Renders the complete homepage experience:
 * 1. Banner - Hero section with rotating artwork and artist statement
 * 2. ArtworkSection - Tabbed gallery of artwork by medium
 * 3. About - Personal bio and photo
 */
export default function Home() {
  return (
    <>
      {/* Hero banner with carousel and artist statement */}
      <Banner/>

      {/* Main gallery section with tabbed artwork categories */}
      <ArtworkSection />

      {/* About section with bio and personal photo */}
      <About />
    </>
  );
}
