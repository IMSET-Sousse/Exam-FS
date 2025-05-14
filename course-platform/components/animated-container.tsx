"use client"

import { useEffect, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedContainerProps {
  children: ReactNode
  animation?: "fade-in" | "slide-up" | "slide-down" | "slide-in-right" | "slide-in-left" | "bounce-in"
  delay?: number
  className?: string
  once?: boolean
}

export function AnimatedContainer({
  children,
  animation = "fade-in",
  delay = 0,
  className,
  once = true,
}: AnimatedContainerProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const animationClass = {
    "fade-in": "animate-fade-in",
    "slide-up": "animate-slide-up",
    "slide-down": "animate-slide-down",
    "slide-in-right": "animate-slide-in-right",
    "slide-in-left": "animate-slide-in-left",
    "bounce-in": "animate-bounce-in",
  }

  return (
    <div
      className={cn(
        isVisible ? animationClass[animation] : "opacity-0",
        once ? "" : "transition-all duration-500",
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
