
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Truck,
  Home,
  Building2,
  Trash2,
  Hammer,
  CheckCircle,
  ArrowRight,
  Zap,
  Facebook,
  Instagram,
} from "lucide-react";

import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { AnimatedSection } from "@/components/animated-section";
import { StaggeredAnimation } from "@/components/staggered-animation";
import { ParallaxContainer } from "@/components/parallax-container";
import { ParallaxBackground } from "@/components/parallax-background";
import Image from "next/image";

import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next"

export const metadata = {
  title: "Junk Removal Services in Dallas, Red Oak & DFW | Jay's EZ Junk Removal",
  description: "Same-day junk removal services in Dallas, Red Oak & all of DFW. Affordable & fast junk hauling by Jay's EZ Junk Removal. Call 214-258-3511 for free quote!",
  keywords: [
    "junk removal services in Dallas, TX",
    "junk removal service Red Oak, TX",
    "junk removal service DFW",
    "same-day junk removal",
    "emergency junk pickup",
    "best junk removal company near me",
    "affordable junk removal Dallas",
    "Jay's EZ Junk Removal"
  ],
  alternates: { canonical: "https://jaysezjunkremoval.com/services" },
  openGraph: {
    title: "Same-Day Junk Removal Services Dallas & Red Oak | Jay's EZ Junk Removal",
    description: "Fast, affordable junk removal services across DFW. Residential, commercial & emergency cleanouts.",
    url: "https://jaysezjunkremoval.com/services",
    images: [{ url: "/images/logowithblack.png", width: 1200, height: 630 }]
  }
};


