"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/team", label: "Team" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_ITEMS = [
  {
    href: "/services/property-management-service",
    label: "Property Management Service",
  },
  {
    href: "/services/tenant-search-service",
    label: "Tenant Search Service",
  },
  {
    href: "/services/property-check-inspection-service",
    label: "Property Check Inspection Service",
  },
  {
    href: "/services/renovation-restoration-service",
    label: "Renovation & Restoration Service",
  },
  {
    href: "/services/property-sale-service",
    label: "Property Sale Service",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-red-100/80 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-comic-display text-lg font-semibold tracking-tight text-red-700 transition-colors hover:text-red-800 sm:text-xl"
        >
          RENSTSURE AND CO
        </Link>

        <ul className="flex max-w-[min(100%,42rem)] flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm sm:max-w-none sm:text-[15px]">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            if (item.label === "Services") {
              return (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={`relative pb-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-red-600 after:transition-all after:duration-300 ${
                      isActive
                        ? "font-semibold text-black after:w-full"
                        : "text-black/80 after:w-0 hover:text-black hover:after:w-full"
                    }`}
                  >
                    {item.label}
                  </Link>
                  <ul className="font-comic-display invisible absolute left-0 top-full z-20 mt-3 w-72 rounded-xl border border-red-100 bg-white/95 p-2 opacity-0 shadow-xl shadow-red-100/40 backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {SERVICE_ITEMS.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="block rounded-lg px-3 py-2 text-sm text-black/80 transition-colors hover:bg-red-50 hover:text-black"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative pb-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-red-600 after:transition-all after:duration-300 ${
                    isActive
                      ? "font-semibold text-black after:w-full"
                      : "text-black/80 after:w-0 hover:text-black hover:after:w-full"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
