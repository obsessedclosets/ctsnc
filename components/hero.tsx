import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-kitchen-with-refinished-cabinets.jpg"
          alt="Beautiful refinished kitchen"
          className="w-full h-full object-cover opacity-45"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            Trusted by Homeowners Across the Triangle
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            Transform Your Space Without the Remodel Price
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
            Expert cabinet refinishing, countertop & bathtub resurfacing for Raleigh, Durham, Chapel Hill, and Cary.
            Save thousands with professional results in days, not weeks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-base px-8">
              <Link href="#contact">
                Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 bg-transparent">
              <Link href="#gallery">View Our Work</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-foreground">15+</div>
              <div>Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div>Happy Customers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div>Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
