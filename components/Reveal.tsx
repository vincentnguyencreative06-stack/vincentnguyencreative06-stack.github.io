export function Reveal({ as = "div", className = "", children }: { as?: string; className?: string; children: React.ReactNode }) {
  if (as === "section") return <section className={`${className} reveal`}>{children}</section>;
  return <div className={`${className} reveal`}>{children}</div>;
}
