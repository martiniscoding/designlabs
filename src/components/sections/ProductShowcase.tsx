import Image from "next/image";
import { Container } from "@/components/Shell";

/**
 * Three product screenshots stacked edge-to-edge inside one dark frame, so
 * they read as a single continuous page rather than separate shots. The
 * images share the same dark theme, so the seams disappear.
 */
const shots = [
  { src: "/product/1.png", w: 2208, h: 1178 },
  { src: "/product/2.png", w: 2550, h: 1260 },
  { src: "/product/3.png", w: 2494, h: 1424 },
];

export default function ProductShowcase() {
  return (
    <section id="product-tour">
      <Container>
        <div className="overflow-hidden rounded-[var(--radius-panel)] border border-ink/10 bg-[#0d0a1a] shadow-[0_40px_90px_-50px_rgba(30,36,48,0.6)]">
          {shots.map((shot, i) => (
            <Image
              key={shot.src}
              src={shot.src}
              alt=""
              width={shot.w}
              height={shot.h}
              priority={i === 0}
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="block h-auto w-full"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
