import { useState } from 'react'

const MAIL_API = 'https://custom-mail-server.vercel.app/api/email/send'
const MAIL_KEY = 'ce05a3a1ff233e4c92ff6fb4f838ed27a6ec23a9c476764eb09c31877f6381bd'
const RECIPIENT = { email: 'ali@dev2production.com', name: 'Ali — Dev2Production' }

const SERVICES = [
  'MailBeacon Starter (One-Time Setup)',
  'MailBeacon Professional (Monthly Managed)',
  'MailBeacon Agency (Multi-Client)',
  'Custom Email Tracking Solution',
  'General Inquiry / Demo Request',
]

const BULLETS = [
  { icon: '⚡', text: 'Setup completed in under 24 hours' },
  { icon: '🔒', text: 'Your data on your server — always private' },
  { icon: '🛡️', text: '50+ bot patterns blocked out of the box' },
  { icon: '📞', text: 'Free consultation call included' },
]

function buildEmailHtml({ name, email, phone, company, service, message }) {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const row = (label, value) => `<tr>
    <td style="padding:14px 24px;border-bottom:1px solid #1e1e38;width:32%;vertical-align:top;white-space:nowrap">
      <span style="font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#6b6b90;font-weight:700">${label}</span>
    </td>
    <td style="padding:14px 24px;border-bottom:1px solid #1e1e38">
      <span style="font-size:14px;color:#eeeef5;font-weight:500;line-height:1.7">${value}</span>
    </td>
  </tr>`

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:24px;background:#05050c;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <div style="max-width:620px;margin:0 auto">
    <div style="background:linear-gradient(135deg,#6c5ce7 0%,#4834d4 100%);border-radius:16px 16px 0 0;padding:36px 40px">
      <div style="font-size:32px;margin-bottom:14px">📡</div>
      <h1 style="color:#fff;margin:0 0 10px;font-size:24px;font-weight:800;letter-spacing:-0.5px">New MailBeacon Lead</h1>
      <p style="color:rgba(255,255,255,.75);margin:0;font-size:14px;line-height:1.6">
        A new inquiry from the landing page — reply directly to connect with <strong style="color:#fff">${esc(name)}</strong>
      </p>
    </div>
    <div style="background:#0d0d1a;border-left:1px solid #1e1e38;border-right:1px solid #1e1e38;padding:20px 40px">
      <span style="display:inline-block;background:rgba(16,185,129,.15);color:#10b981;padding:6px 16px;border-radius:20px;font-size:12px;font-weight:700;border:1px solid rgba(16,185,129,.25)">
        🚀 New Lead — Submitted just now
      </span>
    </div>
    <div style="background:#0d0d1a;border-left:1px solid #1e1e38;border-right:1px solid #1e1e38;padding:0 20px 24px">
      <table style="width:100%;border-collapse:collapse;background:#131325;border-radius:12px;overflow:hidden;border:1px solid #1e1e38">
        <tbody>
          ${row('Full Name', esc(name))}
          ${row('Email', `<a href="mailto:${esc(email)}" style="color:#a29bfe;text-decoration:none">${esc(email)}</a>`)}
          ${phone ? row('Phone', esc(phone)) : ''}
          ${row('Company', company ? esc(company) : '<span style="color:#4a4a6a">Not provided</span>')}
          ${row('Service', service ? esc(service) : '<span style="color:#4a4a6a">Not selected</span>')}
          ${message ? row('Message', `<span style="white-space:pre-wrap">${esc(message)}</span>`) : ''}
        </tbody>
      </table>
    </div>
    <div style="background:#0d0d1a;border-left:1px solid #1e1e38;border-right:1px solid #1e1e38;padding:8px 40px 32px;text-align:center">
      <a href="mailto:${esc(email)}?subject=Re%3A%20MailBeacon%20Inquiry&body=Hi%20${esc(name)}%2C%0A%0A"
         style="display:inline-block;background:linear-gradient(135deg,#6c5ce7,#5a4bd1);color:#fff;padding:14px 40px;border-radius:12px;font-weight:700;font-size:15px;text-decoration:none;letter-spacing:-0.2px">
        Reply to ${esc(name)} →
      </a>
    </div>
    <div style="background:#131325;border:1px solid #1e1e38;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center">
      <p style="color:#6b6b90;font-size:12px;margin:0;line-height:1.6">
        MailBeacon™ by <strong style="color:#a29bfe">Dev2Production</strong> ·
        Sent automatically from your landing page contact form.
      </p>
    </div>
  </div>
</body></html>`
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => { const n = { ...er }; delete n[name]; return n })
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Your name is required'
    if (!form.email.trim()) errs.email = 'Email address is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address'
    if (!form.service) errs.service = 'Please select a service'
    return errs
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setStatus('loading')
    try {
      const res = await fetch(MAIL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-API-Key': MAIL_KEY },
        body: JSON.stringify({
          to: [RECIPIENT],
          subject: `🚀 New MailBeacon Lead — ${form.name}${form.company ? ` · ${form.company}` : ''}`,
          html: buildEmailHtml(form),
          text: `New lead:\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || '—'}\nCompany: ${form.company || '—'}\nService: ${form.service}\nMessage: ${form.message || '—'}`,
          replyTo: { email: form.email, name: form.name },
        }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const reset = () => {
    setStatus('idle')
    setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' })
    setErrors({})
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
                Product by <strong style={{ color: 'var(--text2)' }}>Dev2Production</strong> · Professional software development
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="contact-card reveal reveal-delay-2">
            {status === 'success' ? (
              <div className="form-success">
                <div className="big-check">🎉</div>
                <h4>Message received!</h4>
                <p>Thanks for reaching out. We'll review your requirements and reply within 24 hours with next steps.</p>
                <button className="btn btn-outline" style={{ marginTop: 12, fontSize: 13 }} onClick={reset}>
                  Send another inquiry →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3>Get MailBeacon</h3>

                <div className="form-row">
                  <div className={`form-group${errors.name ? ' has-error' : ''}`}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="field-error">{errors.name}</div>}
                  </div>
                  <div className={`form-group${errors.email ? ' has-error' : ''}`}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="field-error">{errors.email}</div>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone <span className="field-optional">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
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
                </div>

                <div className={`form-group${errors.service ? ' has-error' : ''}`}>
                  <label htmlFor="service">Service Interest *</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select a plan…</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <div className="field-error">{errors.service}</div>}
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
                  <div className="form-error-banner">
                    Something went wrong. Please email us directly at{' '}
                    <a href="mailto:ali@dev2production.com">ali@dev2production.com</a>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary btn-lg form-submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading'
                    ? <><span className="spin-ring" /> Sending…</>
                    : '🚀 Get MailBeacon →'
                  }
                </button>
                <div className="form-notice">🔒 No spam, ever. We reply only about your request.</div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
