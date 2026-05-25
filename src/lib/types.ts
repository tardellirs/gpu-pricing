export type {
  Offering,
  Provider,
  Tier,
  Interconnect,
  GpuBrand,
} from "../data/schema";

export type SortDir = "asc" | "desc";

export type SortState = {
  column: "provider" | "gpu_model" | "vram_gb" | "tier" | "price_usd_hour";
  dir: SortDir;
} | null;

export type FilterState = {
  q: string;
  priceMin: number;
  priceMax: number;
  vramMin: number;
  vramMax: number;
  brands: Set<"NVIDIA" | "AMD">;
  tiers: Set<string>;
  providerIds: Set<string>;
  spotOnly: boolean;
};
