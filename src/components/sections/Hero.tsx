import { hero } from "@/content/site";
import { works } from "@/content/works";
import { Container } from "@/components/Shell";

const button =
  "group inline-flex items-center gap-5 rounded-2xl py-2 pr-2 pl-6 text-[1.0625rem] font-semibold tracking-[-0.02em] transition-[translate,box-shadow,background-color] duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5";
const tile = "flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300";
const tileOnAccent = `${tile} bg-white/20 group-hover:bg-white/30`;
const tileOnWhite = `${tile} bg-hush group-hover:bg-line`;

/**
 * Type-only hero: a proof badge, the headline, the pitch and two chunky
 * buttons, centred in exactly one screen under the 72px nav, over the
 * drifting dot field.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex h-[calc(100svh-72px)] min-h-[520px] flex-col"
    >
      {/* Slightly above true centre: optically, dead centre reads as low. */}
      <Container className="flex flex-1 flex-col items-center justify-center pb-[4vh] text-center">
        {/* The count is the real number of projects on the Work page. */}
        <p
          data-hero-eyebrow
          className="rounded-full bg-card px-5 py-2 text-[0.9375rem] font-semibold tracking-[-0.02em] text-ink shadow-[0_8px_24px_-14px_rgba(30,36,48,0.35)] ring-1 ring-ink/5 sm:text-[1.0625rem]"
        >
          {works.length} Shipped Projects
        </p>

        <h1
          data-hero-head
          className="display mt-[clamp(1rem,3vh,1.75rem)] text-[clamp(2.25rem,min(6vw,12vh),5.25rem)] leading-[1.08] text-ink"
        >
          {hero.headline.map((line) => (
            <span key={line} className="block sm:whitespace-nowrap">
              {line}
            </span>
          ))}
        </h1>

        <p
          data-hero-sub
          className="mt-[clamp(1.25rem,3.5vh,2rem)] max-w-[46ch] text-[clamp(1rem,2.4vh,1.25rem)] leading-[1.5] text-muted"
        >
          {hero.sub}
        </p>

        <div
          data-hero-cta
          className="mt-[clamp(1.5rem,4.5vh,2.5rem)] flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          <a
            href={hero.primary.href}
            className={`${button} bg-accent text-white shadow-[0_14px_28px_-14px_var(--color-accent)] hover:shadow-[0_18px_32px_-14px_var(--color-accent)]`}
          >
            {hero.primary.label}
            <span className={tileOnAccent}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
                className="transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:rotate-90"
              >
                <path d="M9 3.5v11M3.5 9h11" />
              </svg>
            </span>
          </a>
          <a
            href={hero.secondary.href}
            className={`${button} border border-line bg-card text-ink shadow-[0_10px_24px_-16px_rgba(30,36,48,0.4)] hover:border-ink/20`}
          >
            {hero.secondary.label}
            <span className={tileOnWhite}>
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
                className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-y-0.5"
              >
                <path d="M9 3.5v11M4.5 10 9 14.5 13.5 10" />
              </svg>
            </span>
          </a>
        </div>
      </Container>

      {/* Proof in the bottom-left corner: each client's own mark, squared to
          one canvas so a single size fits them all, with the name beside it
          since these are icon marks rather than wordmarks. */}
    </section>
  );
}
