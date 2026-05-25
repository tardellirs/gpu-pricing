import type { Offering, FilterState, SortState } from "./types";

export function applyFilters(
  offerings: Offering[],
  state: FilterState,
): Offering[] {
  const q = state.q.trim().toLowerCase();
  return offerings.filter((o) => {
    if (q && !o.gpu_model.toLowerCase().includes(q)) return false;
    if (o.price_usd_hour < state.priceMin) return false;
    if (o.price_usd_hour > state.priceMax) return false;
    if (o.vram_gb < state.vramMin) return false;
    if (o.vram_gb > state.vramMax) return false;
    if (state.brands.size > 0 && !state.brands.has(o.gpu_brand)) return false;
    if (state.tiers.size > 0 && !state.tiers.has(o.tier)) return false;
    if (state.providerIds.size > 0 && !state.providerIds.has(o.provider_id))
      return false;
    if (state.spotOnly && !o.is_spot) return false;
    return true;
  });
}

export function applySort(offerings: Offering[], sort: SortState): Offering[] {
  if (!sort) return offerings;
  const dirMul = sort.dir === "asc" ? 1 : -1;
  const copy = [...offerings];
  copy.sort((a, b) => {
    let av: string | number;
    let bv: string | number;
    switch (sort.column) {
      case "provider":
        av = a.provider_id;
        bv = b.provider_id;
        break;
      case "gpu_model":
        av = a.gpu_model;
        bv = b.gpu_model;
        break;
      case "vram_gb":
        av = a.vram_gb;
        bv = b.vram_gb;
        break;
      case "tier":
        av = a.tier;
        bv = b.tier;
        break;
      case "price_usd_hour":
        av = a.price_usd_hour;
        bv = b.price_usd_hour;
        break;
    }
    if (av < bv) return -1 * dirMul;
    if (av > bv) return 1 * dirMul;
    return 0;
  });
  return copy;
}

export function defaultFilterState(): FilterState {
  return {
    q: "",
    priceMin: 0,
    priceMax: 10,
    vramMin: 0,
    vramMax: 300,
    brands: new Set(),
    tiers: new Set(),
    providerIds: new Set(),
    spotOnly: false,
  };
}

export function isDefaultFilter(s: FilterState): boolean {
  return (
    s.q === "" &&
    s.priceMin === 0 &&
    s.priceMax === 10 &&
    s.vramMin === 0 &&
    s.vramMax === 300 &&
    s.brands.size === 0 &&
    s.tiers.size === 0 &&
    s.providerIds.size === 0 &&
    !s.spotOnly
  );
}

export function serializeFilters(s: FilterState): string {
  const params = new URLSearchParams();
  if (s.q) params.set("q", s.q);
  if (s.priceMin > 0) params.set("price-min", String(s.priceMin));
  if (s.priceMax < 10) params.set("price-max", String(s.priceMax));
  if (s.vramMin > 0) params.set("vram-min", String(s.vramMin));
  if (s.vramMax < 300) params.set("vram-max", String(s.vramMax));
  if (s.brands.size) params.set("brand", [...s.brands].join(","));
  if (s.tiers.size) params.set("tier", [...s.tiers].join(","));
  if (s.providerIds.size) params.set("providers", [...s.providerIds].join(","));
  if (s.spotOnly) params.set("spot", "1");
  return params.toString();
}

export function parseFilters(qs: string): FilterState {
  const params = new URLSearchParams(qs);
  const base = defaultFilterState();
  return {
    q: params.get("q") ?? "",
    priceMin: numOr(params.get("price-min"), 0),
    priceMax: numOr(params.get("price-max"), 10),
    vramMin: numOr(params.get("vram-min"), 0),
    vramMax: numOr(params.get("vram-max"), 300),
    brands: new Set(
      (params.get("brand")?.split(",").filter(Boolean) ?? []) as Array<
        "NVIDIA" | "AMD"
      >,
    ),
    tiers: new Set(params.get("tier")?.split(",").filter(Boolean) ?? []),
    providerIds: new Set(
      params.get("providers")?.split(",").filter(Boolean) ?? [],
    ),
    spotOnly: params.get("spot") === "1",
  };
}

function numOr(v: string | null, fallback: number): number {
  if (v == null) return fallback;
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}
