const ROWS = [
  { email: 'client@acme.co',     time: 'just now',   type: 'confirmed', device: 'iPhone 15',   ip: '104.28.x.x',  isNew: true },
  { email: 'ceo@techcorp.io',    time: '2 min ago',  type: 'confirmed', device: 'MacBook Pro', ip: '91.192.x.x',  isNew: false },
  { email: 'hr@globalinc.com',   time: '8 min ago',  type: 'preview',   device: 'Outlook',     ip: '40.97.x.x',   isNew: false },
  { email: 'ali@dev2prod.com',   time: '14 min ago', type: 'confirmed', device: 'Android 14',  ip: '185.60.x.x',  isNew: false },
]

export default function DashboardMockup() {
  return (
    <div style={{ position: 'relative' }}>
      <div className="dash-frame">
        {/* Title bar */}
        <div className="dash-titlebar">
          <span className="dot-r" /><span className="dot-y" /><span className="dot-g" />
          <div className="dash-url">emailtracker-tau.vercel.app/dashboard</div>
        </div>

        <div className="dash-body">
          {/* Header */}
          <div className="dash-header-row">
            <div className="dash-logo-txt">
              <span style={{ fontSize: 14 }}>📡</span>
              MailBeacon
              <span className="dash-live" title="Live" />
            </div>
            <div className="dash-logout-btn">ali@dev2production.com</div>
          </div>

          {/* Stat Cards */}
          <div className="dash-stats">
            <div className="ds">
              <div className="ds-lbl">Total Opens</div>
              <div className="ds-val grad">247</div>
            </div>
            <div className="ds">
              <div className="ds-lbl">Confirmed</div>
              <div className="ds-val" style={{ color: 'var(--green)' }}>189</div>
            </div>
            <div className="ds">
              <div className="ds-lbl">Bots Blocked</div>
              <div className="ds-val" style={{ color: 'var(--orange)' }}>58</div>
            </div>
          </div>

          {/* Opens table */}
          <div className="dash-table-wrap">
            <div className="dash-table-head">
              <span className="dash-th">Recipient</span>
              <span className="dash-th">Device</span>
              <span className="dash-th">Type</span>
              <span className="dash-th">Time</span>
            </div>
            {ROWS.map((r, i) => (
              <div key={i} className={`dash-row${r.isNew ? ' dash-row-new' : ''}`} style={{ animationDelay: `${i * 0.15}s` }}>
                <span style={{ fontSize: 11, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {r.isNew && '● '}{r.email}
                </span>
                <span className="dash-dev">{r.device}</span>
                <span>
                  {r.type === 'confirmed'
                    ? <span className="dash-badge-c">✓ Confirmed</span>
                    : <span className="dash-badge-p">◌ Preview</span>
                  }
                </span>
                <span className="dash-ip">{r.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating notification card */}
      <div className="dash-floating-card">
        <div className="fc-label">📬 New open detected</div>
        <div className="fc-email">client@acme.co</div>
        <div className="fc-row">
          <div className="fc-stat">
            <div className="fc-stat-v" style={{ color: 'var(--green)' }}>✓</div>
            <div className="fc-stat-l">Confirmed</div>
          </div>
          <div className="fc-stat">
            <div className="fc-stat-v">📱</div>
            <div className="fc-stat-l">Mobile</div>
          </div>
          <div className="fc-stat">
            <div className="fc-stat-v" style={{ fontSize: 13, color: 'var(--text2)' }}>now</div>
            <div className="fc-stat-l">Time</div>
          </div>
        </div>
      </div>
    </div>
  )
}
