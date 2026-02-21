"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FileText, BarChart3, Handshake } from "lucide-react"

const steps = [
  {
    icon: FileText,
    step: "1",
    title: "Submit your project details",
    description:
      "Tell us about your investment property and financing needs.",
  },
  {
    icon: BarChart3,
    step: "2",
    title: "Receive tailored scenarios",
    description:
      "Our team will craft financing options specific to your deal.",
  },
  {
    icon: Handshake,
    step: "3",
    title: "Close with confidence",
    description:
      "Move forward quickly with transparent terms and reliable funding.",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Get Started
        </p>
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Submit an Inquiry
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground leading-relaxed">
          Our team will reach out to discuss different financing scenarios
          tailored to your needs. Fast response times and personalized service
          guaranteed.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Steps */}
          <div className="flex flex-col justify-center gap-8">
            {steps.map((step) => (
              <div key={step.step} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{step.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <Card className="border-border bg-card">
            <CardContent className="pt-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-card-foreground">
                      First Name
                    </Label>
                    <Input id="firstName" placeholder="First Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-card-foreground">
                      Last Name
                    </Label>
                    <Input id="lastName" placeholder="Last Name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground">
                    Email
                  </Label>
                  <Input id="email" type="email" placeholder="Email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-card-foreground">
                    Phone
                  </Label>
                  <Input id="phone" type="tel" placeholder="Phone" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loanType" className="text-card-foreground">
                    Loan Type
                  </Label>
                  <Select>
                    <SelectTrigger id="loanType">
                      <SelectValue placeholder="Select a loan type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fix-flip">Fix & Flip</SelectItem>
                      <SelectItem value="bridge">Bridge</SelectItem>
                      <SelectItem value="dscr">Rental DSCR</SelectItem>
                      <SelectItem value="multifamily">
                        Multifamily DSCR
                      </SelectItem>
                      <SelectItem value="construction">
                        New Construction
                      </SelectItem>
                      <SelectItem value="refinance">Refinance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details" className="text-card-foreground">
                    Project Details
                  </Label>
                  <Textarea
                    id="details"
                    placeholder="Tell us about your project..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Project Info
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Your information is kept confidential and will only be used to
                  discuss financing options.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
