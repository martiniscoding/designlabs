import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/site";
import { workBySlug, type Work } from "@/content/works";
import { PhoneGroup } from "@/components/ui/IPhone";
import { Container } from "@/components/Shell";
import { SectionLabel } from "@/components/ui/Bits";
import WorkCaption from "@/components/ui/WorkCaption";

/**
 * A curated projects grid: an eyebrow + accent headline on the left, the
 * pitch and a "See all" button on the right, then two columns of cards.
 * Each card pairs an inset screenshot with its project details below.
 */
export default function Projects() {
  /* No bottom padding on purpose: the Container below supplies the page's
     standard gap, and the two were stacking into a 272px hole. */
  return (
    <section id="projects" className="pt-20 lg:pt-28">
      <Container>
        {/* Header: headline left, blurb + CTA right. */}
        <SectionLabel>{projects.eyebrow}</SectionLabel>
        {/* The label sits above the row, so the headline and the blurb
            beside it start on exactly the same line. */}
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-start lg:gap-16">
            <h2 className="section-title">
              {projects.title.map((line, i) => (
                <span key={i} className="block">
                  {line.map((part, j) => (
                    <span key={j} className={"accent" in part && part.accent ? "text-accent" : undefined}>
                      {part.text}
                    </span>
                  ))}
                </span>
              ))}
            </h2>

          <div>
            <p className="section-sub">{projects.lead}</p>
            <Link
              href={projects.cta.href}
              className="group mt-6 inline-flex items-center gap-3 rounded-full bg-ink py-2 pr-2 pl-5 text-[0.9375rem] font-medium text-white transition-colors duration-300 hover:bg-ink-2"
            >
              {projects.cta.label}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>
        </div>

        {/* Card grid. */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16">
          {projects.items.map(({ slug }, index) => (
            <Card key={slug} work={workBySlug(slug)} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Card({ work, index }: { work: Work; index: number }) {
  const media =
    work.kind === "app" ? (
      <PhoneGroup screens={work.screens} alt={`${work.name} app`} />
    ) : (
      <Image
        src={work.src}
        alt={`${work.name} website`}
        fill
        sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
        className="object-cover object-top transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
      />
    );

  const inner = (
    <>
      <div className="p-2 sm:p-3">
        <div
          className={`relative ${work.kind === "app" ? "aspect-[4/3]" : ""}`}
          style={work.kind === "site" ? { aspectRatio: work.ratio } : undefined}
        >
          <div className="@container relative h-full overflow-hidden rounded-[10px] bg-card">
            {media}
          </div>
        </div>
        <WorkCaption work={work} index={index} />
      </div>
    </>
  );

  const frame =
    "group block self-start overflow-hidden rounded-[16px] border border-[#e2e3e8] bg-white outline-none transition-[translate] duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-accent";

  return (
    <Link href="/work" className={frame}>
      {inner}
    </Link>
  );
}
