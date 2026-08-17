import SiteHeader from "../components/SiteHeader";

export default function AboutPage() {
  return (
    <main className="about-page"><SiteHeader />
      <section className="about-hero">
        <h1>ABOUT ME</h1>
        <div className="about-collage" aria-hidden="true">
          <div className="about-piece piece-one"><span>Portrait placeholder</span></div><div className="about-piece piece-two"><span>Sketch placeholder</span></div><div className="about-piece piece-three"><span>Poster placeholder</span></div><div className="about-piece piece-four"><span>Studio placeholder</span></div><div className="about-piece piece-five"><span>Detail placeholder</span></div><div className="about-piece piece-six"><span>Object placeholder</span></div>
        </div>
      </section>
      <section className="about-story">
        <div className="story-section"><h2>Professionally speaking</h2><div><p>I&apos;m Brandon, a multidisciplinary graphic and web designer focused on identity, campaigns, digital experiences, and the systems behind creative work.</p><p>My work spans music, marketing, real estate, and mission-driven organizations. I build clear visual systems and production-ready assets that help ideas move.</p></div></div>
        <div className="story-section numbers-section"><h2>Numerically speaking</h2><div className="number-list"><span>6-person platform adoption</span><span>Multi-channel campaign experience</span><span>Brand, web &amp; product design</span><span>Bethlehem, Pennsylvania</span></div></div>
        <div className="story-section"><h2>Creatively speaking</h2><div><p>I like working across formats rather than staying in one lane. A project might begin as a visual identity, become a campaign, move into a website, and eventually need a better internal system to keep the entire team aligned.</p><p>The through-line is clarity: making the idea feel distinctive, usable, and ready to live in the real world.</p></div></div>
      </section>
      <div className="simple-footer"><span>© 2026 Brandon Graser</span><a href="https://www.linkedin.com/in/brandon-graser1/">LinkedIn</a></div>
    </main>
  );
}
