import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Evoke — Brand Identity & AI Logo Vectorization Studio",
    template: "%s | Evoke",
  },
  description:
    "Evoke is a brand identity studio. We build brands from scratch and convert AI-generated logos into professional vector systems. From pixel-locked concepts to infinite vector authority.",
  keywords: [
    "AI logo vectorization",
    "logo vector conversion",
    "AI logo cleanup",
    "SVG conversion",
    "brand system",
    "Midjourney logo",
    "DALL-E logo",
    "vector logo",
  ],
  authors: [{ name: "Evoke Studio" }],
  creator: "Evoke Studio",
  metadataBase: new URL("https://madebyevoke.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://madebyevoke.com",
    siteName: "Evoke",
    title: "Evoke — AI Logo to Vector Brand Systems",
    description:
      "We manually convert AI-generated logos into professional vector brand systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evoke — AI Logo to Vector Brand Systems",
    description:
      "We manually convert AI-generated logos into professional vector brand systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable}`}
    >
      <body className="antialiased">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
