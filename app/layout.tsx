import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: "JAY-S EZ JUNK REMOVAL | Junk Removal Services USA & GTA",
  description: "Professional junk removal services in the Greater Toronto Area and across the USA. Affordable, eco-friendly, and same-day pickup available. Call now!",
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
    "commercial junk hauling"
  ],
  openGraph: {
    title: "JAY-S EZ JUNK REMOVAL",
    description: "Expert junk removal services across USA and GTA. Call 214-258-3511 for fast, affordable cleanup.",
    url: "https://jaysezjunkremoval.com/",
    siteName: "JAY-S EZ JUNK REMOVAL",
    images: [
      {
        url: "/images/jay's.png",
        width: 600,
        height: 400,
        alt: "JAY-S EZ Junk Removal Logo"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  // icons: {
  //   icon: "",
  //   shortcut: "/images/jay's.png",
  //   apple: "/images/jay's.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
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
