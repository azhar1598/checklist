import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function HomeMission() {
  return (
    <section className="border-b border-nor-black/8 bg-nor-off-white px-6 py-32 md:px-12 md:py-44 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionLabel>Mission</SectionLabel>
          <blockquote className="mt-8 max-w-5xl font-serif text-[clamp(2rem,5vw,4rem)] font-light leading-[1.15] tracking-tight text-nor-black">
            We believe the best products come from patience, craft, and a deep
            respect for the people who rely on them.
          </blockquote>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-nor-muted md:text-xl">
            NoR exists to build a portfolio of tools that matter — not to chase
            trends or fill a market gap. Every product in our family is
            researched, designed, and refined with the same standard of care.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
