import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://jaysezjunkremoval.com"),
  title: {
    default: "Jay's EZ Junk Removal | Junk Removal in Dallas, Red Oak & DFW",
    template: "%s | Jay's EZ Junk Removal",
  },
     icons: {
    icon: "/images/favicon.png",
  },
  description:
    "Same-day, affordable junk removal in Dallas, Red Oak & all of DFW. Eco-friendly, licensed & insured junk removal service. Call 214-258-3511 for FREE quote!",
  keywords: [
    "junk removal Dallas TX",
    "junk removal Red Oak TX",
    "junk removal DFW",
    "same-day junk removal Dallas",
    "affordable junk removal Dallas",
    "best junk removal Dallas",
    "best junk removal Red Oak",
    "junk hauling Dallas TX",
    "junk hauling Red Oak TX",
    "eco-friendly junk removal Dallas",
    "yard waste removal Dallas",
    "construction debris removal DFW",
    "furniture removal Dallas",
    "appliance removal Red Oak",
    "Jay's EZ Junk Removal",
    "jaysezjunkremoval",
    "junk removal near me",
    "cheap junk removal Dallas",
    "professional junk haulers DFW",
    "licensed junk removal Red Oak",
    "insured junk removal Dallas",
  ],
  authors: [{ name: "Jay's EZ Junk Removal Team" }],
  creator: "Jay's EZ Junk Removal",
  publisher: "Jay's EZ Junk Removal",
  openGraph: {
    title: "Jay's EZ Junk Removal | Dallas, Red Oak & DFW",
    description:
      "Top-rated junk removal in Dallas, Red Oak & DFW. Same-day service, affordable prices, eco-friendly disposal. Call 214-258-3511 now!",
    url: "https://jaysezjunkremoval.com",
    siteName: "Jay's EZ Junk Removal",
    images: [
      {
        url: "/images/logowithblack.png",
        width: 1200,
        height: 630,
        alt: "Jay's EZ Junk Removal Dallas Red Oak DFW",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay's EZ Junk Removal | Dallas, Red Oak & DFW",
    description:
      "Same-day, affordable junk removal services in Dallas, Red Oak & DFW. Call for FREE quote today!",
    images: ["/images/logowithblack.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://jaysezjunkremoval.com",
  },
}

// Minimal Local Business JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jay's EZ Junk Removal",
  image: "https://jaysezjunkremoval.com/images/logowithblack.png",
  "@id": "https://jaysezjunkremoval.com/#business",
  url: "https://jaysezjunkremoval.com",
  telephone: "+1-214-258-3511",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dallas, TX",
    addressLocality: "Dallas",
    addressRegion: "TX",
    postalCode: "75201",
    addressCountry: "US",
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 07:00-19:00, Sa 08:00-18:00, Su 09:00-17:00",
  sameAs: [
    "https://www.facebook.com/jaysezjunk",
    "https://www.instagram.com/jaysezjunk",
    "https://www.google.com/maps/place/JAY'S+EZ+JUNK+REMOVAL"
  ],
  areaServed: [
    { "@type": "Place", name: "Dallas, TX" },
    { "@type": "Place", name: "Red Oak, TX" },
    { "@type": "Place", name: "DFW, TX" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body className="font-sans antialiased">
        <div id="main-content">{children}</div>
      </body>
    </html>
  )
}
