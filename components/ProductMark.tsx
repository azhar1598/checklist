import Image from "next/image";

type ProductMarkProps = {
  name: string;
  logo?: string;
  accent: string;
  text?: string;
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
};

const sizes = {
  sm: { height: 22, title: "text-2xl", margin: "mb-4", bar: "w-8" },
  md: { height: 32, title: "text-3xl md:text-4xl", margin: "mb-6", bar: "w-10" },
  lg: { height: 40, title: "text-4xl md:text-5xl", margin: "mb-0", bar: "w-12" },
};

export function ProductMark({
  name,
  logo,
  accent,
  text = "text-nor-black",
  size = "md",
  onDark = false,
}: ProductMarkProps) {
  const s = sizes[size];

  if (logo) {
    return (
      <div className={`${s.margin} inline-flex items-center`}>
        <Image
          src={logo}
          alt={name}
          width={Math.round(s.height * 3.5)}
          height={s.height}
          className="w-auto"
          style={{ height: s.height }}
        />
      </div>
    );
  }

  return (
    <>
      <div className={`${s.margin} h-1 ${s.bar} rounded-full ${accent}`} />
      <h3
        className={`font-serif font-light tracking-tight ${
          onDark ? "text-nor-cream" : text
        } ${s.title}`}
      >
        {name}
      </h3>
    </>
  );
}
