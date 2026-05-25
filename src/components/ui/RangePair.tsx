import { cn } from "../../lib/cn";

interface RangePairProps {
  min: number;
  max: number;
  absMin: number;
  absMax: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  onChange: (next: { min: number; max: number }) => void;
}

export function RangePair({
  min,
  max,
  absMin,
  absMax,
  step = 1,
  prefix,
  suffix,
  onChange,
}: RangePairProps) {
  const span = absMax - absMin;
  const minPct = span === 0 ? 0 : ((min - absMin) / span) * 100;
  const maxPct = span === 0 ? 100 : ((max - absMin) / span) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1.5">
        <NumberCell
          value={min}
          step={step}
          prefix={prefix}
          suffix={suffix}
          onChange={(v) =>
            onChange({ min: clamp(v, absMin, max), max })
          }
        />
        <span className="text-ink-500 text-[10px]">→</span>
        <NumberCell
          value={max}
          step={step}
          prefix={prefix}
          suffix={suffix}
          onChange={(v) =>
            onChange({ min, max: clamp(v, min, absMax) })
          }
        />
      </div>

      {/* visual rail (purely informational; values change via inputs) */}
      <div className="relative h-[3px] bg-ink-800 border border-wire">
        <div
          className="absolute top-0 bottom-0 bg-accent"
          style={{
            left: `${minPct}%`,
            width: `${Math.max(0, maxPct - minPct)}%`,
          }}
        />
      </div>
    </div>
  );
}

function NumberCell({
  value,
  step,
  prefix,
  suffix,
  onChange,
}: {
  value: number;
  step: number;
  prefix?: string;
  suffix?: string;
  onChange: (v: number) => void;
}) {
  return (
    <div
      className={cn(
        "flex-1 flex items-center bg-ink-900 border border-wire",
        "focus-within:border-accent focus-within:bg-ink-850 transition-colors",
        "h-8 px-2",
      )}
    >
      {prefix && (
        <span className="text-ink-400 text-[10px] mr-1">{prefix}</span>
      )}
      <input
        type="number"
        value={Number.isFinite(value) ? value : 0}
        step={step}
        onChange={(e) => {
          const n = Number(e.target.value);
          if (Number.isFinite(n)) onChange(n);
        }}
        className="flex-1 min-w-0 bg-transparent text-ink-100 text-xs font-mono outline-none tabular-nums"
      />
      {suffix && (
        <span className="text-ink-400 text-[10px] ml-1">{suffix}</span>
      )}
    </div>
  );
}

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}
