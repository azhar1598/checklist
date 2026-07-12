export const products = [
  {
    name: "DOOP",
    logo: "/doop.png",
    tagline: "Clinical intelligence for dietitians",
    description:
      "An AI-powered clinical assistant for dietitians and nutritionists.",
    longDescription:
      "DOOP supports dietitians through their daily clinical work — helping with assessments, meal planning, and evidence-based recommendations while keeping the practitioner firmly in control.",
    href: "https://doop.nororg.com",
    accent: "bg-nor-black",
    surface: "bg-nor-off-white",
    text: "text-nor-black",
    border: "border-nor-black/10",
    hover: "hover:border-nor-black/30 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]",
    dark: true,
  },
  {
    name: "LEAP",
    logo: undefined,
    tagline: "Understand what you eat",
    description:
      "Scan food products and understand what's really in them.",
    longDescription:
      "LEAP helps consumers scan packaged foods and make sense of ingredient lists, additives, and nutritional claims — turning complexity into clarity at the point of purchase.",
    href: "https://leap.nororg.com",
    accent: "bg-nor-yellow",
    surface: "bg-nor-white",
    text: "text-nor-black",
    border: "border-nor-yellow/30",
    hover: "hover:border-nor-yellow hover:shadow-[0_20px_60px_-15px_rgba(235,203,90,0.35)]",
    dark: false,
  },
] as const;
