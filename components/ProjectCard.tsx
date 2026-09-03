import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ href, image, alt, number, title, meta, description }: { href: string; image: string; alt: string; number: string; title: string; meta: string; description: string }) {
  return (
    <article className="project-card">
      <Link className="project-image" href={href}><img src={image} alt={alt} /></Link>
      <div className="project-card-head"><span>{number}</span><span>{meta}</span></div>
      <h3><Link href={href}>{title}</Link></h3>
      <p>{description}</p>
      <Link className="text-link" href={href}>View case study <ArrowUpRight size={15} /></Link>
    </article>
  );
}
