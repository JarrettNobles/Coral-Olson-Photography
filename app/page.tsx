import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ImageProtection } from "@/components/image-protection"
import { HeroCarousel } from "@/components/hero-carousel"

export const metadata = {
  title: "Home",
  description:
    "Coral Olson Photography — Louisiana based photographer specializing in weddings, engagements, and natural-light portraits.",
}

export default function HomePage() {
  return (
    <>
      <main className="flex-shrink-0" role="main" id="main-content">
        <Navigation />

        <HeroCarousel />
      </main>

      <Footer />
      <ImageProtection />
    </>
  )
}
