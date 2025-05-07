/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Disable image optimization (not supported in static export)
  },
  basePath: '', // No basePath for personal GitHub Pages
  assetPrefix: '', // No assetPrefix for personal GitHub Pages
  trailingSlash: true, // Ensure URLs end with a slash
};

module.exports = nextConfig;
