import Link from "next/link";
import { nav, site } from "@/content/site";
import { Mark } from "@/components/Icons";

const link = "text-sm text-muted transition-colors hover:text-ink";

/** A hairline, the wordmark, the site links and a legal line. Nothing else. */
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line pt-8 pb-10 sm:mt-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <Mark size={20} />
          <span className="wordmark text-xl leading-none text-ink">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {nav
            .filter((n) => n.id !== "home")
            .map((n) => (
              <Link key={n.id} href={n.href} className={link}>
                {n.label}
              </Link>
            ))}
          <a href={site.booking} className={link}>
            Book a call
          </a>
          <a href={`mailto:${site.email}`} className={link}>
            Email
          </a>
        </nav>
      </div>

      <p className="mt-8 text-xs text-faint">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
