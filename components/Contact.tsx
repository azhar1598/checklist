import { FadeIn } from "./FadeIn";

export function Contact() {
  return (
    <section className="section-x section-y">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="rounded-3xl border border-nor-black/10 bg-nor-cream px-8 py-16 text-center sm:px-12 sm:py-20 md:px-20 md:py-28">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-nor-yellow">
              Connect
            </p>
            <h2 className="mx-auto mt-6 max-w-2xl font-serif text-3xl font-light tracking-tight text-nor-black sm:text-4xl md:text-5xl">
              Interested in working together?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-nor-muted sm:mt-8 sm:text-lg md:text-xl">
              Whether you&apos;re a dietitian exploring DOOP, a researcher in
              our focus areas, a partner evaluating LEAP, or press looking to
              learn more about NoR — we&apos;d like to hear from you.
            </p>
            <a
              href="mailto:hello@nororg.com"
              className="mt-10 inline-flex w-full items-center justify-center gap-3 bg-nor-black px-8 py-3.5 text-sm font-medium tracking-wide text-nor-white transition-colors hover:bg-nor-warm-mid sm:mt-12 sm:w-auto sm:px-10 sm:py-4"
            >
              hello@nororg.com
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="mt-14 grid gap-6 sm:mt-20 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {[
              {
                title: "Partnerships",
                body: "Product collaborations, integrations, and distribution.",
              },
              {
                title: "Research",
                body: "Academic inquiry, clinical studies, and field research.",
              },
              {
                title: "Press & investors",
                body: "Media inquiries, funding conversations, and company updates.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-nor-black/8 bg-nor-off-white p-8 md:p-10"
              >
                <h3 className="font-serif text-xl font-light text-nor-black">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-nor-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
