"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { works, type Work } from "@/content/works";
import { PhoneGroup } from "@/components/ui/IPhone";

/* ------------------------------------------------------------------
   Bento layout. The page is a stack of rows; each row is its own grid
   with its OWN aspect ratio and column split, so the rhythm keeps
   changing — a wide pair, then a tall full-width hero, then a bento
   block of one big site beside two stacked apps. A row never leaves a
   hole, and the packer works on any filtered subset.

   Site shots are 16:10 cropped from the top, so every site cell is kept
   between ~1.5 and ~1.9 wide; squarer than that and the page edges crop.
------------------------------------------------------------------- */
type Cell = { work: Work; area?: string };
type Row = { aspect: number; cols: string; rows?: string; cells: Cell[] };

const cell = (work: Work, area?: string): Cell => ({ work, area });

/* Row builders. `area` is a grid-area (row/col start/end), applied at md+. */
const single = (w: Work): Row => ({ aspect: w.kind === "site" ? 2.45 : 1.8, cols: "1fr", cells: [cell(w)] });
const pairL = (a: Work, b: Work): Row => ({ aspect: 3.33, cols: "1.25fr 1fr", cells: [cell(a), cell(b)] });
const pairR = (a: Work, b: Work): Row => ({ aspect: 3.33, cols: "1fr 1.25fr", cells: [cell(a), cell(b)] });
const duo = (a: Work, b: Work): Row => ({ aspect: 3.2, cols: "1fr 1fr", cells: [cell(a), cell(b)] });
const trio = (a: Work, b: Work, c: Work): Row => ({ aspect: 3, cols: "1fr 1fr 1fr", cells: [cell(a), cell(b), cell(c)] });
const appDuo = (a: Work, b: Work): Row => ({ aspect: 2.7, cols: "1fr 1fr", cells: [cell(a), cell(b)] });
const siteApp = (s: Work, a: Work): Row => ({ aspect: 3.1, cols: "1.5fr 1fr", cells: [cell(s), cell(a)] });

/* The bento moment: one big site spanning both rows, two apps stacked. */
const comboL = (s: Work, x: Work, y: Work): Row => ({
  aspect: 2.3,
  cols: "2.4fr 1fr",
  rows: "1fr 1fr",
  cells: [cell(s, "1 / 1 / 3 / 2"), cell(x, "1 / 2 / 2 / 3"), cell(y, "2 / 2 / 3 / 3")],
});
const comboR = (s: Work, x: Work, y: Work): Row => ({
  aspect: 2.3,
  cols: "1fr 2.4fr",
  rows: "1fr 1fr",
  cells: [cell(s, "1 / 2 / 3 / 3"), cell(x, "1 / 1 / 2 / 2"), cell(y, "2 / 1 / 3 / 2")],
});

/**
 * Walk the list, emitting a varied sequence. Site rows cycle through a
 * left-heavy pair, an even duo, a right-heavy pair and a full-width hero;
 * every third row becomes a bento combo when a site and two apps are free.
 */
function pack(list: Work[]): Row[] {
  const sites = list.filter((w) => w.kind === "site");
  const apps = list.filter((w) => w.kind === "app");
  const rows: Row[] = [];
  let step = 0;
  let siteRow = 0;

  while (sites.length || apps.length) {
    const s = sites.length;
    const a = apps.length;

    if (s >= 1 && a >= 2 && step % 3 === 2) {
      const build = step % 2 === 0 ? comboL : comboR;
      rows.push(build(sites.shift()!, apps.shift()!, apps.shift()!));
    } else if (s >= 2) {
      const k = siteRow++ % 4;
      const [p, q] = [sites.shift()!, sites.shift()!];
      rows.push(k === 0 ? pairL(p, q) : k === 1 ? duo(p, q) : pairR(p, q));
      if (k === 3) {
        // The "single" slot of the cycle: give the second one its own row.
        rows.pop();
        sites.unshift(q);
        rows.push(single(p));
      }
    } else if (a >= 3) {
      rows.push(trio(apps.shift()!, apps.shift()!, apps.shift()!));
    } else if (a >= 2) {
      rows.push(appDuo(apps.shift()!, apps.shift()!));
    } else if (s >= 1 && a >= 1) {
      rows.push(siteApp(sites.shift()!, apps.shift()!));
    } else {
      rows.push(single((sites.length ? sites : apps).shift()!));
    }
    step++;
  }
  return rows;
}

const filters = [
  { id: "all", label: "All" },
  { id: "site", label: "Websites" },
  { id: "app", label: "Mobile apps" },
] as const;
type Filter = (typeof filters)[number]["id"];

function Tile({ work, area }: { work: Work; area?: string }) {
  const media =
    work.kind === "app" ? (
      <PhoneGroup screens={work.screens} alt={`${work.name} app`} />
    ) : (
      <Image
        src={work.src}
        alt={`${work.name} website`}
        fill
        sizes="(min-width: 1152px) 760px, (min-width: 768px) 58vw, 100vw"
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
  const inner = `@container relative h-full overflow-hidden rounded-[14px] bg-card ring-1 ring-ink/5 md:aspect-auto ${
    work.kind === "app" ? "aspect-[4/3]" : "aspect-[16/10]"
  }`;

  return (
    <li
      style={area ? ({ "--ga": area } as CSSProperties) : undefined}
      className={area ? "md:[grid-area:var(--ga)]" : undefined}
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

      <div key={filter} className="space-y-4 md:space-y-5">
        {pack(list).map((row, b) => (
          <ul
            key={b}
            style={
              {
                "--a": row.aspect,
                "--cols": row.cols,
                ...(row.rows ? { "--rows": row.rows } : {}),
                animationDelay: `${b * 70}ms`,
              } as CSSProperties
            }
            className={`work-in grid gap-4 md:aspect-[var(--a)] md:gap-5 md:[grid-template-columns:var(--cols)] ${
              row.rows ? "md:[grid-template-rows:var(--rows)]" : ""
            }`}
          >
            {row.cells.map((c) => (
              <Tile key={c.work.slug} work={c.work} area={c.area} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
