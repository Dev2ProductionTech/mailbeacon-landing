const WHY = [
  {
    icon: '✍️',
    title: 'One Signature. Every Email. Forever.',
    desc: 'Most tools make you insert a tracker in each email manually. MailBeacon uses your signature — set it once and every email you ever send gets tracked automatically.',
  },
  {
    icon: '🧠',
    title: 'Smart Enough to Know the Difference',
    desc: 'Security gateways, email previews, and bots inflate open rates. MailBeacon silently classifies every ping — only genuine human reads are counted as confirmed opens.',
  },
  {
    icon: '🔐',
    title: 'Your Data Belongs to You',
    desc: 'Unlike cloud-based trackers, MailBeacon is deployed on your own server. No sign-up, no shared database, no subscription required for core functionality.',
  },
  {
    icon: '⚡',
    title: 'Developer-Grade, User-Friendly',
    desc: "Built with Node.js and deployed to Vercel or any server. We handle the technical setup — you just paste one snippet into your signature and send emails.",
  },
]

export default function WhyMailBeacon() {
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="why-grid">
          {/* Visual */}
          <div className="why-visual reveal">
            <div className="code-preview">
              <div className="code-preview-head">
                <div className="dots">
                  <span className="dot-r" /><span className="dot-y" /><span className="dot-g" />
                </div>
                <span>email_signature.html</span>
              </div>
              <div className="code-body">
                <div className="c-comment">{`<!-- Add to Email Signature (one-time) -->`}</div>
                <div>
                  <span className="c-tag">&lt;img</span>
                </div>
                <div style={{ paddingLeft: 16 }}>
                  <span className="c-attr">src=</span>
                  <span className="c-val">"https://your-tracker.vercel.app</span>
                </div>
                <div style={{ paddingLeft: 16 }}>
                  <span className="c-val">      /i/PIXEL_KEY.gif?to=client"</span>
                </div>
                <div style={{ paddingLeft: 16 }}>
                  <span className="c-attr">width=</span><span className="c-string">"1"</span>
                  <span className="c-attr"> height=</span><span className="c-string">"1"</span>
                </div>
                <div style={{ paddingLeft: 16 }}>
                  <span className="c-attr">border=</span><span className="c-string">"0"</span>
                  <span className="c-attr"> alt=</span><span className="c-string">""</span>
                </div>
                <div><span className="c-tag">/&gt;</span></div>
              </div>
              <div className="code-result">
                <span className="result-dot" />
                <span style={{ fontSize: 12, color: 'var(--text2)' }}>
                  Every email you send is now tracked automatically
                </span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="section-label reveal">Why MailBeacon</div>
            <h2 className="section-title reveal reveal-delay-1">
              Unlike Generic<br />
              <span className="grad">Email Trackers</span>
            </h2>
            <p className="section-sub reveal reveal-delay-2" style={{ marginBottom: 0 }}>
              Most tracking tools require per-email setup, share your data with third parties, or get fooled by bots. MailBeacon was built to solve all three.
            </p>

            <ul className="why-list">
              {WHY.map((w, i) => (
                <li key={w.title} className={`why-item reveal reveal-delay-${i + 1}`}>
                  <div className="why-icon-wrap">{w.icon}</div>
                  <div>
                    <div className="why-item-title">{w.title}</div>
                    <div className="why-item-desc">{w.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
