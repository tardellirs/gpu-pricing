import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { OfferingsFileSchema, ProvidersFileSchema } from "../src/data/schema";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

function loadJson(p: string): unknown {
  return JSON.parse(readFileSync(p, "utf-8"));
}

let failed = false;

function check<T>(label: string, parse: () => T): T | null {
  try {
    const v = parse();
    console.log(`✓ ${label}`);
    return v;
  } catch (err) {
    failed = true;
    console.error(`✗ ${label}`);
    if (err instanceof Error) {
      console.error(err.message);
    }
    return null;
  }
}

const offerings = check("offerings.json: schema", () =>
  OfferingsFileSchema.parse(loadJson(resolve(root, "src/data/offerings.json"))),
);
const providers = check("providers.json: schema", () =>
  ProvidersFileSchema.parse(loadJson(resolve(root, "src/data/providers.json"))),
);

if (offerings && providers) {
  const providerIds = new Set(providers.map((p) => p.id));
  const seenIds = new Set<string>();
  let crossRefOk = true;
  let uniqueOk = true;

  for (const o of offerings) {
    if (!providerIds.has(o.provider_id)) {
      console.error(`✗ ${o.id}: unknown provider_id "${o.provider_id}"`);
      crossRefOk = false;
    }
    if (seenIds.has(o.id)) {
      console.error(`✗ duplicate offering id "${o.id}"`);
      uniqueOk = false;
    }
    seenIds.add(o.id);
  }

  if (crossRefOk) console.log("✓ all provider_id references valid");
  else failed = true;

  if (uniqueOk) console.log(`✓ all ${offerings.length} offering ids unique`);
  else failed = true;

  console.log(
    `\n${offerings.length} offerings · ${providers.length} providers`,
  );
}

if (failed) {
  console.error("\nvalidation FAILED");
  process.exit(1);
}
console.log("\nvalidation OK");
