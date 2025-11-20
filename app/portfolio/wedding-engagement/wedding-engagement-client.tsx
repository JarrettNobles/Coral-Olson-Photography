"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ImageProtection } from "@/components/image-protection"
import Image from "next/image"
import Link from "next/link"

const engagementImages = [
  { src: "/assets/Engagement.jpg", alt: "Engagement portrait with soft natural light" },
  { src: "/assets/engagement3.jpg", alt: "Candid engagement moment" },
  { src: "/assets/engagmentback.jpg", alt: "Backlit engagement silhouette" },
]

export function WeddingEngagementClient() {
  return (
    <>
      <main className="flex-shrink-0" role="main" id="main-content">
        <Navigation />

        <section className="py-5" aria-labelledby="we-heading">
          <div className="container px-3 px-lg-5">
            <div className="text-center mb-5">
              <h1 className="page-heading" id="we-heading">
                Wedding & Engagement
              </h1>
              <p className="sr-only">A curated set of wedding and engagement photographs by Coral Olson.</p>
            </div>

            <div className="gallery-vertical d-flex flex-column align-items-center gap-4">
              {engagementImages.map((image, index) => (
                <div key={index} className="card" style={{ maxWidth: "800px", width: "100%" }}>
                  <div className="ratio-box">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={800}
                      height={1000}
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                      quality={90}
                      sizes="(max-width: 820px) 100vw, 800px"
                      className="card-img-top no-save"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <Link
                className="btn btn-outline-dark rounded-0 px-4 py-2 btn-back"
                href="/portfolio"
                style={{ letterSpacing: "1px" }}
              >
                <i className="bi bi-arrow-left-circle me-2" aria-hidden="true"></i>
                Back to Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ImageProtection />

      <style jsx>{`
        .page-heading {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: 3.5rem;
          letter-spacing: -0.5px;
          text-transform: uppercase;
        }

        .gallery-vertical {
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .card {
          overflow: hidden;
          border: none;
          border-radius: 0;
          box-shadow: 0 2px 18px rgba(0, 0, 0, 0.08);
        }

        .card-img-top {
          border-radius: 0;
          object-fit: cover;
          height: 100%;
          width: 100%;
          transition: transform 0.3s ease;
        }

        .ratio-box {
          position: relative;
          width: 100%;
          padding-top: 125%;
          overflow: hidden;
        }

        .ratio-box :global(img) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (hover: hover) and (pointer: fine) {
          .card:hover .card-img-top {
            transform: scale(1.02);
          }
        }

        @media (max-width: 768px) {
          .page-heading {
            font-size: 2.2rem;
          }
          .ratio-box {
            padding-top: 0 !important;
          }
          .ratio-box :global(img) {
            position: static !important;
            width: 100% !important;
            height: auto !important;
            object-fit: contain !important;
            display: block;
          }
          .card-img-top {
            height: auto !important;
            object-fit: contain;
          }
        }

        @media (max-width: 576px) {
          section.py-5 {
            padding-top: 2.25rem !important;
            padding-bottom: 2.25rem !important;
          }
          .btn-back {
            display: block;
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
