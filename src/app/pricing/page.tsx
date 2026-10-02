import type { Metadata } from "next";
import Shell, { Container } from "@/components/Shell";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";
import { pricingTeaser } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing | DesignLabs",
  description:
    "Fixed prices for launch sites, brand systems and product UI, plus a monthly retainer. The numbers are on the page.",
};

export default function PricingPage() {
  return (
    <Shell>
      <Container className="pb-4">
        <div className="mb-10 lg:mb-14">
          <p className="eyebrow">{pricingTeaser.eyebrow}</p>
          <h1 className="section-title mt-4 max-w-[18ch]">
            {pricingTeaser.title.map((part, i) => (
              <span key={i} className={"accent" in part && part.accent ? "text-accent" : undefined}>
                {part.text}
              </span>
            ))}
          </h1>
          <p className="section-sub mt-5">{pricingTeaser.body}</p>
        </div>
        <Pricing />
        <Footer />
      </Container>
    </Shell>
  );
}
