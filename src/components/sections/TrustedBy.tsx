import Image from "next/image";
import { trustedBy } from "@/content/site";
import { workBySlug } from "@/content/works";

/** One client, boxed: its own mark beside the name from the portfolio. */
function Box({ slug, hidden }: { slug: string; hidden?: boolean }) {
  const client = workBySlug(slug);
  return (
    <li
      aria-hidden={hidden || undefined}
      className="mr-3 flex shrink-0 items-center gap-3 rounded-2xl border border-line bg-card py-3.5 pr-6 pl-5 shadow-[0_1px_2px_rgba(30,36,48,0.04),0_14px_30px_-26px_rgba(30,36,48,0.4)] sm:mr-4"
    >
      <Image
        src={`/logos/${slug}.png`}
        alt=""
        width={128}
        height={128}
        className="h-7 w-7 shrink-0 object-contain"
      />
      <span className="text-[1rem] font-semibold tracking-[-0.015em] whitespace-nowrap text-ink">
        {client.name}
      </span>
    </li>
  );
}

/**
 * The client strip: one row of boxes drifting right, forever. It starts the
 * alternation the showcase below continues — right, then left, then right.
 *
 * The track slides by exactly half its width, so the seam never shows. That
 * half has to be wider than the widest viewport or a gap opens at the end of
 * each pass: six boxes run about 1000px, so the list is repeated to clear an
 * ultrawide monitor.
 */
const REPEATS = 4;

export default function TrustedBy() {
  const half = Array.from({ length: REPEATS }, () => trustedBy.clients).flat();
  return (
    <section aria-label="Clients" className="pt-6 pb-2 lg:pt-10">
      <p className="eyebrow text-center">{trustedBy.label}</p>

      <div className="group/trust mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] lg:mt-8">
        <ul
          data-marquee="right"
          style={{ "--marquee-duration": "42s" } as React.CSSProperties}
          className="flex w-max group-hover/trust:[animation-play-state:paused]"
        >
          {half.map((slug, i) => (
            <Box key={`a-${i}`} slug={slug} />
          ))}
          {half.map((slug, i) => (
            <Box key={`b-${i}`} slug={slug} hidden />
          ))}
        </ul>
      </div>
    </section>
  );
}
