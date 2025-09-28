/**
 * PostCSS Configuration File
 *
 * PostCSS processes CSS and applies transformations through plugins.
 * This configuration enables Tailwind CSS compilation and automatic
 * vendor prefixing for better browser compatibility.
 */

module.exports = {
  plugins: {
    // Tailwind CSS plugin - processes @tailwind directives
    // Transforms utility classes into actual CSS rules
    tailwindcss: {},

    // Autoprefixer plugin - adds vendor prefixes automatically
    // Ensures CSS works across different browsers (webkit, moz, ms)
    autoprefixer: {},
  },
}
