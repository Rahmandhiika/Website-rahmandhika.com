import Image from "next/image";
import Link from "next/link";
import type { Accent, Project } from "@/content/types";
import { ChipRow } from "./ChipRow";

export const accentBg: Record<Accent, string> = {
  blue: "bg-blue",
  yellow: "bg-yellow",
  orange: "bg-orange",
  green: "bg-[#1f6b45]",
};

export function ProjectCard({ project, size = "large" }: { project: Project; size?: "large" | "small" }) {
  const id = `card-${project.slug}`;
  const large = size === "large";
  return (
    <article aria-labelledby={id} className="group">
      <Link href={`/work/${project.slug}`} className="flex h-full flex-col gap-5 rounded-[32px] border-2 border-ink bg-white p-5 transition-transform hover:-translate-y-1 md:p-6">
        <div className={`relative overflow-hidden rounded-[24px] ${accentBg[project.accent]} ${large ? "aspect-[4/3]" : "aspect-[16/10]"}`}>
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes={large ? "(min-width: 768px) 45vw, 90vw" : "(min-width: 768px) 30vw, 90vw"}
            className="object-contain p-4 transition-transform group-hover:scale-[1.03] motion-reduce:transition-none"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h3 id={id} className={`font-display uppercase leading-none ${large ? "text-3xl md:text-4xl" : "text-2xl"}`}>
            {project.title}
          </h3>
          <p className="text-sm font-bold uppercase tracking-wide text-orange">{project.subtitle}</p>
          {large && <p className="leading-relaxed">{project.oneLiner}</p>}
          <ChipRow chips={project.chips} />
        </div>
      </Link>
    </article>
  );
}
