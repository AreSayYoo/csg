import './App.css'

function App() {
  const videoSrc = '/media/covenant-reel.mov'
  const logoSrc = '/media/csg.png'

  return (
    <div className="page">
      <section className="hero">
        <video
          className="hero-video"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          aria-label="Covenant highlight reel"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="logo-stack">
            <div className="logo-mark">
              <img src={logoSrc} alt="Covenant Sports Group logo" />
            </div>
            <p className="tagline-inline">More than a contract. A Covenant.</p>
            <div className="social-links" aria-label="Follow Covenant">
              <a
                className="social-button"
                href="https://www.instagram.com/covenantsportsgroup"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src="/media/instagram.svg" alt="" aria-hidden="true" />
              </a>
              <a
                className="social-button"
                href="https://x.com/covenant_sg"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
              >
                <img src="/media/x-icon.svg" alt="" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
