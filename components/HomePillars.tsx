import { pillars } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function HomePillars() {
  return (
    <section className="px-6 py-32 md:px-12 md:py-44 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionLabel>How we work</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-serif text-4xl font-light tracking-tight text-nor-black md:text-5xl lg:text-6xl">
            Principles that guide everything we build.
          </h2>
        </FadeIn>

        <div className="mt-20 grid gap-px bg-nor-black/10 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <FadeIn
              key={pillar.number}
              delay={(index + 1) as 0 | 1 | 2 | 3}
              className="bg-nor-white"
            >
              <div className="flex h-full flex-col p-8 md:p-10 lg:p-12">
                <span className="font-serif text-5xl font-light text-nor-yellow/80">
                  {pillar.number}
                </span>
                <h3 className="mt-8 font-serif text-2xl font-light text-nor-black">
                  {pillar.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-nor-muted">
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
