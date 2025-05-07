import type { Metadata } from "next";
import { Special_Elite } from "next/font/google";
import { Providers } from "./providers";
import Header from './components/Header';
import Footer from './components/Footer';
import "../styles/globals.css";

const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: "Home - Danielle Jackson",
  description: "A showcase of my artwork and contact information",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className = 'light'>
      <body>
        <Providers>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
