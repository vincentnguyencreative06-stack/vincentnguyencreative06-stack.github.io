import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "Research Interests", description: "Vincent Nguyen's public research interests in analytics, human-centred technology and responsible AI." };

const themes = [
  ["01", "Business Analytics and Decision Support", "How analytical systems can help organisations frame choices, interpret evidence and act under uncertainty."],
  ["02", "Human-Centred Technology", "How technologies can be designed and evaluated around the realities, needs and judgement of the people using them."],
  ["03", "Evidence-Based Management", "How organisations can build stronger decisions by combining data, professional expertise and contextual knowledge."],
  ["04", "Organisational Decision-Making", "How people, incentives, structures and information interact when consequential choices are made."],
  ["05", "Responsible Use of Data and AI", "How accountability, transparency and human agency can remain visible as data and AI become more influential."],
];

export default function ResearchPage() {
  return (
    <>
      <PageIntro eyebrow="Research / Public interests" title="Judgement matters." intro="Exploring how analytics, technology and human judgement can contribute to more thoughtful and responsible organisational decisions." aside="The themes are public. Work in development remains private." />
      <section className="research-statement shell section-pad-top">
        <p className="section-number">A working position</p>
        <blockquote>Technology should strengthen human judgement—not quietly replace it.</blockquote>
      </section>
      <section className="shell theme-list section-pad">
        {themes.map(([number, title, body]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{body}</p></article>)}
      </section>
      <section className="principles-band section-pad">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">Principles</p><h2>Three anchors for the questions I pursue.</h2></div>
          <div className="principle-grid">
            <article><span>¶ I</span><h3>Evidence before assumption.</h3><p>Claims deserve disciplined inquiry, not confidence alone.</p></article>
            <article><span>¶ II</span><h3>Human context matters.</h3><p>Data becomes meaningful only within the lives and systems that produced it.</p></article>
            <article><span>¶ III</span><h3>Responsibility remains human.</h3><p>Delegating a task to technology should never make accountability disappear.</p></article>
          </div>
        </div>
      </section>
      <section className="shell research-origin section-pad">
        <div><p className="eyebrow">Why research</p><h2>Knowledge should travel.</h2></div>
        <div><p>I come from three generations of teachers: my grandparents, my parents and now me. That inheritance shaped my belief that knowledge can outlast the person who first discovered or explained it.</p><p>My own route—from logistics and teaching to media and analytics—has left me curious about how people interpret information, disagree with systems and retain agency in increasingly technological organisations.</p><Link className="text-link" href="/contact">Exchange perspectives <ArrowUpRight size={15} /></Link></div>
      </section>
    </>
  );
}
