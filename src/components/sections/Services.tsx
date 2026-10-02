import type { CSSProperties, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { serviceGrid } from "@/content/site";
import { SectionLabel } from "@/components/ui/Bits";

/* ------------------------------------------------------------------
   Services: four equal cards, each carrying a wireframe of the thing
   it sells. The drawings are grey on purpose — only the parts that
   matter take colour, and those are the parts that move on hover.

   Motion reuses the `.scene` primitives in globals.css (drift, stretch,
   fade-in, wire), so this section adds no CSS of its own.
------------------------------------------------------------------- */
const LINE = "#eceae6";
const BAR = "#e7e5e1";
const FILL = "#f5f4f1";
const SOFT = "#efedea";
const ACCENT = "var(--color-accent)";
const VIOLET = "#7C5CFF";
const AMBER = "#E8A33D";
const BLUE = "#3B82F6";

const vars = (o: Record<string, string | number>) => o as CSSProperties;

/** Skeleton run. */
function Bar({
  x,
  y,
  w,
  h = 10,
  fill = BAR,
  rx,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  fill?: string;
  rx?: number;
}) {
  return <rect x={x} y={y} width={w} height={h} rx={rx ?? h / 2} fill={fill} />;
}

/** A window chrome — dots on the left, a stub of a toolbar. */
function Chrome({ x, y, w }: { x: number; y: number; w: number }) {
  return (
    <>
      <circle cx={x + 20} cy={y + 18} r="4" fill={BAR} />
      <circle cx={x + 34} cy={y + 18} r="4" fill={BAR} />
      <circle cx={x + 48} cy={y + 18} r="4" fill={BAR} />
      <rect x={x + 70} y={y + 12} width={w * 0.34} height="12" rx="6" fill={FILL} />
      <path d={`M${x} ${y + 36}h${w}`} stroke={LINE} strokeWidth="1.3" />
    </>
  );
}

/** A cursor lying back on its point, name tag above — as in the bento. */
function Cursor({ x, y, label, fill }: { x: number; y: number; label: string; fill: string }) {
  const w = label.length * 6.4 + 16;
  return (
    <g transform={`translate(${x} ${y})`}>
      <g transform="rotate(-58)">
        <path d="M0 0v15.4l3.8-3.6 2.6 5.4 2.9-1.3-2.6-5.1 4.8-.4z" fill={fill} />
      </g>
      <rect x="16" y="-25" width={w} height="19" rx="6" fill={fill} />
      <text x={16 + w / 2} y="-15" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#fff">
        {label}
      </text>
    </g>
  );
}

const art = "absolute inset-0 h-full w-full";

/* --- 1. SaaS Product Design ---------------------------------------
   A dashboard. The live nav row slides down the sidebar, the headline
   figure swells, and the quiet column in the chart rises to the top. */
function SaaS() {
  return (
    <svg viewBox="0 0 480 320" className={art} role="presentation">
      <rect x="18" y="12" width="444" height="340" rx="16" fill="#fff" stroke={LINE} strokeWidth="1.3" />
      <Chrome x={18} y={12} w={444} />

      {/* sidebar */}
      <path d="M140 48v304" stroke={LINE} strokeWidth="1.3" />
      <circle cx="48" cy="76" r="11" fill={BAR} />
      <Bar x={68} y={71} w={46} h={9} />
      <Bar x={36} y={110} w={76} h={9} />
      <Bar x={36} y={152} w={62} h={9} />
      <Bar x={36} y={173} w={72} h={9} />
      <Bar x={36} y={194} w={54} h={9} />
      {/* the row that is live, and where it goes */}
      <g className="drift" style={vars({ "--dy": "42px" })}>
        <rect x="28" y="124" width="96" height="22" rx="7" fill={ACCENT} opacity="0.12" />
        <rect x="36" y="131" width="68" height="9" rx="4.5" fill={ACCENT} />
      </g>

      {/* stat tiles */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={160 + i * 102} y="64" width="92" height="66" rx="11" fill={FILL} />
          <Bar x={172 + i * 102} y={78} w={38} h={7} />
        </g>
      ))}
      <Bar x={172} y={98} w={44} h={13} fill={SOFT} />
      <Bar x={376} y={98} w={40} h={13} fill={SOFT} />
      {/* the figure the card is really about */}
      <g className="stretch" style={vars({ "--origin": "left center", "--sx": 1.42 })}>
        <rect x="274" y="98" width="46" height="13" rx="6.5" fill={ACCENT} />
      </g>

      {/* chart */}
      <rect x="160" y="146" width="296" height="150" rx="12" fill={FILL} />
      {[46, 74, 58, 92, 66].map((h, i) => (
        <rect key={i} x={186 + i * 52} y={266 - h} width="26" height={h} rx="6" fill={BAR} />
      ))}
      {/* Rests mid-pack and rises to the tallest. The resting height and the
          scale are set together so the top lands inside the panel, not over
          its edge: 58 × 1.72 ≈ 100, and the panel gives it 120. */}
      <g className="stretch" style={vars({ "--origin": "bottom", "--sy": 1.72, "--delay": "120ms" })}>
        <rect x="342" y="208" width="26" height="58" rx="6" fill={ACCENT} />
      </g>

      <Bar x={160} y={312} w={220} h={12} fill={FILL} rx={6} />
    </svg>
  );
}

