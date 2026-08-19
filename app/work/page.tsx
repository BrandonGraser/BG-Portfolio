import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

const projects = [
  { number: "01", title: "Keystone Command Center", type: "Product design / development", format: "landscape" },
  { number: "02", title: "The Bayou", type: "Social campaign / food photography", format: "portrait", href: "/work/the-bayou", image: "/work/the-bayou/chickn.png" },
  { number: "03", title: "Polysynth", type: "Identity concept / campaign system", format: "square", href: "/work/polysynth", image: "/work/polysynth/brand-sheet.png", alt: "Polysynth identity system and geometric P mark" },
  { number: "04", title: "Old Lighthouse Co.", type: "Web design / brand experience", format: "square" },
  { number: "05", title: "Music Merchandise", type: "Apparel / production design", format: "wide" },
  { number: "06", title: "Alamar", type: "Email campaigns / digital design", format: "portrait" },
  { number: "07", title: "Selected Identities", type: "Brand systems / identity", format: "landscape" },
];

export default function WorkPage() {
  return (
    <main className="gallery-page"><SiteHeader />
      <section className="portfolio-wall" aria-label="Selected portfolio projects">
        {projects.map((project) => (
          <article className={`portfolio-tile tile-${project.format}`} key={project.title}>
            {project.image ? (
              <Link className="tile-project-link" href={project.href ?? "/work"} aria-label={`View ${project.title} case study`}>
                <Image className="tile-project-image" src={project.image} alt={project.alt ?? `${project.title} project cover`} fill sizes="(max-width: 760px) 100vw, (max-width: 980px) 50vw, 33vw" />
                <div className="tile-caption"><span>{project.number}</span><h1>{project.title}</h1><p>{project.type}</p></div>
              </Link>
            ) : (
              <><div className="tile-placeholder" role="img" aria-label={`${project.title} image placeholder`}><span>Image placeholder</span><small>{project.format}</small></div><div className="tile-caption"><span>{project.number}</span><h1>{project.title}</h1><p>{project.type}</p></div></>
            )}
          </article>
        ))}
      </section>
      <div className="simple-footer"><span>© 2026 Brandon Graser</span><a href="https://www.linkedin.com/in/brandon-graser1/">LinkedIn</a></div>
    </main>
  );
}
