import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Golf course background image */}
      <div className="absolute inset-0">
        <img
          src="https://s7d9.scene7.com/is/image/kohlerhospitality/zaa24939_rgb?wid=1440&wid=1440"
          alt="Hole number 4 at Whistling Straits golf course overlooking Lake Michigan"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
            Direct Private Lender
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            Financing That Moves at Your Speed
          </h1>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-primary-foreground/85">
            Empowering real estate investors with quick, flexible, and
            transparent private lending solutions — helping you close deals fast
            and scale your portfolio with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#contact">Submit Project Info</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <a href="#programs">View Programs</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-foreground/60 backdrop-blur-sm border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 py-6 md:justify-start md:gap-16">
          {[
            { value: "$500M+", label: "Funded" },
            { value: "48hr", label: "Avg. Approval" },
            { value: "50", label: "States" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-2xl font-bold text-primary-foreground md:text-3xl">
                {stat.value}
              </p>
              <p className="text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
