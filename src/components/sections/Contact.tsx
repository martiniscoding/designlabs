"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { ArrowIcon, CallIcon, CheckIcon, ClockIcon, MessageIcon } from "@/components/Icons";

const projectTypes = ["Product UI", "Design system", "Brand system", "Launch site", "Something else"];
const budgets = ["Under $5k", "$5k–15k", "$15k–40k", "$40k+"];

/** Single-select chip row, rendered as a radio group so it works with a keyboard. */
function Chips({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-ink-2">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((opt) => {
          const on = value === opt;
          return (
            <label
              key={opt}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-all duration-300 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink ${
                on
                  ? "border-ink bg-ink text-white shadow-[0_8px_18px_-10px_rgba(30,36,48,0.6)]"
                  : "border-line bg-card text-ink-2 hover:border-faint"
              }`}
            >
              <input
                type="radio"
                name={label}
                value={opt}
                checked={on}
                onChange={() => onChange(opt)}
                className="sr-only"
              />
              {opt}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

const field =
  "mt-2 w-full rounded-2xl border border-line bg-card px-4 py-3.5 text-[0.9375rem] text-ink placeholder:text-faint transition-colors duration-300 outline-none focus:border-ink";

/**
 * The closing ask. There is no backend: submitting composes an email to the
 * studio with every field filled in, and opens it in the visitor's mail app.
 */
export default function Contact() {
  const [type, setType] = useState(projectTypes[0]);
  const [budget, setBudget] = useState(budgets[1]);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const body = [
      `Name: ${name}`,
      `Email: ${data.get("email")}`,
      company ? `Company: ${company}` : null,
      `Project: ${type}`,
      `Budget: ${budget}`,
      "",
      String(data.get("message") ?? ""),
    ]
      .filter((line) => line !== null)
      .join("\n");
    const subject = `${type} — ${company || name}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden rounded-[var(--radius-panel)] border border-line bg-card shadow-[0_30px_60px_-44px_rgba(30,36,48,0.55)]"
    >
      {/* A soft accent bloom behind the left column. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 -z-10 h-96 w-96 rounded-full bg-accent/15 blur-[110px]"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr]">
        {/* The pitch and the direct lines */}
        <div className="flex min-w-0 flex-col p-6 sm:p-10 lg:p-14">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs font-medium text-ink-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative h-2 w-2 rounded-full bg-accent" />
            </span>
            Booking projects for next month
          </p>

          <h2 className="display mt-6 text-[clamp(2.25rem,4.4vw,3.5rem)] leading-[1]">
            Let&rsquo;s make it
            <br />
            <span className="text-faint">look the part.</span>
          </h2>
          <p className="mt-5 max-w-[42ch] text-[1.0625rem] text-muted">
            Tell me what you&rsquo;re building and where it&rsquo;s stuck. You&rsquo;ll get a
            straight answer on whether I can help — usually the same day.
          </p>

          <ul className="mt-10 space-y-3">
            <li>
              <button
                type="button"
                onClick={copyEmail}
                className="group flex w-full items-center gap-3 rounded-2xl border border-line bg-panel p-3.5 text-left sm:gap-4 sm:p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-faint"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-card text-ink shadow-[0_6px_14px_-8px_rgba(30,36,48,0.5)]">
                  {copied ? <CheckIcon /> : <MessageIcon />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-faint">Email</span>
                  <span className="block truncate text-[0.9375rem] font-medium text-ink sm:text-base">{site.email}</span>
                </span>
                <span className="sr-only text-xs font-medium text-muted sm:not-sr-only" aria-live="polite">
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
            </li>
            <li>
              <a
                href={site.booking}
                className="group flex items-center gap-3 rounded-2xl border border-line bg-panel p-3.5 transition-all sm:gap-4 sm:p-4 duration-300 hover:-translate-y-0.5 hover:border-faint"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-card text-ink shadow-[0_6px_14px_-8px_rgba(30,36,48,0.5)] [&_svg]:h-5 [&_svg]:w-5">
                  <CallIcon />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-faint">Prefer to talk?</span>
                  <span className="block font-medium text-ink">Book a 20-minute intro call</span>
                </span>
                <span className="text-muted transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </a>
            </li>
          </ul>

          <p className="mt-auto flex items-center gap-2 pt-10 text-sm text-faint">
            <ClockIcon />
            Replies within one working day
          </p>
        </div>

        {/* The form, set into a slightly darker inset panel */}
        <div className="min-w-0 p-2 sm:p-4 lg:p-5">
          <div className="h-full rounded-[calc(var(--radius-panel)-8px)] bg-panel p-5 ring-1 ring-line sm:p-9">
            {sent ? (
              <div className="flex h-full min-h-[28rem] flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink">
                  <CheckIcon />
                </span>
                <h3 className="display mt-6 text-2xl">Your email is ready to send</h3>
                <p className="mt-3 max-w-[36ch] text-muted">
                  It should have opened in your mail app with everything filled in. If
                  it didn&rsquo;t, write to{" "}
                  <a href={`mailto:${site.email}`} className="font-medium text-ink underline underline-offset-4">
                    {site.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 text-sm font-medium text-muted underline underline-offset-4 hover:text-ink"
                >
                  Back to the form
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-7">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-ink-2">
                    Your name
                    <input name="name" required autoComplete="name" placeholder="Ada Lovelace" className={field} />
                  </label>
                  <label className="block text-sm font-medium text-ink-2">
                    Email
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="ada@company.com"
                      className={field}
                    />
                  </label>
                </div>

                <label className="block text-sm font-medium text-ink-2">
                  Company <span className="font-normal text-faint">(optional)</span>
                  <input name="company" autoComplete="organization" placeholder="Analytical Engines Ltd." className={field} />
                </label>

                <Chips label="What do you need?" options={projectTypes} value={type} onChange={setType} />
                <Chips label="Rough budget" options={budgets} value={budget} onChange={setBudget} />

                <label className="block text-sm font-medium text-ink-2">
                  About the project
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="What you're building, who it's for, and when you'd like it live."
                    className={`${field} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-4 text-[0.9375rem] font-medium text-white shadow-[0_14px_28px_-14px_rgba(30,36,48,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-2"
                >
                  Send the brief
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
