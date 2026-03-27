const STEPS = [
  {
    num: '1',
    icon: '🚀',
    title: 'We Deploy Your Tracker',
    desc: 'We set up a private MailBeacon instance on your own server in under 5 minutes. No shared infrastructure — your data stays yours.',
    time: '~5 min setup',
    delay: 'reveal-delay-1',
  },
  {
    num: '2',
    icon: '✍️',
    title: 'Add One Snippet to Your Signature',
    desc: "Paste a tiny 1×1 pixel image tag into your email signature. That's it. Every email you send from any device will be tracked automatically.",
    time: 'One-time 2 min task',
    delay: 'reveal-delay-2',
  },
  {
    num: '3',
    icon: '📊',
    title: 'Watch Opens in Real-Time',
    desc: 'Your private dashboard shows who opened your emails, on what device, from where — and filters out bots and security scanners automatically.',
    time: 'Instant & continuous',
    delay: 'reveal-delay-3',
  },
]

export default function HowItWorks() {
  return (
    <section className="section how-section" id="how-it-works">
      <div className="container">
        <div className="center">
          <div className="section-label reveal">How It Works</div>
          <h2 className="section-title reveal reveal-delay-1">
            Zero Learning Curve.<br />
            <span className="grad">Up in Minutes.</span>
          </h2>
          <p className="section-sub reveal reveal-delay-2">
            Three steps to know exactly when every email you send gets opened — with no ongoing effort from you.
          </p>
        </div>

        <div className="steps-grid">
          {STEPS.map(s => (
            <div key={s.num} className={`step-card reveal ${s.delay}`}>
              <div className="step-num">{s.num}</div>
              <span className="step-icon-big">{s.icon}</span>
              <div className="step-title">{s.title}</div>
              <p className="step-desc">{s.desc}</p>
              <span className="step-time">⏱ {s.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
