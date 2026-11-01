"use client";

import { Container } from "@/components/Shell";
import FreeIntroChat from "@/components/framer/components/free-intro-chat";
import { SectionLabel } from "@/components/ui/Bits";

const steps: Array<{
  number: string;
  title: string;
  description: string;
}> = [
  {
    number: "Step 1",
    title: "Free Intro Chat",
    description:
      "We align on goals, constraints, and success criteria to define the right design direction.",
  },
  {
    number: "Step 2",
    title: "Kickoff & Setup",
    description:
      "We structure requirements, set priorities, and prepare everything for execution.",
  },
  {
    number: "Step 3",
    title: "Design & Delivery",
    description:
      "We design, iterate, and deliver with consistent updates as the work moves forward.",
  },
];

export default function IntroChat() {
  return (
    <section aria-labelledby="process-title" className="pt-28 lg:pt-40">
      <Container>
        <SectionLabel>Process</SectionLabel>

        <div className="mt-5 grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-end lg:gap-16">
          <h2 id="process-title" className="section-title max-w-3xl">
            A structured process
            <span className="block">
              built to <span className="text-accent">ship</span> and <span className="text-accent">scale</span>
            </span>
          </h2>
          <p className="section-sub max-w-md lg:pb-2">
            We follow a clear, collaborative workflow, from discovery to delivery, ensuring speed, clarity, and long-term product success.
          </p>
        </div>

        <div className="mt-12 rounded-[2rem] bg-[#e9e8e4] p-2.5 lg:mt-16">
          <div className="grid gap-2.5 lg:grid-cols-3 lg:items-stretch">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="relative flex min-h-[33rem] flex-col overflow-hidden rounded-[1.5rem] bg-white"
              >
                <div className="relative z-10 min-h-[11.25rem] shrink-0 bg-white px-6 pt-7 sm:px-7">
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="text-[1.35rem] font-semibold tracking-[-0.035em] text-ink sm:text-[1.55rem]">
                      {step.title}
                    </h3>
                    <span className="shrink-0 text-[1.2rem] font-semibold tracking-[-0.03em] text-ink-2/55 sm:text-[1.45rem]">
                      {step.number}
                    </span>
                  </div>
                  <p className="mt-2 text-[0.95rem] leading-6 text-ink-2/70">
                    {step.description}
                  </p>
                </div>

                <div className="relative min-h-[21.75rem] flex-1 overflow-hidden px-5 pb-5">
                  <ProcessVisual index={index} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProcessVisual({ index }: { index: number }) {
  const variant = index === 0 ? "Desktop" : index === 1 ? "Step-2" : "Step-3";
  const scale = "scale-[0.66] sm:scale-[0.72] lg:scale-[0.61] xl:scale-[0.66]";
  return (
    <div className="process-reframe relative h-full overflow-hidden rounded-[1.1rem] bg-[#fafafa]">
      <div className={`absolute -top-16 left-1/2 h-[557px] w-[555px] origin-top -translate-x-1/2 ${scale}`}>
        <FreeIntroChat variant={variant} />
      </div>
    </div>
  );
}

