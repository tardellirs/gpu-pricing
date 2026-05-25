import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "w-full bg-ink-900 border border-wire text-ink-100 placeholder:text-ink-400",
          "h-9 px-3 text-xs font-mono",
          "focus:outline-none focus:border-accent focus:bg-ink-850",
          "transition-colors",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
