import { z } from "zod";

export const TierSchema = z.enum([
  "on-demand",
  "spot",
  "community",
  "secure",
  "prototyping",
  "production",
  "marketplace",
]);

export const InterconnectSchema = z.enum(["PCIe", "SXM", "NVLink", "NVL"]);

export const GpuBrandSchema = z.enum(["NVIDIA", "AMD"]);

export const OfferingSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, "id must be kebab-case"),
  provider_id: z.string().regex(/^[a-z0-9-]+$/),
  gpu_model: z.string().min(1),
  gpu_brand: GpuBrandSchema,
  vram_gb: z.number().positive(),
  interconnect: InterconnectSchema.nullable().optional(),
  tier: TierSchema,
  is_spot: z.boolean(),
  price_usd_hour: z.number().nonnegative(),
  vcpu: z.number().int().positive().nullable().optional(),
  ram_gb: z.number().positive().nullable().optional(),
  notes: z.string().nullable().optional(),
  source_url: z.string().url(),
  collected_at: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "ISO date YYYY-MM-DD"),
  caveats: z.array(z.string()).optional(),
});

export const ProviderSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(1),
  url: z.string().url(),
  color: z.string().min(1),
  blurb: z.string().optional(),
});

export const OfferingsFileSchema = z.array(OfferingSchema);
export const ProvidersFileSchema = z.array(ProviderSchema);

export type Offering = z.infer<typeof OfferingSchema>;
export type Provider = z.infer<typeof ProviderSchema>;
export type Tier = z.infer<typeof TierSchema>;
export type Interconnect = z.infer<typeof InterconnectSchema>;
export type GpuBrand = z.infer<typeof GpuBrandSchema>;
