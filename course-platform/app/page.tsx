import { Button } from "@/components/ui/button"
import { FeaturedTeachers } from "@/components/featured-teachers"
import { HeroSection } from "@/components/hero-section"
import { SearchBar } from "@/components/search-bar"
import { SubjectCategories } from "@/components/subject-categories"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageTransition } from "@/components/page-transition"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <PageTransition>
        <main className="flex-1">
          <HeroSection />
          <section className="container mx-auto px-4 py-8">
            <ScrollReveal animation="slide-up">
              <div className="mb-8 flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight">Find Your Perfect Course</h2>
                <p className="max-w-[700px] text-muted-foreground">
                  Search from thousands of courses offered by independent teachers
                </p>
                <SearchBar />
              </div>
            </ScrollReveal>
            <SubjectCategories />
          </section>
          <section className="bg-muted py-12">
            <div className="container mx-auto px-4">
              <ScrollReveal animation="fade-in">
                <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Featured Teachers</h2>
              </ScrollReveal>
              <FeaturedTeachers />
              <ScrollReveal animation="fade-in">
                <div className="mt-8 flex justify-center">
                  <Button size="lg" asChild className="hover-lift">
                    <a href="/teachers">View All Teachers</a>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </main>
      </PageTransition>
      <SiteFooter />
    </div>
  )
}
