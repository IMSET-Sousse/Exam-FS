"use client"

import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useEffect, useState, type ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [prevPathname, setPrevPathname] = useState(pathname)
  const [direction, setDirection] = useState<"forward" | "backward" | "none">("none")

  useEffect(() => {
    if (pathname !== prevPathname) {
      // Determine direction based on pathname depth
      const prevDepth = prevPathname.split("/").filter(Boolean).length
      const currentDepth = pathname.split("/").filter(Boolean).length

      if (currentDepth > prevDepth) {
        setDirection("forward")
      } else if (currentDepth < prevDepth) {
        setDirection("backward")
      } else {
        setDirection("none")
      }

      setPrevPathname(pathname)
    }
  }, [pathname, prevPathname])

  const variants = {
    initial: (direction: string) => {
      return {
        x: direction === "forward" ? 300 : direction === "backward" ? -300 : 0,
        opacity: 0,
      }
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: string) => {
      return {
        x: direction === "forward" ? -300 : direction === "backward" ? 300 : 0,
        opacity: 0,
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        },
      }
    },
  }

  return (
    <motion.div key={pathname} custom={direction} initial="initial" animate="animate" exit="exit" variants={variants}>
      {children}
    </motion.div>
  )
}
