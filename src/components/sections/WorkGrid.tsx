"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { works, type Work } from "@/content/works";
import { PhoneGroup } from "@/components/ui/IPhone";

/* ------------------------------------------------------------------
   One uniform grid: every project gets the same cell, two to a row.

   Two rather than three, because the site shots are full-page captures
   — at three across the headline type inside them stops being legible.
   Every cell is 16:10, which is the shots' own ratio; the app cells get
   the same box and centre their phones inside it.
------------------------------------------------------------------- */

const filters = [
  { id: "all", label: "All" },
  { id: "site", label: "Websites" },
  { id: "app", label: "Mobile apps" },
] as const;
type Filter = (typeof filters)[number]["id"];

function Tile({ work, index }: { work: Work; index: number }) {
  const media =
    work.kind === "app" ? (
      <PhoneGroup screens={work.screens} alt={`${work.name} app`} />
    ) : (
      <Image
        src={work.src}
        alt={`${work.name} website`}
        fill
        sizes="(min-width: 1152px) 530px, (min-width: 768px) 48vw, 100vw"
        className="object-cover object-top transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
      />
    );

  const caption = (
    <span className="absolute bottom-3 left-3 flex max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-full bg-white/90 py-1.5 pr-3 pl-3.5 text-[0.8125rem] text-ink shadow-[0_8px_24px_-12px_rgba(30,36,48,0.5)] ring-1 ring-ink/5 backdrop-blur transition-all duration-300 md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
      <span className="shrink-0 whitespace-nowrap font-semibold">{work.name}</span>
      <span className="truncate text-muted">{work.what}</span>
      {work.kind === "site" && <ArrowUpRight size={14} className="shrink-0" />}
    </span>
  );

  const frame =
    "group block h-full rounded-[var(--radius-card)] border border-line bg-hush/70 p-2.5 shadow-[0_24px_50px_-38px_rgba(30,36,48,0.55)] outline-none transition-[translate,box-shadow,border-color,background-color] duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:border-ink/15 hover:bg-hush hover:shadow-[0_36px_60px_-30px_rgba(30,36,48,0.55)] focus-visible:ring-2 focus-visible:ring-accent active:translate-y-0 active:duration-150 lg:p-3";
  const inner =
    "@container relative aspect-[16/10] overflow-hidden rounded-[14px] bg-card ring-1 ring-ink/5";

  return (
    <li
      className="work-in"
      // Capped, or the last tiles in a long list arrive uncomfortably late.
      style={{ animationDelay: `${Math.min(index, 9) * 55}ms` } as CSSProperties}
    >
      {work.kind === "site" ? (
        <a href={work.url} target="_blank" rel="noreferrer" className={frame}>
          <div className={inner}>
            {media}
            {caption}
          </div>
        </a>
      ) : (
        <div tabIndex={0} className={frame}>
          <div className={inner}>
            {media}
            {caption}
          </div>
        </div>
      )}
    </li>
  );
}

export default function WorkGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const list = filter === "all" ? works : works.filter((w) => w.kind === filter);

  return (
    <div>
      <div className="sticky top-[84px] z-40 mx-auto mb-8 w-fit max-w-full lg:mb-10">
        <div
          role="group"
          aria-label="Filter work"
          className="flex gap-1 rounded-full border border-line bg-panel/80 p-1 shadow-[0_12px_32px_-16px_rgba(30,36,48,0.35)] backdrop-blur-lg"
        >
          {filters.map((f) => {
            const count = f.id === "all" ? works.length : works.filter((w) => w.kind === f.id).length;
            const on = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(f.id)}
                className={`whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300 min-[380px]:px-3.5 sm:px-4 ${
                  on ? "bg-ink text-white" : "text-muted hover:text-ink"
                }`}
              >
                {f.label}
                <span className={`ml-1.5 hidden tabular-nums min-[380px]:inline ${on ? "text-white/60" : "text-faint"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* `key` on the list restarts the entrance run when the filter changes. */}
      <ul key={filter} className="grid gap-4 md:grid-cols-2 md:gap-5">
        {list.map((work, i) => (
          <Tile key={work.slug} work={work} index={i} />
        ))}
      </ul>
    </div>
  );
}
