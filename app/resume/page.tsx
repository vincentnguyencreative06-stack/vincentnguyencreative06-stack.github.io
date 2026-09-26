import type { Metadata } from "next";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "Résumé", description: "View or download Vincent Nguyen's current résumé." };

export default function ResumePage() {
  return (
    <>
      <PageIntro eyebrow="Résumé" title="A concise record of the work." intro="My background spans supply chain, education, independent media and analytics. Together, these experiences have shaped how I understand business, communicate ideas and work with people.
" aside="Last updated September 2026" />
      <section className="shell resume-layout section-pad-top">
        <figure className="resume-preview"><img src="/assets/images/Vincent_Nguyen_UK_Graduate_CV_Page_1.jpg" alt="Preview of Vincent Nguyen's résumé" /></figure>
        <aside className="resume-actions">
          <p className="eyebrow">One page · PDF</p>
          <h2>View online or keep a copy.</h2>
          <p>The résumé brings together my education, professional experience and selected analytics work, with direct links to the projects featured across this portfolio.
</p>
          <a className="button button-solid" href="https://drive.google.com/file/d/1bhtQD7Cb6P1IPWn4upW-pyJSG500iex6/view?usp=sharing" target="_blank" rel="noreferrer">View Résumé <ArrowUpRight size={16} /></a>
          <a className="button button-quiet" href="/files/Vincent_Nguyen_UK_Graduate_CV.pdf" download>Download PDF <ArrowDownToLine size={16} /></a>
        </aside>
      </section>
    </>
  );
}
