import SiteHeader from "../components/SiteHeader";

const projects = [
  { number: "01", title: "Keystone Command Center", type: "Product design / development", format: "landscape" },
  { number: "02", title: "Bayou Boys", type: "Campaign / art direction", format: "portrait" },
  { number: "03", title: "Old Lighthouse Co.", type: "Web design / brand experience", format: "square" },
  { number: "04", title: "Music Merchandise", type: "Apparel / production design", format: "wide" },
  { number: "05", title: "Alamar", type: "Email campaigns / digital design", format: "portrait" },
  { number: "06", title: "Selected Identities", type: "Brand systems / identity", format: "landscape" },
];

export default function WorkPage() {
  return (
    <main className="gallery-page"><SiteHeader />
      <section className="portfolio-wall" aria-label="Selected portfolio projects">
        {projects.map((project) => (
          <article className={`portfolio-tile tile-${project.format}`} key={project.title}>
            <div className="tile-placeholder" role="img" aria-label={`${project.title} image placeholder`}><span>Image placeholder</span><small>{project.format}</small></div>
            <div className="tile-caption"><span>{project.number}</span><h1>{project.title}</h1><p>{project.type}</p></div>
          </article>
        ))}
      </section>
      <div className="simple-footer"><span>© 2026 Brandon Graser</span><a href="https://www.linkedin.com/in/brandon-graser1/">LinkedIn</a></div>
    </main>
  );
}
