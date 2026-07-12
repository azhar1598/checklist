import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="relative flex min-h-[110svh] items-end bg-nor-black px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44 lg:px-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 85%, #ebcb5a 0%, transparent 45%), radial-gradient(circle at 85% 15%, #ffffff 0%, transparent 35%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <FadeIn>
          <p className="mb-8 text-sm font-medium uppercase tracking-[0.3em] text-nor-yellow">
            NoR
          </p>
        </FadeIn>

        <FadeIn delay={1}>
          <h1 className="max-w-5xl font-serif text-[clamp(3rem,8.5vw,7rem)] font-light leading-[1.02] tracking-tight text-nor-white">
            A studio building tools for health, wellness, and everyday life.
          </h1>
        </FadeIn>

        <FadeIn delay={2}>
          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-nor-white/65 md:text-2xl md:leading-relaxed">
            NoR is the parent organization behind a portfolio of focused,
            well-crafted products — each designed for real problems, built with
            intention, and shaped by research.
          </p>
        </FadeIn>

        <FadeIn delay={3}>
          <div className="mt-14 flex flex-wrap items-center gap-8 md:gap-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 border border-nor-white/20 px-8 py-4 text-sm font-medium tracking-wide text-nor-white transition-all hover:border-nor-yellow hover:text-nor-yellow"
            >
              Explore products
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/research"
              className="text-sm tracking-wide text-nor-white/50 transition-colors hover:text-nor-white"
            >
              Our research
            </Link>
            <Link
              href="/about"
              className="text-sm tracking-wide text-nor-white/50 transition-colors hover:text-nor-white"
            >
              About NoR
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
