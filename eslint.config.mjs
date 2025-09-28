/**
 * ESLint Configuration File
 *
 * This configuration uses the new "flat config" format introduced in ESLint v9.
 * It extends Next.js recommended rules for optimal React and TypeScript development.
 */

// Node.js utilities for handling file paths in ES modules
import { dirname } from "path";
import { fileURLToPath } from "url";

// Compatibility layer for legacy ESLint configs in the new flat format
import { FlatCompat } from "@eslint/eslintrc";

// Convert import.meta.url to file path (required in ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create compatibility adapter for legacy config formats
const compat = new FlatCompat({
  // Set base directory for resolving relative paths in config
  baseDirectory: __dirname,
});

// ESLint configuration array (flat config format)
const eslintConfig = [
  // Extend Next.js recommended configurations:
  // - next/core-web-vitals: Performance and accessibility rules
  // - next/typescript: TypeScript-specific linting rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

// Export configuration for ESLint to use
export default eslintConfig;
