"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AnimatedContainer } from "@/components/animated-container"

export function TeacherBooking({ id }: { id: string }) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [courseType, setCourseType] = useState<string>("")
  const [isBooking, setIsBooking] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  // Mock available time slots
  const timeSlots = ["09:00 - 10:00", "10:30 - 11:30", "13:00 - 14:00", "15:30 - 16:30", "17:00 - 18:00"]

  // Mock course types
  const courseTypes = [
    "One-on-one session",
    "Introduction to Calculus",
    "Advanced Algebra",
    "Statistics for Data Science",
  ]

  const handleBooking = () => {
    // In a real app, this would send the booking data to the backend
    setIsBooking(true)

    // Simulate API call
    setTimeout(() => {
      setIsBooking(false)
      setIsBooked(true)
    }, 1500)
  }

  if (isBooked) {
    return (
      <AnimatedContainer animation="bounce-in">
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-primary">Booking Confirmed!</CardTitle>
            <CardDescription>Your session has been successfully booked.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>
                <strong>Date:</strong> {date?.toDateString()}
              </p>
              <p>
                <strong>Time:</strong> {timeSlot}
              </p>
              <p>
                <strong>Course:</strong> {courseType}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline" onClick={() => setIsBooked(false)}>
              Book Another Session
            </Button>
          </CardFooter>
        </Card>
      </AnimatedContainer>
    )
  }

  return (
    <Card className="hover-lift">
      <CardHeader>
        <CardTitle>Book a Session</CardTitle>
        <CardDescription>Select a date, time, and course type to book a session with this teacher.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <AnimatedContainer animation="fade-in">
          <div>
            <h4 className="mb-2 text-sm font-medium">Select a date</h4>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={(date) => {
                // Disable weekends and past dates
                const day = date.getDay()
                return date < new Date(new Date().setHours(0, 0, 0, 0)) || day === 0 || day === 6
              }}
            />
          </div>
        </AnimatedContainer>
        <AnimatedContainer animation="fade-in" delay={100}>
          <div>
            <h4 className="mb-2 text-sm font-medium">Select a time slot</h4>
            <Select value={timeSlot} onValueChange={setTimeSlot}>
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </AnimatedContainer>
        <AnimatedContainer animation="fade-in" delay={200}>
          <div>
            <h4 className="mb-2 text-sm font-medium">Select course type</h4>
            <Select value={courseType} onValueChange={setCourseType}>
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                {courseTypes.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </AnimatedContainer>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full transition-all duration-300 hover:shadow-lg"
          disabled={!date || !timeSlot || !courseType || isBooking}
          onClick={handleBooking}
        >
          {isBooking ? (
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
              Processing...
            </span>
          ) : (
            `Book Now - €35`
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
