/**
 * Tailwind CSS Configuration File
 *
 * This configuration sets up Tailwind CSS with HeroUI (NextUI successor)
 * for the artist portfolio. HeroUI provides modern, accessible components
 * that integrate seamlessly with Tailwind's utility classes.
 */

// Import HeroUI plugin for component styling
import {heroui} from "@heroui/react";

/** @type {import('tailwindcss').Config} */
const config = {
  // Define which files Tailwind should scan for class names
  // This is used for purging unused CSS in production builds
  content: [
    // Legacy Next.js directory structure (app and pages at root)
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Current project structure using src directory
    // This includes all TypeScript/JavaScript React files
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // Include HeroUI component styles from node_modules
    // This ensures HeroUI's internal styles are included in the build
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],

  // Theme customization (currently using defaults)
  theme: {
    extend: {
      // Custom theme extensions would go here
      // Currently using HeroUI's default theme with custom colors in components
      colors: {
        primary: 'var(--color-primary)',      // #FA812F
        secondary: 'var(--color-secondary)',  // #FEF3E2  
        dark: 'var(--color-dark)',           // #C14600
        text: 'var(--color-text)',           // #333333
      }
    },
  },

  // Enable class-based dark mode toggle
  // HeroUI components can switch themes by adding/removing 'dark' class
  darkMode: "class",

  // Plugins array - HeroUI provides component styles and utilities
  plugins: [heroui()]
}

// Export configuration for Tailwind CSS
export default config;

