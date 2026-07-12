import { products } from "@/lib/products";
import { FadeIn } from "./FadeIn";
import { ProductMark } from "./ProductMark";
import { SectionLabel } from "./SectionLabel";

type ProductsProps = {
  showIntro?: boolean;
};

export function Products({ showIntro = true }: ProductsProps) {
  return (
    <section className="px-6 py-32 md:px-12 md:py-44 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {showIntro && (
          <FadeIn>
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl font-light tracking-tight text-nor-black md:text-5xl lg:text-6xl">
              Each product, its own focus.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-nor-muted md:text-xl">
              NoR builds a small portfolio of well-crafted tools. Every product
              lives on its own — designed for the people who use it every day.
            </p>
          </FadeIn>
        )}

        <div className={`flex flex-col gap-8 ${showIntro ? "mt-20" : "mt-4"}`}>
          {products.map((product, index) => (
            <FadeIn key={product.name} delay={(index + 1) as 0 | 1 | 2 | 3}>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group grid overflow-hidden rounded-2xl border md:min-h-[22rem] md:grid-cols-2 ${product.border} ${product.surface} ${product.hover} transition-all duration-500 hover:-translate-y-0.5`}
              >
                <div className="flex flex-col justify-center p-10 md:p-14 lg:p-16">
                  <ProductMark
                    name={product.name}
                    logo={product.logo}
                    accent={product.accent}
                    size="lg"
                  />
                  <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-nor-muted">
                    {product.tagline}
                  </p>
                </div>

                <div className="flex flex-col justify-center border-t border-nor-black/8 p-10 md:border-t-0 md:border-l md:p-14 lg:p-16">
                  <p className="text-lg leading-relaxed text-nor-muted md:text-xl">
                    {product.longDescription}
                  </p>
                  <span className="mt-10 inline-flex items-center gap-3 text-sm font-medium tracking-wide text-nor-black transition-all group-hover:gap-4 group-hover:text-nor-yellow">
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
