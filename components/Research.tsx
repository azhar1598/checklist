import { approachPoints, researchAreas } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function Research() {
  return (
    <>
      <section className="section-x section-y">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionLabel>Focus areas</SectionLabel>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-nor-muted sm:mt-8 sm:text-lg md:text-xl">
              Our research spans the domains where our products live — clinical
              nutrition, food science, and the design of health technology. We
              study how people work, decide, and live before we build.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-6 sm:mt-20 sm:gap-8 lg:grid-cols-2">
            {researchAreas.map((area, index) => (
              <FadeIn key={area.title} delay={(index + 1) as 0 | 1 | 2 | 3}>
                <article className="flex h-full flex-col rounded-2xl border border-nor-black/8 bg-nor-off-white p-8 md:p-10 lg:p-12">
                  <h2 className="font-serif text-2xl font-light tracking-tight text-nor-black sm:text-3xl">
                    {area.title}
                  </h2>
                  <p className="mt-5 flex-1 text-base leading-relaxed text-nor-muted sm:mt-6 sm:text-lg">
                    {area.body}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {area.topics.map((topic) => (
                      <li
                        key={topic}
                        className="rounded-full border border-nor-black/10 bg-nor-white px-4 py-1.5 text-xs tracking-wide text-nor-muted"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-nor-black/8 bg-nor-cream section-x section-y">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionLabel>Approach</SectionLabel>
            <h2 className="mt-6 max-w-3xl font-serif text-3xl font-light tracking-tight text-nor-black sm:text-4xl md:text-5xl">
              How we conduct research.
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-10 sm:mt-20 md:grid-cols-3 md:gap-12">
            {approachPoints.map((point, index) => (
              <FadeIn key={point.title} delay={(index + 1) as 0 | 1 | 2 | 3}>
                <div className="border-l-2 border-nor-yellow pl-6">
                  <span className="font-serif text-3xl font-light text-nor-yellow/80 sm:text-4xl">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-light text-nor-black sm:text-2xl">
                    {point.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-nor-muted sm:mt-4">
                    {point.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-x section-y">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="rounded-3xl border border-nor-black/10 bg-nor-off-white p-8 sm:p-12 md:p-16 lg:p-20">
              <SectionLabel>Collaborate</SectionLabel>
              <h2 className="mt-6 max-w-2xl font-serif text-2xl font-light tracking-tight text-nor-black sm:text-3xl md:text-4xl">
                Research partnerships and academic inquiry.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-nor-muted sm:mt-6 sm:text-lg">
                We&apos;re open to collaborating with researchers, clinicians,
                and institutions working in our focus areas. If you&apos;re
                exploring similar questions, we&apos;d like to hear from you.
              </p>
              <a
                href="mailto:hello@nororg.com"
                className="mt-8 inline-flex items-center gap-3 text-sm font-medium tracking-wide text-nor-black transition-colors hover:text-nor-yellow sm:mt-10"
              >
                hello@nororg.com
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
