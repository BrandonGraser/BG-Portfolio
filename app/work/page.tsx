import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

const projects = [
  { number: "01", title: "Keystone Command Center", type: "Product design / internal systems", format: "landscape", href: "/work/keystone", image: "/work/thumbnails/keystone.webp", alt: "Keystone Command Center campaign analytics dashboard in a studio setting" },
  { number: "02", title: "The Bayou", type: "Social campaign / food photography", format: "portrait", href: "/work/the-bayou", image: "/work/thumbnails/the-bayou.webp" },
  { number: "03", title: "Polysynth", type: "Identity concept / campaign system", format: "square", href: "/work/polysynth", image: "/work/thumbnails/polysynth.webp", alt: "Polysynth identity system with geometric P mark and oversized wordmark" },
  { number: "04", title: "Bun Busterz", type: "Brand identity / restaurant experience", format: "square", href: "/work/bun-busterz", image: "/work/thumbnails/bun-busterz.webp", alt: "Bun Busterz logo on a black background" },
  { number: "05", title: "Illumitati", type: "Web design / interactive experience", format: "landscape", href: "/work/illumitati", image: "/work/thumbnails/illumitati.webp", alt: "Illumitati website designed as a nostalgic computer desktop" },
  { number: "06", title: "Music Merchandise", type: "Apparel / production design", format: "wide" },
  { number: "07", title: "Alamar", type: "Email campaigns / digital design", format: "portrait" },
  { number: "08", title: "Selected Identities", type: "Brand systems / identity", format: "landscape" },
];

export default function WorkPage() {
  return (
    <main className="gallery-page"><SiteHeader />
      <section className="portfolio-wall" aria-label="Selected portfolio projects">
        {projects.map((project, index) => (
          <article className={`portfolio-tile tile-${project.format}`} key={project.title}>
            {project.image ? (
              <Link className="tile-project-link" href={project.href ?? "/work"} aria-label={`View ${project.title} case study`}>
                <Image className="tile-project-image" src={project.image} alt={project.alt ?? `${project.title} project cover`} fill priority={index === 0} quality={75} sizes="(max-width: 760px) 100vw, (max-width: 980px) 50vw, 33vw" />
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
