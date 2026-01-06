import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Award, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Certified & Insured",
    description: "Fully licensed, bonded, and insured for your complete peace of mind",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most projects completed in days, not weeks—minimal disruption to your life",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Trusted expertise serving the Triangle area with exceptional results",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Free consultations and personalized service every step of the way",
  },
]

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Why Choose CTS North Carolina?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              We're dedicated to transforming homes across Raleigh, Durham, Chapel Hill, and Cary with exceptional
              craftsmanship and customer service. Our team of experts brings years of experience and a commitment to
              quality that ensures your complete satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Home?</h3>
              <p className="text-lg mb-6 opacity-90">Contact us today for your free consultation and quote</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:9198785800"
                  className="inline-flex items-center justify-center rounded-md bg-background text-primary px-6 py-3 font-semibold hover:bg-background/90 transition-colors"
                >
                  Call (919) 878-5800
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border-2 border-background text-primary-foreground px-6 py-3 font-semibold hover:bg-background/10 transition-colors"
                >
                  Get Free Quote
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
