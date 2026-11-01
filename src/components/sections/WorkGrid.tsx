"use client";

import { type CSSProperties, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { works, type Work } from "@/content/works";
import { PhoneGroup } from "@/components/ui/IPhone";
import WorkCaption from "@/components/ui/WorkCaption";

type Filter = "All" | "Websites" | "Mobile Apps" | "Dashboards" | "Product UI" | "Live Websites";
type Category = Exclude<Filter, "All">;
const filters = ["All", "Live Websites", "Mobile Apps", "Websites", "Dashboards", "Product UI"] as const satisfies readonly Filter[];

const projectFilters: Record<string, Category> = {
  intelligence: "Websites", "lp-grid": "Live Websites", vanter: "Mobile Apps", acre: "Mobile Apps",
  discovery: "Websites", rexai: "Product UI", "daily-brief": "Mobile Apps", "account-flow": "Mobile Apps",
  flowship: "Websites", freight: "Websites", clearsignal: "Dashboards", "yg-doors": "Dashboards",
  qiro: "Websites", icnoc: "Live Websites", "mirage-ai": "Product UI", socialclub: "Mobile Apps",
  farfield: "Websites", nodu: "Mobile Apps", nubo: "Mobile Apps",
  tessact: "Live Websites", nogrowth: "Live Websites", owner: "Live Websites", coresium: "Live Websites", "ryne-ai": "Live Websites",
};
const sectionOrder: readonly Category[] = filters.slice(1) as readonly Category[];

function Tile({ work, index }: { work: Work; index: number }) {
  const shotSizes = "(min-width: 1152px) 540px, (min-width: 768px) 48vw, 100vw";
  const media = work.kind === "app" ? <PhoneGroup screens={work.screens} alt={`${work.name} app`} /> : (
    <Image src={work.src} alt={`${work.name} website`} fill sizes={shotSizes} priority={index < 2} className="object-cover object-top" />
  );
  return (
    <li className="work-in mb-5 break-inside-avoid md:mb-6" style={{ animationDelay: `${Math.min(index, 9) * 55}ms` } as CSSProperties}>
      <div className="overflow-hidden rounded-[16px] border border-[#e2e3e8] bg-white transition-[translate] duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1">
        <div className="p-2 sm:p-3">
          {work.kind === "site" && work.live ? <a href={work.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${work.name} live website in a new tab`}>
            <div className="relative" style={{ aspectRatio: work.ratio }}><div className="@container relative h-full overflow-hidden rounded-[10px] bg-card">{media}</div></div>
          </a> : <div className={`relative ${work.kind === "app" ? "aspect-[16/10]" : ""}`} style={work.kind === "site" ? { aspectRatio: work.ratio } : undefined}>
            <div className="@container relative h-full overflow-hidden rounded-[10px] bg-card">{media}</div>
          </div>}
          <WorkCaption work={work} index={index} />
        </div>
      </div>
    </li>
  );
}

function ProjectSection({ category, projects }: { category: Category; projects: Work[] }) {
  if (!projects.length) return null;
  const id = `work-${category.toLowerCase().replaceAll(" ", "-")}`;
  return (
    <section className="mb-16 last:mb-0 sm:mb-20" aria-labelledby={id}>
      <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
        <h2 id={id} className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-2">{category} <span className="text-muted">— {String(projects.length).padStart(2, "0")}</span></h2>
      </div>
      <ul className="columns-1 gap-5 md:columns-2 md:gap-6">{projects.map((work, index) => <Tile key={work.slug} work={work} index={index} />)}</ul>
    </section>
  );
}

export default function WorkGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  useEffect(() => {
    const readFilter = () => {
      const value = new URLSearchParams(window.location.search).get("category") as Filter | null;
      setFilter(value && filters.includes(value) ? value : "All");
    };
    readFilter();
    window.addEventListener("popstate", readFilter);
    return () => window.removeEventListener("popstate", readFilter);
  }, []);

  const counts = useMemo(() => {
    const result = Object.fromEntries(filters.map((item) => [item, 0])) as Record<Filter, number>;
    result.All = works.length;
    works.forEach((work) => { result[projectFilters[work.slug]] += 1; });
    return result;
  }, []);
  const selectFilter = (next: Filter) => {
    setFilter(next);
    const url = new URL(window.location.href);
    if (next === "All") url.searchParams.delete("category"); else url.searchParams.set("category", next);
    window.history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);
  };
  const sections = sectionOrder.map((category) => ({ category, projects: works.filter((work) => projectFilters[work.slug] === category) }));
  const selectedCategory = filter === "All" ? null : (filter as Category);
  const selectedProjects = selectedCategory ? works.filter((work) => projectFilters[work.slug] === selectedCategory) : [];
  return (
    <>
      <div className="mb-10 flex justify-center sm:mb-12">
        <div role="tablist" aria-label="Filter projects" className="flex max-w-full gap-1 overflow-x-auto rounded-full bg-hush/70 p-1 [scrollbar-width:none] sm:p-1.5">
          {filters.map((item) => {
            const active = filter === item;
            return <button key={item} type="button" role="tab" aria-selected={active} onClick={() => selectFilter(item)} className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-sm transition-all duration-300 sm:px-6 sm:py-3 sm:text-[0.9375rem] ${active ? "bg-card font-medium text-ink shadow-[0_8px_20px_-12px_rgba(30,36,48,0.45)]" : "text-muted hover:text-ink"}`}>
              {item} ({counts[item]})
            </button>;
          })}
        </div>
      </div>
      {selectedCategory === null ? sections.map(({ category, projects }) => <ProjectSection key={category} category={category} projects={projects} />) : selectedProjects.length ? <ProjectSection category={selectedCategory} projects={selectedProjects} /> : <p className="rounded-[16px] border border-line bg-card px-6 py-10 text-center text-muted">No verified live websites have been added yet.</p>}
    </>
  );
}
