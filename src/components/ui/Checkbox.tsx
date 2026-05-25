import { cn } from "../../lib/cn";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  count?: number;
  swatch?: string;
  className?: string;
}

export function Checkbox({
  checked,
  onChange,
  label,
  count,
  swatch,
  className,
}: CheckboxProps) {
  return (
    <label
      className={cn(
        "group flex items-center gap-2.5 cursor-pointer select-none",
        "text-xs font-mono text-ink-200 hover:text-ink-100 transition-colors",
        "py-1",
        className,
      )}
    >
      <span
        className={cn(
          "relative w-3.5 h-3.5 shrink-0 border border-wireStrong",
          "transition-colors",
          checked ? "bg-accent border-accent" : "bg-transparent group-hover:border-ink-300",
        )}
      >
        {checked && (
          <svg
            viewBox="0 0 12 12"
            className="absolute inset-0 w-full h-full text-ink-950"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <path d="M2.5 6.5 L5 9 L9.5 3.5" />
          </svg>
        )}
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </span>
      {swatch && (
        <span
          className="w-2 h-2 shrink-0"
          style={{ background: swatch }}
          aria-hidden
        />
      )}
      <span className="flex-1 truncate">{label}</span>
      {count !== undefined && (
        <span className="text-ink-400 tabular-nums text-[10px]">{count}</span>
      )}
    </label>
  );
}
