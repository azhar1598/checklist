import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { Products } from "@/components/Products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore DOOP and LEAP — focused products from NoR for clinical nutrition and everyday food understanding.",
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        label="Products"
        title="Each product, its own focus."
        description="NoR builds a small portfolio of well-crafted tools. Every product lives on its own — designed for the people who use it every day."
      />
      <Products showIntro={false} />
    </>
  );
}
