import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function HomePhilosophy() {
  return (
    <section className="border-t border-nor-black/8 section-x section-y">
      <div className="mx-auto grid max-w-7xl gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-24">
        <FadeIn>
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-6 font-serif text-3xl font-light tracking-tight text-nor-black sm:text-4xl md:text-5xl lg:text-6xl">
            An organization building tools for people.
          </h2>
        </FadeIn>

        <FadeIn delay={1}>
          <p className="text-base leading-relaxed text-nor-muted sm:text-lg md:text-xl">
            NoR is a design-led studio and product organization. We&apos;re not
            chasing trends or optimizing for growth at all costs. We build
            things that last — starting with health and nutrition, and expanding
            thoughtfully from there.
          </p>
          <p className="mt-5 text-base leading-relaxed text-nor-muted sm:mt-6 sm:text-lg md:text-xl">
            For investors, partners, and press: we&apos;re a small, focused team
            with a long view. The work speaks for itself.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-3 text-sm font-medium tracking-wide text-nor-black transition-colors hover:text-nor-yellow sm:mt-10"
          >
            Learn more about NoR
            <span aria-hidden="true">→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
