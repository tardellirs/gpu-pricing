# Contributing

Thanks for helping keep this catalog honest. Most contributions are one of two things:

- **Update a price** that drifted from the provider's page.
- **Add a new provider** that fits the scope.

Either way: edit the JSON, run `npm run validate`, send a PR. There's no build step you need to understand to fix a number.

---

## Quick map

```
src/data/offerings.json    ← the catalog (the file you'll edit most)
src/data/providers.json    ← provider metadata
src/data/schema.ts         ← Zod schemas (the source of truth for shape)
scripts/validate-data.ts   ← run via `npm run validate`
```

## Rules of inclusion

A row belongs in `offerings.json` only if **all** of the following are true:

1. The price is **publicly listed** on the provider's site (no "contact sales").
2. It's billed **per hour** (or per second/minute; we convert to per-hour).
3. It's a **1x GPU** SKU. Bundles that are only sold as 8x are excluded even if priced per-GPU.
4. It's a **GPU rental** (the thing you SSH into), not a serverless inference API (chat/completions endpoints).
5. It's **not a long-term reservation** (monthly/annual/multi-month commit).

When in doubt, prefer leaving it out and opening a discussion.

## Offering schema

Each entry in `offerings.json` must match this shape (Zod-validated in CI):

```jsonc
{
  "id": "runpod-h100-sxm-secure",            // kebab-case, globally unique
  "provider_id": "runpod",                    // must exist in providers.json
  "gpu_model": "NVIDIA H100 SXM",             // exact string the vendor uses
  "gpu_brand": "NVIDIA",                      // "NVIDIA" | "AMD"
  "vram_gb": 80,                              // number, in GB
  "interconnect": "SXM",                      // "PCIe" | "SXM" | "NVLink" | "NVL" | null
  "tier": "secure",                           // see enum below
  "is_spot": false,                           // true if interruptible
  "price_usd_hour": 3.29,                     // number, USD
  "vcpu": 20,                                 // optional int
  "ram_gb": 125,                              // optional number, GB
  "notes": "Hopper",                          // optional free text
  "source_url": "https://www.runpod.io/pricing",
  "collected_at": "2026-05-24",               // ISO date YYYY-MM-DD
  "caveats": ["Price fluctuates ±15%"]        // optional array
}
```

### `tier` enum

| value | meaning |
|---|---|
| `on-demand` | dedicated, not interruptible |
| `spot` | preemptible / interruptible, big discount (also used for Salad's Medium priority tier — interruptible by nature) |
| `secure` | RunPod Secure Cloud (SOC 2, single-tenant) |
| `community` | RunPod Community Cloud (marketplace of providers) |
| `prototyping` | Thunder Compute virtualized (shared) |
| `production` | Thunder Compute dedicated |
| `marketplace` | cheapest live offer in a decentralized marketplace (Akash, Spheron, Vast cheap tier) |

When adding a new tier, edit `src/data/schema.ts` AND `src/components/TierBadge.tsx` AND this README — three places, two-minute job.

## Style

- IDs and slugs: `kebab-case`.
- Prices: dot decimal, USD, no thousands separator.
- VRAM: GB, integer (`80`, not `80.0` or `80 GB`).
- Model names: exactly as the vendor types them on their own site (`NVIDIA H100 SXM`, not `H100-SXM`).
- Notes/caveats: keep terse. Long sentences go in the PR description, not the data.

## Updating a price

```bash
# 1. Edit the row in src/data/offerings.json
# 2. Bump its collected_at to today
# 3. Validate
npm run validate
# 4. Optional but recommended: spin up the dev server and eyeball it
npm run dev
# 5. Send the PR
```

## Adding a new provider

1. Add an entry to `src/data/providers.json` (the slug becomes the `provider_id`).
2. Pick a `color` that doesn't visually collide with neighbors in the sidebar (the dot is tiny — pick a saturated, distinct hue).
3. Add the GPU rows to `offerings.json` following the schema above.
4. Update the provider table in `README.md`.
5. `npm run validate` → `npm run build` → PR.

## CI

Every PR runs:

```
npm ci
npm run validate   # schema + cross-ref + uniqueness checks
npm run build      # Astro build must succeed
```

Vercel's GitHub integration also builds a preview URL on every PR.
