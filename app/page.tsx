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
          <div className="collage-card collage-one collage-image"><img src="/home/home-varzenal.webp" alt="" /></div>
          <div className="collage-card collage-two collage-image"><img src="/home/home-more-is-more.webp" alt="" /></div>
          <div className="collage-card collage-three collage-image"><img src="/home/home-football.webp" alt="" /></div>
          <div className="collage-card collage-four collage-image"><img src="/home/home-fall-fiesta.webp" alt="" /></div>
          <div className="collage-card collage-five collage-image"><img src="/home/home-kawaii.webp" alt="" /></div>
          <div className="collage-card collage-six"><span>Image placeholder</span><small>Detail / portrait</small></div>
          <div className="collage-card collage-seven"><span>Image placeholder</span><small>Packaging / wide</small></div>
          <div className="collage-card collage-eight"><span>Image placeholder</span><small>Type study / tall</small></div>
          <div className="collage-card collage-nine"><span>Image placeholder</span><small>Motion / square</small></div>
        </div>
      </section>
    </main>
  );
}
