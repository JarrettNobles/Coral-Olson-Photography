import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ImageProtection } from "@/components/image-protection"
import { HeroCarousel } from "@/components/hero-carousel"

export const metadata = {
  title: "Home - Coral Olson Photography",
  description:
    "Coral Olson Photography — Louisiana based photographer specializing in weddings, engagements, and natural-light portraits.",
}

export default function HomePage() {
  console.log("[v0] HomePage rendering")

  return (
    <>
      <main className="flex-shrink-0" role="main" id="main-content">
        <Navigation />
        <HeroCarousel />

        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Coral Olson Photography</span>
            </h1>
            <p className="lead mt-3">
              Louisiana based photographer specializing in weddings, engagements, and natural-light portraits.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <ImageProtection />
    </>
  )
}
