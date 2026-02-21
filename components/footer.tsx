export function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-lg font-bold text-primary-foreground">
              Fund Capital <span className="text-primary">Now</span>
            </p>
            <p className="mt-1 text-sm text-primary-foreground/60">
              Private Lending for Real Estate Investors
            </p>
          </div>
          <div className="flex gap-8">
            <a
              href="#programs"
              className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              Programs
            </a>
            <a
              href="#pricing"
              className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Fund Capital Now. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
