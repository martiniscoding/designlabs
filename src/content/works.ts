/**
 * Shipped work. Each shot lives in /public/work/<slug>.jpg. `ratio` is the
 * shot's own width ÷ height, so the tile is cut to it and nothing is cropped.
 */
export type Work =
  | {
      kind: "site";
      slug: string;
      name: string;
      what: string;
      url: string; // "#" means no live link
      src: string;
      ratio: number;
    }
  | { kind: "app"; slug: string; name: string; what: string; screens: string[] };

const site = (slug: string, name: string, what: string, ratio: number, url = "#"): Work => ({
  kind: "site",
  slug,
  name,
  what,
  url,
  src: `/work/${slug}.jpg`,
  ratio,
});

export const works: Work[] = [
  site("intelligence", "Wildflow", "Web3 ecosystem landing", 1.755),
  site("lp-grid", "Veilos", "AI security platform landing", 1.532),
  site("vanter", "Velto", "Crypto wallet mobile app", 1.333),
  site("acre", "Wayo", "Travel discovery mobile app", 1.5),
  site("discovery", "Orion", "AI sales platform landing", 1.5),
  site("rexai", "RexAI", "AI onboarding interface", 1.592),
  site("daily-brief", "Piplo", "Kids discovery platform landing", 1.5),
  site("account-flow", "Nodi Pro", "AI mobile app landing", 1.333),
  site("flowship", "Kintra", "Team collaboration workspace", 1.333),
  site("freight", "Soundkin", "Audio production studio website", 1.333),
  site("clearsignal", "Navix", "Logistics operations dashboard", 1.5),
  site("yg-doors", "Pikko", "Food delivery operations dashboard", 1.5),
  site("qiro", "Qiro", "DeFi lending landing", 1.732),
  site("icnoc", "Knox", "Shopify ecommerce agency landing", 1.639),
  site("mirage-ai", "Mirage.ai", "AI authentication experience", 1.333),
];

export const workBySlug = (slug: string) => {
  const w = works.find((w) => w.slug === slug);
  if (!w) throw new Error(`Unknown work: ${slug}`);
  return w;
};
