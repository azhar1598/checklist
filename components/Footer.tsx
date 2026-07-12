import Link from "next/link";
import { Logo } from "./Logo";

const productLinks = [
  { name: "DOOP", href: "https://doop.nororg.com" },
  { name: "LEAP", href: "https://leap.nororg.com" },
];

const pageLinks = [
  { name: "Products", href: "/products" },
  { name: "Research", href: "/research" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/nororg",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-nor-white/10 bg-nor-black px-6 py-20 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo onDark height={32} />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-nor-white/50">
              A design-led studio and product organization building focused tools
              for health, wellness, and everyday life.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-nor-white/40">
              Products
            </p>
            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-nor-white/70 transition-colors hover:text-nor-yellow"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-nor-white/40">
              Company
            </p>
            <ul className="mt-5 space-y-3">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-nor-white/70 transition-colors hover:text-nor-yellow"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-nor-white/40">
              Connect
            </p>
            <ul className="mt-5 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-nor-white/70 transition-colors hover:text-nor-yellow"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hello@nororg.com"
                  className="text-sm text-nor-white/70 transition-colors hover:text-nor-yellow"
                >
                  hello@nororg.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-nor-white/10 pt-10 text-xs text-nor-white/30 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} NoR. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-nor-white/50">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-nor-white/50">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
