import type { Metadata } from "next";
import { Bowlby_One, Caveat_Brush, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const bowlby = Bowlby_One({ variable: "--font-bowlby", weight: "400", subsets: ["latin"] });
const hanken = Hanken_Grotesk({ variable: "--font-hanken", weight: ["400", "700"], subsets: ["latin"] });
const caveat = Caveat_Brush({ variable: "--font-caveat", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rahmandhika.com"),
  title: "Rahmandhika · Design Engineer",
  description: site.tagline,
  openGraph: { title: "Rahmandhika · Design Engineer", description: site.tagline, url: "/", siteName: "Rahmandhika" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bowlby.variable} ${hanken.variable} ${caveat.variable} antialiased`}>
      <body className="bg-dotgrid text-ink font-body min-h-screen">{children}</body>
    </html>
  );
}
