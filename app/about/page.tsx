import type { Metadata } from "next";
import { About } from "@/components/About";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "About",
  description:
    "NoR is an organization building thoughtful, human-centered tools for health, wellness, and everyday life.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="About"
        title="An organization building tools for people."
        description="We approach product building with patience, craft, and a deep respect for the people who rely on what we make."
      />
      <About />
    </>
  );
}
