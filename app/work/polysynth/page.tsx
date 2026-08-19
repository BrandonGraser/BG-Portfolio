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
    <main className="bayou-case">
      <SiteHeader />
      <section className="bayou-intro">
        <div className="bayou-heading">
          <span>03 · Identity concept / campaign system</span>
          <h1>Polysynth</h1>
        </div>
        <div className="bayou-copy">
          <p>The identity exploration began while Polysynth was still in the early stages of developing a new kind of resin printer—one capable of combining multiple materials in a single print. The goal was a clean, sleek system that felt as precise and forward-looking as the technology itself.</p>
          <p>The symbol is assembled from distinct geometric parts, with each shape representing a different material entering the same print. Early color studies pushed that idea more literally, but the final monochrome direction felt sharper and allowed the structure of the mark to communicate without unnecessary noise.</p>
          <dl>
            <div><dt>Role</dt><dd>Identity, art direction, campaign exploration</dd></div>
            <div><dt>Context</dt><dd>Early-stage technology startup</dd></div>
          </dl>
        </div>
      </section>
      <section className="bayou-gallery" aria-label="Polysynth campaign applications">
        <figure>
          <Image src="/work/polysynth/brand-sheet.png" alt="Polysynth brand sheet showing wordmark and geometric P symbol" width={3500} height={3000} priority sizes="(max-width: 680px) 92vw, (max-width: 1100px) 46vw, 31vw" />
        </figure>
        {assets.map((asset) => (
          <figure key={asset.src}>
            <Image src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} sizes="(max-width: 680px) 92vw, (max-width: 1100px) 46vw, 31vw" />
          </figure>
        ))}
      </section>

      <div className="simple-footer"><span>© 2026 Brandon Graser</span><a href="/work">Back to work</a></div>
    </main>
  );
}
