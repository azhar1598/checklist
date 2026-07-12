import { approachPoints, researchAreas } from "@/lib/content";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function Research() {
  return (
    <>
      <section className="px-6 py-32 md:px-12 md:py-44 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionLabel>Focus areas</SectionLabel>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-nor-muted md:text-xl">
              Our research spans the domains where our products live — clinical
              nutrition, food science, and the design of health technology. We
              study how people work, decide, and live before we build.
            </p>
          </FadeIn>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            {researchAreas.map((area, index) => (
              <FadeIn key={area.title} delay={(index + 1) as 0 | 1 | 2 | 3}>
                <article className="flex h-full flex-col border border-nor-black/10 p-8 md:p-10 lg:p-12">
                  <h2 className="font-serif text-3xl font-light tracking-tight text-nor-black">
                    {area.title}
                  </h2>
                  <p className="mt-6 flex-1 text-lg leading-relaxed text-nor-muted">
                    {area.body}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {area.topics.map((topic) => (
                      <li
                        key={topic}
                        className="rounded-full border border-nor-black/10 px-4 py-1.5 text-xs tracking-wide text-nor-muted"
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

      <section className="border-t border-nor-black/8 bg-nor-black px-6 py-32 md:px-12 md:py-44 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionLabel light>Approach</SectionLabel>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl font-light tracking-tight text-nor-white md:text-5xl">
              How we conduct research.
            </h2>
          </FadeIn>

          <div className="mt-20 grid gap-12 md:grid-cols-3">
            {approachPoints.map((point, index) => (
              <FadeIn key={point.title} delay={(index + 1) as 0 | 1 | 2 | 3}>
                <div>
                  <span className="font-serif text-4xl font-light text-nor-yellow/70">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-light text-nor-white">
                    {point.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-nor-white/55">
                    {point.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 md:px-12 md:py-44 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="border border-nor-black/10 p-10 md:p-16 lg:p-20">
              <SectionLabel>Collaborate</SectionLabel>
              <h2 className="mt-6 max-w-2xl font-serif text-3xl font-light tracking-tight text-nor-black md:text-4xl">
                Research partnerships and academic inquiry.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-nor-muted">
                We&apos;re open to collaborating with researchers, clinicians,
                and institutions working in our focus areas. If you&apos;re
                exploring similar questions, we&apos;d like to hear from you.
              </p>
              <a
                href="mailto:hello@nororg.com"
                className="mt-10 inline-flex items-center gap-3 text-sm font-medium tracking-wide text-nor-black transition-colors hover:text-nor-yellow"
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
