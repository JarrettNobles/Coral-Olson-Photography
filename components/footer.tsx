export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
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
            <p>@coralolsonphotography</p>
          </div>
        </a>
      </section>

      <div className="py-4" style={{ backgroundColor: "#1a1a1a", color: "white" }}>
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0 text-center text-sm-start">Copyright &copy; Coral Olson {currentYear}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
