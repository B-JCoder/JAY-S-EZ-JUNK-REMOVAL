import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
} from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredAnimation } from "@/components/staggered-animation"
import { ParallaxContainer } from "@/components/parallax-container"
import { ParallaxBackground } from "@/components/parallax-background"
import { Gallery } from "@/components/gallery"

export default function HomePage() {
  const galleryImages = [
    {
      src: "/images/junk-pile.jpg",
      alt: "Large junk removal project",
      title: "Complete Property Cleanout",
      category: "Junk Removal",
    },
    {
      src: "/images/skid-steer-dumpster.jpg",
      alt: "Skid steer in action",
      title: "Heavy Equipment Work",
      category: "Skid Steer",
    },
    {
      src: "/images/demolition-work.jpg",
      alt: "Professional demolition",
      title: "Interior Demolition",
      category: "Demolition",
    },
    {
      src: "/images/material-transport.jpg",
      alt: "Material transport service",
      title: "Material Hauling",
      category: "Transport",
    },
    {
      src: "/images/messy-room-before.jpg",
      alt: "Property cleanout before",
      title: "Before: Cluttered Space",
      category: "Before/After",
    },
    {
      src: "/images/truck-loaded-junk.jpg",
      alt: "Loaded removal truck",
      title: "Full Load Ready for Disposal",
      category: "Junk Removal",
    },
  ]

  return (
    <div className="min-h-screen gradient-bg text-white">
      {/* Header */}
      <header className="glass-card sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-white">
                JAY'S <span className="text-neon">EZ</span> JUNK REMOVAL
              </div>
              <Badge className="neon-gradient text-black font-semibold px-3 py-1 rounded-full hidden sm:inline-block">
                Se Habla Español
              </Badge>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-neon transition-colors font-medium relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon transition-all group-hover:w-full"></span>
              </Link>
              <Link href="#about" className="text-white hover:text-neon transition-colors font-medium relative group">
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
              <Link href="#contact" className="text-white hover:text-neon transition-colors font-medium relative group">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon transition-all group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Desktop Contact Info */}
            <div className="hidden md:flex items-center space-x-3 text-neon font-bold">
              <Phone className="w-5 h-5" />
              <span className="text-lg">214-258-3511</span>
            </div>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <ParallaxBackground className="py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <AnimatedSection animation="fadeInLeft" className="space-y-8">
              <div className="space-y-4">
                <ParallaxContainer speed={0.2}>
                  <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                    JAY'S <span className="text-neon">EZ</span>
                    <br />
                    JUNK REMOVAL
                  </h1>
                </ParallaxContainer>
                <ParallaxContainer speed={0.3} direction="down">
                  <div className="text-3xl lg:text-4xl font-bold text-neon">JUNK REMOVAL MADE EZ</div>
                </ParallaxContainer>
                <ParallaxContainer speed={0.1}>
                  <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                    Professional junk removal and demolition services across the DFW area. Fast, reliable, and
                    affordable solutions for residential and commercial clients.
                  </p>
                </ParallaxContainer>
              </div>

              <div className="flex items-center space-x-4 text-lg">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-neon" />
                  <span className="font-semibold">Call/Text Now: 214-258-3511</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-lg px-8 py-4 rounded-full neon-glow-hover transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </Button>
                <Button className="glass-card text-white hover:neon-gradient hover:text-black border border-neon font-bold text-lg px-8 py-4 rounded-full transition-all duration-300">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Book Estimate
                </Button>
              </div>
            </AnimatedSection>

            {/* Right Side - Visual Elements */}
            <AnimatedSection animation="fadeInRight" delay={300} className="relative">
              <ParallaxContainer speed={0.4} className="relative z-10">
                <StaggeredAnimation staggerDelay={150} animation="scaleIn" className="grid grid-cols-2 gap-6">
                  <Card className="glass-card p-6">
                    <CardContent className="p-0 text-center">
                      <Trash2 className="w-12 h-12 text-neon mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">Junk Removal</h3>
                      <p className="text-gray-300 text-sm">Complete cleanouts</p>
                    </CardContent>
                  </Card>
                  <Card className="glass-card p-6">
                    <CardContent className="p-0 text-center">
                      <Hammer className="w-12 h-12 text-neon mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">Demolition</h3>
                      <p className="text-gray-300 text-sm">Professional demo</p>
                    </CardContent>
                  </Card>
                  <Card className="glass-card p-6">
                    <CardContent className="p-0 text-center">
                      <Truck className="w-12 h-12 text-neon mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">Dumpster Rental</h3>
                      <p className="text-gray-300 text-sm">Drop-off & pickup</p>
                    </CardContent>
                  </Card>
                  <Card className="glass-card p-6">
                    <CardContent className="p-0 text-center">
                      <Zap className="w-12 h-12 text-neon mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">Skid Steer</h3>
                      <p className="text-gray-300 text-sm">Heavy-duty work</p>
                    </CardContent>
                  </Card>
                </StaggeredAnimation>
              </ParallaxContainer>

              {/* Floating background elements */}
              <ParallaxContainer
                speed={0.6}
                direction="down"
                className="absolute -top-10 -right-10 w-32 h-32 bg-neon/5 rounded-full blur-xl"
              />
              <ParallaxContainer
                speed={0.8}
                className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </ParallaxBackground>

      {/* Quick Intro/About */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp">
            <Card className="glass-card p-12 rounded-3xl">
              <div className="text-center max-w-4xl mx-auto space-y-6">
                <h2 className="text-4xl font-bold text-white mb-6">
                  About <span className="text-neon">Jay's EZ Junk Removal</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Based in Red Oak, TX, we're your trusted local junk removal experts serving the entire DFW area. Our
                  professional team provides fast, reliable, and affordable solutions for both residential and
                  commercial clients.
                </p>
                <StaggeredAnimation staggerDelay={200} animation="fadeInUp" className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-neon mx-auto mb-3" />
                    <h3 className="font-bold text-white mb-2">Local Experts</h3>
                    <p className="text-gray-300">Based in Red Oak, TX</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-8 h-8 text-neon mx-auto mb-3" />
                    <h3 className="font-bold text-white mb-2">Bilingual Support</h3>
                    <p className="text-gray-300">English & Spanish</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-neon mx-auto mb-3" />
                    <h3 className="font-bold text-white mb-2">Fast Service</h3>
                    <p className="text-gray-300">Same-day available</p>
                  </div>
                </StaggeredAnimation>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp" className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-neon">Services</span>
            </h2>
            <p className="text-xl text-gray-300">Professional solutions for all your junk removal needs</p>
          </AnimatedSection>

          <StaggeredAnimation
            staggerDelay={150}
            animation="scaleIn"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Trash2, title: "Junk Removal", desc: "Complete home & business cleanouts" },
              { icon: Building2, title: "Dumpster Rental", desc: "Drop-off & pickup included" },
              { icon: Zap, title: "Skid Steer Work", desc: "Heavy-duty removal & clearing" },
              { icon: Hammer, title: "Demolition", desc: "Interior/exterior demo work" },
            ].map((service, index) => (
              <Card
                key={index}
                className="glass-card p-6 rounded-2xl hover:neon-glow transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-0 text-center">
                  <service.icon className="w-12 h-12 text-neon mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-white mb-2 text-lg">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>

          <AnimatedSection animation="fadeInUp" delay={600} className="text-center mt-12">
            <Link href="/services">
              <Button className="neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-lg px-8 py-4 rounded-full neon-glow-hover transition-all duration-300">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp" className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-neon">Work</span>
            </h2>
            <p className="text-xl text-gray-300">Before & After Results - Click to view full size</p>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={200}>
            <Gallery images={galleryImages} />
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp" className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our <span className="text-neon">Customers</span> Say
            </h2>
          </AnimatedSection>

          <StaggeredAnimation
            staggerDelay={300}
            animation="fadeInUp"
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <Card className="glass-card p-8 rounded-2xl">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-neon fill-current" />
                  ))}
                </div>
                <p className="text-white mb-4 text-lg italic">
                  "Fast, reliable, and honest work. Jay's team made our cleanout stress-free!"
                </p>
                <p className="font-bold text-neon">— Sarah M., Dallas</p>
              </CardContent>
            </Card>

            <Card className="glass-card p-8 rounded-2xl">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-neon fill-current" />
                  ))}
                </div>
                <p className="text-white mb-4 text-lg italic">
                  "Professional service at great prices. Highly recommend for any junk removal needs."
                </p>
                <p className="font-bold text-neon">— Mike R., Red Oak</p>
              </CardContent>
            </Card>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fadeInUp">
            <Card className="glass-card p-12 rounded-3xl">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Areas We <span className="text-neon">Serve</span>
                </h2>
                <p className="text-xl text-gray-300">Proudly serving the entire DFW metroplex</p>
              </div>

              <StaggeredAnimation
                staggerDelay={80}
                animation="fadeInUp"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center"
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
                    className="glass-card p-4 rounded-xl border border-neon/20 hover:border-neon transition-colors"
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

      {/* Contact Form */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Get Your <span className="text-neon">Free Estimate</span>
              </h2>
              <p className="text-xl text-gray-300">Ready to get started? Contact us today!</p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <Card className="glass-card p-8 rounded-2xl">
                  <CardContent className="p-0">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white font-semibold mb-2">Name *</label>
                          <Input
                            className="glass-card border-white/20 text-white placeholder:text-gray-400 focus:border-neon rounded-xl"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-white font-semibold mb-2">Phone *</label>
                          <Input
                            className="glass-card border-white/20 text-white placeholder:text-gray-400 focus:border-neon rounded-xl"
                            placeholder="(214) 555-0123"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2">Email</label>
                        <Input
                          className="glass-card border-white/20 text-white placeholder:text-gray-400 focus:border-neon rounded-xl"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2">Service Needed</label>
                        <Select>
                          <SelectTrigger className="glass-card border-white/20 text-white focus:border-neon rounded-xl">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="glass-card border-white/20">
                            <SelectItem value="junk-removal">Junk Removal</SelectItem>
                            <SelectItem value="demolition">Demolition</SelectItem>
                            <SelectItem value="dumpster-rental">Dumpster Rental</SelectItem>
                            <SelectItem value="skid-steer">Skid Steer Work</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2">Message</label>
                        <Textarea
                          className="glass-card border-white/20 text-white placeholder:text-gray-400 focus:border-neon rounded-xl"
                          placeholder="Tell us about your project..."
                          rows={4}
                        />
                      </div>

                      <Button className="w-full neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-lg py-4 rounded-xl neon-glow-hover transition-all duration-300">
                        Submit Request
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection animation="fadeInRight" delay={400} className="space-y-6">
                <Card className="glass-card p-8 rounded-2xl">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Phone className="w-6 h-6 text-neon" />
                        <div>
                          <p className="text-white font-semibold">Phone</p>
                          <p className="text-gray-300">214-258-3511</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Mail className="w-6 h-6 text-neon" />
                        <div>
                          <p className="text-white font-semibold">Email</p>
                          <p className="text-gray-300">Jayson@jaysezjunkremoval.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <MapPin className="w-6 h-6 text-neon" />
                        <div>
                          <p className="text-white font-semibold">Location</p>
                          <p className="text-gray-300">Red Oak, TX</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card p-8 rounded-2xl">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                    <div className="flex space-x-4">
                      <Button
                        size="lg"
                        className="glass-card text-white hover:neon-gradient hover:text-black rounded-xl"
                      >
                        <Facebook className="w-5 h-5" />
                      </Button>
                      <Button
                        size="lg"
                        className="glass-card text-white hover:neon-gradient hover:text-black rounded-xl"
                      >
                        <Instagram className="w-5 h-5" />
                      </Button>
                      <Button
                        size="lg"
                        className="glass-card text-white hover:neon-gradient hover:text-black rounded-xl"
                      >
                        G
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="scaleIn">
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
                    Request Free Estimate
                  </Button>
                  <Button className="glass-card text-white hover:neon-gradient hover:text-black border border-neon font-bold text-lg px-8 py-4 rounded-full transition-all duration-300">
                    Call Now: 214-258-3511
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                JAY'S <span className="text-neon">EZ</span> JUNK REMOVAL
              </h3>
              <p className="text-gray-300 mb-4">Professional junk removal services across DFW</p>
              <Badge className="neon-gradient text-black font-semibold px-3 py-1 rounded-full">Se Habla Español</Badge>
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
  )
}
