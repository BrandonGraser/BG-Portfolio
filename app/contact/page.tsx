import SiteHeader from "../components/SiteHeader";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <SiteHeader />
      <section className="contact-content">
        <span>Have a project, role, or collaboration in mind?</span>
        <a className="email" href="mailto:brandongraser@gmail.com">Let&apos;s talk.</a>
        <div className="footer-row"><span>Bethlehem, Pennsylvania</span><a href="https://www.linkedin.com/in/brandon-graser1/">LinkedIn</a><span>© 2026 Brandon Graser</span></div>
      </section>
    </main>
  );
}
