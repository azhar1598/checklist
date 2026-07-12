import { FadeIn } from "./FadeIn";

type PageIntroProps = {
  label: string;
  title: string;
  description?: string;
};

export function PageIntro({ label, title, description }: PageIntroProps) {
  return (
    <section className="border-b border-nor-black/8 bg-nor-off-white section-x pb-16 pt-28 sm:pb-20 sm:pt-36 md:pb-28 md:pt-44">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-nor-yellow">
            {label}
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-[clamp(2rem,5.5vw,5.5rem)] font-light leading-[1.1] tracking-tight text-nor-black sm:mt-6">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-nor-muted sm:mt-8 sm:text-lg md:text-xl">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
