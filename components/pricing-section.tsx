import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tiers = [
  {
    tier: "Tier 1",
    label: "0 - 1 Past Projects",
    rate: "10.25%",
    note: "Prefer lighter rehabs vs. gut renovations",
    extra: "No ground up construction",
    leverage: [
      { label: "Loan to Cost", value: "up to 80%" },
      { label: "Loan to Value", value: "up to 65%" },
      { label: "Loan to Purchase", value: "up to 75%" },
    ],
    featured: false,
  },
  {
    tier: "Tier 2",
    label: "2 - 3 Past Projects",
    sublabel: "or $2,500,000 in projects sold",
    rate: "9.95%",
    note: "No ground up construction",
    extra: null,
    leverage: [
      { label: "Loan to Cost", value: "up to 85%" },
      { label: "Loan to Value", value: "up to 70%" },
      { label: "Loan to Purchase", value: "up to 80%" },
    ],
    featured: false,
  },
  {
    tier: "Tier 3",
    label: "4+ Past Projects",
    sublabel: "or $5,000,000 in projects sold",
    rate: "9.25%",
    note: "Ground up construction with at least 1 prior project",
    extra: "New construction SFR & multi-family 1-4",
    leverage: [
      { label: "Loan to Cost", value: "up to 90%" },
      { label: "Loan to Value", value: "up to 70%" },
      { label: "Loan to Purchase", value: "up to 85%" },
    ],
    featured: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Pricing
        </p>
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Experience Tiers
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground leading-relaxed">
          Better rates and higher leverage as you grow your track record. We
          reward experience with more favorable terms.
        </p>

        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.tier}
              className="relative border-border bg-card"
            >
              <CardHeader>
                <p className="text-sm font-semibold text-primary">{tier.tier}</p>
                <CardTitle className="text-lg text-card-foreground">
                  {tier.label}
                </CardTitle>
                {tier.sublabel && (
                  <p className="text-xs text-muted-foreground">
                    {tier.sublabel}
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-xs text-muted-foreground">
                    Rates starting at
                  </p>
                  <p className="text-4xl font-bold text-foreground">
                    {tier.rate}
                  </p>
                </div>

                <div className="mb-6 space-y-1 text-sm text-muted-foreground">
                  <p>{tier.note}</p>
                  {tier.extra && <p>{tier.extra}</p>}
                </div>

                <div className="border-t border-border pt-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Leverage
                  </p>
                  <div className="space-y-2">
                    {tier.leverage.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="font-medium text-card-foreground">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
