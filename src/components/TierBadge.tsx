import type { Tier } from "../lib/types";
import { cn } from "../lib/cn";

const TIER_COLORS: Record<Tier, string> = {
  "on-demand": "#5a616d",
  spot: "#fbbf24",
  secure: "#60a5fa",
  community: "#a78bfa",
  prototyping: "#f472b6",
  production: "#818cf8",
  marketplace: "#f97316",
};

const TIER_LABELS: Record<Tier, string> = {
  "on-demand": "on-demand",
  spot: "spot",
  secure: "secure",
  community: "community",
  prototyping: "prototyping",
  production: "production",
  marketplace: "marketplace",
};

export function TierBadge({ tier, className }: { tier: Tier; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-ink-200",
        className,
      )}
    >
      <span
        className="w-2 h-2 shrink-0"
        style={{ background: TIER_COLORS[tier] }}
        aria-hidden
      />
      {TIER_LABELS[tier]}
    </span>
  );
}

export function tierColor(tier: Tier): string {
  return TIER_COLORS[tier];
}
