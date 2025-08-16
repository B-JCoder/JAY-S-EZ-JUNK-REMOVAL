import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://jaysezjunkremoval.com"), // ✅ Live domain
  title: {
    default: "JAY-S EZ JUNK REMOVAL | Junk Removal Services USA & GTA",
    template: "%s | JAY-S EZ JUNK REMOVAL"
  },
  description:
    "Affordable and eco-friendly junk removal services in the Greater Toronto Area and across the USA. Same-day pickup available. Call 214-258-3511 today!",
  keywords: [
    "junk removal USA",
    "junk cleaning service",
    "trash removal",
    "waste disposal",
    "junk removal GTA",
    "affordable junk hauling",
    "eco-friendly junk removal",
    "same-day junk pickup",
    "clean out services USA",
    "residential junk removal",
    "commercial junk hauling",
    "junk pickup USA",
    "junk removal company"
  ],
  openGraph: {
    title: "JAY-S EZ JUNK REMOVAL",
    description:
      "Expert junk removal services across USA and GTA. Fast, affordable, eco-friendly junk hauling with same-day pickup. Call 214-258-3511.",
    url: "https://jaysezjunkremoval.com/",
    siteName: "JAY-S EZ JUNK REMOVAL",
    images: [
      {
        url: "/images/logowithblack.png", // ✅ Absolute path via metadataBase
        width: 600,
        height: 400,
        alt: "JAY-S EZ Junk Removal Logo"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JAY-S EZ JUNK REMOVAL",
    description:
      "Affordable and eco-friendly junk removal services across USA & GTA. Same-day pickup. Call 214-258-3511.",
    images: ["/images/logowithblack.png"], // ✅ Uses metadataBase
  },
  icons: {
    icon: "/images/logowithblack.png",
    shortcut: "/images/logowithblack.png",
    apple: "/images/logowithblack.png",
  },
  alternates: {
    canonical: "https://jaysezjunkremoval.com", // ✅ SEO canonical URL
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" /> {/* ✅ SEO index */}
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
