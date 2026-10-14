import { type Work } from "@/content/works";

export default function WorkCaption({ work, index }: { work: Work; index: number }) {
  return (
    <div className="flex items-center justify-between gap-4 px-2 py-4 sm:px-3 sm:py-5">
      <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-lg font-semibold tracking-[-0.03em] text-ink sm:text-xl">{work.name}</span>
        <span className="text-sm text-ink-2 sm:text-base">{work.what}</span>
      </div>
      <span className="shrink-0 text-base tabular-nums text-muted sm:text-lg">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}
