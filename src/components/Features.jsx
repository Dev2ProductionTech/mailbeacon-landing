const FEATS = [
  {
    icon: '🔮',
    iconClass: 'fi-purple',
    title: 'Universal Signature Pixel',
    desc: 'One invisible 1×1 image in your signature tracks every email you send — automatically, from any device or client.',
    tag: 'Zero per-email effort',
    delay: 'reveal-delay-1',
  },
  {
    icon: '🤖',
    iconClass: 'fi-red',
    title: 'Bot & Scanner Filtering',
    desc: 'Over 50 known security scanners, link checkers, and email crawlers are automatically detected and silently ignored.',
    tag: '50+ patterns blocked',
    delay: 'reveal-delay-2',
  },
  {
    icon: '✅',
    iconClass: 'fi-green',
    title: 'Confirmed vs Preview Classification',
    desc: 'Gmail and Apple Mail proxy loads trigger preview — we detect them. Only real human opens are marked as Confirmed.',
    tag: 'Gmail & Apple proxy detected',
    delay: 'reveal-delay-3',
  },
  {
    icon: '⚡',
    iconClass: 'fi-orange',
    title: 'Real-Time Live Dashboard',
    desc: 'Password-protected dashboard shows open events as they happen — recipient, device type, time, IP, and open classification.',
    tag: 'Live updates',
    delay: 'reveal-delay-1',
  },
  {
    icon: '🏷️',
    iconClass: 'fi-blue',
    title: 'Per-Recipient Tagging',
    desc: 'Use the `?to=name` parameter to tag individual recipients in your pixel URL. Track dozens of people from one signature.',
    tag: '?to= parameter support',
    delay: 'reveal-delay-2',
  },
  {
    icon: '🔒',
    iconClass: 'fi-teal',
    title: 'Secure Private Deployment',
    desc: 'Your MailBeacon runs on your own server. No third-party storage, no shared databases. JWT session authentication built in.',
    tag: 'Your server, your data',
    delay: 'reveal-delay-3',
  },
]

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="center">
          <div className="section-label reveal">Features</div>
          <h2 className="section-title reveal reveal-delay-1">
            Everything You Need.<br />
            <span className="grad">Nothing You Don't.</span>
          </h2>
          <p className="section-sub reveal reveal-delay-2">
            Purpose-built for professional email senders who need accurate open data — not vanity metrics inflated by bots.
          </p>
        </div>

        <div className="features-grid">
          {FEATS.map(f => (
            <div key={f.title} className={`feat-card reveal ${f.delay}`}>
              <div className={`feat-icon ${f.iconClass}`}>{f.icon}</div>
              <div className="feat-title">{f.title}</div>
              <p className="feat-desc">{f.desc}</p>
              <span className="feat-tag">✦ {f.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
