"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <style jsx>{`
        .instagram-footer {
          background-color: #2d2d2d;
          padding: 4rem 2rem;
          text-align: center;
          position: relative;
          transition: background-color 0.3s ease;
        }
        .instagram-footer:hover {
          background-color: #1a1a1a;
        }
        .instagram-footer .overlay-link {
          text-decoration: none;
          color: white;
          display: block;
        }
        .instagram-footer .overlay-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .instagram-footer:hover .overlay-content {
          opacity: 1;
        }
        .instagram-footer .bi-instagram {
          font-size: 3rem;
          color: white;
        }
        .instagram-footer h2 {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: 2rem;
          font-weight: 400;
          margin: 0;
          color: white;
        }
        .instagram-footer p {
          font-family: 'Lato', 'Helvetica', sans-serif;
          font-size: 1rem;
          letter-spacing: 0.1em;
          margin: 0;
          color: white;
          text-transform: uppercase;
        }
        .footer-copyright {
          background-color: #2d2d2d;
          color: white;
          padding: 1.5rem 0;
        }
      `}</style>
      <footer className="mt-auto" role="contentinfo">
        <section className="instagram-footer">
          <a
            href="https://www.instagram.com/coralolsonphotography/?igsh=dXpzNXQ2dGx3cWs3"
            target="_blank"
            rel="noopener noreferrer"
            className="overlay-link"
            aria-label="Open Coral Olson Photography on Instagram in a new tab"
          >
            <div className="overlay-content">
              <i className="bi bi-instagram" aria-hidden="true"></i>
              <h2>Instagram</h2>
              <p>@CORALOLSONPHOTOGRAPHY</p>
            </div>
          </a>
        </section>

        <div className="footer-copyright">
          <div className="container px-5">
            <div className="row align-items-center justify-content-between flex-column flex-sm-row">
              <div className="col-auto">
                <div className="small m-0 text-center text-sm-start">Copyright &copy; Coral Olson {currentYear}</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
