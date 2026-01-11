import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PaintBucket, Droplets } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: PaintBucket,
    title: "Cabinet Refinishing",
    description:
      "Transform your existing cabinets with professional refinishing. Choose from a wide range of colors and finishes to match your style.",
    features: ["Custom color matching", "Soft-close hinges", "New hardware options", "Factory-quality finish"],
  },
  {
    icon: Droplets,
    title: "Countertop & Shower Resurfacing",
    description:
      "Restore the beauty of your countertops and showers without replacement. Save time and money with our expert resurfacing services.",
    features: ["Durable finish", "Multiple color options", "Quick turnaround", "Cost-effective solution"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Home Transformation Services</h2>
          <p className="text-lg text-muted-foreground text-balance">
            From kitchen cabinets to bathroom fixtures, we provide comprehensive refinishing and restoration services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="#contact">Schedule Your Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
