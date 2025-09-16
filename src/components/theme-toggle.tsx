"use client";

import { useEffect, useState } from "react";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {}
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, mounted]);

  if (!mounted) {
    // Avoid icon mismatch during SSR
    return (
      <button aria-label="Toggle theme" className="neo-btn-ghost text-sm">
        …
      </button>
    );
  }

  const next = theme === "dark" ? "light" : "dark";
  const icon = theme === "dark" ? "☀️" : "🌙";
  const label = theme === "dark" ? "Light" : "Dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${label} mode`}
      onClick={() => setTheme(next)}
      className="neo-btn-ghost mr-2 text-sm"
    >
      <span aria-hidden>{icon}</span>
      <span className="sr-only">{label} mode</span>
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
