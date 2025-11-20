"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

const slides = [
  { src: "/assets/friends.jpg", alt: "friends at the mountains" },
  { src: "/assets/elly1.jpg", alt: "pic" },
  { src: "/assets/Engagement.jpg", alt: "Engagement Image" },
  { src: "/assets/friends2.jpg", alt: "friends on a beach" },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (prefersReducedMotion.matches) {
      setIsPaused(true)
      return
    }

    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <header className="hero">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-slide ${index === currentSlide ? "active" : ""}`}>
            <Image
              src={slide.src || "/placeholder.svg"}
              alt={slide.alt}
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              quality={90}
              sizes="100vw"
              style={{ objectFit: "cover" }}
              className="no-save"
            />
          </div>
        ))}
      </div>

      <div className="hero-text text-center">
        <h1>Coral Olson Photography</h1>
        <div className="mt-3">
          <Link className="btn btn-outline-light btn-lg px-4" href="/contact">
            Book a Shoot
          </Link>
          <Link className="btn btn-outline-light btn-lg px-4" href="/portfolio">
            View Portfolio
          </Link>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }

        .hero-carousel {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .carousel-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .carousel-slide.active {
          opacity: 1;
        }

        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.25) 30%,
            rgba(0, 0, 0, 0.35)
          );
          z-index: 1;
          pointer-events: none;
        }

        .hero-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          z-index: 2;
        }

        .hero-text h1 {
          font-family: var(--font-serif);
          font-size: clamp(1.75rem, 4.5vw, 3rem);
          font-weight: 400;
          letter-spacing: 1px;
          line-height: 1.1;
        }

        .hero .btn {
          padding: 0.75rem 1.15rem;
          border-width: 2px;
          line-height: 1.1;
          touch-action: manipulation;
        }

        .hero .btn + .btn {
          margin-left: 0.75rem;
        }

        @supports (height: 100svh) {
          .hero {
            height: 100svh;
          }
        }

        @media (max-height: 700px) {
          .hero-text {
            transform: translate(-50%, -48%);
          }
        }

        @media (max-width: 420px) {
          .hero .btn {
            display: block;
            width: 86%;
            margin: 0.5rem auto 0;
          }
          .hero .btn + .btn {
            margin-left: auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .carousel-slide {
            transition: none !important;
          }
        }
      `}</style>
    </header>
  )
}
