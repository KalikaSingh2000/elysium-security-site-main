import { Clock3, Landmark, MapPinned, ParkingSquare, Shield, UserCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Solution } from "@/data/solutions";

const iconMap = {
  Clock: Clock3,
  UserCheck,
  ParkingSquare,
  Users,
  Landmark,
  Shield,
  MapPin: MapPinned,
} as const;

interface SolutionVisualProps {
  solution: Solution;
  className?: string;
}

const SolutionVisual = ({ solution, className }: SolutionVisualProps) => {
  const Icon = iconMap[solution.icon as keyof typeof iconMap] ?? Shield;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.35),transparent_28%),linear-gradient(140deg,#09121f_0%,#102137_55%,#172c43_100%)]",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/45 to-transparent" />
      <div className="relative flex h-full min-h-[240px] flex-col justify-between p-7 text-white">
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
            <Icon className="h-8 w-8 text-orange-200" strokeWidth={1.7} />
          </div>
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
            Integrated workflow
          </span>
        </div>
        <div className="max-w-md">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-200/80">
            Solution Architecture
          </div>
          <h3 className="mt-3 text-2xl font-heading leading-tight">{solution.name}</h3>
          <p className="mt-3 max-w-lg text-sm leading-7 text-white/70">
            Products, software, workflows, and support aligned around one operating requirement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionVisual;
