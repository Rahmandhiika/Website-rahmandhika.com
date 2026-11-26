import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { DisplayTitle } from "@/components/DisplayTitle";
import { StoryCard } from "@/components/StoryCard";
import { accentBg } from "@/components/ProjectCard";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return { title: `${p.title} · Rahmandhika`, description: p.oneLiner };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const others = projects.filter((p) => p.slug !== project.slug).sort((a, b) => a.order - b.order);
  const shots = [project.cover, ...project.gallery];

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl overflow-x-clip px-6 pb-20 pt-12 md:px-12">
        <Link href="/#work" className="font-bold underline decoration-2 underline-offset-4 hover:text-blue">← All work</Link>
        <div className="mt-8 grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="flex min-w-0 flex-col gap-6">
            <h1 className="sr-only">{project.title}</h1>
            <div aria-hidden="true">
              <DisplayTitle text={project.title} shadow="yellow" className="text-[clamp(2.25rem,11vw,6rem)] break-words" />
            </div>
            <p className="font-display text-xl uppercase text-orange md:text-2xl">{project.subtitle}</p>
            <StoryCard story={project.story} chips={project.chips} stats={project.stats} />
          </div>
          <div className={`relative min-w-0 rounded-[40px] p-6 md:-rotate-2 md:p-8 ${accentBg[project.accent]}`}>
            <div className="flex flex-col gap-6 md:rotate-2">
              {shots.map((img) => (
                <figure key={img.src} className="overflow-hidden rounded-[24px] bg-white p-3 shadow-[0_14px_30px_rgba(22,24,29,0.18)]">
                  <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(min-width: 768px) 45vw, 90vw" className="mx-auto h-auto max-h-[720px] w-auto" />
                  {img.caption && <figcaption className="mt-2 font-hand text-2xl">{img.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-16 flex items-center gap-4 font-bold">
          <span>{project.footerLeft}</span>
          <span className="h-0.5 flex-1 bg-ink" aria-hidden="true" />
          <span>{project.footerRight}</span>
        </p>
        <nav aria-label="More work" className="mt-16">
          <h2 className="mb-6 font-display text-3xl uppercase">More work</h2>
          <ul className="flex flex-wrap gap-3">
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={`/work/${p.slug}`} className="inline-block rounded-full border-2 border-ink bg-white px-5 py-2 font-bold hover:bg-yellow">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  );
}
