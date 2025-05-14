import Link from "next/link"
import { BookOpen, Code, Music, Palette, Calculator, Globe, Dumbbell, Languages } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const subjects = [
  {
    name: "Mathematics",
    icon: <Calculator className="h-6 w-6" />,
    href: "/teachers?subject=mathematics",
    color: "bg-red-100 dark:bg-red-950",
    textColor: "text-red-500 dark:text-red-400",
  },
  {
    name: "Programming",
    icon: <Code className="h-6 w-6" />,
    href: "/teachers?subject=programming",
    color: "bg-blue-100 dark:bg-blue-950",
    textColor: "text-blue-500 dark:text-blue-400",
  },
  {
    name: "Languages",
    icon: <Languages className="h-6 w-6" />,
    href: "/teachers?subject=languages",
    color: "bg-green-100 dark:bg-green-950",
    textColor: "text-green-500 dark:text-green-400",
  },
  {
    name: "Music",
    icon: <Music className="h-6 w-6" />,
    href: "/teachers?subject=music",
    color: "bg-purple-100 dark:bg-purple-950",
    textColor: "text-purple-500 dark:text-purple-400",
  },
  {
    name: "Art",
    icon: <Palette className="h-6 w-6" />,
    href: "/teachers?subject=art",
    color: "bg-yellow-100 dark:bg-yellow-950",
    textColor: "text-yellow-500 dark:text-yellow-400",
  },
  {
    name: "Science",
    icon: <BookOpen className="h-6 w-6" />,
    href: "/teachers?subject=science",
    color: "bg-pink-100 dark:bg-pink-950",
    textColor: "text-pink-500 dark:text-pink-400",
  },
  {
    name: "Fitness",
    icon: <Dumbbell className="h-6 w-6" />,
    href: "/teachers?subject=fitness",
    color: "bg-orange-100 dark:bg-orange-950",
    textColor: "text-orange-500 dark:text-orange-400",
  },
  {
    name: "Geography",
    icon: <Globe className="h-6 w-6" />,
    href: "/teachers?subject=geography",
    color: "bg-teal-100 dark:bg-teal-950",
    textColor: "text-teal-500 dark:text-teal-400",
  },
]

export function SubjectCategories() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
      {subjects.map((subject, index) => (
        <ScrollReveal key={subject.name} animation="fade-in" className="stagger-item">
          <Link
            href={subject.href}
            className="flex flex-col items-center rounded-lg p-4 transition-colors hover:bg-muted hover-scale"
          >
            <div className={`mb-3 rounded-full p-3 ${subject.color} transition-transform duration-300`}>
              <div className={subject.textColor}>{subject.icon}</div>
            </div>
            <span className="text-center text-sm font-medium">{subject.name}</span>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  )
}
