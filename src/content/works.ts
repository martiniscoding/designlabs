/**
 * Shipped client work. Website shots live in /public/work (2880×1800 hero
 * captures, 16:10); app screens live in /public/apps (230×498 phone captures,
 * `<slug>-<n>.webp`). Used by the home page marquee and the /work page.
 */
export type Work =
  | {
      kind: "site";
      slug: string;
      name: string;
      what: string;
      url: string;
      src: string;
      /** The shot's own width ÷ height. The tile is cut to this, so the
       *  whole screenshot shows with nothing cropped off the edges.
       *  Regenerate with: python3 -c "from PIL import Image;..." over
       *  /public/work when a shot is replaced. */
      ratio: number;
    }
  | { kind: "app"; slug: string; name: string; what: string; screens: string[] };

const site = (slug: string, name: string, what: string, url: string, ratio: number): Work => ({
  kind: "site",
  slug,
  name,
  what,
  url,
  src: `/work/${slug}.png`,
  ratio,
});

/** A second screen from a project that already has a tile of its own. */
const shot = (
  slug: string,
  n: number,
  name: string,
  what: string,
  url: string,
  ratio: number,
): Work => ({
  kind: "site",
  slug: `${slug}-${n}`,
  name,
  what,
  url,
  src: `/work/${slug}-${n}.png`,
  ratio,
});

const app = (slug: string, name: string, what: string, count = 2): Work => ({
  kind: "app",
  slug,
  name,
  what,
  screens: Array.from({ length: count }, (_, i) => `/apps/${slug}-${i + 1}.webp`),
});

export const works: Work[] = [
  site("ryne-ai", "Ryne AI", "AI humanizer and writing tools", "https://ryne.ai/", 1.7209),
  shot("ryne-ai", 2, "Ryne AI", "The AI tool suite", "https://ryne.ai/", 1.7398),
  site("chatdoc", "ChatDOC", "Chat with your documents", "https://chatdoc.com/m/", 1.6),
  site("tessact-ai", "Tessact", "AI video editing at scale", "https://tessact.ai/", 1.6),
  app("pillo", "PillO", "60-minute medicine delivery"),
  app("unicapp", "Unicapp", "On-demand delivery"),
  app("skanaus", "Skanaus", "Restaurant discounts in Lithuania"),
  site("volnex", "VolNex", "Global trading platform", "https://www.volnex.com/", 1.6),
  site("fincrux", "Fincrux", "Indian market data API", "https://fincrux.org/", 1.6),
  site("fabhotels", "FabHotels", "Budget hotel booking", "https://www.fabhotels.com/", 1.6),
  app("turf-town", "Turf Town", "Sports venue booking"),
  app("dark-noise", "Dark Noise", "Ambient sounds for sleep and focus"),
  app("all-quiet", "All Quiet", "Incident management"),
  shot("goroam", 2, "GoRoam", "Trip planning flow", "https://goroam.vercel.app/", 1.7835),
  site("typill", "Typill", "AI writing workspace", "https://typill.com/", 1.7166),
  site("nosana", "Nosana", "GPU compute for AI inference", "https://nosana.vercel.app/", 0.6627),
  site("replizz-ai", "Replizz AI", "AI customer support chatbots", "https://replizz-ai.vercel.app/", 1.6),
  site("goroam", "GoRoam", "AI travel planner", "https://goroam.vercel.app/", 1.6),
  site("nogrowth", "NoGrowth", "Ad creative studio", "https://nogrowth.com/", 1.6),
  site("dappunk", "dappunk", "Brand website", "https://dappunk.com/", 1.69),
];

export const workBySlug = (slug: string) => {
  const w = works.find((w) => w.slug === slug);
  if (!w) throw new Error(`Unknown work: ${slug}`);
  return w;
};
