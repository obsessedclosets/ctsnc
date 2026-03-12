"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Shield, Award, Users } from "lucide-react"
import Link from "next/link"

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    timeline: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.timeline
    ) {
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL

    if (!webhookUrl) {
      console.error("Google Sheets webhook URL not configured")
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim()

      const payload = {
        name: fullName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        address: formData.address,
        timeline: formData.timeline,
        message: formData.message,
      }

      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      setSubmitStatus("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        service: "",
        timeline: "",
        message: "",
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Contact Form */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/30 to-background">
          <div className="absolute inset-0 z-0">
            <img
              src="/modern-kitchen-with-refinished-cabinets.jpg"
              alt="Beautiful refinished kitchen"
              className="w-full h-full object-cover opacity-45"
            />
          </div>

          <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Request a Free Consultation</h1>
                <p className="text-lg text-muted-foreground text-balance">
                  Fill out the form below or give us a call to schedule your free consultation
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="bg-background/95 backdrop-blur h-full">
                    <CardContent className="pt-6 h-full flex flex-col">
                      <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                        {submitStatus === "success" && (
                          <div className="p-4 bg-green-100 border-2 border-green-500 rounded-md text-green-900 font-semibold">
                            Thank you! Your request has been submitted. We'll contact you within 24 hours.
                          </div>
                        )}
                        {submitStatus === "error" && (
                          <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
                            There was an error submitting your request. Please call us at (919) 878-5800.
                          </div>
                        )}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Input
                              name="firstName"
                              placeholder="First Name *"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <Input
                              name="lastName"
                              placeholder="Last Name *"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Input
                              name="email"
                              type="email"
                              placeholder="Email *"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <Input
                              name="phone"
                              type="tel"
                              placeholder="Phone *"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Input
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <Select
                            name="service"
                            value={formData.service}
                            onValueChange={(value) => handleSelectChange("service", value)}
                            required
                          >
                            <SelectTrigger className={!formData.service ? "text-muted-foreground" : ""}>
                              <SelectValue placeholder="Service Needed *" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cabinet-refinishing">Cabinet Refinishing</SelectItem>
                              <SelectItem value="countertop-shower-resurfacing">Countertop & Shower Resurfacing</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Select
                            name="timeline"
                            value={formData.timeline}
                            onValueChange={(value) => handleSelectChange("timeline", value)}
                            required
                          >
                            <SelectTrigger className={!formData.timeline ? "text-muted-foreground" : ""}>
                              <SelectValue placeholder="Project Timeline *" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">ASAP</SelectItem>
                              <SelectItem value="1-2-months">1-2 months</SelectItem>
                              <SelectItem value="3-5-months">3-5 months</SelectItem>
                              <SelectItem value="6-months-plus">6 months +</SelectItem>
                              <SelectItem value="just-planning">Just Planning</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex-1">
                          <Textarea
                            name="message"
                            placeholder="Tell us about your project..."
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="h-full min-h-[100px]"
                          />
                        </div>
                        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "Submitting..." : "Submit Request"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="bg-background/95 backdrop-blur h-full">
                    <CardContent className="pt-6 space-y-6 h-full flex flex-col justify-center">
                      <div className="flex gap-3">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold mb-1">Address</div>
                          <div className="text-sm text-muted-foreground">
                            5101 Unicon Drive Unit C<br />
                            Wake Forest, NC 27587
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold mb-1">Phone</div>
                          <a href="tel:9198785800" className="text-sm text-primary hover:underline">
                            (919) 878-5800
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold mb-1">Email</div>
                          <a
                            href="mailto:info@ctsnorthcarolina.com"
                            className="text-sm text-primary hover:underline break-all"
                          >
                            info@ctsnorthcarolina.com
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold mb-1">Hours</div>
                          <div className="text-sm text-muted-foreground">
                            Monday - Friday: 8am - 6pm
                            <br />
                            Sunday: Closed
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-8">
                <Card className="bg-primary text-primary-foreground border-0">
                  <CardContent className="py-6">
                    <div className="text-center">
                      <div className="text-xl font-bold mb-2">Serving the Triangle</div>
                      <div className="text-sm opacity-90">
                        Raleigh, Durham, Chapel Hill, Cary, Wake Forest and surrounding areas
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose CTS Section */}
        <section className="py-16 md:py-24 bg-muted/30">
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
                  <p className="text-lg mb-6 opacity-90">Contact us today for your free consultation</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:9198785800"
                      className="inline-flex items-center justify-center rounded-md bg-background text-primary px-6 py-3 font-semibold hover:bg-background/90 transition-colors"
                    >
                      Call (919) 878-5800
                    </a>
                    <Link
                      href="/gallery"
                      className="inline-flex items-center justify-center rounded-md border-2 border-background text-primary-foreground px-6 py-3 font-semibold hover:bg-background/10 transition-colors"
                    >
                      View Our Work
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
