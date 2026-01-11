"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GalleryLightbox } from "@/components/gallery-lightbox"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

const categories = ["All", "Cabinets", "Countertops", "Showers"]

const galleryImages = [
  {
    src: "/gallery/7-web-or-mls-101-aynor-cir.jpg",
    alt: "Cabinet Refinishing Project - Clayton, NC",
    category: "Cabinets",
  },
  {
    src: "/gallery/9-web-or-mls-101-aynor-cir.jpg",
    alt: "Kitchen Update - Clayton, NC",
    category: "Cabinets",
  },
  {
    src: "/gallery/19-web-or-mls-101-aynor-cir.jpg",
    alt: "Cabinet Refinishing Excellence - Clayton, NC",
    category: "Cabinets",
  },
  {
    src: "/gallery/project-1.jpg",
    alt: "Kitchen Cabinet Refinishing Project",
    category: "Cabinets",
  },
  {
    src: "/bright-white-refinished-kitchen-cabinets-after.jpg",
    alt: "White Kitchen Cabinet Transformation - Raleigh",
    category: "Cabinets",
  },
  {
    src: "/modern-gray-cabinets-refinished-after.jpg",
    alt: "Modern Gray Cabinet Refinish - Chapel Hill",
    category: "Cabinets",
  },
  {
    src: "/countertop-after-resurfacing.png",
    alt: "Countertop Resurfacing - Blue to Brown Stone Finish",
    category: "Countertops",
  },
  {
    src: "/shower-after-refinishing.png",
    alt: "Shower Restoration - Cary",
    category: "Showers",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="bg-muted/50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Project Gallery</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
              Explore our portfolio of cabinet refinishing, countertop resurfacing, and shower restoration projects
              across the Triangle area
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden cursor-pointer group hover:ring-2 hover:ring-primary transition-all"
                onClick={() => setLightboxIndex(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="p-4">
                  <p className="font-medium text-sm line-clamp-2">{image.alt}</p>
                  <p className="text-xs text-muted-foreground mt-1">{image.category}</p>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>

        <div className="bg-muted/50 py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Transform Your Space?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-balance">
              Get a free consultation and see how we can bring new life to your cabinets, countertops, or shower.
            </p>
            <Button asChild size="lg">
              <Link href="/#contact">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />

      {lightboxIndex !== null && (
        <GalleryLightbox images={filteredImages} initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </div>
  )
}
