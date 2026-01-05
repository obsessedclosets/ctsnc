"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center pl-4">
          <Image
            src="/cts-logo.jpg"
            alt="CTS North Carolina"
            width={240}
            height={96}
            className="h-24 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Reviews
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:9198785800"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            (919) 878-5800
          </a>
          <Button asChild>
            <Link href="#contact">Free Quote</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col gap-4 py-4">
            <Link href="#services" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="#gallery" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="#about" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#testimonials" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Reviews
            </Link>
            <Link href="#contact" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <a href="tel:9198785800" className="flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4" />
              (919) 878-5800
            </a>
            <Button asChild className="w-full">
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Free Quote
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
