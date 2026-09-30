import Image from "next/image";
import Link from "next/link";
import { works, workBySlug, type Work } from "@/content/works";
import { PhoneGroup } from "@/components/ui/IPhone";

const rows: Work[][] = [
  ["chatdoc", "pillo", "dappunk", "unicapp", "fabhotels", "skanaus", "fincrux", "goroam", "nogrowth"],
  ["nosana", "turf-town", "replizz-ai", "dark-noise", "ryne-ai", "all-quiet", "tessact-ai", "typill", "volnex"],
].map((row) => row.map(workBySlug));

function Tile({ work, hidden }: { work: Work; hidden?: boolean }) {
  const alt = hidden ? "" : `${work.name} ${work.kind === "app" ? "app" : "website"}`;
  return (
    <li
      aria-hidden={hidden || undefined}
      className="mr-5 w-[clamp(280px,36vw,520px)] shrink-0 rounded-[var(--radius-panel)] border border-line bg-hush/70 p-[clamp(14px,2vw,28px)] shadow-[0_24px_50px_-38px_rgba(30,36,48,0.55)]"
    >
      <div className="@container relative aspect-[16/10] overflow-hidden rounded-[14px] bg-card shadow-[0_18px_36px_-22px_rgba(30,36,48,0.45)] ring-1 ring-ink/5">
        {work.kind === "app" ? (
          <PhoneGroup screens={work.screens} alt={alt} />
        ) : (
          <Image
            src={work.src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 36vw, 280px"
            className="object-cover object-top"
          />
        )}
      </div>
    </li>
  );
}

/** Two rows of work drifting in opposite directions, right under the hero. */
export default function Showcase() {
  return (
    <section id="work" aria-label="Recent work" className="relative py-14 lg:py-20">
      {/* The fade lives on the rows alone, so it cannot dim the button. */}
      <div className="group/showcase space-y-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        {rows.map((row, i) => (
          // The row is rendered twice back to back; the track slides by
          // exactly half its width, so the loop seam is invisible.
          <ul
            key={i}
            data-marquee={i % 2 === 0 ? "left" : "right"}
            className="flex w-max group-hover/showcase:[animation-play-state:paused]"
          >
            {row.map((work) => (
              <Tile key={work.slug} work={work} />
            ))}
            {row.map((work) => (
              <Tile key={`${work.slug}-copy`} work={work} hidden />
            ))}
          </ul>
        ))}
      </div>

      {/* The one way out of the marquee, floating dead centre over both rows.
          The layer ignores the pointer so the rows still pause on hover; only
          the button itself takes clicks. */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Link
          href="/work"
          aria-label={`See all work — ${works.length} projects`}
          className="group/cta pointer-events-auto relative inline-flex items-center gap-5 rounded-2xl bg-accent py-2 pr-2 pl-7 text-[1.0625rem] font-semibold tracking-[-0.02em] text-ink ring-1 ring-ink/10 transition-[translate,box-shadow] duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:shadow-[0_26px_50px_-18px_rgba(30,36,48,0.55)] shadow-[0_20px_44px_-18px_rgba(30,36,48,0.5)]"
        >
          {/* Sitting on top of the artwork, it needs its own light behind it:
              a wide glow that also lifts the button off whatever scrolls past. */}
          <span
            aria-hidden="true"
            data-halo
            className="pointer-events-none absolute -inset-5 -z-10 rounded-[32px] bg-accent/60 blur-xl group-hover/cta:[animation-play-state:paused]"
          />
          See all work
          {/* The accent is bright: white on it is 2.8:1, so the tile stays dark. */}
          <span className="flex h-10 items-center gap-2 rounded-xl bg-ink/10 px-3.5 transition-colors duration-300 group-hover/cta:bg-ink/15">
            <span className="text-[0.9375rem] tabular-nums">{works.length}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover/cta:translate-x-0.5"
            >
              <path d="M3.5 9h11M10 4.5 14.5 9 10 13.5" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
