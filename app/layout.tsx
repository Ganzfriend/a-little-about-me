import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-context";
import AppWrapper from "@/components/AppWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melissa Ganzfried Portfolio",
  description: "A place to show off my Software Engineering chops",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>
          <AppWrapper>{children}</AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
