"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className="flex text-center justify-center text-text w-12 h-12 hover:bg-primary rounded-xl"
    >
      <div className="flex items-center justify-center overflow-clip">
        <div className={`transition-all duration-150 `}>
          {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </div>
      </div>
    </div>
  );
}
