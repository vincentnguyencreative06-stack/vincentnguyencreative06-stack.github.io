import type { Metadata } from "next";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "Résumé", description: "View or download Vincent Nguyen's current résumé." };

export default function ResumePage() {
  return (
    <>
      <PageIntro eyebrow="Résumé / Current edition" title="A concise record of the work." intro="The public résumé is presented without a personal phone number or street address. A UK-specific edition will follow when the details are ready." aside="Last updated September 2026" />
      <section className="shell resume-layout section-pad-top">
        <figure className="resume-preview"><img src="/assets/images/resume-preview.webp" alt="Preview of Vincent Nguyen's résumé" /></figure>
        <aside className="resume-actions">
          <p className="eyebrow">One page · PDF</p>
          <h2>View online or keep a copy.</h2>
          <p>The PDF includes direct links to both Power BI reports and LinkedIn. The editable Canva URL has been removed from the downloadable copy.</p>
          <a className="button button-solid" href="https://canva.link/zwi4tklsue8v84t" target="_blank" rel="noreferrer">View Résumé <ArrowUpRight size={16} /></a>
          <a className="button button-quiet" href="/files/Vincent-Nguyen-Resume.pdf" download>Download PDF <ArrowDownToLine size={16} /></a>
        </aside>
      </section>
    </>
  );
}
