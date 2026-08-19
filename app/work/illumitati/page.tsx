import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Illumitati — Brandon Graser",
  description: "An immersive, nostalgic portfolio website designed as a direct extension of Illumitati's visual identity.",
  openGraph: {
    title: "Illumitati — Brandon Graser",
    description: "A portfolio experience built inside a surreal, late-1990s computer interface.",
    images: [{ url: "/work/illumitati/cover.png", alt: "Illumitati symbol over a surreal image of a translucent iMac in a stream" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Illumitati — Brandon Graser",
    description: "A portfolio experience built inside a surreal, late-1990s computer interface.",
    images: ["/work/illumitati/cover.png"],
  },
};

const images = [
  { src: "/work/illumitati/cover.png", alt: "Illumitati symbol over a surreal image of a translucent iMac in a stream", width: 1200, height: 1200, layout: "full" },
  { src: "/work/illumitati/login.jpg", alt: "Illumitati OS X login screen presented inside a translucent blue iMac", width: 1280, height: 720, layout: "half" },
  { src: "/work/illumitati/desktop.jpg", alt: "Illumitati portfolio desktop with draggable icons and vintage computer imagery", width: 1280, height: 720, layout: "half" },
  { src: "/work/illumitati/work-window.png", alt: "Illumitati work archive displayed in a retro desktop window", width: 969, height: 730, layout: "half" },
  { src: "/work/illumitati/merch-window.png", alt: "Illumitati merchandise displayed inside a custom retro browser window", width: 827, height: 623, layout: "half" },
];

export default function IllumitatiCaseStudy() {
  return (
    <main className="bayou-case">
      <SiteHeader />
      <section className="bayou-intro">
        <div className="bayou-heading">
          <span>05 · Web design / interactive experience</span>
          <h1>Illumitati</h1>
        </div>
        <div className="bayou-copy">
          <p>Illumitati needed a website that felt like a direct next step for her existing world—not a neutral portfolio template. I translated the brand into a surreal operating system experience, borrowing the visual language of late-1990s personal computers and reshaping it into something unmistakably hers.</p>
          <p>The site boots into “Illumitati OS X,” then opens onto a tactile desktop where folders, icons, windows, and unexpected details become the navigation. The result turns browsing the work into a small act of discovery while keeping the artist’s strange, nostalgic, internet-native personality at the center of every interaction.</p>
          <dl>
            <div><dt>Role</dt><dd>Web design, creative direction, interaction design</dd></div>
            <div><dt>Scope</dt><dd>Visual concept, responsive experience, portfolio system</dd></div>
            <div><dt>Website</dt><dd><a href="https://www.illumitati.com/" target="_blank" rel="noreferrer">illumitati.com ↗</a></dd></div>
          </dl>
        </div>
      </section>
      <section className="illumitati-gallery">
        {images.map((image, index) => (
          <figure className={image.layout === "full" ? "illumitati-full" : undefined} key={image.src}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority={index === 0} sizes={image.layout === "full" ? "94vw" : "(max-width: 760px) 92vw, 46vw"} />
          </figure>
        ))}
      </section>
      <div className="simple-footer"><span>© 2026 Brandon Graser</span><a href="/work">Back to work</a></div>
    </main>
  );
}
