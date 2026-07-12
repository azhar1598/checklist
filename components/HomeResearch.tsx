import Link from "next/link";
import { researchAreas } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function HomeResearch() {
  return (
    <section className="bg-nor-black px-6 py-32 md:px-12 md:py-44 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionLabel light>Research</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-serif text-4xl font-light tracking-tight text-nor-white md:text-5xl lg:text-6xl">
            Inquiry before implementation.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-nor-white/60 md:text-xl">
            Every product we build starts with research — understanding the
            domain, the people, and the problem deeply before a single line of
            code is written.
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {researchAreas.slice(0, 2).map((area, index) => (
            <FadeIn key={area.title} delay={(index + 1) as 0 | 1 | 2 | 3}>
              <div className="border border-nor-white/10 p-8 md:p-10 lg:p-12">
                <h3 className="font-serif text-2xl font-light text-nor-white md:text-3xl">
                  {area.title}
                </h3>
                <p className="mt-4 leading-relaxed text-nor-white/55">
                  {area.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={2}>
          <Link
            href="/research"
            className="mt-14 inline-flex items-center gap-3 border border-nor-white/15 px-8 py-4 text-sm font-medium tracking-wide text-nor-white transition-all hover:border-nor-yellow hover:text-nor-yellow"
          >
            Explore our research
            <span aria-hidden="true">→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
