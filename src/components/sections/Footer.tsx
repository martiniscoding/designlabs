import Image from "next/image";
import Link from "next/link";
import { footer, nav, site } from "@/content/site";
import { workBySlug } from "@/content/works";
import { CallIcon, Mark, MessageIcon } from "@/components/Icons";

/* ------------------------------------------------------------------
   The closing panel: a dark card carrying the last call to action, the
   mark, and the legal line. Two tones of dark, one nested in the other,
   so the call to action reads as a card on a card.

   Client marks sit on white tiles rather than bare: two of the six are
   dark or outlined and would vanish straight onto the panel.
------------------------------------------------------------------- */

const iconButton =
  "flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 sm:h-12 sm:w-12 text-white ring-1 ring-white/15 transition-colors duration-300 hover:bg-white/20";

function ClientMark({ slug }: { slug: string }) {
  const client = workBySlug(slug);
  return (
    <span
      title={client.name}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_8px_20px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/20 sm:h-12 sm:w-12"
    >
      <Image
        src={`/logos/${slug}.png`}
        alt=""
        width={128}
        height={128}
        className="h-7 w-7 object-contain sm:h-8 sm:w-8"
      />
    </span>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const links = nav.filter((n) => n.id !== "home");

  return (
    <footer className="mt-16 sm:mt-24">
      <div className="overflow-hidden rounded-[var(--radius-panel)] bg-ink p-3 sm:p-4">
        {/* The call to action, a shade lighter than the panel around it. */}
        <div className="rounded-[calc(var(--radius-panel)-8px)] bg-white/[0.06] p-6 ring-1 ring-white/10 sm:p-8 lg:p-9">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            {/* The break is set here rather than left to the box width: the
                marks have to sit beside the second line, and a `max-w` tight
                enough to force two lines is also tight enough to push them
                onto a third. */}
            <h2 className="display text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.12] text-white">
              <span className="block">{footer.heading[0]}</span>
              <span className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-3">
                <span>{footer.heading[1]}</span>
                <span className="flex items-center gap-2">
                  {footer.clients.map((slug) => (
                    <ClientMark key={slug} slug={slug} />
                  ))}
                </span>
              </span>
            </h2>

            <div className="shrink-0 lg:text-right">
              <p className="max-w-[30ch] text-[0.9375rem] leading-[1.6] text-white/65 lg:ml-auto">
                {footer.blurb}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:flex-nowrap lg:justify-end">
                <a
                  href={footer.cta.href}
                  className="inline-flex h-11 items-center gap-2.5 rounded-2xl bg-white px-5 sm:h-12 sm:px-6 text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink transition-transform duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5"
                >
                  <CallIcon size={18} />
                  {footer.cta.label}
                </a>
                <a href={`mailto:${site.email}`} aria-label="Email us" className={iconButton}>
                  <MessageIcon />
                </a>
                <a href="#home" aria-label="Back to top" className={iconButton}>
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
                  >
                    <path d="M9 14.5v-11M4.5 8 9 3.5 13.5 8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* The mark, centred on the darker ground below the card. */}
        <div className="flex justify-center py-8 sm:py-10">
          <Link href="/" aria-label={`${site.name}, home`} className="inline-flex">
            <Mark size={64} light />
          </Link>
        </div>

        <div className="flex flex-col gap-4 px-4 pb-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:pb-5">
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {links.map((n) => (
              <Link
                key={n.id}
                href={n.href}
                className="text-[0.9375rem] text-white/70 transition-colors duration-300 hover:text-white"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <p className="text-[0.9375rem] text-white/40">
            © {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
