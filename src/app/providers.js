'use client'


import { ThemeProvider } from "next-themes";

export function RootLayout({ children }) {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
}