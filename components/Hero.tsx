import Image from "next/image";
import { site } from "@/content/site";
import { Marquee } from "./Marquee";

export function Hero() {
  return (
    <section className="overflow-x-clip pt-10 md:pt-16">
      <Marquee text="RAHMANDHIKA" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pt-8 md:grid-cols-[1.1fr_1fr] md:px-12">
        <div className="flex flex-col gap-6">
          <p className="font-display text-2xl uppercase text-orange md:text-3xl">{site.headline}</p>
          <p className="max-w-xl text-xl leading-relaxed md:text-2xl">{site.tagline}</p>
          <p className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-bold">
            <span className="h-2.5 w-2.5 rounded-full bg-[#22a35a]" aria-hidden="true" />
            {site.status}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-full border-2 border-ink bg-ink px-6 py-3 font-bold text-cream hover:bg-blue hover:border-blue"
              href={site.cvHref}
              download="Rahmandhika-CV.pdf"
            >
              Download CV ↓
            </a>
            <a className="rounded-full border-2 border-ink bg-white px-6 py-3 font-bold hover:bg-yellow" href="#work">
              See my work →
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-[6%] rounded-[40px] bg-blue" style={{ transform: "rotate(-5deg)" }} aria-hidden="true" />
          <p className="absolute -top-2 left-2 z-10 -rotate-6 font-hand text-3xl">hi, I&apos;m {site.shortName}!</p>
          <Image
            src="/me/sticker.webp"
            alt={`Portrait of ${site.name}`}
            width={1000}
            height={1000}
            priority
            className="float relative"
            style={{ ["--tilt" as string]: "2deg" }}
          />
        </div>
      </div>
    </section>
  );
}
