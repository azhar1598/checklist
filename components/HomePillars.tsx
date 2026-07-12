import { pillars } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function HomePillars() {
  return (
    <section className="section-x section-y">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionLabel>How we work</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-serif text-3xl font-light tracking-tight text-nor-black sm:text-4xl md:text-5xl lg:text-6xl">
            Principles that guide everything we build.
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:mt-20 sm:grid-cols-2 sm:gap-px sm:bg-nor-black/10 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <FadeIn
              key={pillar.number}
              delay={(index + 1) as 0 | 1 | 2 | 3}
              className="rounded-2xl border border-nor-black/8 bg-nor-white sm:rounded-none sm:border-0"
            >
              <div className="flex h-full flex-col p-8 md:p-10 lg:p-12">
                <span className="font-serif text-4xl font-light text-nor-yellow/80 sm:text-5xl">
                  {pillar.number}
                </span>
                <h3 className="mt-6 font-serif text-xl font-light text-nor-black sm:mt-8 sm:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-nor-muted sm:mt-4">
                  {pillar.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
