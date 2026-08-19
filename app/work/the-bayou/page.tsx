import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

const projectDetails = [
  ["Client", "The Bayou"],
  ["Location", "Bethlehem, Pennsylvania"],
  ["Discipline", "Photography, art direction, social design"],
  ["Focus", "Restaurant marketing & delivery campaigns"],
];

export default function BayouCaseStudy() {
  return (
    <main className="bayou-case">
      <SiteHeader />

      <section className="bayou-hero">
        <div className="bayou-overline"><span>Case study 01</span><span>Social campaign · Food photography</span></div>
        <h1>THE<br />BAYOU</h1>
        <p className="bayou-hero-copy">Turning a monthly restaurant menu into an always-on social campaign.</p>
      </section>

      <section className="bayou-intro">
        <p className="bayou-lead">A new visual appetite for a Southern comfort food staple.</p>
        <div className="bayou-summary">
          <p>The Bayou needed more than isolated promotions. I overhauled its social media approach by creating a repeatable system built around original food photography, bold type, and timely offers.</p>
          <p>Each month began inside the restaurant: photographing the dishes the team wanted to promote, then transforming those images into campaign-ready graphics designed to stop the scroll and drive orders.</p>
        </div>
      </section>

      <figure className="bayou-image bayou-image-hero">
        <Image src="/work/the-bayou/nashville-chicken.jpg" alt="Nashville chicken sandwich promotional artwork" fill priority sizes="100vw" />
      </figure>

      <section className="bayou-details">
        <div className="bayou-detail-list">
          {projectDetails.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
        </div>
        <div className="bayou-impact">
          <span>THE IMPACT</span>
          <p>The refreshed campaign helped bring more customers through the door and gave the restaurant a flexible promotional engine when dining habits changed during the pandemic.</p>
          <p>Delivery specials and Grubhub-focused creative kept the food visible, desirable, and easy to order when off-premise sales mattered most.</p>
        </div>
      </section>

      <section className="bayou-process">
        <div><span>01</span><h2>Shoot what matters now.</h2><p>Meet with the restaurant team, identify the month&apos;s priority dishes, and photograph them on site.</p></div>
        <div><span>02</span><h2>Build the appetite.</h2><p>Retouch, isolate, crop, and art-direct each image into a bold promotional composition.</p></div>
        <div><span>03</span><h2>Give every offer a hook.</h2><p>Pair the food with direct messaging for recurring specials, new menu items, drinks, and delivery.</p></div>
      </section>

      <section className="bayou-pair">
        <figure className="bayou-image bayou-image-red"><Image src="/work/the-bayou/bourbon-berries.jpg" alt="Bourbon and berries drink-of-the-week campaign artwork" fill sizes="(max-width: 760px) 100vw, 50vw" /></figure>
        <div className="bayou-pair-copy"><span>MONTHLY CONTENT SYSTEM</span><p>One visual language, flexible enough to move from cocktails to comfort food without losing recognition.</p></div>
      </section>

      <section className="bayou-statement"><p>THE FOOD WAS THE HERO.<br />THE SYSTEM KEPT IT MOVING.</p></section>

      <section className="bayou-gallery">
        <figure className="bayou-image"><Image src="/work/the-bayou/wing-night.jpg" alt="Wing Night promotional artwork" fill sizes="(max-width: 760px) 100vw, 60vw" /></figure>
        <figure className="bayou-image"><Image src="/work/the-bayou/poutine-fries.png" alt="Poutine fries promotional artwork" fill sizes="(max-width: 760px) 100vw, 40vw" /></figure>
      </section>

      <section className="bayou-close">
        <span>Photography · Art direction · Social design</span>
        <p>A practical content system that made every monthly special feel like an event.</p>
        <Link href="/work">Back to all work →</Link>
      </section>
    </main>
  );
}
