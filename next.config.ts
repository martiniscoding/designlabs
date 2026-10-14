import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig: NextConfig = {
  images: {
    // AVIF first: the hero painting is the LCP element, and AVIF roughly
    // halves it against the WebP default.
    formats: ["image/avif", "image/webp"],
    // 70 for the hero painting, 75 is the default for everything else.
    qualities: [70, 75],
  },
};

export default function config(phase: string): NextConfig {
  return {
    ...nextConfig,
    // Keep production builds from overwriting a running dev server's files.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  };
}
