export const pillars = [
  {
    number: "01",
    title: "Design as discipline",
    body: "We treat design as a rigorous practice — not decoration. Every product begins with understanding the people who will use it.",
  },
  {
    number: "02",
    title: "Depth over breadth",
    body: "We build fewer things, better. Each product earns its place in the portfolio by solving a real problem with care.",
  },
  {
    number: "03",
    title: "Human judgment first",
    body: "Our tools augment expertise — especially in clinical settings — rather than replacing the people who hold it.",
  },
  {
    number: "04",
    title: "Long-term thinking",
    body: "We build for durability. Products that respect their users, earn trust over time, and improve with use.",
  },
] as const;

export const researchAreas = [
  {
    title: "Clinical nutrition",
    body: "How dietitians and nutritionists work in practice — the workflows, constraints, and judgment calls that software should support, not flatten.",
    topics: ["Clinical decision support", "Dietetic workflows", "Evidence-based practice"],
  },
  {
    title: "Food transparency",
    body: "What people actually need to know about the products they buy and eat — and how to surface that information without overwhelm.",
    topics: ["Ingredient literacy", "Label interpretation", "Consumer health"],
  },
  {
    title: "Human–AI collaboration",
    body: "Building AI systems that earn trust in high-stakes contexts — where the human stays in control and the machine does the heavy lifting.",
    topics: ["Clinical AI", "Explainability", "Responsible automation"],
  },
  {
    title: "Health product design",
    body: "The intersection of wellness, everyday life, and software — making tools that people want to use, not just need to use.",
    topics: ["Behavioral design", "Accessibility", "Product craft"],
  },
] as const;

export const approachPoints = [
  {
    title: "Start in the field",
    body: "We spend time with practitioners and users before writing code. Understanding real workflows is non-negotiable.",
  },
  {
    title: "Prototype in context",
    body: "Early versions are tested where they'll actually be used — clinics, kitchens, grocery aisles — not just in a lab.",
  },
  {
    title: "Publish what we learn",
    body: "Insights from our research inform our products and, where useful, are shared with the broader community.",
  },
] as const;
