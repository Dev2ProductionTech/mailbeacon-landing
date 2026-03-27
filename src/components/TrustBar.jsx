const CLIENTS = [
  { icon: '📧', name: 'Gmail' },
  { icon: '📮', name: 'Outlook' },
  { icon: '🍎', name: 'Apple Mail' },
  { icon: '📬', name: 'Yahoo Mail' },
  { icon: '⚡', name: 'Thunderbird' },
  { icon: '🔷', name: 'ProtonMail' },
  { icon: '📩', name: 'Fastmail' },
  { icon: '✉️', name: 'Any Client' },
]

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container">
        <div className="trust-inner">
          <span className="trust-label">Works with</span>
          {CLIENTS.map(c => (
            <div key={c.name} className="trust-pill">
              <span className="ti">{c.icon}</span>
              {c.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
