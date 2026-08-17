import SiteHeader from "../components/SiteHeader";

export default function ContactPage() {
  return (
    <main className="contact-page reference-contact"><SiteHeader />
      <a className="contact-email" href="mailto:brandongraser@gmail.com">↘ brandongraser@gmail.com</a>
      <section className="contact-layout">
        <form className="contact-form" action="mailto:brandongraser@gmail.com" method="post" encType="text/plain">
          <h1>Slide into my<br />inbox <span aria-hidden="true">👀</span></h1>
          <div className="field-row"><label>First name *<input required name="first-name" placeholder="Jim" /></label><label>Last name *<input required name="last-name" placeholder="Halpert" /></label></div>
          <label>Email *<input required type="email" name="email" placeholder="jhalpert@dundermifflin.com" /></label>
          <label>Company<input name="company" placeholder="Dunder Mifflin" /></label>
          <label>Message *<textarea required name="message" rows={5} /></label><button type="submit">Submit ↗</button>
        </form>
        <div className="contact-collage" aria-hidden="true"><div className="contact-piece contact-one"><span>Poster placeholder</span></div><div className="contact-piece contact-two"><span>Portrait placeholder</span></div><div className="contact-piece contact-three"><span>Campaign placeholder</span></div><div className="contact-piece contact-four"><span>Object placeholder</span></div></div>
      </section>
      <div className="simple-footer"><span>© 2026 Brandon Graser</span><a href="https://www.linkedin.com/in/brandon-graser1/">LinkedIn</a></div>
    </main>
  );
}
