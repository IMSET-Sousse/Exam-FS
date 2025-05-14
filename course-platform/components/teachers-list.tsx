import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

// Mock data for teachers
const teachers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    subject: "Mathematics",
    rating: 4.9,
    reviews: 124,
    image: "/placeholder.svg?height=100&width=100",
    price: "€35",
    location: "Online & In-person",
    description: "Experienced math professor with 10+ years of teaching. Specializes in calculus and algebra.",
    badges: ["Calculus", "Algebra", "Statistics"],
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    subject: "Computer Science",
    rating: 4.8,
    reviews: 98,
    image: "/placeholder.svg?height=100&width=100",
    price: "€40",
    location: "Online",
    description: "Software engineer and CS professor teaching programming and algorithms.",
    badges: ["Python", "JavaScript", "Algorithms"],
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    subject: "Spanish Language",
    rating: 4.7,
    reviews: 87,
    image: "/placeholder.svg?height=100&width=100",
    price: "€30",
    location: "Online & In-person",
    description: "Native Spanish speaker with a degree in linguistics and 5 years of teaching experience.",
    badges: ["Beginner", "Intermediate", "Conversation"],
  },
  {
    id: 4,
    name: "David Kim",
    subject: "Music - Piano",
    rating: 5.0,
    reviews: 56,
    image: "/placeholder.svg?height=100&width=100",
    price: "€45",
    location: "In-person",
    description: "Concert pianist with 15 years of experience teaching students of all levels.",
    badges: ["Classical", "Jazz", "Theory"],
  },
]

export function TeachersList() {
  return (
    <div className="space-y-6">
      {teachers.map((teacher, index) => (
        <ScrollReveal key={teacher.id} animation="slide-up" className="stagger-item">
          <Card className="hover-lift transition-all duration-300">
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-[100px_1fr_auto]">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={teacher.image || "/placeholder.svg"} alt={teacher.name} />
                  <AvatarFallback>
                    {teacher.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{teacher.name}</h3>
                  <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                  <div className="mt-1 flex items-center">
                    <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{teacher.rating}</span>
                    <span className="ml-1 text-xs text-muted-foreground">({teacher.reviews} reviews)</span>
                  </div>
                  <p className="mt-2 text-sm">{teacher.description}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {teacher.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-xs transition-all hover:bg-secondary/80">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <div className="text-right">
                    <p className="font-semibold">{teacher.price} / hour</p>
                    <p className="text-xs text-muted-foreground">{teacher.location}</p>
                  </div>
                  <Button asChild className="transition-all duration-300 hover:shadow-lg">
                    <Link href={`/teachers/${teacher.id}`}>View Profile</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  )
}
