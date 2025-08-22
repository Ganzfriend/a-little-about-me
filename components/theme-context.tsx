"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ThemeMode = "professional" | "personal";

interface ThemeContextProps {
  mode: ThemeMode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("professional");

  const toggleMode = () => {
    setMode((prev) => (prev === "professional" ? "personal" : "professional"));
    document.documentElement.classList.toggle("dark"); // for Tailwind dark mode
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeMode must be used within ThemeProvider");
  return context;
}
