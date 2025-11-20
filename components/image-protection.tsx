"use client"

import { useEffect } from "react"

export function ImageProtection() {
  useEffect(() => {
    // Disable cut, copy, paste
    const preventAction = (e: Event) => e.preventDefault()

    const events = ["cut", "copy", "paste"]
    events.forEach((event) => {
      document.body.addEventListener(event, preventAction, { passive: false } as EventListenerOptions)
    })

    // Disable right-click and drag on images
    const images = document.querySelectorAll("img")
    images.forEach((img) => {
      img.addEventListener("contextmenu", preventAction, { passive: false } as EventListenerOptions)
      img.addEventListener("dragstart", preventAction, { passive: false } as EventListenerOptions)
      img.setAttribute("draggable", "false")
      img.classList.add("no-save")
    })

    // iOS/Android long-press protection
    let pressTimer: NodeJS.Timeout | null = null
    images.forEach((img) => {
      const cancelTimer = () => {
        if (pressTimer) {
          clearTimeout(pressTimer)
          pressTimer = null
        }
      }

      img.addEventListener(
        "touchstart",
        (e) => {
          pressTimer = setTimeout(() => {
            try {
              e.preventDefault()
            } catch {}
          }, 450)
        },
        { passive: false } as EventListenerOptions,
      )

      img.addEventListener("touchend", cancelTimer, { passive: true } as EventListenerOptions)
      img.addEventListener("touchmove", cancelTimer, { passive: true } as EventListenerOptions)
      img.addEventListener("gesturestart", preventAction, { passive: false } as EventListenerOptions)
    })

    // Enhanced keyboard focus visibility for accessibility
    const focusableElements = document.querySelectorAll("a, button")
    focusableElements.forEach((el) => {
      el.addEventListener(
        "focus",
        () => {
          ;(el as HTMLElement).style.outline = "2px solid rgba(0,0,0,0.35)"
        },
        { passive: true } as EventListenerOptions,
      )

      el.addEventListener(
        "blur",
        () => {
          ;(el as HTMLElement).style.outline = "none"
        },
        { passive: true } as EventListenerOptions,
      )
    })

    return () => {
      events.forEach((event) => {
        document.body.removeEventListener(event, preventAction)
      })
    }
  }, [])

  return null
}
