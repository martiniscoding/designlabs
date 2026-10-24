import type { Metadata } from "next";
import Shell, { Container } from "@/components/Shell";
import Footer from "@/components/sections/Footer";
import { ArrowIcon } from "@/components/Icons";

function PlayIcon({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.3-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" /></svg>;
}

export const metadata: Metadata = {
  alternates: { canonical: "/motion" },
  title: "Motion Design Agency | The Design Labs",
  description:
    "Launch videos, product explainers and motion systems that make ambitious products easier to understand and harder to forget.",
  openGraph: {
    title: "Motion Design Agency | The Design Labs",
    description: "Launch videos, product explainers and motion systems for digital products.",
    type: "website",
    url: "https://www.thedesignlabs.agency/motion",
  },
  twitter: { card: "summary_large_image", title: "Motion Design Agency | The Design Labs", description: "Launch videos, product explainers and motion systems for digital products." },
};

const projects = [
  { title: "Horizon", label: "Brand film", tone: "from-[#0b111b] via-[#263b55] to-[#d28f69]", copy: "A bigger point of view for a product entering a new orbit.", time: "01:12" },
  { title: "Flow", label: "Product explainer", tone: "from-[#d9e8ff] via-[#c4b9ff] to-[#607bd7]", copy: "Show the product clearly, one confident moment at a time.", time: "00:58" },
  { title: "Wildflow", label: "Brand story", tone: "from-[#26170e] via-[#6a351f] to-[#cc713a]", copy: "A world and a visual language for ideas finding their people.", time: "01:30" },
  { title: "Vello", label: "Product video", tone: "from-[#f7f8f8] via-[#dfe4e8] to-[#9aa8b8]", copy: "Bring every tool into focus with a system that feels effortless.", time: "00:46" },
  { title: "Orion", label: "Mission film", tone: "from-[#030811] via-[#153459] to-[#4f9fe0]", copy: "A sharp, cinematic introduction to what comes next.", time: "01:08" },
  { title: "Kintra", label: "Product overview", tone: "from-[#2523a8] via-[#b46de2] to-[#ffd176]", copy: "Make collaboration feel as clear as the destination.", time: "00:52" },
];

export default function MotionPage() {
  return (
    <Shell>
      <Container>
        <section className="relative overflow-hidden border-b border-line bg-panel px-2 py-12 sm:py-16 lg:py-10">
          <div className="hero-glow opacity-70" />
          <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
          <div className="relative max-w-xl">
            <p className="eyebrow">Motion design for products worth noticing</p>
            <h1 className="display mt-6 max-w-xl text-[clamp(3rem,5.5vw,5.25rem)] text-ink">Motion that brings your <span className="headline-accent">product</span> to life.</h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Launch videos, product explainers and motion systems for teams building something people need to understand quickly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#showreel" className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"><PlayIcon size={14} /> Watch showcase</a>
              <a href="https://cal.com/designlabs-u8sdoz/15min" className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-hush">Book a call <ArrowIcon /></a>
            </div>
          </div>
          <div id="showreel" className="relative overflow-hidden rounded-2xl bg-linear-to-br from-[#1d0f0a] via-[#111b24] to-[#537b93] shadow-[0_24px_60px_-30px_rgba(16,24,32,0.5)]" aria-label="Studio showreel placeholder">
            <div className="aspect-[1.3/1] bg-[radial-gradient(ellipse_at_22%_50%,rgba(255,102,26,.8),transparent_32%),radial-gradient(ellipse_at_80%_30%,rgba(140,196,255,.4),transparent_38%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,.12)_45%,transparent_55%)]" />
            <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-ink/60 px-3 py-1 text-xs font-semibold text-white"><PlayIcon size={12} /> <span className="ml-1">Studio Showreel</span></span>
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-xl"><PlayIcon size={21} /></span>
            <span className="absolute bottom-4 right-4 rounded-full border border-white/30 bg-ink/60 px-2.5 py-1 text-xs font-semibold text-white">01:28</span>
          </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-5 text-sm font-semibold text-muted sm:mt-8">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-faint">Trusted by product teams</span>
            <span>Fincrux</span><span>Ryne AI</span><span>Chatdoc</span><span>Volnex</span><span>GoRoam</span>
          </div>
        </section>

        <section className="py-20 sm:py-28" aria-labelledby="motion-work">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Selected motion work</p>
              <h2 id="motion-work" className="section-title mt-3 max-w-[15ch]">Our work, in <span className="headline-accent">motion.</span></h2>
            </div>
            <p className="section-sub max-w-sm">Six placeholder frames ready for your real motion work.</p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className="group overflow-hidden rounded-[var(--radius-card)] bg-card">
                <div className={`relative aspect-video overflow-hidden bg-linear-to-br ${project.tone}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,.42),transparent_30%),linear-gradient(135deg,transparent_35%,rgba(255,255,255,.14))] transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg"><PlayIcon size={20} /></span></div>
                  <span className="absolute bottom-3 right-3 rounded-full bg-ink/70 px-2.5 py-1 text-xs font-semibold text-white/85">{project.time}</span>
                </div>
                <div className="flex items-center justify-between gap-3 px-4 py-3"><div><h3 className="text-sm font-semibold text-ink">{project.title}</h3><p className="mt-0.5 text-xs text-muted">{project.label}</p></div><span className="text-xs text-faint">{String(index + 1).padStart(2, "0")}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="my-16 flex flex-col gap-8 rounded-[var(--radius-panel)] border border-line bg-linear-to-br from-panel via-panel to-[#fff0e8] px-6 py-10 sm:my-24 sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
          <div><p className="eyebrow">Ready to create something remarkable?</p><h2 className="display mt-3 max-w-xl text-3xl text-ink sm:text-4xl">Let&apos;s make something worth <span className="headline-accent">watching.</span></h2></div>
          <a href="https://cal.com/designlabs-u8sdoz/15min" className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 lg:self-center">Book a call <ArrowIcon /></a>
        </section>

        <Footer />
      </Container>
    </Shell>
  );
}
