"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
import {  Menu, X } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <Button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 right-4 z-[60] glass-card text-white hover:neon-gradient hover:text-black border border-neon/30 p-2"
        size="sm"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Fullscreen Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sliding Menu Panel */}
  <div
  className={`fixed inset-y-0 right-0 w-80 z-50 bg-green-600 border-l border-black/100 transition-transform duration-300 ease-in-out md:hidden ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>


        <div className="p-6 h-full flex flex-col bg-green-600 border-l border-black/100">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 bg-green-600 border-l border-black/100">
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

        

      
          
        </div>
      </div>
    </>
  )
}
