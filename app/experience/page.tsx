import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "Experience", description: "Experience and education across analytics, teaching, media and business." };

const roles = [
  { period: "February–August 2026", title: "English Trainer", org: "LG Electronics Development Vietnam", type: "Full-time", body: "Designed and adapted workplace English training for learner needs, delivering group and one-to-one sessions for engineers and professionals.", evidence: "Learners improved by 0.5–1.0 IELTS bands or 10–30 TOEIC Speaking points." },
  { period: "2023–Present", title: "Founder & Creative Producer", org: "Vincent Radio", type: "Independent", body: "Research, scripting, voice-over, recording, editing and multi-platform audience development for a youth-centred Vietnamese podcast.", evidence: "Top 2 on Spotify Vietnam in June 2023; more than one million streams by early 2026." },
  { period: "August 2022–August 2026", title: "English Teacher", org: "WEDUSO", type: "Part-time", body: "Delivered IELTS instruction for small groups and personalised coaching, adapting explanations and materials across varied skill levels.", evidence: "Part of four years teaching approximately 200–300 learners across dozens of classes." },
];

export default function ExperiencePage() {
  return (
    <>
      <PageIntro eyebrow="Experience / Education" title="Learning, teaching and building in public." intro="My professional path connects communication, independent creative work and business analysis - each sharpening the way I understand and explain complex ideas." aside="Available from September 2026" />
      <section className="shell section-pad-top">
        <div className="section-heading"><p className="eyebrow">Experience</p><h2>A timeline of applied communication.</h2></div>
        <div className="timeline">
          {roles.map((role) => (
            <article className="timeline-item" key={role.title + role.org}>
              <div className="timeline-date"><span>{role.period}</span><em>{role.type}</em></div>
              <div><h3>{role.title}</h3><p className="org">{role.org}</p><p>{role.body}</p><p className="evidence-line">{role.evidence}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="education-band section-pad">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">Education</p><h2>Business systems, analysis and consultation.</h2></div>
          <div className="education-grid">
            <article><span>2026–2027</span><h3>MSc Business Analysis and Consulting</h3><p>University of Strathclyde</p><em>Starting September 2026</em></article>
            <article><span>2021–2025</span><h3>Bachelor&apos;s Degree in Logistics and Supply Chain Management</h3><p>National Economics University</p><em>GPA 3.82/4.00 · High Distinction · English-taught</em></article>
          </div>
          <div className="course-grid">
            <div><span>Selected coursework</span><p>Business Statistics</p><p>Project Cost–Benefit Analysis</p><p>Research Methods for Socio-Economic Studies</p></div>
            <div><span>Credentials</span><p>IELTS Academic Band 8.0 · IDP, 2025</p><p>International Certification of Digital Literacy · 2025</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
