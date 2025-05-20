import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TeacherProfile } from "@/components/teacher-profile"
import { TeacherReviews } from "@/components/teacher-reviews"
import { TeacherCourses } from "@/components/teacher-courses"
import { TeacherBooking } from "@/components/teacher-booking"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTransition } from "@/components/page-transition"
import { AnimatedContainer } from "@/components/animated-container"

export default function TeacherPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <PageTransition>
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <AnimatedContainer animation="fade-in">
              <TeacherProfile id={params.id} />
            </AnimatedContainer>
            <div className="mt-8 grid gap-8 md:grid-cols-[1fr_300px]">
              <AnimatedContainer animation="slide-up" delay={200}>
                <Tabs defaultValue="courses">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="courses">Courses</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    <TabsTrigger value="quiz">Quiz</TabsTrigger>
                  </TabsList>
                  <TabsContent value="courses" className="mt-6">
                    <TeacherCourses id={params.id} />
                  </TabsContent>
                  <TabsContent value="reviews" className="mt-6">
                    <TeacherReviews id={params.id} />
                  </TabsContent>
                  <TabsContent value="quiz" className="mt-6">
                    <div className="rounded-lg border p-6">
                      <h3 className="text-lg font-semibold">Course Quiz</h3>
                      <p className="text-muted-foreground">
                        Test your knowledge with this automatically generated quiz based on the course content.
                      </p>
                      <div className="mt-4 space-y-4">
                        <div className="space-y-2">
                          <p className="font-medium">1. What is the main focus of this course?</p>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="q1-a" name="q1" className="h-4 w-4" />
                              <label htmlFor="q1-a">Understanding core concepts</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="q1-b" name="q1" className="h-4 w-4" />
                              <label htmlFor="q1-b">Practical applications</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="q1-c" name="q1" className="h-4 w-4" />
                              <label htmlFor="q1-c">Historical context</label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="font-medium">2. Which of these topics is covered in the course?</p>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="q2-a" name="q2" className="h-4 w-4" />
                              <label htmlFor="q2-a">Advanced techniques</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="q2-b" name="q2" className="h-4 w-4" />
                              <label htmlFor="q2-b">Fundamental principles</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="q2-c" name="q2" className="h-4 w-4" />
                              <label htmlFor="q2-c">Case studies</label>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="font-medium">3. What skill level is this course designed for?</p>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="q3-a" name="q3" className="h-4 w-4" />
                              <label htmlFor="q3-a">Beginner</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="q3-b" name="q3" className="h-4 w-4" />
                              <label htmlFor="q3-b">Intermediate</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="q3-c" name="q3" className="h-4 w-4" />
                              <label htmlFor="q3-c">Advanced</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </AnimatedContainer>
              <AnimatedContainer animation="slide-in-right" delay={300}>
                <div>
                  <TeacherBooking id={params.id} />
                </div>
              </AnimatedContainer>
            </div>
          </div>
        </main>
      </PageTransition>
      <SiteFooter />
    </div>
  )
}
