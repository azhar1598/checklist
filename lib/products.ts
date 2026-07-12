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
    accent: "bg-doop-green",
    surface: "bg-nor-off-white",
    text: "text-doop-green",
    taglineColor: "text-doop-green",
    linkHover: "group-hover:text-doop-green",
    border: "border-doop-green/15",
    hover:
      "hover:border-doop-green/35 hover:shadow-[0_20px_60px_-15px_rgba(10,77,60,0.18)]",
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
    accent: "bg-leap-blue",
    surface: "bg-leap-blue-light",
    text: "text-leap-blue",
    taglineColor: "text-leap-blue",
    linkHover: "group-hover:text-leap-blue",
    border: "border-leap-blue/20",
    hover:
      "hover:border-leap-blue/50 hover:shadow-[0_20px_60px_-15px_rgba(43,92,219,0.2)]",
  },
] as const;
