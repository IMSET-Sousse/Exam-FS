import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedContainer } from "@/components/animated-container"

export function HeroSection() {
  return (
    <section className="relative bg-muted py-12 md:py-24 overflow-hidden">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <AnimatedContainer animation="slide-in-left">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Learn from the best independent teachers
              </h1>
            </AnimatedContainer>
            <AnimatedContainer animation="slide-in-left" delay={200}>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Book online or in-person courses, connect with expert teachers, and enhance your skills with our
                interactive platform.
              </p>
            </AnimatedContainer>
            <AnimatedContainer animation="slide-in-left" delay={400}>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button size="lg" asChild className="hover-lift">
                  <Link href="/teachers">Find a Teacher</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover-lift">
                  <Link href="/register?role=teacher">Become a Teacher</Link>
                </Button>
              </div>
            </AnimatedContainer>
          </div>
          <AnimatedContainer animation="slide-in-right" delay={300}>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full max-w-[500px] overflow-hidden rounded-lg md:h-[400px] animate-float">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Students learning with a teacher"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>

      {/* Animated background elements */}
      <div
        className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-1/3 -left-20 h-60 w-60 rounded-full bg-primary/5 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-primary/5 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  )
}
