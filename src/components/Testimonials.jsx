const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'Head of Sales',
    company: 'NexaFlow',
    initials: 'SC',
    bg: 'linear-gradient(135deg, #6c5ce7, #a29bfe)',
    stars: 5,
    quote: "MailBeacon completely changed how I time my follow-ups. I know the exact moment a prospect reads my proposal — no more awkward 'just checking in' emails. My response rate jumped 40% in 60 days.",
    delay: 'reveal-delay-1',
  },
  {
    name: 'Marcus Williams',
    role: 'Senior Technical Recruiter',
    company: 'TalentBridge',
    initials: 'MW',
    bg: 'linear-gradient(135deg, #10b981, #34d399)',
    stars: 5,
    quote: "We send hundreds of candidate emails weekly. MailBeacon shows us who genuinely opened the offer letter vs. a bot prefetch. The accuracy is stunning — our pipeline decisions are finally data-driven.",
    delay: 'reveal-delay-2',
  },
  {
    name: 'Priya Mehta',
    role: 'UX Consultant',
    company: 'Freelance',
    initials: 'PM',
    bg: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
    stars: 5,
    quote: "Setup was 5 minutes. ROI was instant. As a freelancer, knowing when a client reads my proposal is everything. My tracking data lives on my own server — that privacy is something I truly value.",
    delay: 'reveal-delay-3',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="center">
          <div className="section-label reveal">Customer Stories</div>
          <h2 className="section-title reveal reveal-delay-1">
            Real Results From<br />
            <span className="grad">Real Professionals</span>
          </h2>
          <p className="section-sub reveal reveal-delay-2">
            From sales teams to independent consultants — MailBeacon gives you the timing intelligence to close deals faster.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className={`testi-card reveal ${t.delay}`}>
              <div className="testi-stars">{'★'.repeat(t.stars)}</div>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: t.bg }}>{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
