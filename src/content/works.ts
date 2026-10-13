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
  site("intelligence", "Intelligence", "AI platform landing", 1.77),
  site("lp-grid", "LP Grid", "VC data platform", 1.741),
  site("vanter", "Vanter", "Engineering studio site", 1.766),
  site("acre", "Acre", "Maker workspace landing", 1.327),
  site("flowship", "FlowShip", "Delivery platform site", 1.484),
  site("rexai", "RexAI", "Onboarding UI", 1.544),
  site("daily-brief", "Daily Brief", "News brief mobile app", 1.778),
  site("account-flow", "Account Flow", "Sign-up screen", 1.347),
  site("discovery", "Discovery", "AI agents landing", 1.672),
  site("freight", "Freight", "Logistics landing", 1.782),
  site("clearsignal", "ClearSignal", "Workflow dashboard", 1.504),
  site("yg-doors", "YG Doors", "Manufacturing landing", 1.741),
  site("qiro", "Qiro", "DeFi lending landing", 1.732),
  site("icnoc", "icnoc", "Shopify agency landing", 1.534),
];

export const workBySlug = (slug: string) => {
  const w = works.find((w) => w.slug === slug);
  if (!w) throw new Error(`Unknown work: ${slug}`);
  return w;
};
