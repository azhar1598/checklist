import { FadeIn } from "./FadeIn";

export function Contact() {
  return (
    <section className="px-6 py-32 md:px-12 md:py-44 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="rounded-3xl bg-nor-black px-10 py-20 text-center md:px-20 md:py-28 lg:py-32">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-nor-yellow">
              Connect
            </p>
            <h2 className="mx-auto mt-6 max-w-2xl font-serif text-4xl font-light tracking-tight text-nor-white md:text-5xl">
              Interested in working together?
            </h2>
            <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-nor-white/60 md:text-xl">
              Whether you&apos;re a dietitian exploring DOOP, a researcher in
              our focus areas, a partner evaluating LEAP, or press looking to
              learn more about NoR — we&apos;d like to hear from you.
            </p>
            <a
              href="mailto:hello@nororg.com"
              className="mt-12 inline-flex items-center gap-3 border border-nor-white/15 px-10 py-4 text-sm font-medium tracking-wide text-nor-white transition-all hover:border-nor-yellow hover:text-nor-yellow"
            >
              hello@nororg.com
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={1}>
          <div className="mt-20 grid gap-12 md:grid-cols-3">
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
              <div key={item.title} className="border border-nor-black/10 p-8 md:p-10">
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
