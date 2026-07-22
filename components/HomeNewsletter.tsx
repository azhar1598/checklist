import { FadeIn } from "./FadeIn";
import { NewsletterSignup } from "./NewsletterSignup";

export function HomeNewsletter() {
  return (
    <section className="border-t border-nor-black/8 bg-nor-cream section-x section-y">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-nor-yellow">
              Newsletter
            </p>
            <h2 className="mt-6 font-serif text-3xl font-light tracking-tight text-nor-black sm:text-4xl md:text-5xl">
              Stay close to what NoR is building.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-nor-muted sm:text-lg">
              Product launches, research notes, and studio updates — delivered
              occasionally, without noise.
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="rounded-2xl border border-nor-black/8 bg-nor-white p-8 sm:p-10 lg:p-12">
              <NewsletterSignup variant="light" showIntro={false} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
