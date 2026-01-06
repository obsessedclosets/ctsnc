"use client"

import type React from "react"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface GalleryImage {
  src: string
  alt: string
  category?: string
}

interface GalleryLightboxProps {
  images: GalleryImage[]
  initialIndex: number
  onClose: () => void
}

export function GalleryLightbox({ images, initialIndex, onClose }: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
    if (e.key === "Escape") onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/20"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={(e) => {
          e.stopPropagation()
          goToPrevious()
        }}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <div className="max-w-7xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          width={1200}
          height={800}
          className="max-h-[90vh] w-auto object-contain"
        />
        <p className="text-white text-center mt-4 text-lg">
          {images[currentIndex].alt}
          {images[currentIndex].category && (
            <span className="text-muted-foreground ml-2">• {images[currentIndex].category}</span>
          )}
        </p>
        <p className="text-white/60 text-center text-sm mt-2">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
        onClick={(e) => {
          e.stopPropagation()
          goToNext()
        }}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  )
}
