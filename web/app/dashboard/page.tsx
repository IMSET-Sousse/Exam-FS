import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DashboardTabs } from "@/components/dashboard-tabs"
import { PageTransition } from "@/components/page-transition"
import { AnimatedContainer } from "@/components/animated-container"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <PageTransition>
        <main className="flex-1">
          <div className="container px-4 py-8">
            <AnimatedContainer animation="slide-down">
              <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
            </AnimatedContainer>
            <AnimatedContainer animation="fade-in" delay={200}>
              <DashboardTabs />
            </AnimatedContainer>
          </div>
        </main>
      </PageTransition>
      <SiteFooter />
    </div>
  )
}
