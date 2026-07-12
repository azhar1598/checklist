import Image from "next/image";

type LogoProps = {
  onDark?: boolean;
  className?: string;
  height?: number;
};

export function Logo({ onDark = false, className = "", height = 28 }: LogoProps) {
  const width = Math.round(height * 2.6);

  const image = (
    <Image
      src="/logo.png"
      alt="NoR"
      width={width}
      height={height}
      className="w-auto"
      style={{ height }}
      priority
    />
  );

  if (onDark) {
    return (
      <span
        className={`inline-flex items-center rounded-md bg-nor-white px-2.5 py-1.5 ${className}`}
      >
        {image}
      </span>
    );
  }

  return <span className={`inline-flex items-center ${className}`}>{image}</span>;
}
