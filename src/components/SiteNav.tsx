"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { nav, site } from "@/content/site";

/**
 * A quiet editorial top bar: wordmark left, links and the ask grouped on the
 * right. It sticks, and only picks up a frosted fill and hairline once the
 * page has scrolled, so at rest it sits flat on the page.
 */
export default function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // The logo already goes home.
  const links = nav.filter((n) => n.id !== "home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open
          ? "bg-panel/85 shadow-[0_1px_0_var(--color-line)] backdrop-blur-lg"
          : "bg-panel"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-6 px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt=""
            width={512}
            height={510}
            priority
            className="h-7 w-7 object-contain"
          />
          <span className="wordmark text-[1.375rem] leading-none text-ink">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`relative text-[0.9375rem] font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-ink after:transition-all after:duration-300 hover:text-ink ${
                pathname === item.href
                  ? "text-ink after:w-full"
                  : "text-ink-2 after:w-0 hover:after:w-full"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:pl-2">
          <a
            href={site.booking}
            className="hidden items-center rounded-full bg-accent px-6 py-3 text-[0.9375rem] font-semibold text-white shadow-[0_10px_22px_-12px_var(--color-accent)] transition-[translate,box-shadow] duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:shadow-[0_16px_28px_-12px_var(--color-accent)] sm:inline-flex"
          >
            Book a call
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="flex w-5 flex-col gap-[5px]">
              <span className={`h-[1.5px] w-full rounded bg-ink transition-transform duration-300 ${open ? "translate-y-[3.25px] rotate-45" : ""}`} />
              <span className={`h-[1.5px] w-full rounded bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.25px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="site-menu"
        inert={!open}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[var(--ease-out-soft)] md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav aria-label="Mobile" className="flex flex-col px-6 pt-2 pb-6">
            {nav.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line py-4 text-[1.5rem] font-semibold tracking-[-0.03em] text-ink"
              >
                {item.label}
                <ArrowUpRight size={18} className="text-faint" />
              </Link>
            ))}
            <a
              href={site.booking}
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-[0.9375rem] font-semibold text-white shadow-[0_10px_22px_-12px_var(--color-accent)]"
            >
              Book a call
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
