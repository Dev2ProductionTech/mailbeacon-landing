const STATS = [
  { num: '50+', label: 'Security Scanners\nBlocked', color: 'var(--accent2)' },
  { num: '3',   label: 'Email Proxy Patterns\nDetected & Filtered', color: 'var(--green)' },
  { num: '<2m', label: 'Minutes to\nComplete Setup', color: 'var(--orange)' },
  { num: '0',   label: 'Third-Party Servers\nTouching Your Data', color: 'var(--blue)' },
]

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid-big">
        {STATS.map((s, i) => (
          <div key={s.label} className={`stat-big reveal reveal-delay-${i + 1}`}>
            <div className="stat-num" style={{ color: s.color }}>{s.num}</div>
            <div className="stat-label" style={{ whiteSpace: 'pre-line' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
