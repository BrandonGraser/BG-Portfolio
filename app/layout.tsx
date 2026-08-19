import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brandon-graser-portfolio.sweet-shore-7545.chatgpt.site"),
  title: "Brandon Graser — Graphic & Web Designer",
  description: "Brand, campaign, web, and product design by Brandon Graser.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
