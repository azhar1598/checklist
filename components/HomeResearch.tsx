import Link from "next/link";
import { researchAreas } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function HomeResearch() {
  return (
    <section className="border-t border-nor-black/8 bg-nor-off-white section-x section-y">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionLabel>Research</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-serif text-3xl font-light tracking-tight text-nor-black sm:text-4xl md:text-5xl lg:text-6xl">
            Inquiry before implementation.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-nor-muted sm:mt-8 sm:text-lg md:text-xl">
            Every product we build starts with research — understanding the
            domain, the people, and the problem deeply before a single line of
            code is written.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:mt-20 sm:gap-8 md:grid-cols-2">
          {researchAreas.slice(0, 2).map((area, index) => (
            <FadeIn key={area.title} delay={(index + 1) as 0 | 1 | 2 | 3}>
              <div className="h-full rounded-2xl border border-nor-black/8 bg-nor-white p-8 md:p-10 lg:p-12">
                <h3 className="font-serif text-xl font-light text-nor-black sm:text-2xl md:text-3xl">
                  {area.title}
                </h3>
                <p className="mt-4 leading-relaxed text-nor-muted">{area.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={2}>
          <Link
            href="/research"
            className="mt-12 inline-flex w-full items-center justify-center gap-3 border border-nor-black/15 bg-nor-white px-6 py-3.5 text-sm font-medium tracking-wide text-nor-black transition-all hover:border-nor-yellow hover:text-nor-black sm:mt-14 sm:w-auto sm:px-8 sm:py-4"
          >
            Explore our research
            <span className="text-nor-yellow" aria-hidden="true">
              →
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
