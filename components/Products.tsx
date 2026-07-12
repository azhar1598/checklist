import { products } from "@/lib/products";
import { FadeIn } from "./FadeIn";
import { ProductMark } from "./ProductMark";
import { SectionLabel } from "./SectionLabel";

type ProductsProps = {
  showIntro?: boolean;
};

export function Products({ showIntro = true }: ProductsProps) {
  return (
    <section className="section-x section-y">
      <div className="mx-auto max-w-7xl">
        {showIntro && (
          <FadeIn>
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="mt-6 max-w-3xl font-serif text-3xl font-light tracking-tight text-nor-black sm:text-4xl md:text-5xl lg:text-6xl">
              Each product, its own focus.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-nor-muted sm:mt-8 sm:text-lg md:text-xl">
              NoR builds a small portfolio of well-crafted tools. Every product
              lives on its own — designed for the people who use it every day.
            </p>
          </FadeIn>
        )}

        <div className={`flex flex-col gap-6 sm:gap-8 ${showIntro ? "mt-14 sm:mt-20" : "mt-4"}`}>
          {products.map((product, index) => (
            <FadeIn key={product.name} delay={(index + 1) as 0 | 1 | 2 | 3}>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${product.name} — opens in a new tab`}
                className={`group grid overflow-hidden rounded-2xl border md:min-h-[20rem] md:grid-cols-2 ${product.border} ${product.surface} ${product.hover} transition-all duration-500 hover:-translate-y-0.5`}
              >
                <div className="flex flex-col justify-center p-8 sm:p-10 md:p-14 lg:p-16">
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

                <div className="flex flex-col justify-center border-t border-nor-black/8 p-8 sm:p-10 md:border-t-0 md:border-l md:p-14 lg:p-16">
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
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
