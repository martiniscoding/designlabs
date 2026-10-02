"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { testimonials, testimonialsIntro } from "@/content/site";
import { SectionLabel } from "@/components/ui/Bits";

type Review = (typeof testimonials)[number];

/**
 * Reviews flank a portrait video. The video is 8MB, so nothing is fetched
 * until it scrolls near the viewport; it then plays muted, and sound is one
 * tap away.
 */
export default function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  const left = testimonials.slice(0, half);
  const right = testimonials.slice(half);
  const title = testimonialsIntro.title;

  return (
    <section id="testimonials">
      <div className="text-center">
        <SectionLabel>{testimonialsIntro.eyebrow}</SectionLabel>
        <h2 className="section-title relative mx-auto mt-5 w-fit">
          {title.map((part, i) => {
            if (!("accent" in part && part.accent)) {
              return <span key={i}>{part.text}</span>;
            }
            return (
              <span key={i} className="text-accent-ink">
                {part.text}
              </span>
            );
          })}
          <span
            aria-hidden="true"
            className="absolute -right-2 -bottom-7 hidden text-[0.875rem] font-medium tracking-[-0.01em] text-muted md:block"
          >
            ↙ {testimonialsIntro.note}
          </span>
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 items-center gap-5 sm:mt-14 lg:mt-20 lg:grid-cols-[1fr_minmax(0,0.9fr)_1fr] lg:gap-6">
        {/* Phones: every review in one swipeable row under the video. */}
        <ul className="order-2 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] sm:hidden">
          {testimonials.map((r) => (
            <li key={r.name} className="w-[82%] shrink-0 snap-center">
              <Card review={r} tilt="" />
            </li>
          ))}
        </ul>

        <div className="order-2 hidden gap-5 sm:grid sm:grid-cols-2 lg:order-1 lg:grid-cols-1 lg:-translate-y-8">
          {left.map((r, i) => (
            <Card key={r.name} review={r} tilt={i % 2 ? "lg:rotate-1" : "lg:-rotate-1"} />
          ))}
        </div>

        <div className="order-1 lg:order-2">
          <Video src={testimonialsIntro.video} />
        </div>

        <div className="order-3 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-1 lg:translate-y-8">
          {right.map((r, i) => (
            <Card key={r.name} review={r} tilt={i % 2 ? "lg:-rotate-1" : "lg:rotate-1"} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <span className="flex gap-0.5 text-[#e8a33d]" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
          <path d="m10 1.8 2.5 5.3 5.8.7-4.3 4 1.1 5.8L10 14.8l-5.1 2.8L6 11.8l-4.3-4 5.8-.7z" />
        </svg>
      ))}
    </span>
  );
}

function Card({ review, tilt }: { review: Review; tilt: string }) {
  const [pre, post] = review.quote.split(review.highlight);

  return (
    <figure
      className={`group flex h-full flex-col rounded-[var(--radius-card)] border border-line/70 bg-card p-6 shadow-[0_24px_50px_-36px_rgba(30,36,48,0.55)] transition-all duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1 lg:hover:rotate-0 hover:shadow-[0_30px_60px_-34px_rgba(30,36,48,0.6)] ${tilt}`}
    >
      <Stars />
      <blockquote className="mt-4 flex-1 text-[1rem] leading-[1.55] text-ink-2 sm:text-[1.0625rem]">
        “{pre}
        <span className="marker font-medium text-ink">{review.highlight}</span>
        {post}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <Image
          src={review.photo}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover ring-2 ring-card shadow-[0_0_0_1px_var(--color-line)]"
        />
        <span>
          <span className="block text-sm font-semibold">{review.name}</span>
          <span className="block text-[0.8125rem] text-muted">{review.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function Video({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);

  /* Attach the source only when the video approaches the viewport... */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setNear(true);
        setVisible(e.isIntersecting);
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ...then play while visible, and pause when scrolled away. Runs after the
     src has been committed, so play() has something to load. */
  useEffect(() => {
    const el = ref.current;
    if (!el || !near) return;
    if (!visible) {
      el.pause();
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPaused(true);
      return;
    }
    el.play()
      .then(() => setPaused(false))
      .catch(() => setPaused(true));
  }, [near, visible]);

  const togglePlay = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPaused(false);
    } else {
      el.pause();
      setPaused(true);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[240px] rounded-[36px] sm:max-w-[300px] lg:max-w-[340px] bg-ink p-2 shadow-[0_40px_80px_-40px_rgba(30,36,48,0.8)]">
      <div className="relative aspect-[480/848] overflow-hidden rounded-[28px] bg-ink-2">
        <video
          ref={ref}
          src={near ? src : undefined}
          muted={muted}
          loop
          playsInline
          preload="none"
          onClick={togglePlay}
          className="h-full w-full cursor-pointer object-cover"
        />

        {paused && (
          <button
            type="button"
            onClick={togglePlay}
            className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform hover:scale-105"
          >
            <span className="sr-only">Play video</span>
            <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M6 4v12l10-6z" />
            </svg>
          </button>
        )}

        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-black/35 px-4 py-2 text-[0.8125rem] font-medium text-white backdrop-blur-md transition-colors hover:bg-black/50"
        >
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M3 8v4h3l4 3.5v-11L6 8zM14 8l4 4M18 8l-4 4" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M3 8v4h3l4 3.5v-11L6 8zM14 7.5a4 4 0 0 1 0 5M16.5 5a7.5 7.5 0 0 1 0 10" />
            </svg>
          )}
          {muted ? "Tap for sound" : "Sound on"}
        </button>
      </div>
    </div>
  );
}
