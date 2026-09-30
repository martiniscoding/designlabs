/**
 * Shipped client work. Website shots live in /public/work (2880×1800 hero
 * captures, 16:10); app screens live in /public/apps (230×498 phone captures,
 * `<slug>-<n>.webp`). Used by the home page marquee and the /work page.
 */
export type Work =
  | { kind: "site"; slug: string; name: string; what: string; url: string; src: string }
  | { kind: "app"; slug: string; name: string; what: string; screens: string[] };

const site = (slug: string, name: string, what: string, url: string): Work => ({
  kind: "site",
  slug,
  name,
  what,
  url,
  src: `/work/${slug}.png`,
});

const app = (slug: string, name: string, what: string, count = 2): Work => ({
  kind: "app",
  slug,
  name,
  what,
  screens: Array.from({ length: count }, (_, i) => `/apps/${slug}-${i + 1}.webp`),
});

export const works: Work[] = [
  site("ryne-ai", "Ryne AI", "AI humanizer and writing tools", "https://ryne.ai/"),
  site("chatdoc", "ChatDOC", "Chat with your documents", "https://chatdoc.com/m/"),
  site("tessact-ai", "Tessact", "AI video editing at scale", "https://tessact.ai/"),
  app("pillo", "PillO", "60-minute medicine delivery"),
  app("unicapp", "Unicapp", "On-demand delivery"),
  app("skanaus", "Skanaus", "Restaurant discounts in Lithuania"),
  site("volnex", "VolNex", "Global trading platform", "https://www.volnex.com/"),
  site("fincrux", "Fincrux", "Indian market data API", "https://fincrux.org/"),
  site("fabhotels", "FabHotels", "Budget hotel booking", "https://www.fabhotels.com/"),
  app("turf-town", "Turf Town", "Sports venue booking"),
  app("dark-noise", "Dark Noise", "Ambient sounds for sleep and focus"),
  app("all-quiet", "All Quiet", "Incident management"),
  site("goroam", "GoRoam", "AI travel planner", "https://goroam.vercel.app/"),
  site("typill", "Typill", "AI writing workspace", "https://typill.com/"),
  site("nosana", "Nosana", "GPU compute for AI inference", "https://nosana.vercel.app/"),
  site("replizz-ai", "Replizz AI", "AI customer support chatbots", "https://replizz-ai.vercel.app/"),
  site("nogrowth", "NoGrowth", "Ad creative studio", "https://nogrowth.com/"),
  site("dappunk", "dappunk", "Brand website", "https://dappunk.com/"),
];

export const workBySlug = (slug: string) => {
  const w = works.find((w) => w.slug === slug);
  if (!w) throw new Error(`Unknown work: ${slug}`);
  return w;
};
