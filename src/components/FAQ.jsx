import { useState } from 'react'

const FAQS = [
  {
    q: 'Will adding a tracking pixel cause my emails to land in spam?',
    a: 'No. The pixel is a standard 1×1 transparent image tag — identical to what marketing newsletters, Gmail itself, and virtually every professional email platform uses. It has zero impact on spam scoring. MailBeacon also uses anti-spam-optimised attribute formatting (width, height, border, alt attributes all set correctly).',
  },
  {
    q: 'How does the tracking pixel actually work?',
    a: "When you send an email with the pixel in your signature, the recipient's email client loads the image from your private server. That load event is recorded with their IP address, device type, and timestamp. Because it's in your signature, it's included automatically in every email — no manual insertion needed.",
  },
  {
    q: 'What email clients are supported?',
    a: "Any email client that renders HTML (which is nearly all of them) — Gmail, Outlook, Apple Mail, Yahoo Mail, Thunderbird, ProtonMail, Fastmail, and any webmail or mobile client. The pixel works in the recipient's client, not the sender's, so compatibility is universal.",
  },
  {
    q: "What's the difference between 'Confirmed' and 'Preview' opens?",
    a: "Gmail and Apple Mail use privacy proxies that pre-load images before the user ever opens the email. These show up as 'Preview' opens in MailBeacon. When a real human on a real device loads the pixel, it's classified as 'Confirmed'. This prevents you from thinking your email was read when it was only scanned by a proxy.",
  },
  {
    q: 'Is my email tracking data private?',
    a: 'Yes. MailBeacon is deployed on your own server (typically Vercel or a VPS). There is no shared cloud database, no third-party analytics, and no one else can access your dashboard. Your open data belongs entirely to you.',
  },
  {
    q: 'Do I need technical knowledge to set this up?',
    a: "No. We handle the entire setup for you — server deployment, domain configuration, and dashboard access. You only need to paste one snippet into your email signature, which takes about 2 minutes and requires no technical knowledge.",
  },
  {
    q: 'Can I track multiple recipients separately?',
    a: "Yes. MailBeacon supports per-recipient tagging via the `?to=name` URL parameter. Add `?to=john` or `?to=clientname` to your pixel URL for different campaigns or contacts, and each will appear labelled in your dashboard.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="center">
          <div className="section-label reveal">FAQ</div>
          <h2 className="section-title reveal reveal-delay-1">
            Common Questions,<br />
            <span className="grad">Honest Answers</span>
          </h2>
        </div>

        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div key={i} className={`faq-item reveal reveal-delay-${(i % 3) + 1}${open === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                {f.q}
                <svg className="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
