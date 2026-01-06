"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { BeforeAfterSlider } from "./before-after-slider"

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
          <div className="mb-6">
            <BeforeAfterSlider
              beforeImage={projects[activeProject].before}
              afterImage={projects[activeProject].after}
              alt={projects[activeProject].title}
            />
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
