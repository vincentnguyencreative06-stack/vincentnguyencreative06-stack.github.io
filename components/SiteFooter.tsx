import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="wordmark footer-wordmark" href="/">Vincent Nguyen</Link>
          <p>Data/BI Analyst &amp; Consultant</p>
          <p>Based in Glasgow, Scotland. Available across the UK and remotely.</p>
        </div>
        <div className="footer-links">
          <Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/experience">Experience</Link><Link href="/research">Research</Link><Link href="/resume">Résumé</Link><Link href="/contact">Contact</Link>
        </div>
        <div className="footer-social">
          <a href="mailto:vincentnguyen.creative06@gmail.com">Email ↗</a>
          <a href="https://www.linkedin.com/in/vinh-nguyen-9453b7239" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/Vincentnguyencreative06-stack" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Vincent Nguyen</span>
        <Link className="elsewhere" href="/marginalia">Elsewhere ✦</Link>
        <span>Made with curiosity and strong coffee, and matcha latte.</span>
      </div>
    </footer>
  );
}
