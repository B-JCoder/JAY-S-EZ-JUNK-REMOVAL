
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Truck,
  Trash2,
  Hammer,
  Facebook,
  Instagram,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Zap,
  Building2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
// import { useState } from "react"
import { ContactForm } from "@/components/ContactForm";

export default function HomePage() {
  
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
                  src="/images/jay's.png"
                  alt="Logo"
                  width={110}
                  height={110}
                  className=" w-[130px] h-[100px]"
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
                href="#about"
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
                href="#contact"
                className="text-white hover:text-neon transition-colors font-medium relative group"
              >
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon transition-all group-hover:w-full"></span>
              </Link>
            </nav>
         {/* Desktop Contact Info */}
<Button
  style={{ position: "relative", padding: "20px" }}
  className="hidden md:flex neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-lg px-8 py-4 rounded-full neon-glow-hover transition-all duration-300"
>
  <Phone className="w-5 h-5 mr-2" />
  <a href="tel:2142583511" className="text-lg">
    214-258-3511
  </a>
</Button>

{/* Mobile Nav */}
<main className="relative md:hidden z-50"> {/* yahan z-index zyada rakho */}
  <MobileNav />
</main>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-10 md:py-20 relative overflow-hidden min-h-screen max-h-screen overflow-y-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
                  JAY'S <span className="text-neon">EZ</span>
                  <br />
                  JUNK REMOVAL
                </h1>
                <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-neon">
                  JUNK REMOVAL MADE EZ
                </div>
                <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                  Professional junk removal and demolition services across the
                  DFW area. Fast, reliable, and affordable solutions for
                  residential and commercial clients.
                </p>
              </div>

              {/* <div className="flex items-center space-x-4 text-lg">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-neon" />
                  <span className="font-semibold">
                    Call/Text Now: 214-258-3511
                  </span>
                </div>
              </div> */}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  style={{
                    position: "relative",
                    zIndex: 9999,
                    padding: "20px",
                  }}
                  className="neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-lg px-8 py-4 rounded-full neon-glow-hover transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <a href="tel:2142583511" className="text-lg">
                    Call Link
                  </a>
                </Button>

                <Button className="glass-card text-white hover:neon-gradient hover:text-black border border-neon font-bold text-lg px-8 py-4 rounded-full transition-all duration-300">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  <Link href="#contact">Book Estimate</Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Visual Elements */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <Card className="glass-card p-6 floating-animation">
                  <CardContent className="p-0 text-center">
                    <Trash2 className="w-12 h-12 text-neon mx-auto mb-4" />
                    <h3 className="font-bold text-white mb-2">Junk Removal</h3>
                    <p className="text-gray-300 text-sm">Complete cleanouts</p>
                  </CardContent>
                </Card>
                <Card
                  className="glass-card p-6 floating-animation"
                  style={{ animationDelay: "1s" }}
                >
                  <CardContent className="p-0 text-center">
                    <Hammer className="w-12 h-12 text-neon mx-auto mb-4" />
                    <h3 className="font-bold text-white mb-2">Demolition</h3>
                    <p className="text-gray-300 text-sm">Professional demo</p>
                  </CardContent>
                </Card>
                <Card
                  className="glass-card p-6 floating-animation"
                  style={{ animationDelay: "2s" }}
                >
                  <CardContent className="p-0 text-center">
                    <Truck className="w-12 h-12 text-neon mx-auto mb-4" />
                    <h3 className="font-bold text-white mb-2">
                      Dumpster Rental
                    </h3>
                    <p className="text-gray-300 text-sm">Drop-off & pickup</p>
                  </CardContent>
                </Card>
                <Card
                  className="glass-card p-6 floating-animation"
                  style={{ animationDelay: "3s" }}
                >
                  <CardContent className="p-0 text-center">
                    <Zap className="w-12 h-12 text-neon mx-auto mb-4" />
                    <h3 className="font-bold text-white mb-2">Skid Steer</h3>
                    <p className="text-gray-300 text-sm">Heavy-duty work</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro/About */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-6">
          <Card className="glass-card p-12 rounded-3xl">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <h2 className="text-4xl font-bold text-white mb-6">
                About <span className="text-neon">Jay's EZ Junk Removal</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Based in Red Oak, TX, we're your trusted local junk removal
                experts serving the entire DFW area. Our professional team
                provides fast, reliable, and affordable solutions for both
                residential and commercial clients.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-neon mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-2">Local Experts</h3>
                  <p className="text-gray-300">Based in Red Oak, TX</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-neon mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-2">
                    Bilingual Support
                  </h3>
                  <p className="text-gray-300">English & Spanish</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-neon mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-2">Fast Service</h3>
                  <p className="text-gray-300">Same-day available</p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <Button
                asChild
                className="neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-lg px-6 py-3 md:px-8 md:py-4 rounded-full neon-glow-hover transition-all duration-300"
              >
                <a href="tel:2142583511" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  214-258-3511
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-neon">Services</span>
            </h2>
            <p className="text-xl text-gray-300">
              Professional solutions for all your junk removal needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Trash2,
                title: "Junk Removal",
                desc: "Complete home & business cleanouts",
              },
              {
                icon: Building2,
                title: "Dumpster Rental",
                desc: "Drop-off & pickup included",
              },
              {
                icon: Zap,
                title: "Skid Steer Work",
                desc: "Heavy-duty removal & clearing",
              },
              {
                icon: Hammer,
                title: "Demolition",
                desc: "Interior/exterior demo work",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="glass-card p-6 rounded-2xl hover:neon-glow transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-0 text-center">
                  <service.icon className="w-12 h-12 text-neon mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-white mb-2 text-lg">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-lg px-8 py-4 rounded-full neon-glow-hover transition-all duration-300">
                <Link href="/services">View All Services</Link>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-neon">Work</span>
            </h2>
            {/* <p className="text-xl text-gray-300">Before & After Results</p> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/images/junk-pile.jpg",
                alt: "Large junk removal project",
              },
              {
                src: "/images/skid-steer-dumpster.jpg",
                alt: "Skid steer in action",
              },
              {
                src: "/images/demolition-work.jpg",
                alt: "Professional demolition",
              },
              {
                src: "/images/material-transport.jpg",
                alt: "Material transport service",
              },
              {
                src: "/images/messy-room-before.jpg",
                alt: "Property cleanout before",
              },
              {
                src: "/images/truck-loaded-junk.jpg",
                alt: "Loaded removal truck",
              },
            ].map((image, index) => (
              <Card
                key={index}
                className="glass-card overflow-hidden rounded-2xl group cursor-pointer hover:neon-glow transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our <span className="text-neon">Customers</span> Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-card p-8 rounded-2xl">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-neon fill-current"
                    />
                  ))}
                </div>
                <p className="text-white mb-4 text-lg italic">
                  "Fast, reliable, and honest work. Jay's team made our cleanout
                  stress-free!"
                </p>
                <p className="font-bold text-neon">— Sarah M., Dallas</p>
              </CardContent>
            </Card>

            <Card className="glass-card p-8 rounded-2xl">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-neon fill-current"
                    />
                  ))}
                </div>
                <p className="text-white mb-4 text-lg italic">
                  "Professional service at great prices. Highly recommend for
                  any junk removal needs."
                </p>
                <p className="font-bold text-neon">— Mike R., Red Oak</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Card className="glass-card p-12 rounded-3xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">
                Areas We <span className="text-neon">Serve</span>
              </h2>
              <p className="text-xl text-gray-300">
                Proudly serving the entire DFW metroplex
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
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
                  className="glass-card p-4 rounded-xl border border-neon/20 hover:border-neon transition-colors"
                >
                  <MapPin className="w-5 h-5 text-neon mx-auto mb-2" />
                  <span className="text-white font-medium">{area}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
    
    <ContactForm />
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Card className="glass-card p-12 rounded-3xl text-center pulse-glow">
            <CardContent className="p-0">
              <h2 className="text-4xl font-bold text-white mb-4">
                Get Your Junk Removed <span className="text-neon">EZ</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Fast, reliable, and affordable junk removal services across DFW
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-lg px-8 py-4 rounded-full neon-glow-hover transition-all duration-300">
                  <Link href="#contact">Request Free Estimate</Link> 
                </Button>
                <Button
                  style={{
                    position: "relative",
                    zIndex: 9999,
                    padding: "20px",
                  }}
                  className="neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-lg px-8 py-4 rounded-full neon-glow-hover transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <a href="tel:2142583511" className="text-lg">
                    Call Now
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card border-t border-white/10 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo + Description */}
            <div className="text-center lg:text-left ">
              <Image
                src="/images/jay_slogo--removebg-preview.png"
                alt="Logo"
                width={130}
                height={130}
                className="rounded-full object-cover mx-auto lg:mx-0 "
              />
              <h3 className="text- font-bold text-white mb-2">
                JAY'S <span className="text-neon">EZ</span> JUNK REMOVAL
              </h3>
              <p className="text-gray-300">
                Professional junk removal services across DFW
              </p>
            </div>

            {/* Services */}
            <div className="text-center lg:text-left">
              <h4 className="font-bold text-white mb-4">Services</h4>
              <div className="space-y-2 text-gray-300">
                <p>Junk Removal</p>
                <p>Demolition</p>
                <p>Dumpster Rental</p>
                <p>Skid Steer Work</p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center lg:text-left">
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>214-258-3511</p>
                <p>Jayson@jaysezjunkremoval.com</p>
                <p>Red Oak, TX</p>
              </div>
            </div>

            {/* Service Areas */}
            <div className="text-center lg:text-left">
              <h4 className="font-bold text-white mb-4">Service Areas</h4>
              <div className="space-y-2 text-gray-300">
                <p>Red Oak, TX</p>
                <p>Dallas, TX</p>
                <p>All of DFW</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-300">
            <p>&copy; 2025 Jay's EZ Junk Removal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
