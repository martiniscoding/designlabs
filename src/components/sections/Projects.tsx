import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/site";
import { workBySlug, type Work } from "@/content/works";
import { PhoneGroup } from "@/components/ui/IPhone";
import { Container } from "@/components/Shell";

/**
 * A curated projects grid: an eyebrow + accent headline on the left, the
 * pitch and a "See all" button on the right, then two columns of cards.
 * Each card carries the client name and the kind of project in its header,
 * with the shot filling the panel below.
 */
export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <Container>
        {/* Header: headline left, blurb + CTA right. */}
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow">{projects.eyebrow}</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.08]">
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
          </div>

          <div className="lg:pt-3">
            <p className="max-w-[42ch] text-[1.0625rem] leading-[1.6] text-muted">{projects.lead}</p>
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
          {projects.items.map(({ slug, tag }) => (
            <Card key={slug} work={workBySlug(slug)} tag={tag} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Card({ work, tag }: { work: Work; tag: string }) {
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
      {/* Header: name left, project kind right. */}
      <div className="flex items-center justify-between gap-4">
        <span className="flex items-center gap-2 text-[0.9375rem] font-semibold text-ink">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ink/30" />
          {work.name}
        </span>
        <span className="flex items-center gap-1.5 text-[0.9375rem] text-muted">
          {tag}
          <ArrowUpRight size={16} className="text-faint transition-colors group-hover:text-ink" />
        </span>
      </div>

      {/* Shot. Sites are 16:10 captures, so give them that box to avoid a
          side crop; apps get the squarer frame two phones need. */}
      <div
        className={`@container relative mt-5 overflow-hidden rounded-[18px] bg-card ring-1 ring-ink/5 ${
          work.kind === "app" ? "aspect-[4/3]" : "aspect-[16/10]"
        }`}
      >
        {media}
      </div>
    </>
  );

  const frame =
    "group block rounded-[26px] border border-line bg-panel p-4 shadow-[0_24px_50px_-40px_rgba(30,36,48,0.5)] outline-none transition-[translate,box-shadow,border-color] duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_34px_60px_-34px_rgba(30,36,48,0.55)] focus-visible:ring-2 focus-visible:ring-accent sm:p-5";

  return work.kind === "site" ? (
    <a href={work.url} target="_blank" rel="noreferrer" className={frame}>
      {inner}
    </a>
  ) : (
    <Link href="/work" className={frame}>
      {inner}
    </Link>
  );
}
