import Link from "next/link";
import { products } from "@/lib/products";
import { FadeIn } from "./FadeIn";
import { ProductMark } from "./ProductMark";
import { SectionLabel } from "./SectionLabel";

export function HomeProducts() {
  return (
    <section className="border-t border-nor-black/8">
      <div className="px-6 py-32 md:px-12 md:py-44 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <SectionLabel>Products</SectionLabel>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl font-light tracking-tight text-nor-black md:text-5xl lg:text-6xl">
              A growing family of focused tools.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-nor-muted md:text-xl">
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
            className={`group block border-t border-nor-black/8 transition-colors ${
              product.dark
                ? "bg-nor-warm-dark hover:bg-nor-warm-mid"
                : "bg-nor-off-white hover:bg-nor-white"
            }`}
          >
            <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:gap-10 sm:px-6 sm:py-20 md:grid-cols-2 md:items-center md:gap-20 md:px-12 md:py-28 lg:px-16 lg:py-36">
              <div>
                <ProductMark
                  name={product.name}
                  logo={product.logo}
                  accent={product.accent}
                  text={product.text}
                  size="lg"
                />
                <p
                  className={`mt-6 text-sm font-medium uppercase tracking-[0.2em] ${product.taglineColor}`}
                >
                  {product.tagline}
                </p>
              </div>

              <div>
                <h3
                  className={`font-serif text-2xl font-light tracking-tight sm:text-3xl md:text-4xl lg:text-5xl ${
                    product.dark ? "text-nor-cream" : "text-nor-black"
                  }`}
                >
                  {product.name}
                </h3>
                <p
                  className={`mt-4 text-base leading-relaxed sm:mt-6 sm:text-lg md:text-xl ${
                    product.dark ? "text-nor-cream/70" : "text-nor-muted"
                  }`}
                >
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

      <div className="border-t border-nor-black/8 px-6 py-12 md:px-12 lg:px-16">
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
