import './App.css'

function App() {
  const videoSrc = '/media/covenant-reel.mov'
  const logoSrc = '/media/csg.jpeg'

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
          aria-label="Covenant highlight reel"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="logo-stack">
            <div className="logo-mark">
              <img src={logoSrc} alt="Covenant Sports Group logo" />
            </div>
            <p className="tagline-inline">More than a contract. A Covenant</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
