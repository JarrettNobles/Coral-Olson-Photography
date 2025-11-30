"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/investment", label: "INVESTMENT" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <>
      <style jsx>{`
        .navbar-brand-serif {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: 1.25rem;
          letter-spacing: 0.1em;
          font-weight: 400;
        }
        .nav-link-custom {
          font-family: 'Lato', 'Helvetica', sans-serif;
          font-size: 0.875rem;
          letter-spacing: 0.05em;
          color: #6c757d;
          font-weight: 400;
          padding: 0.5rem 1rem;
          transition: color 0.2s ease;
        }
        .nav-link-custom:hover,
        .nav-link-custom.active {
          color: #212529;
        }
      `}</style>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3" role="navigation" aria-label="Primary">
        <div className="container px-5">
          <Link className="navbar-brand navbar-brand-serif" href="/">
            CORAL OLSON PHOTOGRAPHY
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" aria-hidden="true"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navItems.map((item) => (
                <li key={item.href} className="nav-item">
                  <Link
                    className={`nav-link nav-link-custom ${pathname === item.href ? "active" : ""}`}
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
