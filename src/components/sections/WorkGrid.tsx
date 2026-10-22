import { type CSSProperties } from "react";
import Image from "next/image";
import { works, type Work } from "@/content/works";
import { PhoneGroup } from "@/components/ui/IPhone";
import WorkCaption from "@/components/ui/WorkCaption";

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
        priority={index < 2}
        className="object-cover object-top"
      />
    );

  const shot = (
    // Keep the screenshot's ratio and white spacing around the preview.
    <div className="p-2 sm:p-3">
      <div
        className={`relative ${work.kind === "app" ? "aspect-[16/10]" : ""}`}
        style={work.kind === "site" ? { aspectRatio: work.ratio } : undefined}
      >
        <div className="@container relative h-full overflow-hidden rounded-[10px] bg-card">
          {media}
        </div>
      </div>
      <WorkCaption work={work} index={index} />
    </div>
  );

  return (
    <li
      className="work-in mb-5 break-inside-avoid md:mb-6"
      // Capped, or the last tiles in a long list arrive uncomfortably late.
      style={{ animationDelay: `${Math.min(index, 9) * 55}ms` } as CSSProperties}
    >
      <div className="overflow-hidden rounded-[16px] border border-[#e2e3e8] bg-white transition-[translate] duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1">
        {shot}
      </div>
    </li>
  );
}

export default function WorkGrid() {
  return (
    // Column flow fills top to bottom, so a tall tile in one column is paired
    // with several short ones in the other and no space is left over.
    <ul className="columns-1 gap-5 md:columns-2 md:gap-6">
      {works.map((work, i) => (
        <Tile key={work.slug} work={work} index={i} />
      ))}
    </ul>
  );
}
