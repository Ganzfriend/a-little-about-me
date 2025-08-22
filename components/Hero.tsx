"use client";
import { useThemeMode } from "@/components/theme-context";

export default function Hero() {
  const { mode } = useThemeMode();

  return (
    <section
      className={`h-screen w-full flex items-center justify-center transition-all duration-700
        ${
          mode === "professional"
            ? "bg-black text-white"
            : "bg-pastelBlue text-coral bg-stars bg-cover"
        }`}
    >
      {mode === "professional" ? (
        <h1 className="text-4xl font-bold">
          Hi, I&apos;m Melissa — Software Engineer
        </h1>
      ) : (
        <h1 className="text-4xl font-bold">
          🌸✨ Melissa in Fun Mode — Dreamer, Builder, Explorer ✨🌸
        </h1>
      )}
    </section>
  );
}
