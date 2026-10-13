import Link from "next/link";
import { footer, nav, site } from "@/content/site";
import { CalendarIcon } from "@/components/Icons";

/* ------------------------------------------------------------------
   The closing panel: a dark card carrying the last call to action, the
   mark, and the legal line. Two tones of dark, one nested in the other,
   so the call to action reads as a card on a card.
------------------------------------------------------------------- */

const iconButton =
  "flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 sm:h-12 sm:w-12 text-white ring-1 ring-white/15 transition-colors duration-300 hover:bg-white/20";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = nav.filter((n) => n.id !== "home");

  return (
    <footer className="mt-16 sm:mt-24">
      <div className="overflow-hidden rounded-[var(--radius-panel)] bg-ink p-3 sm:p-4">
        {/* The call to action, a shade lighter than the panel around it. */}
        <div className="rounded-[calc(var(--radius-panel)-8px)] bg-white/[0.06] p-6 ring-1 ring-white/10 sm:p-8 lg:p-9">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <h2 className="section-title max-w-[16ch] text-white">
              {footer.heading[0]} {footer.heading[1]}
            </h2>

            <div className="shrink-0 lg:text-right">
              <p className="section-sub !text-white/65 lg:ml-auto">
                {footer.blurb}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:flex-nowrap lg:justify-end">
                <a
                  href={footer.cta.href}
                  className="inline-flex h-11 items-center gap-2.5 rounded-2xl bg-white px-5 sm:h-12 sm:px-6 text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink transition-transform duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5"
                >
                  <CalendarIcon size={18} />
                  {footer.cta.label}
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

        <div className="mt-6 flex flex-col gap-4 px-4 pb-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:pb-5">
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
