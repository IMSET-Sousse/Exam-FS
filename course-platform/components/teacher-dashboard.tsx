import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, BookOpen, Plus, Users, Star } from "lucide-react"
import Link from "next/link"

// Mock data for upcoming sessions
const upcomingSessions = [
  {
    id: 1,
    studentName: "Alex Thompson",
    studentAvatar: "/placeholder.svg?height=40&width=40",
    subject: "Introduction to Calculus",
    date: "Tomorrow",
    time: "10:30 - 11:30",
    status: "confirmed",
  },
  {
    id: 2,
    studentName: "Maria Garcia",
    studentAvatar: "/placeholder.svg?height=40&width=40",
    subject: "Statistics for Data Science",
    date: "May 18, 2025",
    time: "15:00 - 16:00",
    status: "confirmed",
  },
]

// Mock data for courses
const teacherCourses = [
  {
    id: 1,
    title: "Introduction to Calculus",
    students: 45,
    rating: 4.9,
    reviews: 24,
  },
  {
    id: 2,
    title: "Advanced Algebra",
    students: 28,
    rating: 4.8,
    reviews: 16,
  },
  {
    id: 3,
    title: "Statistics for Data Science",
    students: 56,
    rating: 4.7,
    reviews: 32,
  },
]

export function TeacherDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Sessions</CardTitle>
          <CardDescription>Your scheduled sessions with students</CardDescription>
        </CardHeader>
        <CardContent>
          {upcomingSessions.length > 0 ? (
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="flex items-start space-x-4 rounded-lg border p-4">
                  <Avatar>
                    <AvatarImage src={session.studentAvatar || "/placeholder.svg"} alt={session.studentName} />
                    <AvatarFallback>{session.studentName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{session.subject}</h4>
                      <Badge variant={session.status === "confirmed" ? "outline" : "secondary"}>{session.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">with {session.studentName}</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{session.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/sessions">View All Sessions</Link>
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-3 py-6 text-center">
              <Calendar className="h-12 w-12 text-muted-foreground" />
              <div>
                <h4 className="text-lg font-semibold">No upcoming sessions</h4>
                <p className="text-sm text-muted-foreground">You don&apos;t have any scheduled sessions yet.</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Your Courses</CardTitle>
              <CardDescription>Courses you&apos;re currently teaching</CardDescription>
            </div>
            <Button size="sm" className="flex items-center gap-1">
              <Plus className="h-4 w-4" />
              <span>Add Course</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {teacherCourses.length > 0 ? (
            <div className="space-y-4">
              {teacherCourses.map((course) => (
                <div key={course.id} className="space-y-2 rounded-lg border p-4">
                  <h4 className="font-semibold">{course.title}</h4>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span>
                        {course.rating} ({course.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/my-courses">Manage All Courses</Link>
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-3 py-6 text-center">
              <BookOpen className="h-12 w-12 text-muted-foreground" />
              <div>
                <h4 className="text-lg font-semibold">No courses yet</h4>
                <p className="text-sm text-muted-foreground">You haven&apos;t created any courses yet.</p>
              </div>
              <Button>Create Your First Course</Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>AI-Generated Quiz</CardTitle>
          <CardDescription>Automatically generate quizzes based on your course content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border p-6">
            <h3 className="mb-4 text-lg font-semibold">Quiz Generator</h3>
            <p className="mb-4 text-muted-foreground">
              Our AI can automatically generate quizzes based on your course descriptions. Select a course and click
              &quot;Generate Quiz&quot; to create a new quiz for your students.
            </p>
            <div className="space-y-4">
              <div>
                <label htmlFor="course-select" className="mb-2 block text-sm font-medium">
                  Select Course
                </label>
                <select
                  id="course-select"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select a course</option>
                  {teacherCourses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="quiz-questions" className="mb-2 block text-sm font-medium">
                  Number of Questions
                </label>
                <select
                  id="quiz-questions"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  defaultValue="5"
                >
                  <option value="3">3 questions</option>
                  <option value="5">5 questions</option>
                  <option value="10">10 questions</option>
                </select>
              </div>
              <Button className="w-full">Generate Quiz</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
