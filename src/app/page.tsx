import type { Metadata } from "next";
import Shell, { Container } from "@/components/Shell";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import Impact from "@/components/sections/Impact";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "SaaS Design Agency & UI/UX for Startups | The Design Labs",
  description:
    "The Design Labs helps startups design exceptional SaaS products, mobile apps, and websites. UI/UX and product design built around real business goals.",
  openGraph: {
    title: "SaaS Design Agency & UI/UX for Startups | The Design Labs",
    description:
      "The Design Labs helps startups design exceptional SaaS products, mobile apps, and websites. UI/UX and product design built around real business goals.",
    type: "website",
    url: "https://www.thedesignlabs.agency/",
    siteName: "The Design Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Design Agency & UI/UX for Startups | The Design Labs",
    description: "The Design Labs helps startups design exceptional SaaS products, mobile apps, and websites. UI/UX and product design built around real business goals.",
  },
};

export default function Page() {
  return (
    <Shell hero>
      <Hero />
      <Projects />
      <Clients />
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
