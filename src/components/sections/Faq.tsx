"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { faq } from "@/content/site";
import { WorkIcon } from "@/components/Icons";

/** The little keycap above the heading, drawn in isometric so it needs no asset. */
function Keycap() {
  return (
    <svg width="80" height="66" viewBox="0 0 80 66" aria-hidden="true" className="drop-shadow-[0_14px_14px_rgba(180,67,9,0.3)]">
      <g strokeLinejoin="round" strokeWidth="6">
        <polygon points="8,24 40,41 40,56 8,39" fill="#c2410c" stroke="#c2410c" />
        <polygon points="72,24 40,41 40,56 72,39" fill="#9a3412" stroke="#9a3412" />
        <polygon points="40,7 72,24 40,41 8,24" fill="#f97316" stroke="#f97316" />
        <polygon points="40,10 66,24 40,38 14,24" fill="#fb923c" stroke="#fb923c" strokeWidth="2" />
      </g>
      {/* Unit square mapped onto the top face. */}
      <g transform="matrix(26 14 -26 14 40 24)" fill="none" stroke="#fff" strokeWidth="0.09" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 0.26V-0.26M-0.19-0.07 0-0.26 0.19-0.07" />
      </g>
    </svg>
  );
}

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
      <div>
        <Keycap />
        <h2 className="display mt-6 text-[clamp(2rem,4.2vw,3rem)]">
          {faq.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-9 flex flex-wrap gap-3.5">
          <a
            href={faq.primary.href}
            className="group inline-flex items-center gap-3.5 rounded-full bg-ink py-2 pr-2 pl-6 text-[1.0625rem] font-medium text-white transition-colors duration-300 hover:bg-ink-2"
          >
            {faq.primary.label}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </a>
          <Link
            href={faq.secondary.href}
            className="inline-flex items-center gap-2.5 rounded-full bg-hush px-6 py-3.5 text-[1.0625rem] font-medium text-ink transition-colors duration-300 hover:bg-line"
          >
            <WorkIcon />
            {faq.secondary.label}
          </Link>
        </div>
      </div>

      <ul>
        {faq.items.map((item, i) => {
          const on = open === i;
          return (
            <li key={item.q} className="border-b border-line last:border-b-0">
              <h3>
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={on}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(on ? null : i)}
                  className={`flex w-full items-center justify-between gap-6 text-left text-[1.0625rem] font-medium tracking-[-0.015em] text-ink ${
                    i === 0 ? "pb-5" : "py-5"
                  }`}
                >
                  {item.q}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                    {on ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
              </h3>
              <div
                id={`faq-a-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[var(--ease-out-soft)] ${
                  on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden" inert={!on}>
                  <p className="max-w-[58ch] pr-14 pb-6 text-[1.0625rem] text-muted">
                    {item.a}
                    {"link" in item && item.link && (
                      <>
                        {" "}
                        <Link href={item.link.href} className="text-ink-2 underline decoration-faint underline-offset-4 hover:decoration-ink">
                          {item.link.label}
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
