import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Globe, MessageCircle, Calendar } from "lucide-react"

// Mock data for a teacher
const teacherData = {
  id: "1",
  name: "Dr. Sarah Johnson",
  subject: "Mathematics",
  rating: 4.9,
  reviews: 124,
  image: "/placeholder.svg?height=150&width=150",
  price: "€35",
  location: "Paris, France",
  online: true,
  inPerson: true,
  description:
    "I am a mathematics professor with over 10 years of teaching experience at university level. I specialize in calculus, algebra, and statistics. My teaching approach focuses on building a strong foundation of mathematical concepts through practical examples and problem-solving techniques. I adapt my teaching style to each student's needs and learning pace.",
  education: [
    "Ph.D. in Mathematics, University of Cambridge",
    "M.Sc. in Applied Mathematics, Imperial College London",
    "B.Sc. in Mathematics, University of Paris",
  ],
  experience: [
    "Associate Professor, University of Paris (2018-Present)",
    "Assistant Professor, University of Lyon (2015-2018)",
    "Mathematics Tutor, Private Practice (2012-Present)",
  ],
  languages: ["English (Fluent)", "French (Native)", "German (Intermediate)"],
  subjects: ["Calculus", "Algebra", "Statistics", "Probability", "Discrete Mathematics"],
}

export function TeacherProfile({ id }: { id: string }) {
  // In a real app, you would fetch the teacher data based on the ID
  const teacher = teacherData

  return (
    <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
      <div className="grid gap-6 md:grid-cols-[150px_1fr]">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-32 w-32">
            <AvatarImage src={teacher.image || "/placeholder.svg"} alt={teacher.name} />
            <AvatarFallback>
              {teacher.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="mt-4 space-y-1">
            <h2 className="text-xl font-bold">{teacher.name}</h2>
            <p className="text-sm text-muted-foreground">{teacher.subject}</p>
            <div className="flex items-center justify-center">
              <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
              <span className="text-sm font-medium">{teacher.rating}</span>
              <span className="ml-1 text-xs text-muted-foreground">({teacher.reviews} reviews)</span>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Message
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Schedule
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{teacher.location}</span>
            </div>
            <div className="flex items-center gap-2">
              {teacher.online && (
                <Badge variant="outline" className="flex items-center gap-1">
                  <Globe className="h-3 w-3" />
                  Online
                </Badge>
              )}
              {teacher.inPerson && (
                <Badge variant="outline" className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  In-person
                </Badge>
              )}
            </div>
            <div className="ml-auto text-right">
              <p className="font-semibold">{teacher.price} / hour</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">About Me</h3>
            <p className="mt-2 text-sm">{teacher.description}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Education</h3>
              <ul className="mt-2 space-y-1">
                {teacher.education.map((edu, index) => (
                  <li key={index} className="text-sm">
                    • {edu}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Experience</h3>
              <ul className="mt-2 space-y-1">
                {teacher.experience.map((exp, index) => (
                  <li key={index} className="text-sm">
                    • {exp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Languages</h3>
              <ul className="mt-2 space-y-1">
                {teacher.languages.map((lang, index) => (
                  <li key={index} className="text-sm">
                    • {lang}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Subjects</h3>
              <div className="mt-2 flex flex-wrap gap-1">
                {teacher.subjects.map((subject) => (
                  <Badge key={subject} variant="secondary">
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
