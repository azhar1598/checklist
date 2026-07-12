import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function HomeMission() {
  return (
    <section className="border-b border-nor-black/8 bg-nor-off-white section-x section-y">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionLabel>Mission</SectionLabel>
          <blockquote className="mt-6 max-w-5xl font-serif text-[clamp(1.75rem,4.5vw,4rem)] font-light leading-[1.18] tracking-tight text-nor-black sm:mt-8 sm:leading-[1.15]">
            We believe the best products come from patience, craft, and a deep
            respect for the people who rely on them.
          </blockquote>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-nor-muted sm:mt-10 sm:text-lg md:text-xl">
            NoR exists to build a portfolio of tools that matter — not to chase
            trends or fill a market gap. Every product in our family is
            researched, designed, and refined with the same standard of care.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
