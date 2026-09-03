import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = { title: "Work", description: "Selected analytics case studies by Vincent Nguyen." };

export default function WorkPage() {
  return (
    <>
      <PageIntro eyebrow="Work / Selected studies" title="Business questions, made visible." intro="Each case study follows the path from an ambiguous business need to a structured analytical answer—and, most importantly, a clear next move." aside="Two projects · 2026" />
      <section className="shell section-pad-top">
        <div className="progression-note"><span>Progression</span><p><strong>Supply Chain Performance Intelligence</strong> established my business-first approach to analytics. <strong>FinTech Transaction Intelligence</strong> extended that approach into data pipelines, cloud warehousing and SQL modelling.</p></div>
        <div className="project-grid work-grid">
          <ProjectCard href="/work/fintech-transaction-intelligence" image="/assets/images/fintech-cover.webp" alt="FinTech Transaction Intelligence Power BI dashboard" number="01 / Advanced" title="FinTech Transaction Intelligence" meta="August 2026 · Independent" description="An end-to-end analytical workflow across Python, BigQuery, SQL and Power BI, designed to support decisions on payments, customers and fraud." />
          <ProjectCard href="/work/supply-chain-performance-intelligence" image="/assets/images/supply-revenue.webp" alt="Supply Chain Performance Intelligence Power BI dashboard" number="02 / Foundation" title="Supply Chain Performance Intelligence" meta="March 2026 · Independent" description="A business-facing Power BI report spanning revenue, customer value, warehouse lead time and cancellation performance." />
        </div>
      </section>
    </>
  );
}
