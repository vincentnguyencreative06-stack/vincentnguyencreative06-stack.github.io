import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Supply Chain Performance Intelligence", description: "A Power BI case study covering revenue, customers, warehouse performance and cancellations." };
const dashboardUrl = "https://app.powerbi.com/view?r=eyJrIjoiYWI0YWE1ODItMmY3Mi00ZmEyLWE3ZjctNzJhN2Q4OGE3ZDhjIiwidCI6IjVlOGIzMjY5LTc2Y2EtNDU3Yy04NDdmLTQ0NGUzZGI5ODZhNyIsImMiOjl9";

export default function SupplyChainCaseStudy() {
  const process = ["Import and inspect", "Power Query", "Data model and DAX", "Interactive Power BI report"];
  return (
    <>
      <article className="case-hero shell section-pad">
        <Link className="back-link" href="/work"><ArrowLeft size={15} /> All work</Link>
        <div className="case-title-grid"><div><p className="eyebrow">Case study 02 / Supply chain</p><h1>Supply Chain Performance Intelligence</h1></div><div className="case-summary"><p>A business-facing Power BI project translating a realistic international logistics dataset into connected views of revenue, customers, lead time and cancellations.</p><a className="button button-solid" href={dashboardUrl} target="_blank" rel="noreferrer">Open Power BI report <ArrowUpRight size={16} /></a></div></div>
        <div className="case-meta"><span><small>Role</small>Independent · Full build</span><span><small>Date</small>March 2026</span><span><small>Stack</small>Power Query · Data modelling · DAX · Power BI</span></div>
        <figure className="case-cover"><img src="/assets/images/supply-revenue.webp" alt="Supply Chain Performance Intelligence dashboard" /><figcaption>Revenue and route performance · Original dashboard artefact</figcaption></figure>
      </article>
      <section className="case-body shell section-pad-top">
        <aside className="case-contents"><span>On this page</span><a href="#challenge">Challenge</a><a href="#approach">Approach</a><a href="#findings">Findings</a><a href="#recommendations">Recommendations</a><a href="#artefacts">Artefacts</a></aside>
        <div className="case-main">
          <Reveal as="section" className="case-section"><div id="challenge" className="anchor" />
            <p className="chapter">01 — Challenge</p><h2>See the supply chain as one connected business system.</h2>
            <p>The brief called for a multi-page report covering commercial performance and operational execution. I structured the analysis so an executive could move from revenue and customer value into warehouse lead time and country-level cancellation risk without losing context.</p>
            <div className="two-col-notes"><div><span>Dataset</span><p>A realistic learning dataset and business brief supplied by Huy Data, a Data Analytics Manager. It is representative, not claimed as proprietary company data.</p></div><div><span>Model</span><p>Six connected tables: routes, product types, orders, products, warehouse activity and fact links.</p></div></div>
          </Reveal>
          <Reveal as="section" className="case-section"><div id="approach" className="anchor" />
            <p className="chapter">02 — Approach</p><h2>A focused Power BI workflow.</h2>
            <ol className="process-list compact-process">{process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}</ol>
            <p>I completed every stage of the Power BI build: transformations in Power Query, relationships and semantic modelling, calculated columns, DAX measures, business segmentation, interactive design and written actions. Python and SQL were intentionally outside the scope because the supplied tables were already structured for this learning brief.</p>
            <div className="tool-row"><span>Power Query</span><span>Data relationships</span><span>DAX</span><span>Power BI</span><span>Data storytelling</span></div>
          </Reveal>
          <Reveal as="section" className="case-section"><div id="findings" className="anchor" />
            <p className="chapter">03 — Findings</p><h2>Commercial strength depended on a concentrated network.</h2>
            <div className="stat-grid"><div><strong>VND 2.39B</strong><span>total revenue</span></div><div><strong>VND 799.1K</strong><span>average order value</span></div><div><strong>18 days</strong><span>average lead time</span></div><div><strong>73.17%</strong><span>completion rate</span></div></div>
            <div className="finding-list">
              <article><span>Market concentration</span><h3>Indonesia anchored the revenue base.</h3><p>Indonesia generated 81.69% of total revenue, approximately VND 1.95B, making capacity and service stability in that market disproportionately important.</p></article>
              <article><span>Order economics</span><h3>Consignment carried premium value.</h3><p>Consignment contributed 61.85% of revenue and an average order value of VND 1.72M. Vehicle equipment and parts produced 43.8%, while the top five categories represented 75.64%.</p></article>
              <article><span>Customer portfolio</span><h3>A small champion segment created most value.</h3><p>Across 675 customers, Champions represented 17.93% of customers yet 64.24% of value. Thirty-four customers, which constituted for 5.04%, were at risk of churning.</p></article>
              <article><span>Operational friction</span><h3>Lead time and cancellations exposed different pressure points.</h3><p>Average lead time was 18 days, with Vietnam&apos;s warehouse at 12 days and the 90th percentile at 35. Completion reached 73.17%; cancellations were 7.67%, rising to 15.88% in Japan.</p></article>
            </div>
          </Reveal>
          <Reveal as="section" className="case-section"><div id="recommendations" className="anchor" />
            <p className="chapter">04 — Recommendations</p><h2>Protect the engine while fixing the leaks.</h2>
            <ol className="recommendation-list"><li><span>01</span><div><h3>Reduce the Vietnam warehouse bottleneck.</h3><p>Examine the processes behind its longer lead time and prioritise high-impact improvements.</p></div></li><li><span>02</span><div><h3>Protect Indonesian capacity.</h3><p>Build contingency and service safeguards around the market contributing more than four-fifths of revenue.</p></div></li><li><span>03</span><div><h3>Investigate Japanese cancellations.</h3><p>Analyse order, product and service patterns behind the country&apos;s elevated cancellation rate.</p></div></li><li><span>04</span><div><h3>Act on customer and product concentration.</h3><p>Develop retention for Champions and churn-risk customers while strengthening the high-value Consignment offer.</p></div></li></ol>
          </Reveal>
          <Reveal as="section" className="case-section"><div id="artefacts" className="anchor" />
            <p className="chapter">05 — Artefacts</p><h2>A dashboard designed for progressive detail.</h2>
            <div className="dashboard-gallery">
              <figure><img src="/assets/images/supply-revenue.webp" alt="Revenue and route dashboard page" /><figcaption>Revenue and route performance</figcaption></figure>
              <figure><img src="/assets/images/supply-customers.webp" alt="Customer insight dashboard page" /><figcaption>Customer value and retention</figcaption></figure>
              <figure><img src="/assets/images/supply-warehouse.webp" alt="Warehouse performance dashboard page" /><figcaption>Warehouse and lead-time performance</figcaption></figure>
              <figure><img src="/assets/images/supply-cancellations.webp" alt="Cancellation analysis dashboard page" /><figcaption>Cancellation analysis</figcaption></figure>
            </div>
            <div className="output-note"><span>Outputs</span><p>Interactive Power BI report · Data model · DAX measures · Embedded insight and action pages</p></div>
            <a className="button button-solid" href={dashboardUrl} target="_blank" rel="noreferrer">Explore the interactive report <ArrowUpRight size={16} /></a>
          </Reveal>
        </div>
      </section>
      <section className="next-case shell section-pad"><span>Return to</span><Link href="/work">Selected work <ArrowUpRight /></Link></section>
    </>
  );
}
