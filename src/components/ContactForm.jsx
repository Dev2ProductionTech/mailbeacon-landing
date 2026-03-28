import { useState } from 'react'

// Replace YOUR_FORM_ID with your actual Formspree form ID
// Create a free account at https://formspree.io and get your endpoint
const FORMSPREE_ID = 'YOUR_FORM_ID'

const SERVICES = [
  'MailBeacon Setup (One-Time)',
  'MailBeacon Managed (Monthly)',
  'MailBeacon Agency (Multi-Client)',
  'Custom Email Tracking Solution',
  'General Inquiry',
]

const BULLETS = [
  { icon: '⚡', text: 'Setup completed in under 24 hours' },
  { icon: '🔒', text: 'Your data on your server — always private' },
  { icon: '🛡️', text: '50+ bot patterns blocked out of the box' },
  { icon: '📞', text: 'Free consultation call included' },
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="center reveal">
          <div className="section-label">Get Started</div>
          <h2 className="section-title">
            Ready to See Who's<br />
            <span className="grad">Reading Your Emails?</span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* Left */}
          <div className="contact-left reveal reveal-delay-1">
            <p className="contact-tagline">
              Fill out the form and we'll get back to you within 24 hours with a setup plan tailored to your workflow. No commitment required.
            </p>
            <ul className="contact-bullets">
              {BULLETS.map(b => (
                <li key={b.text}>
                  <div className="cb-icon">{b.icon}</div>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 36, padding: 20, background: 'var(--s2)', border: '1px solid var(--border2)', borderRadius: 14 }}>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>
                Direct Contact
              </div>
              <a href="mailto:ali@dev2production.com" style={{ color: 'var(--accent2)', fontWeight: 600, fontSize: 14 }}>
                📧 ali@dev2production.com
              </a>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6 }}>
                Product by <strong style={{ color: 'var(--text2)' }}>Dev2Production</strong> · Professional software development services
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="contact-card reveal reveal-delay-2">
            {status === 'success' ? (
              <div className="form-success">
                <div className="big-check">🎉</div>
                <h4>You're all set!</h4>
                <p>Thanks for reaching out. We'll review your requirements and reply within 24 hours with next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3>Get MailBeacon</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jane Smith"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@company.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company / Brand</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Interest *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select a plan…</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Use Case</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How many emails do you send per week? Are you tracking specific recipients or general opens? Any questions?"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                {status === 'error' && (
                  <div style={{ padding: '12px 16px', marginBottom: 14, background: 'rgba(239,68,68,.1)', border: '1px solid rgba(239,68,68,.2)', borderRadius: 10, fontSize: 13, color: '#f87171' }}>
                    Something went wrong. Please email us directly at{' '}
                    <a href="mailto:ali@dev2production.com" style={{ color: '#f87171', textDecoration: 'underline' }}>ali@dev2production.com</a>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary btn-lg form-submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? '⏳ Sending…' : '🚀 Get MailBeacon →'}
                </button>
                <div className="form-notice">🔒 No spam, ever. We'll only reply about your request.</div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
