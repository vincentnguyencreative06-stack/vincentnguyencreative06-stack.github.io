import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MetricsStrip } from "@/components/MetricsStrip";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <section className="hero shell section-pad">
        <div className="hero-copy">
          <p className="eyebrow">Vincent Nguyen — Data/BI Analyst &amp; Consultant</p>
          <h1>Turning complex data into decisions people can act on.</h1>
          <p className="lede">I combine analytical problem-solving, business understanding and human-centred communication to turn information into meaningful action.</p>
          <p className="motto">Rooted in pride. Moved by people. Led by boldness.</p>
          <div className="button-row">
            <Link className="button button-solid" href="/work">View Selected Work <ArrowUpRight size={16} /></Link>
            <Link className="button button-quiet" href="/contact">Send a Note <ArrowUpRight size={16} /></Link>
          </div>
        </div>
        <figure className="hero-figure">
          <span className="image-index">Portrait, 2026</span>
          <img src="/assets/images/hero-portrait.webp" alt="Vincent Nguyen in headphones against a hand-drawn yellow background" />
          <figcaption>Analyst by practice. Storyteller by instinct.</figcaption>
        </figure>
      </section>

      <MetricsStrip />

      <Reveal as="section" className="shell section-pad">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Selected work</p><h2>Evidence, shaped for action.</h2></div>
          <p>Two projects tracing my progression from business-first dashboarding to an end-to-end cloud analytics workflow.</p>
        </div>
        <div className="project-grid">
          <ProjectCard href="/work/fintech-transaction-intelligence" image="/assets/images/fintech-cover.webp" alt="FinTech Transaction Intelligence Power BI dashboard" number="01" title="FinTech Transaction Intelligence" meta="Python · BigQuery · SQL · Power BI" description="An end-to-end analysis of 13.31 million transactions, translating customer, payment and fraud signals into C-level decisions." />
          <ProjectCard href="/work/supply-chain-performance-intelligence" image="/assets/images/supply-revenue.webp" alt="Supply Chain Performance Intelligence Power BI dashboard" number="02" title="Supply Chain Performance Intelligence" meta="Power Query · Data modelling · DAX · Power BI" description="A multi-page decision tool examining revenue, customers, warehouse performance and cancellations across international logistics data." />
        </div>
      </Reveal>

      <Reveal as="section" className="feature-band">
        <div className="shell story-split">
          <div><p className="eyebrow">A practice built between disciplines</p><h2>Analysis with a human pulse.</h2></div>
          <div className="prose-block">
            <p>My path moves through logistics, education, independent media and analytics. That range taught me to look beyond the number: to ask who needs the answer, what decision it should support and how it can be communicated clearly.</p>
            <Link className="text-link" href="/about">Read the full story <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="shell section-pad">
        <div className="section-heading"><p className="eyebrow">Capabilities</p><h2>From ambiguity to a clear next move.</h2></div>
        <div className="capability-grid">
          {[
            ["01", "Business analysis", "Clarifying problems, requirements and decision contexts before reaching for a tool."],
            ["02", "Analytics engineering", "Cleaning, modelling and querying data with Python, SQL, BigQuery and Power BI."],
            ["03", "Data storytelling", "Turning patterns into concise narratives, dashboards and recommendations for stakeholders."],
            ["04", "Human-centred communication", "Explaining difficult ideas with empathy, structure and attention to the audience."],
          ].map(([n, title, body]) => <article className="capability" key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </Reveal>

      <Reveal as="section" className="research-teaser">
        <div className="shell research-teaser-grid">
          <p className="section-number">R / 01</p>
          <div><p className="eyebrow">Research interests</p><h2>Technology should strengthen human judgement—not quietly replace it.</h2><p>I am interested in the meeting point between analytics, responsible AI and organisational decision-making.</p></div>
          <Link className="round-link" href="/research" aria-label="Explore research interests"><ArrowUpRight /></Link>
        </div>
      </Reveal>

      <section className="shell closing-cta section-pad">
        <p className="eyebrow">Open for work or further discussion</p>
        <h2>Looking for an analyst who can move between data, people and decisions?</h2>
        <Link className="button button-solid" href="/contact">Send a Note <ArrowUpRight size={16} /></Link>
      </section>
    </>
  );
}
