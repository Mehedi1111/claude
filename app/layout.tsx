import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Chatbot from "@/components/ui/Chatbot";

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
    default: "AI Logo Vectorization & Brand Identity Design | Evoke Studio",
    template: "%s | Evoke Studio",
  },
  description:
    "Evoke Studio converts AI-generated logos into production-ready vector files and builds complete brand identities from scratch. Manual precision, 24–48hr delivery, Pantone-certified. From $50.",
  keywords: [
    "AI logo vectorization",
    "logo vectorization service",
    "Midjourney logo to vector",
    "AI logo cleanup",
    "SVG conversion service",
    "brand identity designer",
    "logo design service",
    "vector logo conversion",
    "DALL-E logo vectorization",
    "Ideogram logo to vector",
    "manual vectorization",
    "print-ready logo files",
  ],
  authors: [{ name: "Mehedi Hasan", url: "https://www.linkedin.com/in/m-mehedi-h-hasan/" }],
  creator: "Mehedi Hasan",
  publisher: "Evoke Studio",
  metadataBase: new URL("https://madebyevoke.com"),
  alternates: { canonical: "https://madebyevoke.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://madebyevoke.com",
    siteName: "Evoke Studio",
    title: "AI Logo Vectorization & Brand Identity Design | Evoke Studio",
    description:
      "Convert AI-generated logos into professional vector files. Manual reconstruction, no auto-trace. SVG, AI, EPS, PDF delivered in 24–48 hours from $50.",
    images: [
      {
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c47385218256145.679e5b461e6a6.jpg",
        width: 1400,
        height: 933,
        alt: "Evoke Studio — Brand Identity & AI Logo Vectorization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Logo Vectorization & Brand Identity Design | Evoke Studio",
    description:
      "Convert AI-generated logos into professional vector files. Manual reconstruction, 24–48hr delivery from $50.",
    images: ["https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c47385218256145.679e5b461e6a6.jpg"],
    creator: "@MadeByEvoke",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Evoke Studio",
  url: "https://madebyevoke.com",
  logo: "https://madebyevoke.com/icon.png",
  description: "Brand identity design and AI logo vectorization studio. Manual vector reconstruction, Pantone-certified color systems, complete brand identity builds.",
  founder: {
    "@type": "Person",
    name: "Mehedi Hasan",
    jobTitle: "Founder & CEO",
    sameAs: [
      "https://www.linkedin.com/in/m-mehedi-h-hasan/",
      "https://www.upwork.com/freelancers/~011af9123385f97f10",
      "https://www.behance.net/mh62221352f0fFF",
      "https://dribbble.com/madebyevoke",
    ],
  },
  sameAs: [
    "https://www.behance.net/mh62221352f0fFF",
    "https://dribbble.com/madebyevoke",
    "https://www.linkedin.com/company/madebyevoke/",
  ],
  serviceType: ["AI Logo Vectorization", "Logo Design", "Brand Identity Design", "SVG Conversion"],
  priceRange: "$50–$800",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "work@madebyevoke.com",
    url: "https://madebyevoke.com/contact",
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
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B7B1WEPVL2" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-B7B1WEPVL2');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
