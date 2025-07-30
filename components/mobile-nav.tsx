"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Menu, X } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        onClick={toggleMenu}
        className="md:hidden glass-card text-white hover:neon-gradient hover:text-black border border-neon/30 p-2"
        size="sm"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={closeMenu} />}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 glass-card border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-xl font-bold text-white">
              JAY'S <span className="text-neon">EZ</span>
            </div>
            <Button
              onClick={closeMenu}
              className="glass-card text-white hover:neon-gradient hover:text-black border border-neon/30 p-2"
              size="sm"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4 mb-8">
            <Link
              href="/"
              onClick={closeMenu}
              className="block text-white hover:text-neon transition-colors font-medium text-lg py-3 px-4 rounded-xl hover:bg-white/5"
            >
              Home
            </Link>
            <Link
              href="/#about"
              onClick={closeMenu}
              className="block text-white hover:text-neon transition-colors font-medium text-lg py-3 px-4 rounded-xl hover:bg-white/5"
            >
              About Us
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="block text-white hover:text-neon transition-colors font-medium text-lg py-3 px-4 rounded-xl hover:bg-white/5"
            >
              Services
            </Link>
            <Link
              href="/#contact"
              onClick={closeMenu}
              className="block text-white hover:text-neon transition-colors font-medium text-lg py-3 px-4 rounded-xl hover:bg-white/5"
            >
              Contact Us
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="glass-card p-4 rounded-xl border border-neon/20 mb-6">
            <div className="flex items-center space-x-3 text-neon font-bold mb-2">
              <Phone className="w-5 h-5" />
              <span className="text-lg">214-258-3511</span>
            </div>
            <p className="text-gray-300 text-sm">Call or text anytime</p>
          </div>

          {/* Language Badge */}
          <div className="flex justify-center">
            <Badge className="neon-gradient text-black font-semibold px-4 py-2 rounded-full">Se Habla Español</Badge>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 mt-8">
            <Button
              onClick={closeMenu}
              className="w-full neon-gradient text-black hover:bg-black hover:text-neon border-2 border-transparent hover:border-neon font-bold py-3 rounded-full neon-glow-hover transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              onClick={closeMenu}
              className="w-full glass-card text-white hover:neon-gradient hover:text-black border border-neon font-bold py-3 rounded-full transition-all duration-300"
            >
              Get Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
