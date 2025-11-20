"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ImageProtection } from "@/components/image-protection"
import { useState, type FormEvent } from "react"

export default function ContactClient() {
  const [showThankYou, setShowThankYou] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    const emailInput = form.contact_email as HTMLInputElement
    const phoneInput = form.contact_phone as HTMLInputElement
    const email = emailInput.value.trim()
    const phone = phoneInput.value.trim()

    if (!email && !phone) {
      alert("Please provide at least one preferred method of contact: email or phone.")
      return
    }

    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        form.reset()
        setShowThankYou(true)
      } else {
        alert("Oops! There was a problem submitting your form.")
      }
    } catch (error) {
      alert("There was an error sending your message.")
    }
  }

  return (
    <>
      <main className="flex-shrink-0" role="main" id="main-content">
        <Navigation />

        <section className="py-5" aria-labelledby="contact-heading">
          <div className="container px-5">
            <div className="bg-light rounded-4 py-5 px-4 px-md-5 contact-card" aria-describedby="contact-subcopy">
              <div className="text-center mb-5">
                <h1 id="contact-heading" className="fw-bolder">
                  LET'S MAKE IT OFFICIAL!
                </h1>
                <p id="contact-subcopy" className="lead fw-normal text-muted mb-0">
                  Start your booking here!
                </p>
              </div>
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                  <form id="contactForm" action="https://formspree.io/f/mnnzoqjz" method="POST" onSubmit={handleSubmit}>
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_autoresponse"
                      value="Thank you for contacting Coral Olson Photography! We'll be in touch shortly."
                    />

                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name..."
                        required
                        autoComplete="name"
                      />
                      <label htmlFor="name">Name</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="contact_email"
                        name="contact_email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        inputMode="email"
                      />
                      <label htmlFor="contact_email">Preferred Email</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="contact_phone"
                        name="contact_phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        autoComplete="tel"
                        inputMode="tel"
                      />
                      <label htmlFor="contact_phone">Preferred Phone</label>
                    </div>

                    <div className="form-floating mb-3">
                      <select className="form-select" id="session_type" name="session_type" required>
                        <option value="" disabled selected>
                          Select a session type
                        </option>
                        <option value="Portrait-30">Portrait-30</option>
                        <option value="Portrait-45">Portrait-45</option>
                        <option value="Portrait-60">Portrait-60</option>
                        <option value="Graduate-30">Graduate-30</option>
                        <option value="Graduate-45">Graduate-45</option>
                        <option value="Graduate-60">Graduate-60</option>
                        <option value="Mini-15">Mini-15</option>
                        <option value="Seperate Editing Services">Seperate Editing Services</option>
                        <option value="Other">Other</option>
                      </select>
                      <label htmlFor="session_type">Session Type</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="session_date"
                        name="session_date"
                        type="date"
                        required
                        autoComplete="off"
                      />
                      <label htmlFor="session_date">Date of Session</label>
                    </div>

                    <div className="d-grid">
                      <button className="btn btn-primary btn-lg" type="submit">
                        Submit
                      </button>
                    </div>

                    {showThankYou && (
                      <div className="mt-4 alert alert-success" role="status" aria-live="polite">
                        Thank you! Your message has been sent successfully. We'll be in touch soon.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ImageProtection />

      <style jsx>{`
        .bg-light {
          background-color: #e4dfd8 !important;
          font-family: var(--font-serif) !important;
        }

        .bg-light * {
          font-family: inherit !important;
        }

        .contact-card {
          box-shadow: 0 2px 18px rgba(0, 0, 0, 0.08);
          border-radius: 16px;
        }

        .form-control,
        .form-select,
        .btn {
          min-height: 48px;
        }

        .btn-primary {
          background-color: #0a714e !important;
          border-color: #0a714e !important;
        }

        .btn-primary:hover,
        .btn-primary:focus {
          background-color: #085c3f !important;
          border-color: #085c3f !important;
        }

        :global(.form-floating > label) {
          padding: 1rem 0.75rem;
        }

        :global(.form-floating > .form-control),
        :global(.form-floating > .form-select) {
          height: calc(3.5rem + 2px);
          padding: 1rem 0.75rem;
        }

        :global(.form-floating > .form-control:focus ~ label),
        :global(.form-floating > .form-control:not(:placeholder-shown) ~ label),
        :global(.form-floating > .form-select ~ label) {
          opacity: 0.65;
          transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
        }

        @media (max-width: 576px) {
          .btn-lg {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
