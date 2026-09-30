import type { Metadata } from "next";
import Shell, { Container } from "@/components/Shell";
import WorkGrid from "@/components/sections/WorkGrid";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Work — DesignLabs",
  description: "Websites and mobile apps we have designed and shipped.",
};

export default function WorkPage() {
  return (
    <Shell>
      <Container className="pb-4">
        <div className="mb-10 text-center lg:mb-12">
          <p className="eyebrow">Work</p>
          <h1 className="display mx-auto mt-4 max-w-[16ch] text-[clamp(2.25rem,5.4vw,4rem)]">
            Showcase of our <span className="text-accent-ink">best work</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[48ch] text-[1.0625rem] text-muted">
            Websites and mobile apps we have designed and shipped. Hover a project to see what it is;
            websites open live.
          </p>
        </div>
        <WorkGrid />
        <Footer />
      </Container>
    </Shell>
  );
}
