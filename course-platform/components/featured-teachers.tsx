import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

// Mock data for featured teachers
const featuredTeachers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    subject: "Mathematics",
    rating: 4.9,
    reviews: 124,
    image: "/placeholder.svg?height=100&width=100",
    price: "€35",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    subject: "Computer Science",
    rating: 4.8,
    reviews: 98,
    image: "/placeholder.svg?height=100&width=100",
    price: "€40",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    subject: "Spanish Language",
    rating: 4.7,
    reviews: 87,
    image: "/placeholder.svg?height=100&width=100",
    price: "€30",
  },
  {
    id: 4,
    name: "David Kim",
    subject: "Music - Piano",
    rating: 5.0,
    reviews: 56,
    image: "/placeholder.svg?height=100&width=100",
    price: "€45",
  },
]

export function FeaturedTeachers() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {featuredTeachers.map((teacher, index) => (
        <ScrollReveal key={teacher.id} animation="slide-up" className="stagger-item">
          <Card className="overflow-hidden hover-lift">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={teacher.image || "/placeholder.svg"} alt={teacher.name} />
                  <AvatarFallback>
                    {teacher.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold">{teacher.name}</h3>
                <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                <div className="mt-2 flex items-center">
                  <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{teacher.rating}</span>
                  <span className="ml-1 text-xs text-muted-foreground">({teacher.reviews} reviews)</span>
                </div>
                <p className="mt-2 text-sm font-semibold">{teacher.price} / hour</p>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button className="w-full transition-all duration-300 hover:shadow-lg" asChild>
                <Link href={`/teachers/${teacher.id}`}>View Profile</Link>
              </Button>
            </CardFooter>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  )
}
