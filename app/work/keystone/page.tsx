import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "Keystone Command Center — Brandon Graser",
  description: "A custom internal operations platform for a six-person music marketing team.",
  openGraph: {
    title: "Keystone Command Center — Brandon Graser",
    description: "Product design and development for a music marketing team’s central workspace.",
    images: [{ url: "/work/keystone/analytics-studio.png", alt: "Keystone Command Center campaign analytics dashboard in a studio setting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keystone Command Center — Brandon Graser",
    description: "Product design and development for a music marketing team’s central workspace.",
    images: ["/work/keystone/analytics-studio.png"],
  },
};

const screens = [
  { src: "/work/keystone/analytics-studio.png", alt: "Keystone campaign analytics dashboard presented on a studio monitor" },
  { src: "/work/keystone/tasks-studio.png", alt: "Keystone task assignment system presented in a music studio" },
  { src: "/work/keystone/coverarts-studio.png", alt: "Keystone cover-art production queue presented in a creative studio" },
];

export default function KeystoneCaseStudy() {
  return (
    <main className="bayou-case">
      <SiteHeader />
      <section className="bayou-intro">
        <div className="bayou-heading">
          <span>01 · Product design / internal systems</span>
          <h1>Keystone Command Center</h1>
        </div>
        <div className="bayou-copy">
          <p>Keystone Command Center is a custom internal platform I designed and built for a six-person music marketing team. It brought task assignment, campaign analytics, creative production, shared resources, and team communication into one central workspace.</p>
          <p>Before the platform, employees relied on Slack and iMessage to ask what needed attention or clarify individual tasks. The new system gave every project a clear owner, status, context, and performance record—eliminating routine director check-ins and creating a single source of truth for the team.</p>
          <dl>
            <div><dt>Role</dt><dd>Product design, UX/UI, full-stack development</dd></div>
            <div><dt>Team</dt><dd>Six-person music marketing studio</dd></div>
          </dl>
        </div>
      </section>
      <section className="keystone-gallery" aria-label="Keystone Command Center product screens">
        {screens.map((screen, index) => (
          <figure key={screen.src}>
            <Image src={screen.src} alt={screen.alt} width={1672} height={941} priority={index === 0} sizes="94vw" />
          </figure>
        ))}
      </section>
      <div className="simple-footer"><span>© 2026 Brandon Graser</span><a href="/work">Back to work</a></div>
    </main>
  );
}
