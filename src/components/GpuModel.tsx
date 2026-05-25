import type { GpuBrand } from "../lib/types";

export function GpuModel({
  brand,
  model,
}: {
  brand: GpuBrand;
  model: string;
}) {
  const color = brand === "NVIDIA" ? "#76b900" : "#ed1c24";
  return (
    <span className="inline-flex items-center gap-2 text-xs font-mono text-ink-50">
      <span
        className="w-1 h-3 shrink-0"
        style={{ background: color }}
        aria-hidden
      />
      <span className="font-medium">{model}</span>
    </span>
  );
}
