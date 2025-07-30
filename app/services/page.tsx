import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Truck, Home, Building2, Trash2, Hammer, CheckCircle, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredAnimation } from "@/components/staggered-animation"
import { ParallaxContainer } from "@/components/parallax-container"
import { ParallaxBackground } from "@/components/parallax-background"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      icon: Trash2,
      title: "Junk Removal",
      description:
        "Home, garage, yard, and business junk gone fast. Complete cleanouts for residential and commercial properties.",
      features: ["Furniture removal", "Appliance disposal", "Yard waste cleanup", "Office cleanouts"],
    },
    {
      icon: Hammer,
      title: "Demolition",
      description:
        "Interior teardown, shed removal, light demo work. Professional demolition services with proper cleanup.",
      features: ["Interior demolition", "Shed removal", "Deck teardown", "Light structural work"],
    },
    {
      icon: Building2,
      title: "Dumpster Rental",
      description:
        "Drop-off, pick-up, and disposal included. You fill, we dump. Various sizes available for any project.",
      features: ["Multiple sizes", "Flexible rental periods", "Drop-off & pickup", "Disposal included"],
    },
    {
      icon: Zap,
      title: "Skid Steer Work",
      description: "Light land clearing, debris pushing, grading. Heavy-duty equipment for challenging jobs.",
      features: ["Land clearing", "Debris removal", "Light grading", "Material moving"],
    },
    {
      icon: Home,
      title: "Property Cleanouts",
      description: "Real estate, rental turnover, eviction junk removal. Complete property preparation services.",
      features: ["Estate cleanouts", "Rental turnovers", "Foreclosure cleanup", "Moving assistance"],
    },
    {
      icon: Building2,
      title: "Construction Debris",
      description: "Post-project cleanup and haul-away service. Professional construction waste management.",
      features: ["Post-construction cleanup", "Material disposal", "Site preparation", "Debris hauling"],
    },
    {
      icon: Truck,
      title: "Material Transport",
      description: "Gravel, mulch, materials delivered or removed. Reliable transportation for your materials.",
      features: ["Material delivery", "Bulk transport", "Equipment hauling", "Supply runs"],
    },
    {
      icon: Truck,
      title: "Trailer Rentals",
      description:
        "Professional trailer rental services for your hauling needs. Various sizes and configurations available.",
      features: ["Multiple trailer sizes", "Flexible terms", "Professional equipment", "Delivery available"],
    },
  ]

  const pricingPlans = [
    {
      title: "Basic Cleanout",
      price: "Starting at $99",
      description: "Perfect for small cleanouts and single-item removal",
      features: ["Up to 1/4 truck load", "Basic furniture removal", "Same-day service", "Professional crew"],
    },
    {
      title: "Full Trailer Load",
      price: "Custom Quote",
      description: "Complete cleanouts and large-scale removals",
      features: ["Full truck capacity", "Complete property cleanouts", "Multiple trips if needed", "Disposal included"],
    },
    {
      title: "Demolition Jobs",
      price: "Custom Quote",
      description: "Professional demolition and heavy-duty work",
      features: ["Site assessment", "Professional equipment", "Debris removal", "Cleanup included"],
    },
  ]

  return (
    <div className="min-h-screen gradient-bg text-white">
      {/* Header */}
       <header className="glass-card sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-2"> {/* reduced py from 4 to 2 */}
          <div className="flex items-center justify-between h-[80px]"> {/* fixed height */}
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
              <Link href="/" className="text-white hover:text-neon transition-colors font-medium relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon transition-all group-hover:w-full"></span>
              </Link>
              <Link href="#about" className="text-white hover:text-neon transition-colors font-medium relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/services" className="text-white hover:text-neon transition-colors font-medium relative group">
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
      
            {/* Mobile Nav */}
            <main className="relative md:hidden">
              <MobileNav />
            </main>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <ParallaxBackground className="py-20 min-h-[60vh] flex items-center">
        <div className="container mx-auto px-6 text-center w-full">
          <AnimatedSection animation="fadeInUp">
            <ParallaxContainer speed={0.2}>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                All-In-One <span className="text-neon">Junk & Hauling</span>
                <br />
                Solutions Across DFW
              </h1>
            </ParallaxContainer>
            <ParallaxContainer speed={0.3} direction="down">
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional junk removal, demolition, and hauling services for residential and commercial clients
                throughout the Dallas-Fort Worth metroplex.
              </p>
            </ParallaxContainer>
          </AnimatedSection>

          {/* Floating background elements */}
          <ParallaxContainer
            speed={0.5}
            className="absolute top-20 left-10 w-20 h-20 bg-neon/10 rounded-full blur-2xl" children={undefined}          />
          <ParallaxContainer
            speed={0.7}
            direction="down"
            className="absolute top-40 right-20 w-16 h-16 bg-blue-400/10 rounded-full blur-xl" children={undefined}          />
          <ParallaxContainer
            speed={0.4}
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400/10 rounded-full blur-lg" children={undefined}          />
        </div>
      </ParallaxBackground>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <StaggeredAnimation staggerDelay={200} animation="fadeInUp" className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-card p-8 rounded-2xl hover:neon-glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <service.icon className="w-12 h-12 text-neon" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-neon mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-6 neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-semibold px-6 py-2 rounded-full transition-all duration-300">
                        Request Service
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
                <p className="text-xl text-gray-300">Proudly serving the entire Dallas-Fort Worth metroplex</p>
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
            <p className="text-xl text-gray-300">Fair, upfront pricing with no hidden fees</p>
          </AnimatedSection>

          <StaggeredAnimation
            staggerDelay={200}
            animation="scaleIn"
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="glass-card p-8 rounded-2xl hover:neon-glow transition-all duration-300">
                <CardContent className="p-0 text-center">
                  <div className="neon-gradient text-black font-bold text-lg px-4 py-2 rounded-full inline-block mb-6">
                    {plan.title}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
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
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="scaleIn">
            <Card className="glass-card p-12 rounded-3xl text-center pulse-glow">
              <CardContent className="p-0">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Need Junk Gone <span className="text-neon">Today?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Fast, reliable service across DFW. Get your free estimate now!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold text-lg px-8 py-4 rounded-full neon-glow-hover transition-all duration-300">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 214-258-3511
                  </Button>
                  <Button className="glass-card text-white hover:neon-gradient hover:text-black border border-neon font-bold text-lg px-8 py-4 rounded-full transition-all duration-300">
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Estimate
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
