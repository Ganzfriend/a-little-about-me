"use client";

import { useThemeMode } from "./theme-context";
import ThemeToggle from "./ThemeToggle";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { mode } = useThemeMode();

  return (
    <div
      className={`min-h-screen transition-colors duration-700
        ${
          mode === "professional"
            ? "bg-black text-white"
            : "bg-pastelBlue text-coral bg-stars bg-cover"
        }`}
    >
      <ThemeToggle />
      {children}
    </div>
  );
}
