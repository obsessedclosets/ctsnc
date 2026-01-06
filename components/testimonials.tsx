import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Raleigh, NC",
    rating: 5,
    text: "CTS transformed our outdated kitchen cabinets into something absolutely stunning! The team was professional, on time, and the quality exceeded our expectations. Highly recommend!",
    service: "Cabinet Refinishing",
  },
  {
    name: "Michael Thompson",
    location: "Durham, NC",
    rating: 5,
    text: "We were amazed at how they brought our old bathtub back to life. It looks brand new! The process was quick and the price was very reasonable compared to replacement.",
    service: "Bathtub Resurfacing",
  },
  {
    name: "Jennifer Martinez",
    location: "Chapel Hill, NC",
    rating: 5,
    text: "Excellent work on our bathroom countertops! The free consultation was helpful, and they completed everything on schedule. Our bathrooms look incredible.",
    service: "Countertop Resurfacing",
  },
  {
    name: "David Chen",
    location: "Cary, NC",
    rating: 5,
    text: "Professional from start to finish. They refinished our kitchen cabinets and installed a beautiful backsplash. The attention to detail was impressive. Worth every penny!",
    service: "Cabinet Refinishing & Tile",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Don't just take our word for it—hear from homeowners across the Triangle
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-sm text-primary mt-1">{testimonial.service}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
