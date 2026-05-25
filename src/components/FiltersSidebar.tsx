import type { FilterState, Provider, Tier } from "../lib/types";
import { Input } from "./ui/Input";
import { Checkbox } from "./ui/Checkbox";
import { Toggle } from "./ui/Toggle";
import { RangePair } from "./ui/RangePair";
import { Button } from "./ui/Button";
import { FilterSection } from "./FilterSection";
import { Search, RotateCcw } from "lucide-react";
import { defaultFilterState } from "../lib/filters";
import { tierColor } from "./TierBadge";

interface Props {
  state: FilterState;
  setState: (s: FilterState) => void;
  providers: Provider[];
  providerCounts: Map<string, number>;
  tierCounts: Map<string, number>;
  totalCount: number;
  matchCount: number;
}

const ALL_TIERS: Tier[] = [
  "on-demand",
  "spot",
  "secure",
  "community",
  "marketplace",
  "prototyping",
  "production",
];

export function FiltersSidebar({
  state,
  setState,
  providers,
  providerCounts,
  tierCounts,
}: Props) {
  const toggleSet = <T,>(set: Set<T>, value: T): Set<T> => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    return next;
  };

  return (
    <aside
      className="w-72 shrink-0 border-r border-wire bg-ink-950/60 backdrop-blur-sm"
      aria-label="Filters"
    >
      <div className="px-4 py-3 border-b border-wire">
        <div className="text-[10px] uppercase tracking-[0.18em] text-ink-400 mb-2">
          <span className="text-accent">$</span> filter
        </div>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-ink-400" />
          <Input
            placeholder="grep gpu_model..."
            className="pl-7"
            value={state.q}
            onChange={(e) => setState({ ...state, q: e.target.value })}
          />
        </div>
      </div>

      <FilterSection label="price_usd_hour">
        <RangePair
          min={state.priceMin}
          max={state.priceMax}
          absMin={0}
          absMax={10}
          step={0.01}
          prefix="$"
          onChange={({ min, max }) =>
            setState({ ...state, priceMin: min, priceMax: max })
          }
        />
        <div className="text-[10px] text-ink-500 tabular-nums">
          $0.00 ──── $10.00+
        </div>
      </FilterSection>

      <FilterSection label="vram_gb">
        <RangePair
          min={state.vramMin}
          max={state.vramMax}
          absMin={0}
          absMax={300}
          step={1}
          suffix="GB"
          onChange={({ min, max }) =>
            setState({ ...state, vramMin: min, vramMax: max })
          }
        />
        <div className="text-[10px] text-ink-500 tabular-nums">
          0 GB ──── 300 GB+
        </div>
      </FilterSection>

      <FilterSection label="brand" count={state.brands.size}>
        <Checkbox
          label="NVIDIA"
          swatch="#76b900"
          checked={state.brands.has("NVIDIA")}
          onChange={() =>
            setState({ ...state, brands: toggleSet(state.brands, "NVIDIA") })
          }
        />
        <Checkbox
          label="AMD"
          swatch="#ed1c24"
          checked={state.brands.has("AMD")}
          onChange={() =>
            setState({ ...state, brands: toggleSet(state.brands, "AMD") })
          }
        />
      </FilterSection>

      <FilterSection label="tier" count={state.tiers.size}>
        <Toggle
          checked={state.spotOnly}
          onChange={(v) => setState({ ...state, spotOnly: v })}
          label="spot/interruptible only"
        />
        <div className="hr-wire my-1" />
        {ALL_TIERS.map((t) => {
          const n = tierCounts.get(t) ?? 0;
          if (n === 0) return null;
          return (
            <Checkbox
              key={t}
              label={t}
              count={n}
              swatch={tierColor(t)}
              checked={state.tiers.has(t)}
              onChange={() =>
                setState({ ...state, tiers: toggleSet(state.tiers, t) })
              }
            />
          );
        })}
      </FilterSection>

      <FilterSection
        label="provider"
        count={state.providerIds.size}
        defaultOpen={false}
      >
        {providers.map((p) => {
          const n = providerCounts.get(p.id) ?? 0;
          return (
            <Checkbox
              key={p.id}
              label={p.name}
              count={n}
              swatch={p.color}
              checked={state.providerIds.has(p.id)}
              onChange={() =>
                setState({
                  ...state,
                  providerIds: toggleSet(state.providerIds, p.id),
                })
              }
            />
          );
        })}
      </FilterSection>

      <div className="px-4 py-3">
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-2"
          onClick={() => setState(defaultFilterState())}
        >
          <RotateCcw className="w-3 h-3" />
          reset_filters
        </Button>
      </div>
    </aside>
  );
}
