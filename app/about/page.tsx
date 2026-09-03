import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "About", description: "The story behind Vincent Nguyen's path through logistics, education, media and analytics." };

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About / 01" title="A curious route into analytics." intro="I did not arrive through a straight line. I arrived by paying attention—to industries, to audiences and to the difference between intuition and evidence." aside="Perceptive · Driven · Genuine" />

      <section className="shell editorial-grid section-pad-top">
        <figure className="editorial-image sticky-image"><img src="/assets/images/about-writing.webp" alt="Vincent writing at a desk" /><figcaption>Thinking often begins on paper.</figcaption></figure>
        <div className="longform">
          <Reveal>
            <p className="chapter">01 — The first discipline</p>
            <h2>Logistics taught me to see systems.</h2>
            <p>When I entered university, logistics and supply chain management carried enormous promise in Vietnam. In the aftermath of COVID-19, global companies were reconsidering where they manufactured, assembled and researched. Vietnam stood to benefit—and would need people capable of understanding the systems behind that growth.</p>
            <p>Studying the field gave me a language for flows, constraints, trade-offs and operations. More importantly, it taught me that business problems rarely exist in isolation.</p>
          </Reveal>
          <Reveal>
            <p className="chapter">02 — The turning point</p>
            <h2>An audience became my first living dataset.</h2>
            <p>I began Vincent Radio with instinct: academic, psychology-heavy subjects that genuinely interested me. The work was thoughtful, but the audience response was quiet. Intuition alone was not enough.</p>
            <p>Using Spotify for Podcasters and Excel, I studied age segments, episode performance, drop-off curves and content categories. Seventy-two per cent of my listeners were aged 18–27, and emotionally digestible storytelling repeatedly outperformed more technical episodes.</p>
            <p>I changed three things: episode length, the balance between academic material and personal experience, and the marketing funnel bringing listeners into the show. Six months after launch, episode #11—<em>Trust Issues: Imperfect, So What?</em>—became the first breakthrough with 34,000 listens.</p>
            <div className="pull-stat"><strong>Top 2</strong><span>across podcasts on Spotify Vietnam, June 2023</span></div>
            <p>By early 2026, Vincent Radio had passed one million streams. The experience gave me my clearest lesson in analytics: a number is not the end of a story; it is a way into human needs, behaviour and choice.</p>
          </Reveal>
          <Reveal>
            <p className="chapter">03 — The bridge</p>
            <h2>Why consulting makes sense to me.</h2>
            <p>Consulting sits at the intersection of my strongest instincts: communicating clearly, understanding people and culture, examining how organisations operate, and caring about what a client actually needs.</p>
            <p>I am especially drawn to business transformation, process improvement and customer experience—problems where analysis matters only if people can understand and use it.</p>
          </Reveal>
          <Reveal>
            <p className="chapter">04 — Learning as a practice</p>
            <h2>I learnt to build before I felt ready.</h2>
            <p>I prepared independently for two months before achieving IELTS 7.5 on my first attempt in 2022. I built a podcast from nothing and reached Spotify Vietnam&apos;s Top 2 within six months. Later, I taught myself Data/BI over half a year while managing a full-time role, a part-time role and an international scholarship application.</p>
            <p>Self-learning, to me, is not a personality label. It is a repeated habit of finding a way forward with care, discipline and curiosity.</p>
          </Reveal>
          <Reveal>
            <p className="chapter">05 — Research-minded</p>
            <h2>A family tradition, interpreted differently.</h2>
            <p>My grandparents, parents and I make three generations of educators. That history shaped my belief that useful knowledge should travel: from one person to another, and from one generation to the next.</p>
            <p>Today, my research interests centre on analytics, human-centred technology, responsible AI and organisational decision-making. The questions are public; the work in development remains private.</p>
            <Link className="text-link" href="/research">Explore my research interests <ArrowUpRight size={15} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="shell margin-note section-pad">
        <span>*</span>
        <p>A CV is useful, but never complete. <Link href="/marginalia">There is more in the margins. ↗</Link></p>
      </section>
    </>
  );
}
