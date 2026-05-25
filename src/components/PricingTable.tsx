import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type Cell,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { ArrowUpDown, ArrowUp, ArrowDown, ExternalLink, ChevronRight } from "lucide-react";
import type { Offering, Provider } from "../lib/types";
import { ProviderBadge } from "./ProviderBadge";
import { TierBadge } from "./TierBadge";
import { GpuModel } from "./GpuModel";
import { cn } from "../lib/cn";

interface Props {
  offerings: Offering[];
  providerMap: Map<string, Provider>;
}

export function PricingTable({ offerings, providerMap }: Props) {
  const [sorting, setSorting] = useState<SortingState>([
    { id: "price_usd_hour", desc: false },
  ]);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const columns: ColumnDef<Offering>[] = [
    {
      id: "provider",
      header: "Provider",
      accessorKey: "provider_id",
      cell: ({ row }) => {
        const p = providerMap.get(row.original.provider_id);
        return p ? <ProviderBadge provider={p} /> : row.original.provider_id;
      },
      sortingFn: (a, b) =>
        a.original.provider_id.localeCompare(b.original.provider_id),
    },
    {
      id: "gpu_model",
      header: "GPU",
      accessorKey: "gpu_model",
      cell: ({ row }) => (
        <GpuModel brand={row.original.gpu_brand} model={row.original.gpu_model} />
      ),
    },
    {
      id: "vram_gb",
      header: "VRAM",
      accessorKey: "vram_gb",
      cell: ({ row }) => (
        <span className="tabular-nums text-ink-100">
          {row.original.vram_gb}
          <span className="text-ink-400 text-[10px] ml-0.5">GB</span>
        </span>
      ),
      meta: { align: "right" } as ColumnMeta,
    },
    {
      id: "interconnect",
      header: "Bus",
      accessorKey: "interconnect",
      enableSorting: false,
      cell: ({ row }) => {
        const v = row.original.interconnect;
        if (!v) return <span className="text-ink-500">—</span>;
        return (
          <span className="text-[10px] uppercase tracking-wider text-ink-300 border border-wire px-1.5 py-0.5">
            {v}
          </span>
        );
      },
    },
    {
      id: "tier",
      header: "Tier",
      accessorKey: "tier",
      cell: ({ row }) => <TierBadge tier={row.original.tier} />,
    },
    {
      id: "price_usd_hour",
      header: "$/h",
      accessorKey: "price_usd_hour",
      cell: ({ row }) => (
        <span className="tabular-nums">
          <span className="text-ink-400 text-[10px]">$</span>
          <span className="text-ink-50 font-medium">
            {row.original.price_usd_hour.toFixed(2)}
          </span>
        </span>
      ),
      meta: { align: "right" } as ColumnMeta,
    },
    {
      id: "source",
      header: "",
      enableSorting: false,
      cell: ({ row }) => (
        <a
          href={row.original.source_url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center text-ink-400 hover:text-accent transition-colors"
          title={`Source: ${row.original.source_url}`}
        >
          <ExternalLink className="w-3 h-3" />
        </a>
      ),
    },
  ];

  const table = useReactTable({
    data: offerings,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const toggleRow = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (offerings.length === 0) {
    return (
      <div className="border border-wire bg-ink-950/40 py-20 text-center">
        <div className="text-[11px] uppercase tracking-[0.18em] text-ink-400 mb-3">
          <span className="text-accent">$</span> no_matches
        </div>
        <p className="text-sm text-ink-200">
          No GPUs match these filters. Try widening the price or VRAM range, or reset all
          filters.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-wire bg-ink-950/40 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-10 bg-ink-900/95 backdrop-blur-sm">
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id} className="border-b border-wireStrong">
                <th className="w-6" aria-hidden />
                {hg.headers.map((h) => {
                  const align = (h.column.columnDef.meta as ColumnMeta)?.align;
                  const canSort = h.column.getCanSort();
                  const sorted = h.column.getIsSorted();
                  return (
                    <th
                      key={h.id}
                      className={cn(
                        "px-3 py-2.5 text-[10px] uppercase tracking-[0.18em] font-mono text-ink-400 font-normal select-none",
                        align === "right" ? "text-right" : "text-left",
                        canSort && "cursor-pointer hover:text-ink-100",
                      )}
                      onClick={
                        canSort ? h.column.getToggleSortingHandler() : undefined
                      }
                    >
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5",
                          align === "right" && "flex-row-reverse",
                          sorted && "text-accent",
                        )}
                      >
                        {flexRender(h.column.columnDef.header, h.getContext())}
                        {canSort && (
                          <SortIcon dir={sorted === false ? null : sorted} />
                        )}
                      </span>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              const o = row.original;
              const isOpen = expanded.has(o.id);
              return (
                <ExpandableRow
                  key={o.id}
                  offering={o}
                  isOpen={isOpen}
                  onToggle={() => toggleRow(o.id)}
                  cells={row.getVisibleCells()}
                  colCount={columns.length + 1}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

type ColumnMeta = { align?: "left" | "right" };

function SortIcon({ dir }: { dir: "asc" | "desc" | null }) {
  if (dir === "asc") return <ArrowUp className="w-3 h-3" />;
  if (dir === "desc") return <ArrowDown className="w-3 h-3" />;
  return <ArrowUpDown className="w-3 h-3 text-ink-500" />;
}

function ExpandableRow({
  offering,
  isOpen,
  onToggle,
  cells,
  colCount,
}: {
  offering: Offering;
  isOpen: boolean;
  onToggle: () => void;
  cells: Cell<Offering, unknown>[];
  colCount: number;
}) {
  const hasDetail =
    offering.vcpu != null ||
    offering.ram_gb != null ||
    offering.notes ||
    (offering.caveats && offering.caveats.length > 0);

  return (
    <>
      <tr
        className={cn(
          "border-b border-wire transition-colors group cursor-pointer",
          isOpen ? "bg-white/[0.025]" : "hover:bg-white/[0.015]",
        )}
        onClick={hasDetail ? onToggle : undefined}
        aria-expanded={isOpen}
      >
        <td className="w-6 align-middle text-center">
          {hasDetail ? (
            <ChevronRight
              className={cn(
                "w-3 h-3 mx-auto text-ink-500 group-hover:text-ink-200 transition-transform",
                isOpen && "rotate-90",
              )}
            />
          ) : (
            <span className="block w-3 h-3 mx-auto" />
          )}
        </td>
        {cells.map((c) => {
          const align = (c.column.columnDef.meta as ColumnMeta)?.align;
          return (
            <td
              key={c.id}
              className={cn(
                "px-3 py-2.5 align-middle text-xs",
                align === "right" && "text-right",
              )}
            >
              {flexRender(c.column.columnDef.cell, c.getContext())}
            </td>
          );
        })}
      </tr>
      {isOpen && hasDetail && (
        <tr className="border-b border-wire bg-ink-900/40">
          <td className="w-6" aria-hidden />
          <td colSpan={colCount - 1} className="px-3 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 text-[11px]">
              {offering.vcpu != null && (
                <Detail label="vcpu" value={`${offering.vcpu}`} />
              )}
              {offering.ram_gb != null && (
                <Detail label="ram_gb" value={`${offering.ram_gb} GB`} />
              )}
              <Detail label="collected_at" value={offering.collected_at} />
              <Detail label="id" value={offering.id} mono />
            </div>
            {offering.notes && (
              <p className="mt-3 text-xs text-ink-200 font-sans leading-relaxed">
                {offering.notes}
              </p>
            )}
            {offering.caveats && offering.caveats.length > 0 && (
              <ul className="mt-3 space-y-1">
                {offering.caveats.map((c, i) => (
                  <li
                    key={i}
                    className="text-[11px] text-ink-300 font-sans flex gap-2"
                  >
                    <span className="text-accent shrink-0">!</span>
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </td>
        </tr>
      )}
    </>
  );
}

function Detail({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.14em] text-ink-500 mb-0.5">
        {label}
      </div>
      <div
        className={cn(
          "text-ink-100 break-words",
          mono ? "font-mono text-[11px]" : "text-xs",
        )}
      >
        {value}
      </div>
    </div>
  );
}
