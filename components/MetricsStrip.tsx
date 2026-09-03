const metrics = [
  ["13.31M", "transactions analysed"],
  ["Top 2", "on Spotify Vietnam"],
  ["1M+", "podcast streams"],
  ["4 years", "teaching experience"],
];

export function MetricsStrip() {
  return (
    <section className="metric-band" aria-label="Selected evidence">
      <div className="shell metric-grid">
        {metrics.map(([value, label]) => <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </div>
    </section>
  );
}
