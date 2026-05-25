import { cn } from "../../lib/cn";

interface ToggleProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}

export function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <label className="flex items-center justify-between gap-3 cursor-pointer py-1">
      <span className="text-xs font-mono text-ink-200">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative h-4 w-7 border transition-colors",
          checked
            ? "bg-accent border-accent"
            : "bg-ink-800 border-wireStrong hover:border-ink-300",
        )}
      >
        <span
          className={cn(
            "absolute top-0 bottom-0 w-3 transition-all",
            checked ? "right-0 bg-ink-950" : "left-0 bg-ink-300",
          )}
          aria-hidden
        />
      </button>
    </label>
  );
}
