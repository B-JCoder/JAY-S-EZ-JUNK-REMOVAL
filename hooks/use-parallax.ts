"use client"

import { useEffect, useRef, useState } from "react"

interface UseParallaxOptions {
  speed?: number
  direction?: "up" | "down"
  disabled?: boolean
}

export function useParallax(options: UseParallaxOptions = {}) {
  const { speed = 0.5, direction = "up", disabled = false } = options
  const [offset, setOffset] = useState(0)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (disabled) return

    const handleScroll = () => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed

      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        setOffset(direction === "up" ? rate : -rate)
      }
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed, direction, disabled])

  return { elementRef, offset }
}
