import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://jaysezjunkremoval.com"),
  title: {
    default: "JAYS EZ JUNK REMOVAL | #1 Junk Removal Services USA & GTA",
    template: "%s | JAYS EZ JUNK REMOVAL",
  },
  description:
    "⭐ #1 Rated Junk Removal Service! Affordable & eco-friendly junk removal in USA & GTA. Same-day pickup, 30% cheaper than competitors. Call 214-258-3511 for FREE quote!",
  keywords: [
    "junk removal USA",
    "junk removal GTA",
    "same day junk pickup",
    "affordable junk hauling",
    "eco-friendly junk removal",
    "residential junk removal",
    "commercial junk removal",
    "furniture removal service",
    "appliance removal",
    "construction debris removal",
    "estate cleanout services",
    "hoarding cleanup",
    "garage cleanout",
    "basement cleanout",
    "attic cleanout",
    "office cleanout",
    "retail cleanout",
    "foreclosure cleanout",
    "moving junk removal",
    "renovation debris removal",
    "yard waste removal",
    "hot tub removal",
    "mattress removal",
    "couch removal",
    "refrigerator removal",
    "washer dryer removal",
    "tv removal",
    "computer disposal",
    "electronics recycling",
    "green junk removal",
    "donation pickup service",
    "junk removal near me",
    "cheap junk removal",
    "fast junk removal",
    "professional junk haulers",
    "licensed junk removal",
    "insured junk removal",
    "Toronto junk removal",
    "Dallas junk removal",
    "Texas junk removal",
    "Ontario junk removal",
    "Greater Toronto Area junk removal",
  ],
  authors: [{ name: "Jay's EZ Junk Removal Team" }],
  creator: "Jay's EZ Junk Removal",
  publisher: "Jay's EZ Junk Removal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "🏆 #1 JAYS EZ JUNK REMOVAL | USA & GTA | Same-Day Service",
    description:
      "⭐ Top-rated junk removal service! 30% cheaper, eco-friendly, same-day pickup across USA & GTA. FREE quotes, licensed & insured. Call 214-258-3511 now!",
    url: "https://jaysezjunkremoval.com/",
    siteName: "JAYS EZ JUNK REMOVAL",
    images: [
      {
        url: "/images/logowithblack.png",
        width: 1200,
        height: 630,
        alt: "Jay's EZ Junk Removal - #1 Rated Junk Removal Service USA & GTA",
      },
      {
        url: "/images/junk-removal-truck.jpg",
        width: 1200,
        height: 630,
        alt: "Professional junk removal truck and team in action",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "🏆 #1 JAY'S EZ JUNK REMOVAL | Same-Day Service USA & GTA",
    description:
      "⭐ Top-rated, eco-friendly junk removal. 30% cheaper than competitors. FREE quotes, same-day pickup. Call 214-258-3511!",
    images: ["/images/logowithblack.png"],
    creator: "@jaysezjunk",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/logowithblack.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logowithblack.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/logowithblack.png",
    apple: [{ url: "/images/logowithblack.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://jaysezjunkremoval.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      bing: ["your-bing-verification-code"],
    },
  },
  category: "Junk Removal Services",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Jay's EZ Junk Removal",
  },
  applicationName: "Jay's EZ Junk Removal",
  appLinks: {
    web: {
      url: "https://jaysezjunkremoval.com",
      should_fallback: true,
    },
  },
  archives: ["https://jaysezjunkremoval.com/blog"],
  bookmarks: ["https://jaysezjunkremoval.com/services"],
  other: {
    "geo.region": "US-TX;CA-ON",
    "geo.placename": "Dallas, Texas; Toronto, Ontario",
    "geo.position": "32.7767;-96.7970;43.6532;-79.3832",
    ICBM: "32.7767, -96.7970",
    "DC.title": "Jay's EZ Junk Removal - Professional Junk Removal Services",
    "DC.creator": "Jay's EZ Junk Removal Team",
    "DC.subject": "Junk Removal, Waste Management, Eco-friendly Disposal",
    "DC.description": "Professional junk removal services across USA and Greater Toronto Area",
    "DC.publisher": "Jay's EZ Junk Removal",
    "DC.contributor": "Jay's EZ Junk Removal Team",
    "DC.date": new Date().toISOString(),
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://jaysezjunkremoval.com",
    "DC.language": "en-US",
    "DC.coverage": "USA, Greater Toronto Area",
    "DC.rights": "Copyright Jay's EZ Junk Removal",
    rating: "General",
    distribution: "Global",
    "revisit-after": "1 days",
    expires: "never",
    pragma: "no-cache",
    "cache-control": "no-cache",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    skype_toolbar: "skype_toolbar_parser_compatible",
    "msapplication-TileColor": "#ffffff",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#ffffff",
  },
}

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://jaysezjunkremoval.com/#business",
      name: "Jay's EZ Junk Removal",
      alternateName: ["JAYS EZ JUNK REMOVAL", "Jay's Easy Junk Removal"],
      description:
        "Professional, affordable, and eco-friendly junk removal services across USA and Greater Toronto Area with same-day pickup available.",
      url: "https://jaysezjunkremoval.com",
      telephone: "+1-214-258-3511",
      email: "info@jaysezjunkremoval.com",
      foundingDate: "2020",
      slogan: "Your Junk, Our Mission - Fast, Fair, and Eco-Friendly!",
      logo: {
        "@type": "ImageObject",
        url: "https://jaysezjunkremoval.com/images/logowithblack.png",
        width: 600,
        height: 400,
      },
      image: [
        "https://jaysezjunkremoval.com/images/logowithblack.png",
        "https://jaysezjunkremoval.com/images/junk-removal-truck.jpg",
        "https://jaysezjunkremoval.com/images/team-photo.jpg",
      ],
      priceRange: "$$",
      currenciesAccepted: "USD, CAD",
      paymentAccepted: "Cash, Credit Card, Debit Card, Check, PayPal, Venmo",
      areaServed: [
        {
          "@type": "Country",
          name: "United States",
        },
        {
          "@type": "AdministrativeArea",
          name: "Greater Toronto Area",
          containedInPlace: {
            "@type": "Country",
            name: "Canada",
          },
        },
      ],
      serviceArea: [
        {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 32.7767,
            longitude: -96.797,
          },
          geoRadius: "50000",
        },
        {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 43.6532,
            longitude: -79.3832,
          },
          geoRadius: "50000",
        },
      ],
      address: [
        {
          "@type": "PostalAddress",
          addressCountry: "US",
          addressRegion: "TX",
          addressLocality: "Dallas",
          postalCode: "75201",
          streetAddress: "Main Office - Dallas, TX",
        },
        {
          "@type": "PostalAddress",
          addressCountry: "CA",
          addressRegion: "ON",
          addressLocality: "Toronto",
          postalCode: "M5V 3A8",
          streetAddress: "Service Area - Greater Toronto Area, ON",
        },
      ],
      geo: [
        {
          "@type": "GeoCoordinates",
          latitude: 32.7767,
          longitude: -96.797,
        },
        {
          "@type": "GeoCoordinates",
          latitude: 43.6532,
          longitude: -79.3832,
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/jaysezjunkremoval",
        "https://www.instagram.com/jaysezjunkremoval",
        "https://www.linkedin.com/company/jaysezjunkremoval",
        "https://twitter.com/jaysezjunk",
        "https://www.youtube.com/channel/jaysezjunkremoval",
        "https://www.yelp.com/biz/jays-ez-junk-removal",
        "https://www.google.com/maps/place/jays-ez-junk-removal",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "247",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Sarah Johnson",
          },
          reviewBody:
            "Excellent service! They arrived on time, were professional, and cleaned up everything perfectly. Highly recommend!",
          datePublished: "2024-01-15",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Junk Removal Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Residential Junk Removal",
              description: "Complete home cleanout and junk removal services",
              provider: {
                "@id": "https://jaysezjunkremoval.com/#business",
              },
              areaServed: ["United States", "Greater Toronto Area"],
              availableChannel: {
                "@type": "ServiceChannel",
                servicePhone: "+1-214-258-3511",
                serviceUrl: "https://jaysezjunkremoval.com",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial Junk Removal",
              description: "Office and business junk removal and cleanout services",
              provider: {
                "@id": "https://jaysezjunkremoval.com/#business",
              },
              areaServed: ["United States", "Greater Toronto Area"],
              availableChannel: {
                "@type": "ServiceChannel",
                servicePhone: "+1-214-258-3511",
                serviceUrl: "https://jaysezjunkremoval.com",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Construction Debris Removal",
              description: "Safe removal of construction and renovation debris",
              provider: {
                "@id": "https://jaysezjunkremoval.com/#business",
              },
              areaServed: ["United States", "Greater Toronto Area"],
              availableChannel: {
                "@type": "ServiceChannel",
                servicePhone: "+1-214-258-3511",
                serviceUrl: "https://jaysezjunkremoval.com",
              },
            },
          },
        ],
      },
      knowsAbout: [
        "Junk Removal",
        "Waste Management",
        "Recycling",
        "Eco-friendly Disposal",
        "Furniture Removal",
        "Appliance Removal",
        "Construction Debris",
        "Estate Cleanouts",
        "Hoarding Cleanup",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          name: "Same-Day Junk Removal",
          description: "Emergency and same-day junk removal services",
          availability: "https://schema.org/InStock",
          businessFunction: "https://schema.org/Sell",
          itemCondition: "https://schema.org/NewCondition",
        },
        {
          "@type": "Offer",
          name: "Free Estimates",
          description: "No-obligation free quotes for all junk removal services",
          price: "0",
          priceCurrency: "USD",
        },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "License",
          recognizedBy: {
            "@type": "Organization",
            name: "Local Business Authority",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://jaysezjunkremoval.com/#website",
      url: "https://jaysezjunkremoval.com",
      name: "Jay's EZ Junk Removal",
      description: "Professional junk removal services across USA and Greater Toronto Area",
      publisher: {
        "@id": "https://jaysezjunkremoval.com/#business",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://jaysezjunkremoval.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      ],
      inLanguage: "en-US",
      mainEntity: {
        "@id": "https://jaysezjunkremoval.com/#business",
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".hero-title", ".main-description"],
      },
    },
    {
      "@type": "Organization",
      "@id": "https://jaysezjunkremoval.com/#organization",
      name: "Jay's EZ Junk Removal",
      url: "https://jaysezjunkremoval.com",
      logo: {
        "@type": "ImageObject",
        url: "https://jaysezjunkremoval.com/images/logowithblack.png",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-214-258-3511",
          contactType: "customer service",
          areaServed: ["US", "CA"],
          availableLanguage: ["English"],
          contactOption: "TollFree",
          hoursAvailable: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "07:00",
              closes: "19:00",
            },
          ],
        },
        {
          "@type": "ContactPoint",
          contactType: "emergency",
          telephone: "+1-214-258-3511",
          areaServed: ["US", "CA"],
          availableLanguage: ["English"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/jaysezjunkremoval",
        "https://www.instagram.com/jaysezjunkremoval",
        "https://www.linkedin.com/company/jaysezjunkremoval",
        "https://twitter.com/jaysezjunk",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://jaysezjunkremoval.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does junk removal cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our junk removal prices are 30% cheaper than competitors. We offer free estimates and transparent pricing based on volume and type of items. Call 214-258-3511 for your free quote!",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer same-day junk removal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We offer same-day junk removal services across USA and Greater Toronto Area. Call us early in the day for best availability.",
          },
        },
        {
          "@type": "Question",
          name: "What areas do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide junk removal services across the United States and Greater Toronto Area (GTA) in Canada. Contact us to confirm service in your specific location.",
          },
        },
        {
          "@type": "Question",
          name: "Are you licensed and insured?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Jay's EZ Junk Removal is fully licensed and insured for your protection and peace of mind.",
          },
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://jaysezjunkremoval.com/#service",
      name: "Professional Junk Removal Services",
      description: "Comprehensive junk removal and cleanout services for residential and commercial properties",
      provider: {
        "@id": "https://jaysezjunkremoval.com/#business",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "United States",
        },
        {
          "@type": "AdministrativeArea",
          name: "Greater Toronto Area",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Junk Removal Service Catalog",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Furniture Removal",
              category: "Residential Junk Removal",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Appliance Removal",
              category: "Residential Junk Removal",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Estate Cleanouts",
              category: "Specialized Services",
            },
          },
        ],
      },
      serviceType: "Junk Removal",
      providerMobility: "mobile",
      audience: {
        "@type": "Audience",
        audienceType: "Homeowners, Business Owners, Property Managers",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" itemScope itemType="https://schema.org/WebSite">
      <head>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="slurp" content="index, follow" />
        <meta name="duckduckbot" content="index, follow" />
        <meta name="facebookexternalhit" content="index, follow" />
        <meta name="twitterbot" content="index, follow" />
        <meta name="linkedinbot" content="index, follow" />
        <meta name="whatsapp" content="index, follow" />
        <meta name="revisit-after" content="1 day" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="US-TX;CA-ON" />
        <meta name="geo.placename" content="Dallas, Texas; Toronto, Ontario" />
        <meta name="geo.position" content="32.7767;-96.7970;43.6532;-79.3832" />
        <meta name="ICBM" content="32.7767, -96.7970" />
        <meta name="business.hours" content="Mo-Fr 07:00-19:00, Sa 08:00-18:00, Su 09:00-17:00" />
        <meta name="business.phone" content="+1-214-258-3511" />
        <meta name="business.email" content="info@jaysezjunkremoval.com" />
        <meta name="business.type" content="Junk Removal Service" />
        <meta name="business.founded" content="2020" />
        <meta name="business.pricerange" content="$$" />
        <meta name="business.payment" content="Cash, Credit Card, Debit Card, Check, PayPal, Venmo" />
        <meta name="service.area" content="USA, Greater Toronto Area" />
        <meta name="service.type" content="Same-day, Residential, Commercial, Construction Debris" />
        <meta name="locality" content="Dallas, Toronto" />
        <meta name="region" content="Texas, Ontario" />
        <meta name="country" content="United States, Canada" />
        <meta name="postal-code" content="75201, M5V 3A8" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://platform.twitter.com" />
        <link rel="preconnect" href="https://www.linkedin.com" />
        <link rel="preconnect" href="https://static.xx.fbcdn.net" />

        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//platform.twitter.com" />
        <link rel="dns-prefetch" href="//www.linkedin.com" />
        <link rel="dns-prefetch" href="//static.xx.fbcdn.net" />
        <link rel="dns-prefetch" href="//www.youtube.com" />
        <link rel="dns-prefetch" href="//i.ytimg.com" />

        <link rel="preload" href="/images/logowithblack.png" as="image" type="image/png" />
        <link rel="prefetch" href="/images/junk-removal-truck.jpg" as="image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>

        <style>{`
          .hero-section { min-height: 100vh; }
          .cta-button { 
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            transition: all 0.3s ease;
            will-change: transform;
          }
          .cta-button:hover { 
            transform: translateY(-2px); 
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3); 
          }
          img { 
            loading: lazy; 
            decoding: async; 
          }
          .hero-image { 
            loading: eager; 
            decoding: sync; 
          }
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
        `}</style>
      </head>
      <body itemScope itemType="https://schema.org/WebPage" className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
        >
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  )
}
