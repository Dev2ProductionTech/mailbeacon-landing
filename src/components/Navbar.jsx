import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        {/* Logo */}
        <a href="#" className="nav-logo" aria-label="MailBeacon">
          <div className="nav-logo-icon">📡</div>
          <span>
            <span className="grad">Mail</span>Beacon
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="nav-cta">
          <span className="nav-badge">✶ By Dev2Production</span>
          <a href="#contact" className="btn btn-primary btn-sm">Get Started</a>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span style={open ? { transform: 'rotate(45deg) translate(4px,4px)' } : {}} />
          <span style={open ? { opacity: 0 } : {}} />
          <span style={open ? { transform: 'rotate(-45deg) translate(4px,-4px)' } : {}} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(13,13,26,.98)',
          borderTop: '1px solid var(--border)',
          padding: '16px 28px 20px',
          backdropFilter: 'blur(16px)',
        }}>
          {links.map(l => (
            <div key={l.href} style={{ marginBottom: 4 }}>
              <a
                href={l.href}
                style={{ display: 'block', padding: '10px 0', fontSize: 15, color: 'var(--text2)', fontWeight: 600 }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </div>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ marginTop: 12, width: '100%', justifyContent: 'center' }} onClick={() => setOpen(false)}>
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
