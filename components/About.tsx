import { pillars } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <>
      <section className="section-x section-y">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:gap-24">
            <FadeIn>
              <SectionLabel>Our story</SectionLabel>
              <p className="mt-6 text-xl leading-relaxed text-nor-muted sm:mt-8 sm:text-2xl sm:leading-relaxed">
                NoR started from a simple belief: the best products come from
                patience, craft, and a deep respect for the people who rely on
                them.
              </p>
            </FadeIn>
            <FadeIn delay={1}>
              <p className="text-base leading-relaxed text-nor-muted sm:text-lg md:text-xl">
                We&apos;re not chasing trends. We&apos;re building things that
                last — starting with health and nutrition, and expanding
                thoughtfully from there. Our products are independent brands
                under the NoR umbrella, each with its own identity and audience.
              </p>
              <p className="mt-5 text-base leading-relaxed text-nor-muted sm:mt-6 sm:text-lg md:text-xl">
                For investors, partners, and press: we&apos;re a small, focused
                team with a long view. The work speaks for itself.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-t border-nor-black/8 bg-nor-off-white section-x section-y">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionLabel>Principles</SectionLabel>
            <h2 className="mt-6 max-w-2xl font-serif text-3xl font-light tracking-tight text-nor-black sm:text-4xl md:text-5xl">
              What guides our work.
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-10 sm:mt-20 sm:grid-cols-2 sm:gap-12">
            {pillars.map((principle, index) => (
              <FadeIn key={principle.title} delay={(index + 1) as 0 | 1 | 2 | 3}>
                <div className="border-l-2 border-nor-yellow pl-6 sm:pl-8">
                  <span className="font-serif text-2xl font-light text-nor-yellow/70 sm:text-3xl">
                    {principle.number}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-light text-nor-black sm:mt-4 sm:text-2xl md:text-3xl">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-nor-muted sm:mt-4 sm:text-lg">
                    {principle.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
