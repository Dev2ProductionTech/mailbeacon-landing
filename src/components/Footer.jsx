const NAV = {
  Product: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  Company: [
    { label: 'Dev2Production', href: 'https://dev2production.com' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'ali@dev2production.com', href: 'mailto:ali@dev2production.com' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 800, fontSize: 18, letterSpacing: '-0.2px', width: 'fit-content' }}>
              <div style={{
                width: 34, height: 34, background: 'linear-gradient(135deg,#6c5ce7,#a29bfe)',
                borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18
              }}>📡</div>
              <span><span className="grad">Mail</span>Beacon</span>
            </a>
            <p>Know exactly when your emails are read. Private, bot-proof email tracking powered by an invisible universal signature pixel.</p>
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="d2p-badge">D2P</div>
              <span style={{ fontSize: 12, color: 'var(--muted)' }}>A product by Dev2Production</span>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(NAV).map(([col, links]) => (
            <div key={col} className="footer-col">
              <h4>{col}</h4>
              <ul>
                {links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {year} Dev2Production. All rights reserved. MailBeacon™</p>
          <a className="d2p-link" href="https://dev2production.com" target="_blank" rel="noopener noreferrer">
            <span>Built by</span>
            <span className="d2p-badge">D2P</span>
            <span>Dev2Production</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
