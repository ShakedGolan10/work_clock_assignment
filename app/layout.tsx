import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppThemeProvider } from "@/providers/theme_context_provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clock work home assignment",
  description: "Generated for Yeuda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AppThemeProvider>
        {children}
      </AppThemeProvider>
      </body>
    </html>
  );
}
