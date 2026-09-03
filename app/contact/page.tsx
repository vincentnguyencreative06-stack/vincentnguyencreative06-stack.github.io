import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "Contact", description: "Contact Vincent Nguyen for interviews, collaboration and research conversations." };

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="A thoughtful note is a good place to begin." intro="I welcome conversations about job interviews, analytical and creative collaborations, and shared research interests." aside="Based in Glasgow, Scotland. Available across the UK and remotely." />
      <section className="shell contact-grid section-pad-top">
        <div className="contact-primary">
          <p className="eyebrow">Email</p>
          <a className="contact-email" href="mailto:vincentnguyen.creative06@gmail.com">vincentnguyen.<br />creative06@gmail.com <ArrowUpRight /></a>
          <p>I usually respond with care rather than haste.</p>
        </div>
        <div className="contact-reasons">
          <p className="eyebrow">Good reasons to write</p>
          <ol><li><span>01</span><div><strong>Job interviews</strong><p>Data/BI Analyst and consulting opportunities.</p></div></li><li><span>02</span><div><strong>Collaboration</strong><p>Analytics, storytelling, education or interdisciplinary creative work.</p></div></li><li><span>03</span><div><strong>Research conversations</strong><p>Shared questions around decision support, human-centred technology and responsible AI.</p></div></li></ol>
        </div>
      </section>
      <section className="contact-links shell section-pad">
        <a href="https://www.linkedin.com/in/vinh-nguyen-9453b7239" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Professional context and conversation</strong><ArrowUpRight /></a>
        <a href="https://github.com/Vincentnguyencreative06-stack" target="_blank" rel="noreferrer"><span>GitHub</span><strong>Technical profile</strong><ArrowUpRight /></a>
      </section>
    </>
  );
}
