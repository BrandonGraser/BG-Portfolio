import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="mark" href="/" aria-label="Brandon Graser home">BG</Link>
      <nav aria-label="Primary navigation">
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
