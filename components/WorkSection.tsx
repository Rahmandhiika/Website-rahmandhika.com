import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { DisplayTitle } from "./DisplayTitle";
import { ProjectCard } from "./ProjectCard";

export function WorkSection() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);
  const featured = sorted.filter((p) => p.featured);
  const more = sorted.filter((p) => !p.featured);
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 md:px-12">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <DisplayTitle text="Selected work" shadow="yellow" className="text-5xl md:text-7xl" />
        <a
          className="font-bold underline decoration-2 underline-offset-4 hover:text-blue"
          href={site.portfolioHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download portfolio PDF
        </a>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {featured.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
      <h3 className="sr-only">More work</h3>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {more.map((p) => <ProjectCard key={p.slug} project={p} size="small" />)}
      </div>
    </section>
  );
}
