import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type Variant = "default" | "ghost" | "accent";
type Size = "sm" | "md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  default:
    "bg-transparent border border-wire text-ink-100 hover:border-wireStrong hover:bg-white/[0.02]",
  ghost:
    "bg-transparent border border-transparent text-ink-300 hover:text-ink-100 hover:bg-white/[0.02]",
  accent:
    "bg-accent text-ink-950 border border-accent hover:bg-accent-glow hover:border-accent-glow font-medium",
};

const sizes: Record<Size, string> = {
  sm: "text-[11px] h-7 px-2.5 uppercase tracking-wider",
  md: "text-xs h-9 px-3.5 uppercase tracking-wider",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-mono transition-colors",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
