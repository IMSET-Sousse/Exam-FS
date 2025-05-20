import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

// Mock data for courses
const coursesData = [
  {
    id: 1,
    title: "Introduction to Calculus",
    description:
      "A comprehensive introduction to differential and integral calculus. This course covers limits, derivatives, integrals, and their applications.",
    duration: "8 weeks",
    level: "Beginner",
    students: 45,
    topics: ["Limits", "Derivatives", "Integrals", "Applications"],
    price: "€280",
  },
  {
    id: 2,
    title: "Advanced Algebra",
    description:
      "Explore advanced algebraic concepts including groups, rings, fields, and Galois theory. Suitable for students with a strong mathematical background.",
    duration: "10 weeks",
    level: "Advanced",
    students: 28,
    topics: ["Group Theory", "Ring Theory", "Field Extensions", "Galois Theory"],
    price: "€350",
  },
  {
    id: 3,
    title: "Statistics for Data Science",
    description:
      "Learn statistical methods and their applications in data science. Covers probability, hypothesis testing, regression, and statistical inference.",
    duration: "6 weeks",
    level: "Intermediate",
    students: 56,
    topics: ["Probability", "Hypothesis Testing", "Regression", "Statistical Inference"],
    price: "€210",
  },
]

export function TeacherCourses({ id }: { id: string }) {
  // In a real app, you would fetch the courses data based on the teacher ID
  const courses = coursesData

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Available Courses</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <ScrollReveal key={course.id} animation="slide-up" className="stagger-item">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge>{course.level}</Badge>
                      <span className="font-semibold">{course.price}</span>
                    </div>
                    <h4 className="text-lg font-semibold">{course.title}</h4>
                    <p className="text-sm text-muted-foreground">{course.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{course.students} students</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-2 text-sm font-medium">Topics covered:</h5>
                    <div className="flex flex-wrap gap-1">
                      {course.topics.map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full transition-all duration-300 hover:shadow-lg">Book Course</Button>
              </CardFooter>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