/* --- 2. Website Design --------------------------------------------
   A page under review on two screens, with the two people looking at
   it. On hover both cursors move and the call to action follows. */
function Website() {
  return (
    <svg viewBox="0 0 480 320" className={art} role="presentation">
      <g transform="rotate(-3 200 190)">
        <rect x="26" y="28" width="306" height="330" rx="16" fill="#fff" stroke={LINE} strokeWidth="1.3" />
        <Chrome x={26} y={28} w={306} />
        <rect x="44" y="82" width="270" height="92" rx="10" fill={FILL} />
        <Bar x={60} y={100} w={150} h={11} />
        <Bar x={60} y={120} w={112} h={11} />
        {/* the call to action, nudged by whoever is holding it */}
        <g className="drift" style={vars({ "--dx": "26px", "--dy": "-6px" })}>
          <rect x="60" y="142" width="74" height="20" rx="10" fill={ACCENT} />
        </g>
        <rect x="44" y="190" width="126" height="86" rx="10" fill={FILL} />
        <rect x="188" y="190" width="126" height="86" rx="10" fill={FILL} />
        <Bar x={44} y={294} w={180} h={11} />
      </g>

      <g transform="rotate(5 400 200)">
        <rect x="346" y="64" width="116" height="290" rx="22" fill="#fff" stroke={LINE} strokeWidth="1.3" />
        <rect x="386" y="78" width="36" height="7" rx="3.5" fill={BAR} />
        <rect x="360" y="100" width="88" height="56" rx="9" fill={FILL} />
        <Bar x={360} y={170} w={66} h={9} />
        <Bar x={360} y={186} w={50} h={9} />
        <rect x="360" y="242" width="88" height="48" rx="9" fill={FILL} />
        {/* Drawn after the block below it, so it rides over the top as it
            moves instead of sliding underneath. */}
        <g className="drift" style={vars({ "--dy": "22px", "--delay": "100ms" })}>
          <rect x="360" y="206" width="58" height="16" rx="8" fill={VIOLET} />
        </g>
      </g>

      <g className="drift" style={vars({ "--dx": "34px", "--dy": "-28px" })}>
        <Cursor x={150} y={196} label="Designer" fill={VIOLET} />
      </g>
      <g className="drift" style={vars({ "--dx": "-14px", "--dy": "-46px", "--delay": "110ms" })}>
        <Cursor x={356} y={262} label="You" fill={ACCENT} />
      </g>
    </svg>
  );
}

