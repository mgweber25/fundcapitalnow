import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Hammer,
  Home,
  Building2,
  HardHat,
  RefreshCcw,
  ArrowRight,
} from "lucide-react"

const offerings = [
  {
    icon: Hammer,
    title: "Fix & Flip / Bridge",
    description:
      "Short-term financing for purchasing, renovating, and reselling residential and small multifamily properties.",
  },
  {
    icon: Home,
    title: "Rental Property DSCR",
    description:
      "Long-term stabilized loans based on property cash flow, not personal income. Fixed rates for up to 30 years.",
  },
  {
    icon: Building2,
    title: "Multifamily DSCR",
    description:
      "Purchase, rehab, and permanent financing solutions for 5+ unit multifamily and mixed-use properties.",
  },
  {
    icon: HardHat,
    title: "New Construction",
    description:
      "Ground-up construction financing for SFR and 2-4 unit multifamily with entitled land and proper permits.",
  },
  {
    icon: RefreshCcw,
    title: "Refinance",
    description:
      "Cash-neutral and cash-out refinance options for current investment properties at competitive rates.",
  },
]

export function OfferingsSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          What We Offer
        </p>
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
          Direct Private Lender Financing
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground leading-relaxed">
          Short-term and long-term financing options for real estate investors of
          non-owner occupied properties across various asset classes.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item) => (
            <Card
              key={item.title}
              className="group border-border bg-card transition-all hover:shadow-lg hover:border-primary/30"
            >
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-card-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground italic">
          Final loan terms may vary based on loan types, verification of
          application information, appraisal and other lender underwriting
          criteria.
        </p>
      </div>
    </section>
  )
}
