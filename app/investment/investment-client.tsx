"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ImageProtection } from "@/components/image-protection"
import Image from "next/image"

const pricingImages = [
  { src: "/assets/guide1.png", alt: "Pricing guide 1" },
  { src: "/assets/guide3.png", alt: "Pricing guide 3" },
  { src: "/assets/guide2.png", alt: "Pricing guide 2" },
  { src: "/assets/guide4.png", alt: "Pricing guide 4" },
]

export function InvestmentClient() {
  return (
    <>
      <main className="flex-shrink-0" role="main" id="main-content">
        <Navigation />

        <section className="about-image-section" aria-labelledby="pricing-heading">
          <h1 id="pricing-heading" className="sr-only">
            Photography Pricing Guide
          </h1>
          <div className="container px-5 pricing-container">
            {pricingImages.map((image, index) => (
              <Image
                key={index}
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={1200}
                height={1600}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                quality={90}
                sizes="(max-width: 960px) 100vw, 960px"
                className="no-save"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  display: "block",
                  boxShadow: "0 2px 18px rgba(0,0,0,0.06)",
                }}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <ImageProtection />

      <style jsx>{`
        .about-image-section {
          padding: 4rem 0;
        }

        .pricing-container {
          max-width: 960px;
          margin-inline: auto;
        }

        .pricing-container :global(img:not(:last-child)) {
          margin-bottom: 1rem;
        }

        @media (max-width: 576px) {
          .about-image-section {
            padding: 2.25rem 0;
          }
        }

        @media (max-width: 768px) {
          .pricing-container :global(img) {
            width: 100% !important;
            height: auto !important;
            object-fit: contain !important;
            display: block;
          }
        }
      `}</style>
    </>
  )
}
