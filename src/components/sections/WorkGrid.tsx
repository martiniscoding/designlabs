"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { works, type Work } from "@/content/works";
import { PhoneGroup } from "@/components/ui/IPhone";

/* ------------------------------------------------------------------
   Masonry, not a row grid. Each tile is cut to its own screenshot's ratio
   so nothing is cropped, which means the tiles are not one height: a
   full-page capture runs several times taller than a hero shot. A row grid
   would leave a blank square beside anything tall; columns let the short
   tiles stack up that gap instead.

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
  const shotSizes = "(min-width: 1152px) 540px, (min-width: 768px) 48vw, 100vw";
  const media =
    work.kind === "app" ? (
      <PhoneGroup screens={work.screens} alt={`${work.name} app`} />
    ) : (
      <Image
        src={work.src}
        alt={`${work.name} website`}
        fill
        sizes={shotSizes}
        className="object-cover object-top"
      />
    );

  const shot = (
    <div
      // Cut to the shot's own ratio, so the whole screenshot is on show with
      // nothing trimmed off the edges. Apps are drawn, not captured, so they
      // keep a fixed frame.
      style={work.kind === "site" ? { aspectRatio: work.ratio } : undefined}
      className={`@container relative overflow-hidden rounded-[14px] bg-card ring-1 ring-ink/5 ${
        work.kind === "app" ? "aspect-[16/10]" : ""
      }`}
    >
      {media}
      {/* Sites open live, so they advertise it. Apps have nowhere to go. */}
      {work.kind === "site" && (
        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 py-1.5 pr-3 pl-3.5 text-[0.8125rem] font-semibold text-ink shadow-[0_8px_24px_-12px_rgba(30,36,48,0.5)] ring-1 ring-ink/5 backdrop-blur transition-all duration-300 md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
          View project
          <ArrowUpRight size={14} />
        </span>
      )}
    </div>
  );

  // Under the shot, inside the same card: the image can then run nearly to the
  // card's edge instead of making room for a pill floating on top of it.
  const caption = (
    <div className="flex items-center justify-between gap-4 px-3 pt-3.5 pb-1 sm:px-3.5">
      <p className="min-w-0 truncate text-[0.9375rem] tracking-[-0.01em]">
        <span className="font-semibold text-ink">{work.name}</span>
        <span className="text-muted"> · {work.what}</span>
      </p>
      <span className="flex shrink-0 items-center gap-3">
        <span className="hidden text-[0.8125rem] text-faint sm:inline">
          {work.kind === "site" ? "Website" : "Mobile app"}
        </span>
        <span className="text-[0.9375rem] tabular-nums text-line">
          {String(index + 1).padStart(2, "0")}
        </span>
      </span>
    </div>
  );

  const frame =
    "group block h-full rounded-[18px] border border-line bg-card p-1.5 shadow-[0_1px_2px_rgba(30,36,48,0.04),0_18px_40px_-34px_rgba(30,36,48,0.45)] outline-none transition-[translate,box-shadow,border-color] duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:border-ink/15 hover:shadow-[0_30px_56px_-30px_rgba(30,36,48,0.5)] focus-visible:ring-2 focus-visible:ring-accent active:translate-y-0 active:duration-150";

  return (
    <li
      className="work-in mb-5 break-inside-avoid md:mb-6"
      // Capped, or the last tiles in a long list arrive uncomfortably late.
      style={{ animationDelay: `${Math.min(index, 9) * 55}ms` } as CSSProperties}
    >
      {work.kind === "site" ? (
        <a href={work.url} target="_blank" rel="noreferrer" className={frame}>
          {shot}
          {caption}
        </a>
      ) : (
        <div tabIndex={0} className={frame}>
          {shot}
          {caption}
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

      {/* `key` restarts the entrance run when the filter changes. Column flow
          fills top to bottom, so a tall tile in one column is paired with
          several short ones in the other and no space is left over. */}
      <ul key={filter} className="columns-1 gap-5 md:columns-2 md:gap-6">
        {list.map((work, i) => (
          <Tile key={work.slug} work={work} index={i} />
        ))}
      </ul>
    </div>
  );
}
