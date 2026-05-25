import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/cn";

interface Props {
  label: string;
  defaultOpen?: boolean;
  count?: number;
  children: ReactNode;
}

export function FilterSection({
  label,
  defaultOpen = true,
  count,
  children,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="border-b border-wire">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "w-full flex items-center justify-between text-left",
          "px-4 py-3 text-[11px] uppercase tracking-[0.14em] font-mono text-ink-300",
          "hover:text-ink-100 hover:bg-white/[0.015] transition-colors",
        )}
      >
        <span className="flex items-center gap-2">
          <span className="text-accent">▸</span>
          {label}
          {count !== undefined && count > 0 && (
            <span className="text-ink-500 tabular-nums">[{count}]</span>
          )}
        </span>
        <ChevronDown
          className={cn("w-3 h-3 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && <div className="px-4 pb-4 space-y-2">{children}</div>}
    </section>
  );
}
