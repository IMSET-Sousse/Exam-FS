import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LoginForm } from "@/components/login-form"
import { PageTransition } from "@/components/page-transition"
import { AnimatedContainer } from "@/components/animated-container"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <PageTransition>
        <main className="flex-1">
          <div className="container flex h-full max-w-md flex-col justify-center px-4 py-12">
            <AnimatedContainer animation="slide-down">
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground">Sign in to your account to continue</p>
              </div>
            </AnimatedContainer>
            <LoginForm />
            <AnimatedContainer animation="fade-in" delay={700}>
              <div className="mt-6 text-center text-sm">
                <p>
                  Don&apos;t have an account?{" "}
                  <Link href="/register" className="font-medium text-primary hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </AnimatedContainer>
          </div>
        </main>
      </PageTransition>
      <SiteFooter />
    </div>
  )
}
