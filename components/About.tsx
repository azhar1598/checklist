import { pillars } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <>
      <section className="px-6 py-32 md:px-12 md:py-44 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <FadeIn>
              <SectionLabel>Our story</SectionLabel>
              <p className="mt-8 text-xl leading-relaxed text-nor-muted md:text-2xl md:leading-relaxed">
                NoR started from a simple belief: the best products come from
                patience, craft, and a deep respect for the people who rely on
                them.
              </p>
            </FadeIn>
            <FadeIn delay={1}>
              <p className="text-lg leading-relaxed text-nor-muted md:text-xl">
                We&apos;re not chasing trends. We&apos;re building things that
                last — starting with health and nutrition, and expanding
                thoughtfully from there. Our products are independent brands
                under the NoR umbrella, each with its own identity and audience.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-nor-muted md:text-xl">
                For investors, partners, and press: we&apos;re a small, focused
                team with a long view. The work speaks for itself.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-t border-nor-black/8 bg-nor-off-white px-6 py-32 md:px-12 md:py-44 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionLabel>Principles</SectionLabel>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl font-light tracking-tight text-nor-black md:text-5xl">
              What guides our work.
            </h2>
          </FadeIn>

          <div className="mt-20 grid gap-12 md:grid-cols-2">
            {pillars.map((principle, index) => (
              <FadeIn key={principle.title} delay={(index + 1) as 0 | 1 | 2 | 3}>
                <div className="border-l-2 border-nor-yellow pl-8">
                  <span className="font-serif text-3xl font-light text-nor-yellow/70">
                    {principle.number}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-light text-nor-black md:text-3xl">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-nor-muted">
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
