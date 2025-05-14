import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

// Mock data for reviews
const reviewsData = [
  {
    id: 1,
    name: "Alex Thompson",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2 months ago",
    rating: 5,
    comment:
      "Dr. Johnson is an exceptional teacher. Her explanations are clear and she's very patient. I struggled with calculus for years, but after just a few sessions with her, I finally understand the concepts.",
    course: "Introduction to Calculus",
  },
  {
    id: 2,
    name: "Maria Garcia",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "3 months ago",
    rating: 5,
    comment:
      "I highly recommend Dr. Johnson for anyone struggling with mathematics. She breaks down complex topics into manageable parts and provides excellent practice materials.",
    course: "Statistics for Data Science",
  },
  {
    id: 3,
    name: "James Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "4 months ago",
    rating: 4,
    comment:
      "Great teacher who really knows her subject. The only reason I'm not giving 5 stars is that sometimes the sessions run a bit over time, but that's because she's thorough and makes sure you understand everything.",
    course: "Advanced Algebra",
  },
  {
    id: 4,
    name: "Sophie Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "5 months ago",
    rating: 5,
    comment:
      "Dr. Johnson helped me prepare for my university entrance exams. Her teaching methods and practice questions were exactly what I needed. I got accepted to my first-choice university!",
    course: "Introduction to Calculus",
  },
]

export function TeacherReviews({ id }: { id: string }) {
  // In a real app, you would fetch the reviews data based on the teacher ID
  const reviews = reviewsData

  // Calculate average rating
  const averageRating = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Student Reviews</h3>
        <div className="flex items-center">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${
                  star <= Math.round(averageRating) ? "fill-primary text-primary" : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="ml-2 font-medium">
            {averageRating.toFixed(1)} ({reviews.length} reviews)
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <ScrollReveal key={review.id} animation="fade-in" className="stagger-item">
            <div className="rounded-lg border p-4 hover-lift">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-semibold">{review.name}</h4>
                      <span className="mx-2 text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="mt-1 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= review.rating ? "fill-primary text-primary" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mt-2 text-sm">{review.comment}</p>
                    <p className="mt-1 text-xs text-muted-foreground">Course: {review.course}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
