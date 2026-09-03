import Link from "next/link";

export default function NotFound() {
  return <section className="not-found shell section-pad"><p className="eyebrow">404 / A missing page</p><h1>This note slipped out of the archive.</h1><p>The page may have moved, or perhaps it never belonged in the catalogue.</p><Link className="button button-solid" href="/">Return home</Link></section>;
}
