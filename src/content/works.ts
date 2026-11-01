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
      live?: boolean;
    }
  | { kind: "app"; slug: string; name: string; what: string; screens: string[] };

const site = (slug: string, name: string, what: string, ratio: number, url = "#", live = false): Work => ({
  kind: "site",
  slug,
  name,
  what,
  url,
  src: `/work/${slug}.jpg`,
  ratio,
  live,
});

export const works: Work[] = [
  site("intelligence", "Wildflow", "Web3 ecosystem landing", 1.755),
  site("lp-grid", "LP Grid", "Live investment intelligence", 1.641, "https://www.lpgrid.com/", true),
  site("vanter", "Velto", "Crypto wallet mobile app", 1.333),
  site("acre", "Wayo", "Travel discovery mobile app", 1.5),
  site("discovery", "Orion", "AI sales platform landing", 1.5),
  site("rexai", "RexAI", "AI onboarding interface", 1.592),
  site("daily-brief", "Sway", "Personalized music mobile app", 1.5),
  site("account-flow", "Nodi Pro", "AI mobile app landing", 1.333),
  site("freight", "Soundkin", "Audio production studio website", 1.333),
  site("clearsignal", "Navix", "Logistics operations dashboard", 1.5),
  // Keep Kintra first in the right-hand desktop masonry column on the All view.
  site("flowship", "Kintra", "Team collaboration workspace", 1.333),
  site("yg-doors", "Pikko", "Food delivery operations dashboard", 1.5),
  site("qiro", "Qiro", "DeFi lending landing", 1.732),
  site("icnoc", "Knox", "Shopify ecommerce agency", 1.639, "https://knox.team/", true),
  site("mirage-ai", "Mirage.ai", "AI authentication experience", 1.333),
  site("socialclub", "SocialClub", "Social connection mobile app onboarding", 1.5),
  site("farfield", "FarField", "Team collaboration platform website", 1.777),
  site("nodu", "NODU", "AI workspace mobile app", 1.333),
  site("nubo", "nubo", "Pet care mobile app", 1.333),
  site("tessact", "Tessact AI", "AI video workflow platform", 1.697, "https://tessact.ai/", true),
  site("nogrowth", "NoGrowth", "Performance creative studio", 1.665, "https://nogrowth.com/", true),
  site("owner", "Owner", "Restaurant growth platform", 1.429, "https://www.owner.com/", true),
  site("coresium", "Coresium", "Revenue growth systems", 1.647, "https://coresium.com/", true),
  site("ryne-ai", "Ryne AI", "AI writing platform", 1.687, "https://ryne.ai/", true),
];

export const workBySlug = (slug: string) => {
  const w = works.find((w) => w.slug === slug);
  if (!w) throw new Error(`Unknown work: ${slug}`);
  return w;
};
