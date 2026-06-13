import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AfghanRoutes — Discover Afghanistan",
  description:
    "Your complete guide to exploring Afghanistan — province by province. Find hotels, attractions, and travel tips across all 34 provinces.",
  keywords: ["Afghanistan travel", "Afghan tourism", "visit Afghanistan", "Afghan provinces"],
  openGraph: {
    title: "AfghanRoutes — Discover Afghanistan",
    description: "Explore Afghanistan's 34 provinces, hotels, and landmarks.",
    url: "https://afghanoutes.com",
    siteName: "AfghanRoutes",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth data-scrollbar="smooth"`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}