import { site } from "@/content/site";

const link = "font-bold underline decoration-2 underline-offset-4 hover:text-blue";

export function Footer() {
  return (
    <footer className="border-t-2 border-ink px-6 py-12 md:px-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-2xl uppercase">Let&apos;s build something together.</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-lg">
          <li><a className={link} href={`mailto:${site.email}`}>Email</a></li>
          <li><a className={link} href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className={link} href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className={link} href={site.portfolioHref} target="_blank" rel="noopener noreferrer">Portfolio PDF</a></li>
        </ul>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-sm text-muted">© 2026 {site.name}</p>
    </footer>
  );
}
