import { services } from "@/content/services";
import { DisplayTitle } from "./DisplayTitle";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-28 bg-ink py-20 text-cream">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <DisplayTitle text="What I can help with" shadow="blue" className="mb-10 text-5xl md:text-7xl" />
        <ol className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <li key={s.number} className="relative overflow-hidden rounded-[32px] border-2 border-cream/20 bg-white/5 p-8">
              <span className="pointer-events-none absolute -right-2 -top-6 font-display text-[7rem] leading-none text-white/10">
                {s.number}
              </span>
              <h3 className="relative mb-3 font-display text-2xl uppercase">{s.title}</h3>
              <p className="relative text-lg leading-relaxed text-cream/80">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
