import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-primary">CTS</div>
              <div className="text-sm text-muted-foreground">North Carolina</div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming homes across the Triangle with expert cabinet refinishing, countertop & bathtub resurfacing,
              and restoration services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Cabinet Refinishing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Countertop Resurfacing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Bathtub Resurfacing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-primary transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Raleigh, NC</li>
              <li>Durham, NC</li>
              <li>Chapel Hill, NC</li>
              <li>Cary, NC</li>
              <li>Wake Forest, NC</li>
              <li>And surrounding areas</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} CTS North Carolina. All rights reserved. | Certified, Bonded & Insured
          </p>
        </div>
      </div>
    </footer>
  )
}
