import type { Metadata } from "next";
import { Research } from "@/components/Research";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Research",
  description:
    "NoR conducts research in clinical nutrition, food transparency, human-AI collaboration, and health product design.",
};

export default function ResearchPage() {
  return (
    <>
      <PageIntro
        label="Research"
        title="Inquiry before implementation."
        description="Every product we build starts with research — understanding the domain, the people, and the problem deeply before a single line of code is written."
      />
      <Research />
    </>
  );
}