/* --- 3. Web & Mobile Apps -----------------------------------------
   A flow: three screens stepping up, the last one branching. The
   connectors only fill in on hover, so the path draws itself. */
function Apps() {
  const phone = (x: number, y: number, accent?: string, delay = "0ms") => (
    <g>
      <rect x={x} y={y} width="102" height="212" rx="18" fill="#fff" stroke={LINE} strokeWidth="1.3" />
      <rect x={x + 34} y={y + 12} width="34" height="6" rx="3" fill={BAR} />
      <rect x={x + 12} y={y + 30} width="78" height="44" rx="8" fill={FILL} />
      <Bar x={x + 12} y={y + 84} w={62} h={8} />
      <Bar x={x + 12} y={y + 98} w={46} h={8} />
      {accent && (
        <g className="stretch" style={vars({ "--origin": "left center", "--sx": 1.45, "--delay": delay })}>
          <rect x={x + 12} y={y + 116} width="52" height="14" rx="7" fill={accent} />
        </g>
      )}
      <rect x={x + 12} y={y + 144} width="36" height="34" rx="7" fill={FILL} />
      <rect x={x + 54} y={y + 144} width="36" height="34" rx="7" fill={FILL} />
    </g>
  );

  return (
    <svg viewBox="0 0 480 320" className={art} role="presentation">
      {/* Curves rather than elbows, and the same path draws itself in accent
          when the card is live. */}
      <g fill="none" stroke={LINE} strokeWidth="1.6">
        <path d="M136 180C158 180 156 148 178 148" />
        <path d="M280 142C312 142 322 110 352 110" />
        <path d="M280 154C312 154 322 258 352 258" />
      </g>
      <path
        className="wire"
        d="M136 180C158 180 156 148 178 148"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="0.1 11"
      />
      <path
        className="wire"
        style={vars({ "--delay": "130ms" })}
        d="M280 142C312 142 322 110 352 110"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="0.1 11"
      />
      <path
        className="wire"
        style={vars({ "--delay": "230ms" })}
        d="M280 154C312 154 322 258 352 258"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="0.1 11"
      />

      {phone(34, 74)}
      {phone(178, 42, ACCENT)}
      {phone(352, 4, AMBER, "150ms")}
      {phone(352, 152, BLUE, "250ms")}
    </svg>
  );
}

/* --- 4. Design Systems --------------------------------------------
   The kit itself: swatches, a live component, a type scale. The
   swatches swell one after another, and the component fills in. */
function Systems() {
  const swatches = [ACCENT, VIOLET, AMBER, BLUE];
  return (
    <svg viewBox="0 0 480 320" className={art} role="presentation">
      <rect x="18" y="12" width="444" height="340" rx="16" fill="#fff" stroke={LINE} strokeWidth="1.3" />
      <Chrome x={18} y={12} w={444} />

      <Bar x={40} y={60} w={72} h={9} />

      {/* tokens */}
      <g>
        {swatches.map((c, i) => (
          <g
            key={c}
            className="stretch"
            style={vars({ "--sx": 1.18, "--sy": 1.18, "--delay": `${i * 90}ms` })}
          >
            <rect x={40 + i * 58} y="84" width="44" height="44" rx="12" fill={c} />
          </g>
        ))}
        {[0, 1].map((i) => (
          <rect key={i} x={272 + i * 58} y="84" width="44" height="44" rx="12" fill={FILL} />
        ))}
      </g>

      {/* a component, in both its states */}
      <rect x="40" y="152" width="188" height="74" rx="12" fill={FILL} />
      <Bar x={56} y={166} w={52} h={7} />
      <rect
        className="swap-fill"
        style={vars({ "--to-fill": ACCENT })}
        x="56"
        y="186"
        width="76"
        height="22"
        rx="11"
        fill={BAR}
      />
      <rect x="144" y="186" width="68" height="22" rx="11" fill="none" stroke={BAR} strokeWidth="1.6" />

      {/* type scale */}
      <rect x="248" y="152" width="184" height="74" rx="12" fill={FILL} />
      <Bar x={264} y={166} w={128} h={12} />
      <Bar x={264} y={186} w={96} h={9} />
      <Bar x={264} y={202} w={72} h={7} />

      {/* the grid the whole thing sits on */}
      <g stroke={LINE} strokeWidth="1.2">
        <path d="M40 252h392M40 282h392M40 312h392" />
      </g>
      <g className="drift" style={vars({ "--dx": "196px", "--delay": "160ms" })}>
        <rect x="40" y="246" width="124" height="12" rx="6" fill={VIOLET} opacity="0.85" />
      </g>
      <Bar x={40} y={276} w={88} h={12} fill={SOFT} rx={6} />
      <Bar x={40} y={306} w={152} h={12} fill={SOFT} rx={6} />
    </svg>
  );
}

