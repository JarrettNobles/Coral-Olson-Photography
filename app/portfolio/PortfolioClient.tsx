"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ImageProtection } from "@/components/image-protection"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioClient() {
  const portfolioItems = [
    {
      href: "/portfolio/wedding-engagement",
      image: "/assets/weddingPhoto.jpg",
      alt: "Wedding & Engagement",
      title: "Wedding & Engagement",
    },
    {
      href: "/portfolio/portraits",
      image: "/assets/portraitsPic.png",
      alt: "Portraits",
      title: "Portraits",
    },
  ]

  return (
    <>
      <main className="flex-shrink-0" role="main" id="main-content">
        <Navigation />

        <section className="py-5" aria-labelledby="portfolio-heading">
          <div className="container px-5">
            <div className="text-center mb-5">
              <h1 className="page-heading" id="portfolio-heading">
                Portfolio
              </h1>
              <p className="sr-only">Browse featured wedding, engagement, and portrait galleries.</p>
            </div>

            <div className="d-flex flex-column align-items-center gap-4 portfolio-stack">
              {portfolioItems.map((item) => (
                <div key={item.href} className="card portfolio-card" style={{ maxWidth: "800px", width: "100%" }}>
                  <Link href={item.href} aria-label={`Open ${item.title} gallery`}>
                    <div className="ratio-box">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.alt}
                        width={800}
                        height={1000}
                        priority={item === portfolioItems[0]}
                        loading={item === portfolioItems[0] ? "eager" : "lazy"}
                        quality={90}
                        sizes="(max-width: 820px) 100vw, 800px"
                        className="no-save"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                </div>
              ))}
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

        .portfolio-stack {
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .portfolio-card {
          overflow: hidden;
          border-radius: 12px;
          transition: transform 0.3s ease;
        }

        .portfolio-card:hover {
          transform: scale(1.01);
        }

        .ratio-box {
          position: relative;
          width: 100%;
          padding-top: 125%; /* 4:5 ratio */
          overflow: hidden;
          border-radius: 12px;
        }

        .ratio-box :global(img) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          display: block;
        }

        @media (max-width: 576px) {
          section.py-5 {
            padding-top: 2.25rem !important;
            padding-bottom: 2.25rem !important;
          }
        }

        @media (max-width: 768px) {
          .ratio-box {
            padding-top: 0 !important;
          }
          .ratio-box :global(img) {
            position: static !important;
            width: 100% !important;
            height: auto !important;
            object-fit: contain !important;
          }
          .portfolio-card:hover {
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  )
}
