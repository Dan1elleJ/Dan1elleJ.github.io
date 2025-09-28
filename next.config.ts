/**
 * Next.js Configuration File
 *
 * This configuration is specifically set up for GitHub Pages deployment
 * with static site generation. All settings are optimized for hosting
 * on GitHub's static file servers.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export - generates static HTML files instead of server-side rendering
  // This is required for GitHub Pages which only serves static files
  output: 'export',

  // Image configuration for static deployment
  images: {
    // Disable Next.js image optimization since it requires a server
    // GitHub Pages can't run the image optimization API
    unoptimized: true,
  },

  // Base path configuration for GitHub Pages
  // Empty string means the site will be served from the root domain
  // For personal GitHub Pages (username.github.io), no basePath is needed
  basePath: '',

  // Asset prefix for static files
  // Empty string serves assets from the same domain as the site
  assetPrefix: '',

  // Ensure all URLs end with a trailing slash
  // This helps with GitHub Pages routing and prevents 404 errors
  trailingSlash: true,
};

// Export the configuration for Next.js to use
module.exports = nextConfig;
