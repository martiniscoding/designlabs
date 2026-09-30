import Shell, { Container } from "@/components/Shell";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Showcase from "@/components/sections/Showcase";
import Services from "@/components/sections/Services";
import Impact from "@/components/sections/Impact";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import { Divider } from "@/components/ui/Bits";
import { workflow } from "@/content/site";

export default function Page() {
  return (
    <Shell hero>
      <Hero />
      <TrustedBy />
      <Showcase />
      <Container className="pb-4">
        <Divider label="Services" />
        <Services />
        <Divider label="How we work" />
        <Impact />
        <Divider label={workflow.eyebrow} />
        <Process />
        <Divider label="Testimonials" />
        <Testimonials />
        <Divider label="FAQ" />
        <Faq />
        <Footer />
      </Container>
    </Shell>
  );
}
