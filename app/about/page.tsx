import SiteHeader from "../components/SiteHeader";

export default function AboutPage() {
  return (
    <main className="inner-page">
      <SiteHeader />
      <section className="page-intro about-intro"><span>About Brandon</span><h1>DESIGN<br />WITH RANGE.</h1></section>
      <section className="about">
        <p className="about-lead">A multidisciplinary designer who moves between identity, campaigns, web experiences, and the operational systems behind creative work.</p>
        <div className="about-grid">
          <p>My work spans music, marketing, real estate, and mission-driven organizations. I build clear visual systems, production-ready assets, and digital experiences that help ideas move.</p>
          <div className="services"><span>Brand identity</span><span>Campaign design</span><span>Web &amp; UX</span><span>Presentation design</span><span>Merchandise</span><span>Creative systems</span></div>
        </div>
      </section>
    </main>
  );
}
