import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Bun Busterz — Brandon Graser",
  description: "Brand identity, illustration, menu design, and environmental graphics for Bun Busterz in Easton, Pennsylvania.",
  openGraph: {
    title: "Bun Busterz — Brandon Graser",
    description: "A bold, playful restaurant identity built around a customizable gourmet hot dog experience.",
    images: [{ url: "/work/bun-busterz/menu-mockup.png", alt: "Bun Busterz printed menu system" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bun Busterz — Brandon Graser",
    description: "A bold, playful restaurant identity built around a customizable gourmet hot dog experience.",
    images: ["/work/bun-busterz/menu-mockup.png"],
  },
};

const images = [
  { src: "/work/bun-busterz/menu-mockup.png", alt: "Bun Busterz menu system presented as printed restaurant collateral", width: 1536, height: 1024 },
  { src: "/work/bun-busterz/logo-main.png", alt: "Bun Busterz primary logo and hot dog mark", width: 9600, height: 9600 },
  { src: "/work/bun-busterz/storefront.png", alt: "Bun Busterz storefront signage in Easton, Pennsylvania", width: 638, height: 510 },
  { src: "/work/bun-busterz/food-photo.png", alt: "Bun Busterz sandwich served on branded paper", width: 510, height: 510 },
  { src: "/work/bun-busterz/menu-wall.png", alt: "Bun Busterz illustrated ordering system installed inside the restaurant", width: 677, height: 510 },
  { src: "/work/bun-busterz/menu-build.jpg", alt: "Bun Busterz build-your-own and signature menu design", width: 3841, height: 2161 },
  { src: "/work/bun-busterz/menu-toppings.jpg", alt: "Bun Busterz toppings, sauces, sides, and drinks menu design", width: 3841, height: 2161 },
  { src: "/work/bun-busterz/packaging-system.png", alt: "Bun Busterz packaging, apparel, and merchandise system", width: 2420, height: 1870 },
];

export default function BunBusterzCaseStudy() {
  return (
    <main className="bayou-case">
      <SiteHeader />
      <section className="bayou-intro">
        <div className="bayou-heading">
          <span>04 · Brand identity / restaurant experience</span>
          <h1>Bun Busterz</h1>
        </div>
        <div className="bayou-copy">
          <p>Bun Busterz is a build-your-own gourmet hot dog restaurant in Easton, Pennsylvania. I created a bright, personality-led identity designed to make an unusually customizable menu feel approachable, energetic, and easy to navigate.</p>
          <p>The system pairs a hand-drawn script mark with bold utility typography, a warm orange-led palette, and a family of playful ingredient illustrations. Those elements extend from the storefront and interior wall graphics to printed menus, food packaging, and the step-by-step ordering experience—giving the restaurant one recognizable voice at every customer touchpoint.</p>
          <dl>
            <div><dt>Role</dt><dd>Brand identity, illustration, menu design</dd></div>
            <div><dt>Scope</dt><dd>Signage, menus, packaging, environmental graphics</dd></div>
          </dl>
        </div>
      </section>
      <section className="bayou-gallery">
        {images.map((image, index) => (
          <figure key={image.src}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority={index === 0} sizes="(max-width: 760px) 92vw, (max-width: 980px) 46vw, 31vw" />
          </figure>
        ))}
      </section>
      <div className="simple-footer"><span>© 2026 Brandon Graser</span><a href="/work">Back to work</a></div>
    </main>
  );
}
