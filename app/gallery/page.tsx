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
    src: "/gallery/wake-forest-cabinets-1.jpeg",
    alt: "Cabinet Refinishing Project - Wake Forest, NC",
    category: "Cabinets",
  },
  {
    src: "/gallery/wake-forest-cabinets-2.jpeg",
    alt: "Cabinet Refinishing Project - Wake Forest, NC",
    category: "Cabinets",
  },
  {
    src: "/gallery/wake-forest-cabinets-3.jpeg",
    alt: "Cabinet Refinishing Project - Wake Forest, NC",
    category: "Cabinets",
  },
  {
    src: "/countertop-after-resurfacing.png",
    alt: "Countertop Resurfacing - Blue to Brown Stone Finish",
    category: "Countertops",
  },
  {
    src: "/gallery/white-to-brown-counter.jpg",
    alt: "Countertop Resurfacing Before & After - White to Brown",
    category: "Countertops",
  },
  {
    src: "/gallery/tile-kitchen-counter-metallic.jpg",
    alt: "Kitchen Tile Counter Resurfacing - Metallic Finish",
    category: "Countertops",
  },
  {
    src: "/gallery/two-tone-bathroom-vanity.jpg",
    alt: "Bathroom Vanity Countertop Resurfacing",
    category: "Countertops",
  },
  {
    src: "/shower-after-refinishing.png",
    alt: "Shower Restoration - Cary",
    category: "Showers",
  },
  {
    src: "/gallery/turquoise-tub-shower.jpg",
    alt: "Tub & Shower Refinishing Before & After - Turquoise to White",
    category: "Showers",
  },
  {
    src: "/gallery/yellow-tub-zoomed.jpg",
    alt: "Bathtub Refinishing Before & After - Yellow to White",
    category: "Showers",
  },
  {
    src: "/gallery/two-tone-turquoise-tub-shower.jpg",
    alt: "Tub & Shower Complete Transformation - Turquoise to White",
    category: "Showers",
  },
  {
    src: "/gallery/yellow-garden-tub.jpg",
    alt: "Garden Tub Refinishing Before & After - Yellow to White",
    category: "Showers",
  },
  {
    src: "/gallery/shower-cracked-zoomed2.jpg",
    alt: "Wall Crack Repair Before & After",
    category: "Showers",
  },
  {
    src: "/gallery/shower-cracked-zoomed1.jpg",
    alt: "Shower Wall Crack Repair Before & After",
    category: "Showers",
  },
  {
    src: "/gallery/shower-pan-tile-enclosure.jpg",
    alt: "Shower Pan & Tile Enclosure Restoration Before & After",
    category: "Showers",
  },
  {
    src: "/gallery/shower-glass-wall.jpg",
    alt: "Shower Refinishing Before & After - Peach to White",
    category: "Showers",
  },
  {
    src: "/gallery/repairs-around-faucet.jpg",
    alt: "Tub Faucet Area Repair Before & After",
    category: "Showers",
  },
  {
    src: "/gallery/shower-new-door.jpg",
    alt: "Tub Surround Refinishing Before & After - Peach to White",
    category: "Showers",
  },
  {
    src: "/gallery/red-kitchen-far-shot.jpg",
    alt: "Kitchen Countertop Resurfacing Before & After - Red to Gray",
    category: "Countertops",
  },
  {
    src: "/gallery/tile-bathroom-counter.jpg",
    alt: "Bathroom Tile Counter Resurfacing Before & After",
    category: "Countertops",
  },
  {
    src: "/gallery/orange-kitchen-counter.jpg",
    alt: "Kitchen Countertop Resurfacing Before & After - Orange to Stone",
    category: "Countertops",
  },
  {
    src: "/gallery/orange-bathroom-counter.jpg",
    alt: "Bathroom Vanity Resurfacing Before & After - Orange to Cream",
    category: "Countertops",
  },
  {
    src: "/gallery/pink-kitchen-counter.jpg",
    alt: "Kitchen Countertop Resurfacing Before & After - Pink to Stone",
    category: "Countertops",
  },
  {
    src: "/gallery/red-kitchen-closeup.jpg",
    alt: "Kitchen Countertop Close-up Before & After - Red to Brown Stone",
    category: "Countertops",
  },
  {
    src: "/gallery/pink-sink-tile-surround.jpg",
    alt: "Bathroom Sink Resurfacing Before & After - Pink to White",
    category: "Countertops",
  },
  {
    src: "/gallery/garden-tub.jpg",
    alt: "Garden Tub Refinishing Before & After - Peach Marble to White",
    category: "Showers",
  },
  {
    src: "/gallery/garden-tub-turquoise.jpg",
    alt: "Garden Tub Refinishing Before & After - Turquoise Marble to Cream",
    category: "Showers",
  },
  {
    src: "/gallery/pink-tub.jpg",
    alt: "Bathtub & Tile Refinishing Before & After - Pink to White",
    category: "Showers",
  },
  {
    src: "/gallery/dirty-white-tub-closeup.jpg",
    alt: "Bathtub Refinishing Before & After - Stained to Pristine White",
    category: "Showers",
  },
  {
    src: "/gallery/flower-tile-shower.jpg",
    alt: "Shower Tile Resurfacing Before & After - Floral to Solid Beige",
    category: "Showers",
  },
  {
    src: "/gallery/fiberglass-shower-cracked.jpg",
    alt: "Fiberglass Shower Refinishing Before & After - Stained to Clean White",
    category: "Showers",
  },
  {
    src: "/gallery/dirty-white-tub.jpg",
    alt: "Tub & Surround Refinishing Before & After - Heavy Stains to Bright White",
    category: "Showers",
  },
  {
    src: "/gallery/damaged-kitchen.jpg",
    alt: "Kitchen Countertop Repair Before & After - Burn Damage to Stone Finish",
    category: "Countertops",
  },
  {
    src: "/gallery/damaged-kitchen-zoomed.jpg",
    alt: "Countertop Burn Repair Close-up Before & After",
    category: "Countertops",
  },
  {
    src: "/gallery/butcher-block-repair.jpg",
    alt: "Butcher Block Countertop Resurfacing Before & After - Wood to Dark Granite",
    category: "Countertops",
  },
  {
    src: "/gallery/dirty-kitchen.jpg",
    alt: "Kitchen Countertop Resurfacing Before & After - Stained to Stone Speckle",
    category: "Countertops",
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
