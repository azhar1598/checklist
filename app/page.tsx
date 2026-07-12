import { Hero } from "@/components/Hero";
import { HomeContactCTA } from "@/components/HomeContactCTA";
import { HomeMission } from "@/components/HomeMission";
import { HomePhilosophy } from "@/components/HomePhilosophy";
import { HomePillars } from "@/components/HomePillars";
import { HomeProducts } from "@/components/HomeProducts";
import { HomeResearch } from "@/components/HomeResearch";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMission />
      <HomePillars />
      <HomeProducts />
      <HomeResearch />
      <HomePhilosophy />
      <HomeContactCTA />
    </>
  );
}
