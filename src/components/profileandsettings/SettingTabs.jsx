import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Apply theme class on mount and whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-[var(--bg-primary)] transition-all"
    >
      <span className="transition-transform duration-300">
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </span>
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
