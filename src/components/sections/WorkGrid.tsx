import { type CSSProperties } from "react";
import Image from "next/image";
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
    // Wrapper carries the ratio and the corner marks; the inner box clips the
    // image behind a thin grey frame, so the whole screenshot reads as framed.
    <div className="relative bg-white px-7 py-6 sm:px-10 sm:py-8">
      <div
        className={`relative ${work.kind === "app" ? "aspect-[16/10]" : ""}`}
        style={work.kind === "site" ? { aspectRatio: work.ratio } : undefined}
      >
        <div className="@container relative h-full overflow-hidden bg-card">
          {media}
        </div>
      </div>
      {/* Grey rules sit on the image edges but run out to the white box edges. */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 text-ink/15">
        <span className="absolute inset-x-0 bottom-6 h-px bg-current sm:bottom-8" />
        <span className="absolute inset-y-0 left-7 w-px bg-current sm:left-10" />
        <span className="absolute inset-y-0 right-7 w-px bg-current sm:right-10" />
      </span>
    </div>
  );

  return (
    <li
      className="work-in mb-5 break-inside-avoid md:mb-6"
      // Capped, or the last tiles in a long list arrive uncomfortably late.
      style={{ animationDelay: `${Math.min(index, 9) * 55}ms` } as CSSProperties}
    >
      <div className="h-full rounded-[4px] p-2 transition-[translate] duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1">
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
