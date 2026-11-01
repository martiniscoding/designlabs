import { Container } from "@/components/Shell";
import { SectionLabel } from "@/components/ui/Bits";
import { works } from "@/content/works";

const clients = works.filter((work): work is Extract<typeof work, { kind: "site" }> => work.kind === "site" && work.live === true);

export default function Clients() {
  return (
    <section aria-labelledby="clients-title" className="pt-28 lg:pt-40">
      <Container>
        <SectionLabel>Clients</SectionLabel>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-end lg:gap-16">
          <h2 id="clients-title" className="section-title max-w-4xl">
            <span className="text-accent">Trusted</span> by <span className="text-accent">Teams</span> Building
            <span className="block">Meaningful Digital Products</span>
          </h2>
          <p className="section-sub max-w-md lg:pb-2">
            Teams worldwide trust us to turn ideas into high-performing digital products.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-2.5 rounded-[2rem] bg-[#e9e8e4] p-2.5 sm:grid-cols-3 lg:mt-16 lg:grid-cols-4">
          {clients.map((client) => (
            <div key={client.slug} className="flex min-h-36 flex-col items-center justify-center gap-3 rounded-[1.5rem] bg-white px-5 text-center text-2xl font-semibold tracking-[-0.06em] text-ink sm:min-h-44 sm:text-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://logo.clearbit.com/${new URL(client.url).hostname.replace(/^www\./, "")}`}
                alt=""
                aria-hidden="true"
                className="h-12 w-auto max-w-[180px] object-contain"
              />
              {client.name}
            </div>
          ))}
          <div className="flex min-h-36 items-center justify-center rounded-[1.5rem] bg-[#252525] px-5 text-center text-2xl font-semibold tracking-[-0.05em] text-white sm:min-h-44 sm:text-3xl">
            +20 Startups
          </div>
        </div>
      </Container>
    </section>
  );
}
