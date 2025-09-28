/**
 * Providers Component
 *
 * This component wraps the application with necessary providers for
 * third-party libraries. Currently provides HeroUI theming context.
 */

'use client'  // Required for React Context providers in Next.js App Router

import { HeroUIProvider } from '@heroui/react'

/**
 * Providers Function Component
 *
 * Wraps children with HeroUIProvider to enable:
 * - Theme context for HeroUI components
 * - Consistent styling across all HeroUI elements
 * - Access to HeroUI's design system tokens
 *
 * @param children - React components that need access to HeroUI context
 */
export function Providers({children}: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  )
}