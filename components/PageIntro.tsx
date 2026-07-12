import { FadeIn } from "./FadeIn";

type PageIntroProps = {
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function PageIntro({ label, title, description, dark = false }: PageIntroProps) {
  return (
    <section
      className={`border-b border-nor-black/8 px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-48 lg:px-16 ${
        dark ? "bg-nor-black" : "bg-nor-off-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-nor-yellow">
            {label}
          </p>
          <h1
            className={`mt-6 max-w-4xl font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.08] tracking-tight ${
              dark ? "text-nor-white" : "text-nor-black"
            }`}
          >
            {title}
          </h1>
          {description && (
            <p
              className={`mt-8 max-w-2xl text-lg leading-relaxed md:text-xl ${
                dark ? "text-nor-white/60" : "text-nor-muted"
              }`}
            >
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
