import Link from "next/link";
import { site } from "@/content/site";

const item = "rounded-full px-4 py-2 text-sm font-bold hover:bg-cream";

export function Nav() {
  return (
    <div className="sticky top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Main"
        className="flex w-full max-w-[720px] items-center justify-between gap-2 rounded-full border-2 border-ink bg-white/90 py-2 pl-3 pr-2 shadow-[0_8px_24px_rgba(22,24,29,0.12)] backdrop-blur"
      >
        <Link href="/" className="grid h-10 w-10 place-items-center rounded-full bg-blue font-display text-sm text-white" aria-label="Home">
          RD
        </Link>
        <div className="flex items-center gap-1">
          <a className={`${item} hidden sm:inline-block`} href="/#work">Work</a>
          <a className={`${item} hidden sm:inline-block`} href="/#services">Services</a>
          <a className={`${item} hidden sm:inline-block`} href="/#about">About</a>
          <a
            className="rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-white hover:bg-ink"
            href={site.cvHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV ↗
          </a>
        </div>
      </nav>
    </div>
  );
}