export default function ServicesPage() {
 
const services = [
  {
    icon: Trash2,
    title: "Junk Removal Services in Dallas & DFW",
    description:
      "Affordable junk removal services in Dallas, Red Oak & all of DFW. We handle furniture, appliances, yard waste & complete property cleanouts. Same-day junk removal available!",
    features: [
      "Furniture & appliance removal",
      "Yard waste & debris cleanup",
      "Residential & commercial cleanouts",
      "Eco-friendly junk hauling Dallas",
    ],
  },
  {
    icon: Hammer,
    title: "Professional Demolition Services",
    description:
      "Interior teardown, shed removal, and light demolition work across Dallas & Red Oak. Fast, reliable & insured demolition services.",
    features: [
      "Interior & exterior demolition",
      "Shed & deck removal",
      "Light structural work",
      "Post-demo cleanup included",
    ],
  },
  {
    icon: Building2,
    title: "Dumpster Rental Services",
    description:
      "Easy dumpster rentals in Dallas & DFW for home projects, renovations & cleanouts. Flexible rental periods with delivery & pickup included.",
    features: [
      "Multiple dumpster sizes",
      "Drop-off & pickup service",
      "Flexible rental terms",
      "Disposal & recycling options",
    ],
  },
  {
    icon: Zap,
    title: "Skid Steer & Heavy Equipment Work",
    description:
      "Heavy-duty skid steer work for land clearing, grading & debris removal. Serving Dallas, Red Oak & all DFW areas.",
    features: [
      "Land clearing & grading",
      "Debris pushing & removal",
      "Material moving",
      "Professional operators",
    ],
  },
  {
    icon: Home,
    title: "Property Cleanout Services",
    description:
      "Full property cleanouts for real estate, rental turnovers & eviction situations. Complete cleanout service in Dallas & Red Oak.",
    features: [
      "Estate & foreclosure cleanouts",
      "Rental property turnovers",
      "Eviction junk removal",
      "Move-out cleanup services",
    ],
  },
  {
    icon: Building2,
    title: "Construction Debris Removal",
    description:
      "Post-construction cleanup & debris hauling services for residential & commercial projects in DFW.",
    features: [
      "Site cleanup after construction",
      "Material hauling & disposal",
      "Bulk debris removal",
      "Same-day service available",
    ],
  },
  {
    icon: Truck,
    title: "Material Transport Services",
    description:
      "Reliable material delivery & transport services for gravel, mulch, and building materials across Dallas & Red Oak.",
    features: [
      "Material delivery & pickup",
      "Bulk transport options",
      "Equipment hauling",
      "Flexible scheduling",
    ],
  },
  {
    icon: Truck,
    title: "Trailer Rentals in Dallas & DFW",
    description:
      "Affordable trailer rentals for hauling, cleanup & moving projects. Various sizes & flexible rental terms available.",
    features: [
      "Multiple trailer sizes",
      "Flexible rental options",
      "Delivery & pickup service",
      "Professional-grade equipment",
    ],
  },
];


  const pricingPlans = [
  {
    title: "Basic Junk Removal",
    price: "Starting at $99",
    description:
      "Perfect for small junk removal jobs in Dallas & DFW. Same-day pickup for furniture, appliances & light debris.",
    features: [
      "Up to 1/4 truck load",
      "Small cleanouts & single items",
      "Same-day service available",
      "Licensed & insured crew",
    ],
  },
  {
    title: "Full Property Cleanouts",
    price: "Custom Quote",
    description:
      "Complete cleanout services for homes, rentals & commercial properties in Dallas, Red Oak & DFW areas.",
    features: [
      "Full truck capacity included",
      "Complete property cleanouts",
      "Multiple trips if needed",
      "Eco-friendly disposal options",
    ],
  },
  {
    title: "Demolition & Heavy-Duty Jobs",
    price: "Custom Quote",
    description:
      "Professional demolition, site clearing & heavy-duty junk removal across DFW.",
    features: [
      "Site assessment included",
      "Professional demolition equipment",
      "Debris hauling & disposal",
      "Cleanup after demolition",
    ],
  },
];


  return (
    <div className="min-h-screen gradient-bg text-white">
      {/* Header */}
      <header className="glass-card sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-2">
          {" "}
          {/* reduced py from 4 to 2 */}
          <div className="flex items-center justify-between h-[80px]">
            {" "}
            {/* fixed height */}
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/jay_slogo--removebg-preview.png"
                  alt="Logo"
                  width={130}
                  height={130}
                  className="rounded-full object-cover w-[130px] h-[130px]"
                />
              </div>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-white hover:text-neon transition-colors font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/#about"
                className="text-white hover:text-neon transition-colors font-medium relative group"
              >
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-neon transition-colors font-medium relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/#contact"
                className="text-white hover:text-neon transition-colors font-medium relative group"
              >
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon transition-all group-hover:w-full"></span>
              </Link>
            </nav>
            {/* Desktop Contact Info */}
            <div className="hidden md:flex items-center space-x-3 text-neon font-bold">
              <Phone className="w-5 h-5" />
              <span className="text-lg">214-258-3511</span>
            </div>
            {/* Mobile Nav */}
            <main className="relative md:hidden">
              <MobileNav />
            </main>
          </div>
        </div>
      </header>

      {/* Hero Section */}
<section className="relative py-16 sm:py-20 min-h-[60vh] flex items-center overflow-hidden bg-black">
  <div className="container mx-auto px-4 sm:px-6 lg:px-20 text-center w-full">
    <div className="animate-fadeInUp">
      
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white leading-snug mb-6">
        Affordable <span className="text-neon">Junk Removal & Hauling</span>
        <br className="hidden sm:block" />
        Services Across Dallas & DFW
      </h1>

      {/* Paragraph */}
      <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
        Same-day junk removal, demolition, and hauling services for homes and 
        businesses throughout Dallas, Red Oak, and the entire DFW metroplex. 
        Fast, reliable, and eco-friendly solutions at competitive prices.
      </p>

    </div>
  </div>

  {/* Background elements (static glow) */}
  <div className="absolute top-12 left-6 sm:left-10 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-neon/10 rounded-full blur-2xl" />
  <div className="absolute top-32 right-8 sm:right-16 w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 bg-blue-400/10 rounded-full blur-xl" />
  <div className="absolute bottom-12 left-1/4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-green-400/10 rounded-full blur-lg" />
</section>



      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <StaggeredAnimation
            staggerDelay={200}
            animation="fadeInUp"
            className="grid lg:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-card p-8 rounded-2xl hover:neon-glow transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <service.icon className="w-12 h-12 text-neon" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-300"
                          >
                            <CheckCircle className="w-4 h-4 text-neon mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-6 neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-semibold px-6 py-2 rounded-full transition-all duration-300">
                        <Link href="/#contact">Request Service</Link>

                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp">
            <Card className="glass-card p-12 rounded-3xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Service <span className="text-neon">Areas</span>
                </h2>
                <p className="text-xl text-gray-300">
                  Proudly serving the entire Dallas-Fort Worth metroplex
                </p>
              </div>

              <StaggeredAnimation
                staggerDelay={80}
                animation="scaleIn"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {[
                  "Red Oak, TX",
                  "Lancaster, TX",
                  "Ennis, TX",
                  "Waxahachie, TX",
                  "Dallas, TX",
                  "Cedar Hill, TX",
                  "Duncanville, TX",
                  "Wilmer, TX",
                  "Arlington, TX",
                  "Grand Prairie, TX",
                  "All of DFW",
                ].map((area, index) => (
                  <div
                    key={index}
                    className="glass-card p-4 rounded-xl border border-neon/20 hover:border-neon transition-colors text-center"
                  >
                    <MapPin className="w-5 h-5 text-neon mx-auto mb-2" />
                    <span className="text-white font-medium">{area}</span>
                  </div>
                ))}
              </StaggeredAnimation>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp" className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent <span className="text-neon">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300">
              Fair, upfront pricing with no hidden fees
            </p>
          </AnimatedSection>

          <StaggeredAnimation
            staggerDelay={200}
            animation="scaleIn"
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className="glass-card p-8 rounded-2xl hover:neon-glow transition-all duration-300"
              >
                <CardContent className="p-0 text-center">
                  <div className="neon-gradient text-black font-bold text-lg px-4 py-2 rounded-full inline-block mb-6">
                    {plan.title}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {plan.price}
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-neon mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full glass-card text-white hover:neon-gradient hover:text-black border border-neon font-semibold py-3 rounded-full transition-all duration-300">
                    <Link href="/#contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>
        </div>
      </section>
      <ContactForm />


      {/* CTA Section */}
   

      {/* Footer */}
      <footer className="glass-card border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                JAY'S <span className="text-neon">EZ</span> JUNK REMOVAL
              </h3>
              <p className="text-gray-300 mb-4">
                Professional junk removal services across DFW
              </p>
              {/* <Badge className="neon-gradient text-black font-semibold px-3 py-1 rounded-full">Se Habla Español</Badge> */}
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <div className="space-y-2 text-gray-300">
                <p>Junk Removal</p>
                <p>Demolition</p>
                <p>Dumpster Rental</p>
                <p>Skid Steer Work</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>214-258-3511</p>
                <p>Jayson@jaysezjunkremoval.com</p>
                <p>Red Oak, TX</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Service Areas</h4>
              <div className="space-y-2 text-gray-300">
                <p>Red Oak, TX</p>
                <p>Dallas, TX</p>
                <p>All of DFW</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Jay's EZ Junk Removal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

