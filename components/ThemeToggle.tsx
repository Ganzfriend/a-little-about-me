"use client";

import { useThemeMode } from "./theme-context";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { mode, toggleMode } = useThemeMode();

  return (
    <button
      onClick={toggleMode}
      className="fixed top-4 right-4 p-2 rounded-full shadow-lg
                 bg-gray-800 dark:bg-pastelBlue
                 transition-colors duration-500"
    >
      {mode === "professional" ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-pastelPink" />
      )}
    </button>
  );
}
