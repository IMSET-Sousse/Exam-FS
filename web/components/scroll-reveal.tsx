"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: ReactNode
  animation?: "fade-in" | "slide-up" | "slide-down" | "slide-in-right" | "slide-in-left" | "bounce-in"
  threshold?: number
  className?: string
}

export function ScrollReveal({ children, animation = "fade-in", threshold = 0.1, className }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const animationClass = {
    "fade-in": "animate-fade-in",
    "slide-up": "animate-slide-up",
    "slide-down": "animate-slide-down",
    "slide-in-right": "animate-slide-in-right",
    "slide-in-left": "animate-slide-in-left",
    "bounce-in": "animate-bounce-in",
  }

  return (
    <div ref={ref} className={cn(isVisible ? animationClass[animation] : "opacity-0", className)}>
      {children}
    </div>
  )
}
