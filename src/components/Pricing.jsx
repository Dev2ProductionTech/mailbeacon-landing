const PLANS = [
  {
    name: 'Starter',
    price: '49',
    period: 'one-time setup',
    desc: 'Perfect for freelancers and solo professionals.',
    features: [
      'Private tracker deployment',
      'Email signature snippet',
      'Real-time dashboard',
      'Bot & scanner filtering',
      'Gmail proxy detection',
      '1 month support included',
    ],
    cta: 'Get Started',
    featured: false,
    delay: 'reveal-delay-1',
  },
  {
    name: 'Professional',
    price: '49',
    period: '/ month + $49 setup',
    desc: 'Full-service management for busy professionals.',
    features: [
      'Everything in Starter',
      'Managed hosting & updates',
      'Per-recipient tagging (?to=)',
      'CSV data exports',
      'Priority email support',
      'Monthly usage reports',
    ],
    cta: 'Most Popular — Contact Us',
    featured: true,
    badge: '⭐ Most Popular',
    delay: 'reveal-delay-2',
  },
  {
    name: 'Agency',
    price: 'Custom',
    period: 'per negotiation',
    desc: 'Multi-client tracking for agencies and teams.',
    features: [
      'Multiple tracker instances',
      'White-label dashboard',
      'Custom domain integration',
      'API access',
      'Dedicated account manager',
      'SLA & uptime guarantee',
    ],
    cta: 'Contact for Quote',
    featured: false,
    delay: 'reveal-delay-3',
  },
]

export default function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <div className="center">
          <div className="section-label reveal">Pricing</div>
          <h2 className="section-title reveal reveal-delay-1">
            Simple, Transparent<br />
            <span className="grad">Pricing</span>
          </h2>
          <p className="section-sub reveal reveal-delay-2">
            No hidden fees, no per-email charges. Pay once to get set up, or let us manage everything on a monthly basis.
          </p>
        </div>

        <div className="pricing-grid">
          {PLANS.map(p => (
            <div key={p.name} className={`price-card ${p.featured ? 'featured' : ''} reveal ${p.delay}`}>
              {p.badge && <div className="pop-badge">{p.badge}</div>}
              <div className="price-name">{p.name}</div>
              <div className="price-amount">
                {p.price === 'Custom' ? (
                  <span style={{ fontSize: 32, fontWeight: 900 }}>Custom</span>
                ) : (
                  <><span>$</span>{p.price}</>
                )}
              </div>
              <div className="price-period">{p.period}</div>
              <div className="price-divider" />
              <ul className="price-features">
                {p.features.map(f => (
                  <li key={f}>
                    <span className="check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn ${p.featured ? 'btn-primary' : 'btn-outline'} price-cta`}
                style={{ justifyContent: 'center' }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="reveal" style={{ textAlign: 'center', marginTop: 32, fontSize: 13, color: 'var(--muted)' }}>
          All plans include a free consultation. Contact us to discuss your requirements. →{' '}
          <a href="mailto:ali@dev2production.com" style={{ color: 'var(--accent2)' }}>ali@dev2production.com</a>
        </p>
      </div>
    </section>
  )
}