const drawings: Record<string, () => ReactNode> = {
  saas: SaaS,
  website: Website,
  apps: Apps,
  system: Systems,
};

function Card({
  id,
  title,
  blurb,
  tags,
  index,
}: {
  id: string;
  title: string;
  blurb: string;
  tags: string[];
  index: number;
}) {
  const Art = drawings[id];
  return (
    <article className="scene group relative flex flex-col overflow-hidden rounded-[22px] border border-line/70 bg-card p-6 shadow-[0_1px_2px_rgba(30,36,48,0.04),0_16px_36px_-28px_rgba(30,36,48,0.4)] transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:shadow-[0_1px_2px_rgba(30,36,48,0.05),0_30px_56px_-30px_rgba(30,36,48,0.3)] lg:p-8">
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <span className="text-[0.8125rem] font-semibold tabular-nums text-faint transition-colors duration-500 group-hover:text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="card-title mt-2 text-ink">
            {title}
          </h3>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink-2 transition-[background-color,border-color,color,transform] duration-500 ease-[var(--ease-out-soft)] group-hover:border-accent group-hover:bg-accent group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          <ArrowUpRight size={17} />
        </span>
      </div>

      <p className="relative mt-3 max-w-[42ch] text-[0.9375rem] leading-[1.55] text-muted">
        {blurb}
      </p>

      {/* The drawing runs past the bottom edge and is clipped, so each card
          reads as a window onto something larger. */}
      <div className="relative mt-6 aspect-[480/270] lg:mt-7">
        <Art />
      </div>

      {/* Deliverable chips, staggered up on hover. */}
      <ul className="relative mt-auto flex flex-wrap gap-2 pt-6">
        {tags.map((tag, i) => (
          <li
            key={tag}
            style={vars({ "--d": `${i * 70}ms` })}
            className="rounded-full border border-line/80 bg-hush/60 px-3 py-1 text-[0.8125rem] font-medium text-ink-2 transition-[background-color,border-color,color,transform] duration-500 ease-[var(--ease-out-soft)] [transition-delay:var(--d)] group-hover:-translate-y-0.5 group-hover:border-accent/25 group-hover:bg-accent/[0.07] group-hover:text-accent-ink"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title">
      <SectionLabel>{serviceGrid.eyebrow}</SectionLabel>
      {/* The label sits above the row, so the headline and the paragraph
          beside it start on exactly the same line. */}
      <div className="mt-5 grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-start lg:gap-16">
          <h2
            id="services-title"
            className="section-title max-w-[22ch] text-ink"
          >
            {serviceGrid.heading.map((part, i) =>
              part.accent ? (
                <span key={i} className="text-accent">
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}
          </h2>
        <p className="section-sub">
          {serviceGrid.intro}
        </p>
      </div>

      <div className="mt-10 grid gap-3.5 lg:mt-14 lg:grid-cols-2">
        {serviceGrid.cards.map((c, i) => (
          <Card key={c.id} id={c.id} title={c.title} blurb={c.blurb} tags={c.tags} index={i} />
        ))}
      </div>
    </section>
  );
}
