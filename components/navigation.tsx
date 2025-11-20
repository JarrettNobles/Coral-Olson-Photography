"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/investment", label: "Investment" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3" role="navigation" aria-label="Primary">
      <div className="container px-5">
        <Link className="navbar-brand" href="/">
          Coral Olson Photography
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
        <div className={`navbar-collapse ${isOpen ? "show" : "collapse"}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <Link
                  className={`nav-link ${pathname === item.href ? "active" : ""}`}
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
  )
}
