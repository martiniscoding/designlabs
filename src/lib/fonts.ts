import localFont from "next/font/local";

/** The one typeface: headlines, UI and body, at every weight. */
export const inter = localFont({
  src: "../fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
  fallback: ["system-ui", "Helvetica Neue", "sans-serif"],
});

/** Handwriting, for the two scribbled accents in the testimonials heading. */
export const caveat = localFont({
  src: "../fonts/Caveat-Variable.woff2",
  variable: "--font-caveat",
  weight: "400 700",
  display: "swap",
  // Five captions, well below the fold — it must not compete with Inter for
  // the critical path.
  preload: false,
  fallback: ["cursive"],
});
