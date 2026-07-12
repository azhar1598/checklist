import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function HomeContactCTA() {
  return (
    <section className="border-t border-nor-black/8 bg-nor-off-white section-x section-y">
      <div className="mx-auto max-w-7xl text-center">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-nor-yellow">
            Connect
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-3xl font-light tracking-tight text-nor-black sm:text-4xl md:text-5xl lg:text-6xl">
            Interested in working together?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-nor-muted sm:mt-8 sm:text-lg md:text-xl">
            Partners, researchers, investors, and press — we&apos;d like to hear
            from you.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-3 bg-nor-black px-8 py-3.5 text-sm font-medium tracking-wide text-nor-white transition-colors hover:bg-nor-warm-mid sm:w-auto sm:py-4"
            >
              Get in touch
              <span className="text-nor-yellow" aria-hidden="true">
                →
              </span>
            </Link>
            <a
              href="mailto:hello@nororg.com"
              className="text-sm tracking-wide text-nor-muted transition-colors hover:text-nor-black"
            >
              hello@nororg.com
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
