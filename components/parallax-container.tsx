"use client"

import type { ReactNode } from "react"
import { useParallax } from "@/hooks/use-parallax"

interface ParallaxContainerProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
  disabled?: boolean
}

export function ParallaxContainer({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
  disabled = false,
}: ParallaxContainerProps) {
  const { elementRef, offset } = useParallax({ speed, direction, disabled })

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: "none", // Disable transitions for smooth parallax
      }}
    >
      {children}
    </div>
  )
}
