import { useEffect, useMemo, useState } from "react";
import type { Offering, Provider, FilterState } from "../lib/types";
import {
  applyFilters,
  defaultFilterState,
  isDefaultFilter,
  parseFilters,
  serializeFilters,
} from "../lib/filters";
import { FiltersSidebar } from "./FiltersSidebar";
import { PricingTable } from "./PricingTable";
import { Button } from "./ui/Button";
import { Filter, X } from "lucide-react";

interface Props {
  offerings: Offering[];
  providers: Provider[];
}

export default function CatalogApp({ offerings, providers }: Props) {
  const [state, setState] = useState<FilterState>(() => defaultFilterState());
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate filter state from URL on mount
  useEffect(() => {
    const parsed = parseFilters(window.location.search.replace(/^\?/, ""));
    setState(parsed);
    setHydrated(true);
  }, []);

  // Sync filter state -> URL
  useEffect(() => {
    if (!hydrated) return;
    const qs = serializeFilters(state);
    const url = qs ? `?${qs}` : window.location.pathname;
    window.history.replaceState(null, "", url);
  }, [state, hydrated]);

  const providerMap = useMemo(
    () => new Map(providers.map((p) => [p.id, p])),
    [providers],
  );

  const providerCounts = useMemo(() => {
    const m = new Map<string, number>();
    for (const o of offerings) {
      m.set(o.provider_id, (m.get(o.provider_id) ?? 0) + 1);
    }
    return m;
  }, [offerings]);

  const tierCounts = useMemo(() => {
    const m = new Map<string, number>();
    for (const o of offerings) m.set(o.tier, (m.get(o.tier) ?? 0) + 1);
    return m;
  }, [offerings]);

  const filtered = useMemo(
    () => applyFilters(offerings, state),
    [offerings, state],
  );

  const hasActiveFilters = !isDefaultFilter(state);

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)]">
      {/* Mobile filters drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${mobileFiltersOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!mobileFiltersOpen}
      >
        <div
          className={`absolute inset-0 bg-ink-950/70 backdrop-blur-sm transition-opacity ${mobileFiltersOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 transition-transform ${mobileFiltersOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="h-full overflow-y-auto">
            <FiltersSidebar
              state={state}
              setState={setState}
              providers={providers}
              providerCounts={providerCounts}
              tierCounts={tierCounts}
              totalCount={offerings.length}
              matchCount={filtered.length}
            />
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:block sticky top-14 self-start max-h-[calc(100vh-3.5rem)] overflow-y-auto">
        <FiltersSidebar
          state={state}
          setState={setState}
          providers={providers}
          providerCounts={providerCounts}
          tierCounts={tierCounts}
          totalCount={offerings.length}
          matchCount={filtered.length}
        />
      </div>

      <main className="flex-1 min-w-0">
        <div className="px-4 md:px-6 py-4 border-b border-wire bg-ink-950/60 backdrop-blur-sm flex items-center gap-3 flex-wrap">
          <Button
            variant="default"
            size="sm"
            className="lg:hidden gap-2"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <Filter className="w-3 h-3" />
            filters
          </Button>

          <div className="text-[11px] uppercase tracking-[0.18em] text-ink-400 font-mono">
            <span className="text-accent">$</span> count
            <span className="text-ink-100 ml-2 tabular-nums">{filtered.length}</span>
            <span className="text-ink-500 mx-1.5">/</span>
            <span className="text-ink-300 tabular-nums">{offerings.length}</span>
          </div>

          {hasActiveFilters && (
            <>
              <span className="text-ink-500 text-[10px]">│</span>
              <button
                onClick={() => setState(defaultFilterState())}
                className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-mono text-ink-300 hover:text-accent transition-colors"
              >
                <X className="w-2.5 h-2.5" />
                clear_all
              </button>
            </>
          )}
        </div>

        <div className="px-4 md:px-6 py-4">
          <PricingTable offerings={filtered} providerMap={providerMap} />

          <div className="mt-6 text-[10px] uppercase tracking-[0.16em] text-ink-500 font-mono space-y-1">
            <div>
              <span className="text-accent">▸</span> data collected manually from
              public pricing pages. spot/marketplace prices fluctuate.
            </div>
            <div>
              <span className="text-accent">▸</span> click a row to expand
              vcpu/ram/notes. click the link icon to open the provider's source.
            </div>
            <div>
              <span className="text-accent">▸</span> see something wrong? open a
              PR — repo on github.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

