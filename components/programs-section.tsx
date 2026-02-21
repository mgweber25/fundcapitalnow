import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function ProgramsSection() {
  return (
    <section id="programs" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Programs
        </p>
        <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
          Financing Programs
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Short-Term Card */}
          <Card className="border-border bg-card">
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2 border-primary text-primary">
                Short-Term
              </Badge>
              <CardTitle className="text-xl text-card-foreground">
                RTL — Non-Stabilized
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Renovation, transitional, and construction loans for properties
                in active development or repositioning.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  { bold: "Fix & Flip", sub: "SFR + 1-4 Multi-Family" },
                  {
                    bold: "Bridge",
                    sub: "5+ Unit Multi-Family / Mixed Use",
                  },
                  {
                    bold: "New Construction",
                    sub: "SFR + 2-4 Multi-Family",
                  },
                  {
                    bold: "PUDs",
                    sub: "Entitled Land with proper permits & zoning",
                  },
                ].map((item) => (
                  <li key={item.bold} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">
                        {item.bold}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.sub}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground italic">
                *Not able to finance unentitled or raw land
              </p>
            </CardContent>
          </Card>

          {/* Permanent Card */}
          <Card className="border-border bg-card">
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2 border-primary text-primary">
                Permanent
              </Badge>
              <CardTitle className="text-xl text-card-foreground">
                DSCR — Stabilized
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Long-term fixed-rate loans for income-producing, stabilized
                investment properties.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Purchase financing up to 80% LTV",
                  "Cash-neutral refinance up to 80% LTV",
                  "Cash-out refinance up to 75% LTV",
                  "Fixed rate for 30 years for all DSCR loans",
                  "Interest only option for 10 years",
                  "Properties up to 10 units",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm text-card-foreground">{item}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg bg-primary/5 p-4">
                <p className="text-sm font-semibold text-foreground">
                  Rates starting at 5.75%
                </p>
                <p className="text-xs text-muted-foreground">
                  Fixed rate for 30 years with additional term options available
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
