import type { Stat } from "@/content/types";

export function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <ul className="grid grid-cols-3 gap-4 text-center">
      {stats.map((s) => (
        <li key={s.label} className="flex flex-col gap-1">
          <span className="font-display text-4xl leading-none md:text-5xl">{s.value}</span>
          <span className="text-sm font-bold">{s.label}</span>
        </li>
      ))}
    </ul>
  );
}
