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

export function Footer() {
  return (
    <footer className="border-t border-nor-black/10 bg-nor-warm-dark section-x py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-5">
            <Logo onDark height={28} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-nor-cream/55 sm:mt-6 sm:text-base">
              A design-led studio and product organization building focused tools
              for health, wellness, and everyday life.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-nor-cream/40">
              Products
            </p>
            <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-nor-cream/70 transition-colors hover:text-nor-yellow"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-nor-cream/40">
              Company
            </p>
            <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-nor-cream/70 transition-colors hover:text-nor-yellow"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-nor-cream/40">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
              <li>
                <a
                  href="https://instagram.com/nororg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-nor-cream/70 transition-colors hover:text-nor-yellow"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@nororg.com"
                  className="text-sm text-nor-cream/70 transition-colors hover:text-nor-yellow"
                >
                  hello@nororg.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-nor-cream/10 pt-8 text-xs text-nor-cream/35 sm:mt-16">
          <p>&copy; {new Date().getFullYear()} NoR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
