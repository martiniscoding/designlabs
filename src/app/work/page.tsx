import type { Metadata } from "next";
import Shell, { Container } from "@/components/Shell";
import WorkGrid from "@/components/sections/WorkGrid";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/work" },
  title: "Work | The Design Labs",
  description: "Selected UI/UX, SaaS, web and mobile app design projects by The Design Labs.",
  openGraph: {
    title: "Work | The Design Labs",
    description: "Selected UI/UX, SaaS, web and mobile app design projects by The Design Labs.",
    type: "website",
    url: "https://www.thedesignlabs.agency/work",
  },
  twitter: { card: "summary_large_image", title: "Work | The Design Labs", description: "Selected UI/UX, SaaS, web and mobile app design projects by The Design Labs." },
};

export default function WorkPage() {
  return (
    <Shell>
      <Container className="pb-4">
        <div className="mb-10 text-center lg:mb-12">
          <p className="eyebrow">Work</p>
          <h1 className="section-title mx-auto mt-4 max-w-[16ch]">
            <span className="text-accent-ink">Showcase</span> of our best <span className="text-accent-ink">work</span>
          </h1>
          <p className="section-sub mx-auto mt-5">
            A showcase of the websites and mobile apps we have designed and shipped.
          </p>
        </div>
      </Container>

      {/* Wider than the page container, so the tiles read large. */}
      <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-10">
        <WorkGrid />
      </div>

      <Container className="pb-4">
        <Footer />
      </Container>
    </Shell>
  );
}
