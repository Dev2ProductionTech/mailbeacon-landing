import DashboardMockup from './DashboardMockup.jsx'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-bg-2" />

      <div className="container">
        <div className="hero-inner">
          {/* Left column */}
          <div>
            <div className="hero-badge reveal">
              <span className="dot" />
              Now Available — Invite Only
            </div>

            <h1 className="hero-title reveal reveal-delay-1">
              Know Exactly When<br />
              <span className="grad">Your Emails</span><br />
              Are Read
            </h1>

            <p className="hero-sub reveal reveal-delay-2">
              MailBeacon embeds an invisible tracking pixel in your email signature — one setup, every email tracked automatically. Real opens, not bot pings.
            </p>

            <div className="hero-actions reveal reveal-delay-3">
              <a href="#contact" className="btn btn-primary btn-lg">
                🚀 Get Started Free
              </a>
              <a href="#how-it-works" className="btn btn-outline btn-lg">
                See How It Works →
              </a>
            </div>

            <div className="hero-stats reveal reveal-delay-4">
              <div className="hero-stat-item">
                <div className="hero-stat-num grad">50+</div>
                <div className="hero-stat-lbl">Scanners Blocked</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-num grad">&lt;2min</div>
                <div className="hero-stat-lbl">Setup Time</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-num grad">100%</div>
                <div className="hero-stat-lbl">Private Deployment</div>
              </div>
            </div>
          </div>

          {/* Right column — dashboard mockup */}
          <div className="dash-wrap reveal reveal-delay-2">
            <div className="dash-glow" />
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
