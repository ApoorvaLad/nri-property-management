import type { Metadata } from "next";
import { Comic_Neue, Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RENSTSURE AND CO",
  description:
    "Manage properties, listings, and tenant communication for owners abroad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${comicNeue.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="site-topbar">
          <div className="site-topbar-inner">
            <div className="site-topbar-left">
              <a href="mailto:enquire@rentsureandco.com">enquire@rentsureandco.com</a>
              <a href="tel:+919730086390">+91 97300 86390</a>
            </div>
            <div className="site-topbar-right">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  <rect x="7.2" y="10.1" width="2.4" height="6.5" fill="currentColor" />
                  <circle cx="8.4" cy="7.8" r="1.2" fill="currentColor" />
                  <path d="M12 16.6v-3.7c0-1.4.8-2.2 2-2.2s1.8.8 1.8 2.2v3.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M13.8 8.2h1.6V6.5h-1.6c-2 0-3.1 1.2-3.1 3.3v1.3H9.2v1.7h1.5v4.7h1.9v-4.7h2l.3-1.7h-2.3V9.9c0-1 .4-1.7 1.4-1.7Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <nav className="site-nav">
          <Link href="/" className="site-nav-logo">
            RENSTSURE <span>AND CO</span>
          </Link>
          <ul className="site-nav-links">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="cta">
                Enquire Now
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
