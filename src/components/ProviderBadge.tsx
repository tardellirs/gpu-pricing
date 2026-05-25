import type { Provider } from "../lib/types";
import { cn } from "../lib/cn";

interface Props {
  provider: Provider;
  className?: string;
}

export function ProviderBadge({ provider, className }: Props) {
  return (
    <a
      href={provider.url}
      target="_blank"
      rel="noopener noreferrer"
      title={provider.blurb ?? provider.url}
      className={cn(
        "inline-flex items-center gap-2 text-xs font-mono text-ink-100 hover:text-accent transition-colors",
        className,
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <span
        className="w-1.5 h-1.5 shrink-0"
        style={{ background: provider.color }}
        aria-hidden
      />
      {provider.name}
    </a>
  );
}
