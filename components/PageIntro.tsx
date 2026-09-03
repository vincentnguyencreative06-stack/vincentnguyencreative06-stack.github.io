export function PageIntro({ eyebrow, title, intro, aside }: { eyebrow: string; title: string; intro: string; aside?: string }) {
  return (
    <section className="page-intro shell section-pad">
      <div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div>
      <div className="page-intro-side"><p>{intro}</p>{aside && <span>{aside}</span>}</div>
    </section>
  );
}
