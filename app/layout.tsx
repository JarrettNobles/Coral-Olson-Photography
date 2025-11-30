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
  generator: "v0.app",
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
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
          async
        />
      </head>
      <body className="d-flex flex-column h-100">{children}</body>
    </html>
  )
}
