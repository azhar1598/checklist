import Link from "next/link";
import { researchAreas } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function HomeResearch() {
  return (
    <section className="bg-nor-warm-dark px-5 py-28 sm:px-6 md:px-12 md:py-44 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionLabel light>Research</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-serif text-3xl font-light tracking-tight text-nor-cream sm:text-4xl md:text-5xl lg:text-6xl">
            Inquiry before implementation.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-nor-cream/65 sm:mt-8 sm:text-lg md:text-xl">
            Every product we build starts with research — understanding the
            domain, the people, and the problem deeply before a single line of
            code is written.
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {researchAreas.slice(0, 2).map((area, index) => (
            <FadeIn key={area.title} delay={(index + 1) as 0 | 1 | 2 | 3}>
              <div className="border border-nor-white/10 p-8 md:p-10 lg:p-12">
                <h3 className="font-serif text-xl font-light text-nor-cream sm:text-2xl md:text-3xl">
                  {area.title}
                </h3>
                <p className="mt-4 leading-relaxed text-nor-cream/60">
                  {area.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={2}>
          <Link
            href="/research"
            className="mt-12 inline-flex w-full items-center justify-center gap-3 border border-nor-cream/20 px-6 py-3.5 text-sm font-medium tracking-wide text-nor-cream transition-all hover:border-nor-yellow hover:text-nor-yellow sm:mt-14 sm:w-auto sm:px-8 sm:py-4"
          >
            Explore our research
            <span aria-hidden="true">→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
