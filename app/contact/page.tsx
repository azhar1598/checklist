import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NoR — for partnerships, press, product inquiries, or general questions.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Contact"
        title="Let's connect."
        description="Partners, dietitians, investors, and press — we're happy to hear from you."
      />
      <Contact />
    </>
  );
}
