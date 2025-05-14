import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TeachersList } from "@/components/teachers-list"
import { TeachersFilter } from "@/components/teachers-filter"
import { PageTransition } from "@/components/page-transition"
import { AnimatedContainer } from "@/components/animated-container"

export default function TeachersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <PageTransition>
        <main className="flex-1">
          <section className="container mx-auto px-4 py-8">
            <AnimatedContainer animation="slide-down">
              <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Find Teachers</h1>
                <p className="text-muted-foreground">
                  Browse and filter teachers based on subject, rating, and availability
                </p>
              </div>
            </AnimatedContainer>
            <div className="grid gap-6 md:grid-cols-[300px_1fr]">
              <aside className="hidden md:block">
                <AnimatedContainer animation="slide-in-left">
                  <TeachersFilter />
                </AnimatedContainer>
              </aside>
              <div>
                <TeachersList />
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
      <SiteFooter />
    </div>
  )
}
