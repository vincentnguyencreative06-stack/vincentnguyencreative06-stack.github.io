"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type CSSProperties, type MouseEvent, useEffect, useRef, useState } from "react";

type PortalPhase = "idle" | "entering" | "revealing";

export function SiteFooter() {
  const router = useRouter();
  const elsewhereRef = useRef<HTMLAnchorElement>(null);
  const timersRef = useRef<number[]>([]);
  const [portalPhase, setPortalPhase] = useState<PortalPhase>("idle");
  const [portalOrigin, setPortalOrigin] = useState({ x: "50%", y: "88%" });

  useEffect(() => {
    return () => timersRef.current.forEach(window.clearTimeout);
  }, []);

  function enterMarginalia(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();

    if (portalPhase !== "idle") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      router.push("/marginalia");
      return;
    }

    const rect = elsewhereRef.current?.getBoundingClientRect();
    if (rect) {
      setPortalOrigin({
        x: `${rect.left + rect.width / 2}px`,
        y: `${rect.top + rect.height / 2}px`,
      });
    }

    setPortalPhase("entering");
    timersRef.current.push(
      window.setTimeout(() => router.push("/marginalia"), 760),
      window.setTimeout(() => setPortalPhase("revealing"), 980),
      window.setTimeout(() => setPortalPhase("idle"), 1420),
    );
  }

  const portalStyle = {
    "--portal-x": portalOrigin.x,
    "--portal-y": portalOrigin.y,
  } as CSSProperties;

  return (
    <>
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
          <div className="secret-door">
            <Link
              ref={elsewhereRef}
              className="elsewhere secret-door-trigger"
              href="/marginalia"
              onClick={enterMarginalia}
              aria-label="Enter Marginalia"
            >
              <span className="secret-door-half secret-door-left">Else</span>
              <span className="secret-door-half secret-door-right">where</span>
              <span className="secret-door-star" aria-hidden="true">✦</span>
            </Link>
            <span className="secret-door-frame" aria-hidden="true">
              <span className="secret-door-preview" />
            </span>
            <span className="secret-door-whisper" aria-hidden="true">A room behind the résumé.</span>
            <span className="secret-door-spark spark-one" aria-hidden="true">✦</span>
            <span className="secret-door-spark spark-two" aria-hidden="true">·</span>
            <span className="secret-door-spark spark-three" aria-hidden="true">✧</span>
          </div>
          <span>Made with curiosity and strong coffee.</span>
        </div>
      </footer>

      <div
        className={`marginalia-portal portal-${portalPhase}`}
        style={portalStyle}
        aria-hidden="true"
      >
        <div className="marginalia-portal-copy">
          <span>A footnote with its own door</span>
          <strong>Marginalia</strong>
        </div>
      </div>
    </>
  );
}
