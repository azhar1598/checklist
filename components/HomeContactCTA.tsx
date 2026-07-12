import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function HomeContactCTA() {
  return (
    <section className="border-t border-nor-black/8 bg-nor-off-white px-6 py-32 md:px-12 md:py-44 lg:px-16">
      <div className="mx-auto max-w-7xl text-center">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-nor-yellow">
            Connect
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-light tracking-tight text-nor-black md:text-5xl lg:text-6xl">
            Interested in working together?
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-nor-muted md:text-xl">
            Partners, researchers, investors, and press — we&apos;d like to hear
            from you.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-nor-black px-8 py-4 text-sm font-medium tracking-wide text-nor-white transition-colors hover:bg-nor-black/90"
            >
              Get in touch
              <span aria-hidden="true">→</span>
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
