import type { Metadata } from "next";
import Shell, { Container } from "@/components/Shell";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Impact from "@/components/sections/Impact";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "The Design Labs | UI/UX, SaaS & Web Design Agency",
  description:
    "The Design Labs is a UI/UX, SaaS, web and mobile app design agency helping startups turn complex products into clear, trusted experiences.",
  openGraph: {
    title: "The Design Labs | UI/UX, SaaS & Web Design Agency",
    description:
      "UI/UX, SaaS, web and mobile app design for startups and growing products.",
    type: "website",
    url: "https://www.thedesignlabs.agency/",
    siteName: "The Design Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Design Labs | UI/UX, SaaS & Web Design Agency",
    description: "UI/UX, SaaS, web and mobile app design for startups and growing products.",
  },
};

export default function Page() {
  return (
    <Shell hero>
      <Hero />
      <Projects />
      {/* The sections carry their own rhythm now that nothing separates
          them: one gap, set here, between every pair. */}
      <Container className="flex flex-col gap-28 pt-28 pb-4 lg:gap-40 lg:pt-40">
        <Services />
        <Impact />
        <Testimonials />
        <Faq />
        <Footer />
      </Container>
    </Shell>
  );
}
