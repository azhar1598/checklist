import Link from "next/link";
import { products } from "@/lib/products";
import { FadeIn } from "./FadeIn";
import { ProductMark } from "./ProductMark";
import { SectionLabel } from "./SectionLabel";

export function HomeProducts() {
  return (
    <section className="border-t border-nor-black/8">
      <div className="section-x section-y-tight">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionLabel>Products</SectionLabel>
            <h2 className="mt-6 max-w-3xl font-serif text-3xl font-light tracking-tight text-nor-black sm:text-4xl md:text-5xl lg:text-6xl">
              A growing family of focused tools.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-nor-muted sm:mt-8 sm:text-lg md:text-xl">
              Each product lives on its own subdomain, with its own identity —
              designed for the people who use it every day.
            </p>
          </FadeIn>
        </div>
      </div>

      {products.map((product, index) => (
        <FadeIn key={product.name} delay={(index + 1) as 0 | 1 | 2 | 3}>
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${product.name} — opens in a new tab`}
            className={`group block border-t border-nor-black/8 transition-colors ${product.surface} hover:brightness-[0.99]`}
          >
            <div className="section-x mx-auto grid max-w-7xl gap-8 py-14 sm:gap-10 sm:py-20 md:grid-cols-2 md:items-center md:gap-16 md:py-24 lg:gap-20 lg:py-32">
              <div>
                <ProductMark
                  name={product.name}
                  logo={product.logo}
                  accent={product.accent}
                  text={product.text}
                  size="lg"
                />
                <p
                  className={`mt-5 text-sm font-medium uppercase tracking-[0.2em] sm:mt-6 ${product.taglineColor}`}
                >
                  {product.tagline}
                </p>
              </div>

              <div>
                <p className="text-base leading-relaxed text-nor-muted sm:text-lg md:text-xl">
                  {product.longDescription}
                </p>
                <span
                  className={`mt-8 inline-flex items-center gap-3 text-sm font-medium tracking-wide text-nor-black transition-all group-hover:gap-4 sm:mt-10 ${product.linkHover}`}
                >
                  Visit {product.name}
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          </a>
        </FadeIn>
      ))}

      <div className="section-x section-y-tight border-t border-nor-black/8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-nor-black transition-colors hover:text-nor-yellow"
          >
            View all products
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
