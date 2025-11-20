import type React from "react"
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
})

export const metadata = {
  metadataBase: new URL("https://www.coralolsonphotography.com"),
  title: {
    default: "Coral Olson Photography",
    template: "%s | Coral Olson Photography",
  },
  description: "Louisiana based photographer specializing in weddings, engagements, and natural-light portraits.",
  openGraph: {
    title: "Coral Olson Photography",
    description: "Louisiana based photographer specializing in weddings, engagements, and natural-light portraits.",
    url: "https://www.coralolsonphotography.com",
    siteName: "Coral Olson Photography",
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E4DFD8",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <body className="d-flex flex-column h-100">{children}</body>
    </html>
  )
}
