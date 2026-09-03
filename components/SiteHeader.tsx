"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const nav = [
  ["Work", "/work"],
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Research", "/research"],
  ["Résumé", "/resume"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  function toggleTheme() {
    const next = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("vincent-theme", next ? "dark" : "light");
  }

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Vincent Nguyen, home">Vincent Nguyen</Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-button" onClick={toggleTheme} aria-label="Toggle colour theme" title="Toggle colour theme">
            <Sun className="theme-sun" size={17} /><Moon className="theme-moon" size={17} />
          </button>
          <Link className="header-cta" href="/contact">Send a Note <ArrowUpRight size={15} /></Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {nav.map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link href="/contact" onClick={() => setOpen(false)}>Send a Note ↗</Link>
        </nav>
      )}
    </header>
  );
}
