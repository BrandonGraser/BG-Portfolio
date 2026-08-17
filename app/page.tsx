import SiteHeader from "./components/SiteHeader";

export default function Home() {
  return (
    <main className="home-page">
      <SiteHeader />
      <section className="hero" aria-labelledby="hero-title">
        <div className="eyebrow-row">
          <span>Brandon Graser — Graphic &amp; Web Designer</span>
          <span>Brand systems, campaigns &amp; digital products</span>
        </div>
        <h1 id="hero-title">BRANDON</h1>
        <div className="hero-collage" aria-hidden="true">
          <div className="collage-card collage-one"><span>Image placeholder</span><small>Poster / portrait</small></div>
          <div className="collage-card collage-two"><span>Image placeholder</span><small>Campaign / landscape</small></div>
          <div className="collage-card collage-three"><span>Image placeholder</span><small>Web design / square</small></div>
          <div className="collage-card collage-four"><span>Image placeholder</span><small>Editorial / portrait</small></div>
          <div className="collage-card collage-five"><span>Image placeholder</span><small>Identity / landscape</small></div>
          <div className="collage-card collage-six"><span>Image placeholder</span><small>Detail / portrait</small></div>
          <div className="collage-card collage-seven"><span>Image placeholder</span><small>Packaging / wide</small></div>
          <div className="collage-card collage-eight"><span>Image placeholder</span><small>Type study / tall</small></div>
          <div className="collage-card collage-nine"><span>Image placeholder</span><small>Motion / square</small></div>
        </div>
      </section>
    </main>
  );
}
