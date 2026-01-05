"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
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
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Get Your Free Quote Today</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Fill out the form below or give us a call to schedule your free in-home consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Request a Free Consultation</CardTitle>
                <CardDescription>We'll get back to you within 24 hours to schedule your appointment</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="lastName"
                        placeholder="Last Name"
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
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone"
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
                      required
                    />
                  </div>
                  <div>
                    <Select
                      name="service"
                      value={formData.service}
                      onValueChange={(value) => handleSelectChange("service", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Service Needed" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cabinet-refinishing">Cabinet Refinishing</SelectItem>
                        <SelectItem value="countertop-bathtub-resurfacing">Countertop & Bathtub Resurfacing</SelectItem>
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
                      <SelectTrigger>
                        <SelectValue placeholder="Project Timeline" />
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
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6 space-y-4">
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
                      Saturday: 9am - 4pm
                      <br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-xl font-bold mb-2">Serving the Triangle</div>
                  <div className="text-sm opacity-90">
                    Raleigh • Durham • Chapel Hill • Cary • Wake Forest • and surrounding areas
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
