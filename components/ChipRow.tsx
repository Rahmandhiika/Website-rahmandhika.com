import type { Chips } from "@/content/types";

const base = "rounded-full border-2 border-ink px-4 py-1.5 text-sm leading-none";

export function ChipRow({ chips }: { chips: Chips }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Role, period, and tools">
      <li className={`${base} bg-ink font-bold text-cream`}>{chips.role}</li>
      <li className={`${base} bg-yellow font-bold`}>{chips.period}</li>
      {chips.tools.map((t) => (
        <li key={t} className={`${base} bg-cream`}>{t}</li>
      ))}
    </ul>
  );
}
