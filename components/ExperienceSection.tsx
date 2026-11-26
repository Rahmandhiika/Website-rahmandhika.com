import Image from "next/image";
import { experience } from "@/content/experience";
import { site } from "@/content/site";
import { DisplayTitle } from "./DisplayTitle";

export function ExperienceSection() {
  const groups = ["Work", "Organization"] as const;
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 md:px-12">
      <div className="grid gap-12 md:grid-cols-[320px_1fr]">
        <div className="flex flex-col gap-6">
          <figure className="w-64 -rotate-3 rounded-md bg-white p-3 pb-4 shadow-[0_14px_30px_rgba(22,24,29,0.18)]">
            <Image src="/me/photo.webp" alt={`Photo of ${site.name}`} width={800} height={800} className="h-auto w-full" />
            <figcaption className="mt-3 font-hand text-2xl">Jakarta, 2026</figcaption>
          </figure>
          <p className="leading-relaxed">
            Information Systems at BINUS University, GPA 3.71, graduating Aug 2027. Speaks Indonesian and English.
          </p>
        </div>
        <div>
          <DisplayTitle text="Experience" shadow="yellow" className="mb-8 text-5xl md:text-7xl" />
          {groups.map((g) => (
            <div key={g} className="mb-8">
              <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-blue">
                {g}
                <span className="h-0.5 flex-1 bg-blue" aria-hidden="true" />
              </h3>
              <ul className="flex flex-col gap-5">
                {experience.filter((e) => e.group === g).map((e) => (
                  <li key={e.role + e.org} className="grid gap-1 md:grid-cols-[200px_1fr]">
                    <span className="text-muted">{e.period}</span>
                    <span>
                      <span className="block font-bold">{e.role}</span>
                      <span>{e.org}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
