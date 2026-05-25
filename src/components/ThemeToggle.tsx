import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Pinned = "light" | "dark" | null;
type Effective = "light" | "dark";

function readPinned(): Pinned {
  if (typeof localStorage === "undefined") return null;
  const v = localStorage.getItem("theme");
  return v === "light" || v === "dark" ? v : null;
}

function systemPrefers(): Effective {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function effectiveFrom(pinned: Pinned): Effective {
  return pinned ?? systemPrefers();
}

function apply(pinned: Pinned) {
  const root = document.documentElement;
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (pinned === null) {
    root.removeAttribute("data-theme");
    if (meta) meta.setAttribute("content", "light dark");
    localStorage.removeItem("theme");
  } else {
    root.setAttribute("data-theme", pinned);
    if (meta) meta.setAttribute("content", pinned);
    localStorage.setItem("theme", pinned);
  }
}

export function ThemeToggle() {
  // Start with a stable value so SSR markup matches first paint.
  const [effective, setEffective] = useState<Effective>("dark");

  useEffect(() => {
    setEffective(effectiveFrom(readPinned()));

    // Track system preference changes while NOT pinned.
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => {
      if (readPinned() === null) setEffective(mq.matches ? "light" : "dark");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next: Effective = effective === "dark" ? "light" : "dark";
    apply(next);
    setEffective(next);
  };

  const Icon = effective === "dark" ? Moon : Sun;
  const label =
    effective === "dark" ? "switch to light theme" : "switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex items-center justify-center w-7 h-7 text-ink-300 hover:text-accent transition-colors"
    >
      <Icon className="w-3.5 h-3.5" />
    </button>
  );
}
