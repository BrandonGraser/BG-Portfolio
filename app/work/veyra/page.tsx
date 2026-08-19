import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Veyra — Brandon Graser",
  description: "Brand identity and packaging system for Veyra, a personality-led haircare line organized around individual hair goals.",
  openGraph: {
    title: "Veyra — Brandon Graser",
    description: "A flexible identity and packaging system that makes different hair treatments immediately recognizable.",
    images: [{ url: "/work/veyra/product-range.webp", alt: "Veyra haircare product range" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veyra — Brandon Graser",
    description: "A flexible identity and packaging system for a personality-led haircare line.",
    images: ["/work/veyra/product-range.webp"],
  },
};

const images = [
  { src: "/work/veyra/packaging-scene.webp", alt: "Veyra shampoo and conditioner packaging with coordinating cartons", width: 1121, height: 1403 },
  { src: "/work/veyra/wordmark-system.webp", alt: "Veyra rounded wordmark in dark and reversed colorways", width: 1124, height: 1399 },
  { src: "/work/veyra/treatment-language.webp", alt: "Veyra treatment categories expressed through distinct label silhouettes", width: 1122, height: 1402 },
  { src: "/work/veyra/floating-range.webp", alt: "Four Veyra treatments in a colorful floating product composition", width: 1172, height: 1342 },
  { src: "/work/veyra/product-pair.webp", alt: "Veyra volumizing shampoo and conditioner product pair", width: 1121, height: 1403 },
  { src: "/work/veyra/product-range.webp", alt: "Complete Veyra haircare range arranged in a sculptural stack", width: 1088, height: 1446 },
  { src: "/work/veyra/digital-storefront.webp", alt: "Veyra ecommerce experience shown on a laptop over water", width: 1118, height: 1407 },
  { src: "/work/veyra/retail-display.webp", alt: "Veyra perfect curls retail display", width: 1082, height: 1453 },
  { src: "/work/veyra/billboard.webp", alt: "Veyra haircare campaign billboard", width: 1122, height: 1402 },
];

export default function VeyraCaseStudy() {
  return (
    <main className="bayou-case">
      <SiteHeader />
      <section className="bayou-intro">
        <div className="bayou-heading">
          <span>06 · Brand identity / packaging system</span>
          <h1>Veyra</h1>
        </div>
        <div className="bayou-copy">
          <p>Veyra is a haircare identity built around a simple idea: different hair goals should feel distinct without fragmenting the brand. The challenge was to turn a growing treatment range into a system that shoppers could understand quickly—and still want to leave out on the bathroom shelf.</p>
          <p>I developed a soft, expressive wordmark and a family of treatment-specific label shapes. Curves, scallops, and stacked forms give each formula its own visual signal, while a shared typographic voice and tightly controlled palette keep every bottle unmistakably Veyra. The system scales from packaging and retail displays to ecommerce and campaign work without losing its personality.</p>
          <dl>
            <div><dt>Role</dt><dd>Brand identity, packaging, art direction</dd></div>
            <div><dt>Scope</dt><dd>Product system, ecommerce, retail, campaign</dd></div>
          </dl>
        </div>
      </section>
      <section className="bayou-gallery" aria-label="Veyra identity and packaging applications">
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
