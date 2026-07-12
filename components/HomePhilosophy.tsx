import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function HomePhilosophy() {
  return (
    <section className="border-t border-nor-black/8 px-6 py-32 md:px-12 md:py-44 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
        <FadeIn>
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl font-light tracking-tight text-nor-black md:text-5xl lg:text-6xl">
            An organization building tools for people.
          </h2>
        </FadeIn>

        <FadeIn delay={1}>
          <p className="text-lg leading-relaxed text-nor-muted md:text-xl">
            NoR is a design-led studio and product organization. We&apos;re not
            chasing trends or optimizing for growth at all costs. We build
            things that last — starting with health and nutrition, and expanding
            thoughtfully from there.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-nor-muted md:text-xl">
            For investors, partners, and press: we&apos;re a small, focused team
            with a long view. The work speaks for itself.
          </p>
          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-3 text-sm font-medium tracking-wide text-nor-black transition-colors hover:text-nor-yellow"
          >
            Learn more about NoR
            <span aria-hidden="true">→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
