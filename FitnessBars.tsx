import { PROGRAMS } from "../data/programs";
import { ActivityIcon, FlameIcon, HeartPulseIcon, UserIcon } from "./icons";
import { cn } from "../utils/cn";

const ICONS = {
  flame: FlameIcon,
  heart: HeartPulseIcon,
  activity: ActivityIcon,
  user: UserIcon,
};

const ACCENT_BG: Record<string, string> = {
  lavender: "bg-[#EAD4FA]",
  buttercream: "bg-[#FFF2A6]",
  mint: "bg-[#D9F2D0]",
  skyblue: "bg-[#CDEEF5]",
};

const LAYOUT = [
  { width: "lg:w-[72%]", offset: "lg:ml-[10%]" },
  { width: "lg:w-[88%]", offset: "lg:ml-0" },
  { width: "lg:w-[64%]", offset: "lg:ml-[18%]" },
  { width: "lg:w-[80%]", offset: "lg:ml-[6%]" },
];

export default function FitnessBars({ compact = false }: { compact?: boolean }) {
  return (
    <div className="space-y-3 sm:space-y-3.5 lg:space-y-4">
      {PROGRAMS.map((program, i) => {
        const Icon = ICONS[program.icon];
        const layout = LAYOUT[i % LAYOUT.length];
        return (
          <div
            key={program.slug}
            className={cn(
              "animate-bar-reveal flex w-full items-center gap-3 rounded-full py-2.5 pl-2.5 pr-5 shadow-[0_1px_0_rgba(23,19,33,0.04)] sm:gap-4 sm:py-3 sm:pl-3",
              ACCENT_BG[program.accent],
              layout.width,
              layout.offset,
              compact && "sm:py-2.5"
            )}
            style={{ animationDelay: `${0.15 * i + 0.3}s` }}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/80 text-[#171321] sm:h-10 sm:w-10">
              <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
            </span>
            <span className="truncate font-display text-[13px] font-semibold tracking-tight text-[#171321] sm:text-sm lg:text-[15px]">
              <span className="text-[#171321]/50">{program.index} —</span> {program.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}
