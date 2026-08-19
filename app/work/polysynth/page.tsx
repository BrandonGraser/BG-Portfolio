import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Polysynth — Brandon Graser",
  description: "An early-stage identity exploration and campaign system for Polysynth, a multi-material resin printing platform.",
  openGraph: {
    title: "Polysynth — Brandon Graser",
    description: "Identity exploration for the first multi-material resin printer.",
    images: [{ url: "/work/polysynth/brand-sheet.png", alt: "Polysynth identity concept" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polysynth — Brandon Graser",
    description: "Identity exploration for the first multi-material resin printer.",
    images: ["/work/polysynth/brand-sheet.png"],
  },
};

const assets = [
  { src: "/work/polysynth/transit-billboard.png", width: 1537, height: 1023, alt: "Polysynth transit campaign billboard" },
  { src: "/work/polysynth/architectural-billboard.png", width: 1443, height: 1090, alt: "Polysynth architectural billboard" },
  { src: "/work/polysynth/poster-triptych.png", width: 1403, height: 1121, alt: "Polysynth One Print, Zero Assembly poster series" },
  { src: "/work/polysynth/truck-and-badge.png", width: 1442, height: 1091, alt: "Polysynth vehicle graphics and employee identification" },
];

export default function PolysynthCaseStudy() {
  return (
    <main className="polysynth-case">
      <SiteHeader />
      <section className="polysynth-hero">
        <div className="polysynth-kicker">
          <span>03 · Identity concept / campaign system</span>
          <span>2026</span>
        </div>
        <h1>polysynth</h1>
        <div className="polysynth-hero-meta">
          <p>Multi-Material<br />Resin Printing</p>
          <p>One print.<br />Zero assembly.</p>
        </div>
      </section>

      <section className="polysynth-story">
        <div>
          <span className="section-label">The beginning</span>
          <p className="polysynth-lead">The exploration began while Polysynth was still in the early stages of developing a new kind of resin printer—one capable of combining multiple materials in a single print.</p>
        </div>
        <div className="polysynth-body">
          <p>The goal was a visual identity that felt as precise and forward-looking as the technology itself: clean, sleek, modern, and credible enough to introduce an entirely new product category.</p>
          <p>The symbol is assembled from distinct geometric parts. Each shape represents a different material entering the same print, while the complete mark resolves into one unified form.</p>
          <p>Early color studies pushed the material idea more literally. Ultimately, the solid monochrome system felt sharper and more ownable—letting the structure of the mark communicate the concept without unnecessary noise.</p>
          <dl>
            <div><dt>Focus</dt><dd>Identity, art direction, campaign exploration</dd></div>
            <div><dt>Context</dt><dd>Early-stage technology startup</dd></div>
          </dl>
        </div>
      </section>

      <figure className="polysynth-brand-sheet">
        <Image src="/work/polysynth/brand-sheet.png" alt="Polysynth brand sheet showing wordmark and geometric P symbol" width={3500} height={3000} priority sizes="100vw" />
      </figure>

      <section className="polysynth-statement" aria-label="Campaign statement">
        <span>ONE PRINT.</span>
        <span>ZERO ASSEMBLY.</span>
        <span>UP TO 8 MATERIALS.</span>
      </section>

      <section className="polysynth-gallery" aria-label="Polysynth campaign applications">
        {assets.map((asset) => (
          <figure key={asset.src}>
            <Image src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} sizes="(max-width: 760px) 92vw, 50vw" />
          </figure>
        ))}
      </section>

      <div className="simple-footer"><span>© 2026 Brandon Graser</span><a href="/work">Back to work</a></div>
    </main>
  );
}
