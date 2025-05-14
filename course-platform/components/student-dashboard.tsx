import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, BookOpen, MessageCircle } from "lucide-react"
import Link from "next/link"

// Mock data for upcoming bookings
const upcomingBookings = [
  {
    id: 1,
    teacherName: "Dr. Sarah Johnson",
    teacherAvatar: "/placeholder.svg?height=40&width=40",
    subject: "Introduction to Calculus",
    date: "Tomorrow",
    time: "10:30 - 11:30",
    status: "confirmed",
  },
  {
    id: 2,
    teacherName: "Prof. Michael Chen",
    teacherAvatar: "/placeholder.svg?height=40&width=40",
    subject: "Python Programming",
    date: "May 18, 2025",
    time: "15:00 - 16:00",
    status: "confirmed",
  },
]

// Mock data for recent courses
const recentCourses = [
  {
    id: 1,
    title: "Statistics for Data Science",
    teacherName: "Dr. Sarah Johnson",
    progress: 60,
    lastAccessed: "Yesterday",
  },
  {
    id: 2,
    title: "Web Development Fundamentals",
    teacherName: "Prof. Michael Chen",
    progress: 35,
    lastAccessed: "3 days ago",
  },
]

export function StudentDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Bookings</CardTitle>
          <CardDescription>Your scheduled sessions with teachers</CardDescription>
        </CardHeader>
        <CardContent>
          {upcomingBookings.length > 0 ? (
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <div key={booking.id} className="flex items-start space-x-4 rounded-lg border p-4">
                  <Avatar>
                    <AvatarImage src={booking.teacherAvatar || "/placeholder.svg"} alt={booking.teacherName} />
                    <AvatarFallback>{booking.teacherName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{booking.subject}</h4>
                      <Badge variant={booking.status === "confirmed" ? "outline" : "secondary"}>{booking.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">with {booking.teacherName}</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{booking.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{booking.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/bookings">View All Bookings</Link>
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-3 py-6 text-center">
              <Calendar className="h-12 w-12 text-muted-foreground" />
              <div>
                <h4 className="text-lg font-semibold">No upcoming bookings</h4>
                <p className="text-sm text-muted-foreground">You don&apos;t have any scheduled sessions yet.</p>
              </div>
              <Button asChild>
                <Link href="/teachers">Find a Teacher</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Courses</CardTitle>
          <CardDescription>Continue where you left off</CardDescription>
        </CardHeader>
        <CardContent>
          {recentCourses.length > 0 ? (
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="space-y-2 rounded-lg border p-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold">{course.title}</h4>
                    <span className="text-xs text-muted-foreground">Last accessed: {course.lastAccessed}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">by {course.teacherName}</p>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${course.progress}%` }} />
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Progress: {course.progress}%</span>
                    <Button variant="link" size="sm" className="h-auto p-0">
                      Continue
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/my-courses">View All Courses</Link>
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-3 py-6 text-center">
              <BookOpen className="h-12 w-12 text-muted-foreground" />
              <div>
                <h4 className="text-lg font-semibold">No courses yet</h4>
                <p className="text-sm text-muted-foreground">You haven&apos;t enrolled in any courses yet.</p>
              </div>
              <Button asChild>
                <Link href="/teachers">Browse Courses</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Messages</CardTitle>
          <CardDescription>Recent conversations with your teachers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center space-y-3 py-6 text-center">
            <MessageCircle className="h-12 w-12 text-muted-foreground" />
            <div>
              <h4 className="text-lg font-semibold">No messages yet</h4>
              <p className="text-sm text-muted-foreground">
                Start a conversation with your teacher after booking a session.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/messages">Go to Messages</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
