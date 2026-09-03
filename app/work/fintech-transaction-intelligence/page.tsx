import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "FinTech Transaction Intelligence", description: "An end-to-end FinTech analytics case study across Python, BigQuery, SQL and Power BI." };
const dashboardUrl = "https://app.powerbi.com/view?r=eyJrIjoiZjFiNjVkNzUtODYzYi00MzcxLWE2YzMtNzVlYjUzOTViNjZhIiwidCI6IjVlOGIzMjY5LTc2Y2EtNDU3Yy04NDdmLTQ0NGUzZGI5ODZhNyIsImMiOjl9";

export default function FintechCaseStudy() {
  const process = ["Business context", "Python EDA", "Data pipeline", "BigQuery", "SQL modelling", "Power BI", "C-level narrative"];
  return (
    <>
      <article className="case-hero shell section-pad">
        <Link className="back-link" href="/work"><ArrowLeft size={15} /> All work</Link>
        <div className="case-title-grid">
          <div><p className="eyebrow">Case study 01 / Financial technology</p><h1>FinTech Transaction Intelligence</h1></div>
          <div className="case-summary"><p>An end-to-end analytics project examining performance, customers, payment behaviour, fraud and operational errors across 13.31 million transactions.</p><a className="button button-solid" href={dashboardUrl} target="_blank" rel="noreferrer">Open Power BI report <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="case-meta"><span><small>Role</small>Independent · End-to-end</span><span><small>Date</small>August 2026</span><span><small>Stack</small>Python · BigQuery · SQL · Power BI</span></div>
        <figure className="case-cover"><img src="/assets/images/fintech-cover.webp" alt="Overview page of the FinTech Transaction Intelligence dashboard" /><figcaption>Executive overview · Original dashboard artefact</figcaption></figure>
      </article>

      <section className="case-body shell section-pad-top">
        <aside className="case-contents"><span>On this page</span><a href="#challenge">Challenge</a><a href="#approach">Approach</a><a href="#findings">Findings</a><a href="#recommendations">Recommendations</a><a href="#artefacts">Artefacts</a></aside>
        <div className="case-main">
          <Reveal as="section" className="case-section" ><div id="challenge" className="anchor" />
            <p className="chapter">01 — Challenge</p><h2>Turn transaction volume into an operating view.</h2>
            <p>The project required more than a dashboard. I needed to organise a large transaction dataset into a decision system that could answer four connected questions: how the business was performing, which customers and products created value, where fraud was concentrated, and which errors were preventing otherwise valid transactions.</p>
            <div className="two-col-notes"><div><span>Objective</span><p>Create an executive view that moves from headline performance to actionable operational detail.</p></div><div><span>Scope</span><p>13.31 million transactions across customers, cards, merchants, channels, fraud labels and error conditions.</p></div></div>
          </Reveal>
          <Reveal as="section" className="case-section"><div id="approach" className="anchor" />
            <p className="chapter">02 — Approach</p><h2>A complete path from raw data to recommendation.</h2>
            <ol className="process-list">{process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}</ol>
            <p>I used Python to understand structure, quality and distributions, then built a pipeline into Google BigQuery. SQL transformed the analytical model into reporting tables, which were imported into Power BI for visual exploration and an executive narrative.</p>
            <div className="tool-row"><span>Python</span><span>Google BigQuery</span><span>SQL</span><span>Power BI</span><span>Excel</span></div>
          </Reveal>
          <Reveal as="section" className="case-section"><div id="findings" className="anchor" />
            <p className="chapter">03 — Findings</p><h2>A strong core business—with risk concentrated online.</h2>
            <div className="stat-grid"><div><strong>US$706.9M</strong><span>gross transaction value</span></div><div><strong>98.41%</strong><span>payment success</span></div><div><strong>1.59%</strong><span>error rate</span></div><div><strong>0.15%</strong><span>fraud rate on labelled transactions</span></div></div>
            <div className="finding-list">
              <article><span>Customer value</span><h3>Value was meaningfully concentrated.</h3><p>The top 10% of customers contributed 33.8% of total value. Customers aged 45–54 generated US$191M, while those aged 65+ contributed US$164M. Good-credit customers represented US$0.34B.</p></article>
              <article><span>Payment mix</span><h3>Debit and Mastercard carried the largest value.</h3><p>Debit accounted for US$406M and Mastercard for US$0.36B. High-limit cards contributed US$0.29B, while swipe transactions represented US$0.37B.</p></article>
              <article><span>Merchant demand</span><h3>Everyday categories drove frequency.</h3><p>Service Stations generated US$73M. Grocery and supermarket merchants recorded 1.6 million transactions, making them a central part of recurring payment behaviour.</p></article>
              <article><span>Risk and reliability</span><h3>Online activity was the clearest control point.</h3><p>Online fraud reached 0.84%, compared with 0.10% for chip and 0.03% for swipe. Online errors were also highest at 2.28%. Across 211.39K error transactions, insufficient balance was the leading reason.</p></article>
            </div>
          </Reveal>
          <Reveal as="section" className="case-section"><div id="recommendations" className="anchor" />
            <p className="chapter">04 — Recommendations</p><h2>Four priorities for management attention.</h2>
            <ol className="recommendation-list"><li><span>01</span><div><h3>Strengthen online fraud controls.</h3><p>Apply tighter authentication and behavioural monitoring where fraud incidence is materially higher.</p></div></li><li><span>02</span><div><h3>Protect high-value customer relationships.</h3><p>Design retention and service interventions around the segments responsible for disproportionate transaction value.</p></div></li><li><span>03</span><div><h3>Optimise debit payment reliability.</h3><p>Prioritise the payment method carrying the greatest volume and value when improving operational resilience.</p></div></li><li><span>04</span><div><h3>Reduce preventable payment failures.</h3><p>Address insufficient-balance errors through timely alerts, clearer recovery journeys and better retry logic.</p></div></li></ol>
          </Reveal>
          <Reveal as="section" className="case-section"><div id="artefacts" className="anchor" />
            <p className="chapter">05 — Artefacts</p><h2>The analysis, seen from different angles.</h2>
            <div className="dashboard-gallery">
              <figure><img src="/assets/images/fintech-performance.webp" alt="Transaction and merchant performance dashboard page" /><figcaption>Transaction and merchant performance</figcaption></figure>
              <figure><img src="/assets/images/fintech-customers.webp" alt="Customer and card insight dashboard page" /><figcaption>Customer and card insights</figcaption></figure>
              <figure><img src="/assets/images/fintech-fraud.webp" alt="Fraud and risk analysis dashboard page" /><figcaption>Fraud and risk analysis</figcaption></figure>
              <figure><img src="/assets/images/fintech-errors.webp" alt="Error analysis dashboard page" /><figcaption>Error analysis</figcaption></figure>
            </div>
            <div className="output-note"><span>Outputs</span><p>Interactive Power BI report · Executive presentation · Python EDA and pipeline · BigQuery SQL model</p></div>
            <a className="button button-solid" href={dashboardUrl} target="_blank" rel="noreferrer">Explore the interactive report <ArrowUpRight size={16} /></a>
          </Reveal>
        </div>
      </section>
      <section className="next-case shell section-pad"><span>Next case study</span><Link href="/work/supply-chain-performance-intelligence">Supply Chain Performance Intelligence <ArrowUpRight /></Link></section>
    </>
  );
}
