import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { WebVitals } from "./web-vitals";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical assets to prevent layout shifts */}
        <link rel="preload" href="/hero-bg.svg" as="image" />
        <link rel="preload" href="/logo.png" as="image" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </head>
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
        style={{ minHeight: "100vh" }}
      >
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
