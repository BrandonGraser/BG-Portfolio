import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "The Bayou — Brandon Graser",
  description: "Food photography and social campaign design for The Bayou, a Southern comfort food restaurant in Bethlehem, Pennsylvania.",
  openGraph: {
    title: "The Bayou — Brandon Graser",
    description: "A social-first restaurant campaign built from original food photography.",
    images: [{ url: "/work/the-bayou/nashville-chicken.jpg", alt: "The Bayou Nashville chicken sandwich campaign" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Bayou — Brandon Graser",
    description: "A social-first restaurant campaign built from original food photography.",
    images: ["/work/the-bayou/nashville-chicken.jpg"],
  },
};

export default function BayouCaseStudy() {
  return (
    <main className="bayou-case">
      <SiteHeader />
      <section className="bayou-intro">
        <div className="bayou-heading">
          <span>01 · Social campaign / food photography</span>
          <h1>The Bayou</h1>
        </div>
        <div className="bayou-copy">
          <p>The Bayou is a Southern comfort food restaurant in Bethlehem, Pennsylvania. I overhauled its social media marketing approach, creating a repeatable visual system built around original food photography and direct promotional graphics.</p>
          <p>Each month I photographed the dishes the restaurant wanted to promote, then turned those images into social content for specials, recurring events, and new menu items. During the pandemic, the system expanded to include Grubhub and delivery-focused offers that helped the restaurant continue reaching customers.</p>
          <dl>
            <div><dt>Role</dt><dd>Photography, art direction, social design</dd></div>
            <div><dt>Location</dt><dd>Bethlehem, Pennsylvania</dd></div>
          </dl>
        </div>
      </section>
      <section className="bayou-gallery">
        <figure className="bayou-gallery-wide"><Image src="/work/the-bayou/nashville-chicken.jpg" alt="Nashville chicken sandwich promotional artwork" width={2160} height={2700} priority sizes="(max-width: 760px) 92vw, 74vw" /></figure>
        <figure><Image src="/work/the-bayou/bourbon-berries.jpg" alt="Bourbon and berries drink-of-the-week campaign artwork" width={2160} height={2700} sizes="(max-width: 760px) 92vw, 36vw" /></figure>
        <figure><Image src="/work/the-bayou/poutine-fries.png" alt="Poutine fries promotional artwork" width={1728} height={2160} sizes="(max-width: 760px) 92vw, 36vw" /></figure>
        <figure className="bayou-gallery-wide"><Image src="/work/the-bayou/wing-night.jpg" alt="Wing Night promotional artwork" width={3240} height={4050} sizes="(max-width: 760px) 92vw, 74vw" /></figure>
      </section>
      <div className="simple-footer"><span>© 2026 Brandon Graser</span><a href="/work">Back to work</a></div>
    </main>
  );
}
