import Shell, { Container } from "@/components/Shell";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Impact from "@/components/sections/Impact";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";

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
