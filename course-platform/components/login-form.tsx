"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { AnimatedContainer } from "@/components/animated-container"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, this would call your authentication API
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulate successful login
      toast({
        title: "Login successful",
        description: "Welcome back to CourseBook!",
      })

      // Redirect to dashboard
      router.push("/dashboard")
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <AnimatedContainer animation="slide-up" delay={100}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </AnimatedContainer>

      <AnimatedContainer animation="slide-up" delay={200}>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Button variant="link" className="h-auto p-0 text-sm" asChild>
              <Link href="/forgot-password">Forgot password?</Link>
            </Button>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </AnimatedContainer>

      <AnimatedContainer animation="slide-up" delay={300}>
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-sm font-normal">
            Remember me
          </Label>
        </div>
      </AnimatedContainer>

      <AnimatedContainer animation="slide-up" delay={400}>
        <Button type="submit" className="w-full transition-all duration-300 hover:shadow-lg" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Signing in...
            </span>
          ) : (
            "Sign In"
          )}
        </Button>
      </AnimatedContainer>

      <AnimatedContainer animation="fade-in" delay={500}>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
      </AnimatedContainer>

      <AnimatedContainer animation="slide-up" delay={600}>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" type="button" disabled={isLoading} className="hover-lift">
            Google
          </Button>
          <Button variant="outline" type="button" disabled={isLoading} className="hover-lift">
            Facebook
          </Button>
        </div>
      </AnimatedContainer>
    </form>
  )
}
