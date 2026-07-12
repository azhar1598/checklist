import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="relative flex min-h-[88svh] items-center overflow-hidden bg-nor-cream section-x pt-24 pb-16 sm:min-h-[92svh] sm:pt-28 sm:pb-20 md:pt-32 lg:pt-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(235,203,90,0.14) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(10,10,10,0.03) 0%, transparent 50%), linear-gradient(180deg, #ffffff 0%, #f9f7f2 40%, #f3efe8 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <FadeIn>
              <div className="flex items-center gap-4">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-nor-yellow sm:text-sm">
                  NoR
                </p>
                <span className="h-px w-12 bg-nor-yellow/60" aria-hidden="true" />
              </div>
            </FadeIn>

            <FadeIn delay={1}>
              <h1 className="mt-8 max-w-4xl font-serif text-[clamp(2.5rem,7vw,6.5rem)] font-light leading-[1.06] tracking-tight text-nor-black">
                A studio building tools for health, wellness, and everyday life.
              </h1>
            </FadeIn>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <FadeIn delay={2}>
              <p className="text-base leading-relaxed text-nor-muted sm:text-lg md:text-xl">
                NoR is the parent organization behind a portfolio of focused,
                well-crafted products — each designed for real problems, built
                with intention, and shaped by research.
              </p>
            </FadeIn>

            <FadeIn delay={3}>
              <div className="mt-8 flex flex-col gap-4 sm:mt-10">
                <Link
                  href="/products"
                  className="inline-flex w-full items-center justify-center gap-3 bg-nor-black px-6 py-3.5 text-sm font-medium tracking-wide text-nor-white transition-colors hover:bg-nor-warm-mid sm:w-auto sm:px-8 sm:py-4"
                >
                  Explore products
                  <span className="text-nor-yellow" aria-hidden="true">
                    →
                  </span>
                </Link>
                <div className="flex flex-wrap gap-6">
                  <Link
                    href="/research"
                    className="text-sm tracking-wide text-nor-muted transition-colors hover:text-nor-black"
                  >
                    Our research
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm tracking-wide text-nor-muted transition-colors hover:text-nor-black"
                  >
                    About NoR
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
