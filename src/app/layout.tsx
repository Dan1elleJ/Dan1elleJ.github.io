import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import { Providers } from "./providers";
import Header from './components/Header';
import Footer from './components/Footer';
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['300', '400', '700', '900'], 
});

export const metadata: Metadata = {
  title: "Danielle Jackson - Artist Portfolio",
  description: "A showcase of my artwork and contact information",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className = 'light'>
      <body className={inter.className}>
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
