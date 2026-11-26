import type { Chips, Stat } from "@/content/types";
import { ChipRow } from "./ChipRow";
import { StatRow } from "./StatRow";

export function StoryCard({ story, chips, stats }: { story: string; chips: Chips; stats: Stat[] }) {
  return (
    <div className="flex flex-col gap-6 rounded-[40px] bg-white p-7 shadow-[0_14px_30px_rgba(22,24,29,0.18)] md:p-10">
      <ChipRow chips={chips} />
      <p className="text-lg leading-relaxed md:text-xl">{story}</p>
      <StatRow stats={stats} />
    </div>
  );
}
