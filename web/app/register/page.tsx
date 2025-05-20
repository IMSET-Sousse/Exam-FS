import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RegisterForm } from "@/components/register-form"
import { PageTransition } from "@/components/page-transition"
import { AnimatedContainer } from "@/components/animated-container"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <PageTransition>
        <main className="flex-1">
          <div className="container flex h-full max-w-md flex-col justify-center px-4 py-12">
            <AnimatedContainer animation="slide-down">
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold">Create an account</h1>
                <p className="text-muted-foreground">Sign up to get started with CourseBook</p>
              </div>
            </AnimatedContainer>
            <RegisterForm />
            <AnimatedContainer animation="fade-in" delay={800}>
              <div className="mt-6 text-center text-sm">
                <p>
                  Already have an account?{" "}
                  <Link href="/login" className="font-medium text-primary hover:underline">
                    Sign in
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
