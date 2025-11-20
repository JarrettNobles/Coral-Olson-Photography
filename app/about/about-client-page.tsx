"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ImageProtection } from "@/components/image-protection"
import Image from "next/image"

export function AboutClientPage() {
  return (
    <>
      <main className="flex-shrink-0" role="main" id="main-content">
        <Navigation />

        <section className="about-image-section" aria-labelledby="about-heading">
          <h1 id="about-heading" className="sr-only">
            About Coral Olson
          </h1>
          <div className="container px-5 about-container">
            <Image
              src="/assets/AboutMe2.png"
              alt="About Me"
              width={1200}
              height={1600}
              priority
              quality={90}
              sizes="(max-width: 820px) 100vw, 960px"
              className="no-save"
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            />
          </div>
        </section>
      </main>

      <Footer />
      <ImageProtection />

      <style jsx>{`
        .about-image-section {
          padding: 4rem 0;
        }

        .about-container {
          max-width: 960px;
          margin-inline: auto;
        }

        @media (max-width: 576px) {
          .about-image-section {
            padding: 2.25rem 0;
          }
        }
      `}</style>
    </>
  )
}
