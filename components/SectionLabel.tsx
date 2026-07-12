type SectionLabelProps = {
  children: React.ReactNode;
  light?: boolean;
};

export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <p
      className={`text-sm font-medium uppercase tracking-[0.25em] ${
        light ? "text-nor-yellow" : "text-nor-muted"
      }`}
    >
      {children}
    </p>
  );
}
