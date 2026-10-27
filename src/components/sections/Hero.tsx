import { hero } from "@/content/site";
import { works } from "@/content/works";
import { Container } from "@/components/Shell";
import Image from "next/image";

const clients = [
  { slug: "fincrux", name: "Fincrux" },
  { slug: "ryne-ai", name: "Ryne AI" },
  { slug: "chatdoc", name: "Chatdoc" },
  { slug: "volnex", name: "Volnex" },
  { slug: "goroam", name: "GoRoam" },
];

const button =
  "group inline-flex items-center gap-5 rounded-2xl py-2 pr-2 pl-6 text-[1.0625rem] font-semibold tracking-[-0.02em] transition-[translate,box-shadow,background-color] duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5";
const tile = "flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300";
const tileOnAccent = `${tile} bg-white/20 group-hover:bg-white/30`;
const tileOnWhite = `${tile} bg-hush group-hover:bg-line`;

/**
 * A proof badge, the headline, the pitch and two chunky
 * buttons and a centred client row over a soft peach bloom.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-72px)] flex-col overflow-hidden bg-[#fcf9f5]"
    >
      <div className="hero-glow" aria-hidden="true" />

      <Container className="relative z-10 flex flex-1 flex-col items-center justify-center pt-16 pb-14 text-center sm:pt-20 sm:pb-16 lg:pt-[clamp(5rem,12vh,8rem)] lg:pb-20">
        {/* The count is the real number of projects on the Work page. */}
        <p
          data-hero-eyebrow
          className="inline-flex items-center gap-2.5 rounded-full bg-white/95 px-5 py-2.5 text-sm font-medium tracking-[-0.025em] text-ink sm:text-[0.9375rem]"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          {works.length} Shipped Projects
        </p>

        <h1
          data-hero-head
          className="display mt-7 text-[clamp(2.125rem,5.8vw,5rem)] leading-[1.06] text-ink sm:mt-8"
        >
          {hero.headline.map((line) => (
            <span key={line} className="block sm:whitespace-nowrap">
              {line.split(/(product)/).map((part, index) => (
                part === "product" ? (
                  <span key={index} className="headline-accent">{part}</span>
                ) : part
              ))}
            </span>
          ))}
        </h1>

        <p
          data-hero-sub
          className="mt-6 max-w-[54ch] text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] tracking-[-0.025em] text-muted sm:mt-7"
        >
          {hero.sub}
        </p>

        <div
          data-hero-cta
          className="mt-[clamp(1.5rem,4.5vh,2.5rem)] flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          <a
            href={hero.primary.href}
            className={`${button} bg-accent text-white`}
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
            className={`${button} border border-line bg-card text-ink hover:border-ink/20`}
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

        <div className="mt-16 w-full max-w-[640px] sm:mt-20 lg:mt-24">
          <div className="flex items-center justify-center gap-5">
            <span aria-hidden="true" className="h-px w-12 bg-ink/10 sm:w-20" />
            <p className="text-xs font-semibold tracking-[0.04em] text-muted sm:text-sm">
              Trusted by ambitious founders
            </p>
            <span aria-hidden="true" className="h-px w-12 bg-ink/10 sm:w-20" />
          </div>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-5 sm:gap-x-9">
            {clients.map((client) => (
              <li key={client.slug} className="flex items-center gap-2 text-sm font-medium text-ink-2/75">
                <Image
                  src={`/logos/${client.slug}.png`}
                  alt=""
                  width={28}
                  height={28}
                  className="h-6 w-6 object-contain opacity-65 grayscale"
                />
                {client.name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
