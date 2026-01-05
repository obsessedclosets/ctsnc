"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    before: "/old-dark-kitchen-cabinets-before.jpg",
    after: "/bright-white-refinished-kitchen-cabinets-after.jpg",
    title: "Kitchen Cabinet Transformation",
    location: "Raleigh, NC",
  },
  {
    before: "/dated-bathroom-countertop-before.jpg",
    after: "/modern-bathroom-countertop-resurfaced-after.jpg",
    title: "Bathroom Countertop Resurfacing",
    location: "Durham, NC",
  },
  {
    before: "/worn-oak-cabinets-before.jpg",
    after: "/modern-gray-cabinets-refinished-after.jpg",
    title: "Modern Gray Cabinet Refinish",
    location: "Chapel Hill, NC",
  },
  {
    before: "/old-bathtub-yellowed-before.jpg",
    after: "/pristine-white-bathtub-resurfaced-after.jpg",
    title: "Bathtub Restoration",
    location: "Cary, NC",
  },
]

export function Gallery() {
  const [activeProject, setActiveProject] = useState(0)
  const [showBefore, setShowBefore] = useState(false)

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">See the Transformation</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Real results from real projects across the Triangle area
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
            <img
              src={showBefore ? projects[activeProject].before : projects[activeProject].after}
              alt={showBefore ? "Before" : "After"}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-4 py-2 rounded-lg font-semibold">
              {showBefore ? "Before" : "After"}
            </div>
            <Button onClick={() => setShowBefore(!showBefore)} className="absolute bottom-4 right-4" size="lg">
              {showBefore ? "View After" : "View Before"}
            </Button>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">{projects[activeProject].title}</h3>
            <p className="text-muted-foreground">{projects[activeProject].location}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`cursor-pointer overflow-hidden transition-all ${
                  activeProject === index ? "ring-2 ring-primary" : "hover:ring-1 hover:ring-border"
                }`}
                onClick={() => {
                  setActiveProject(index)
                  setShowBefore(false)
                }}
              >
                <img
                  src={project.after || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
