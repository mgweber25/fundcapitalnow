import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { OfferingsSection } from "@/components/offerings-section"
import { ProgramsSection } from "@/components/programs-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <OfferingsSection />
      <ProgramsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
