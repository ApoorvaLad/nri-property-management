import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "../../components/reveal-on-scroll";

export const metadata: Metadata = {
  title: "Services",
  description: "Property management services we offer",
};

const SERVICES = [
  {
    href: "/services/property-management-service",
    title: "Property Management Service",
    description:
      "We provide end-to-end property management so you don't have to worry about day-to-day operations. From rent collection and tenant coordination to maintenance and regular updates, we ensure your property is well-maintained and performing optimally while you stay stress-free, no matter where you are.",
  },
  {
    href: "/services/tenant-search-service",
    title: "Tenant Search Service",
    description:
      "Finding the right tenant is crucial for your property's safety and long-term value. We handle the entire tenant search process - from listing your property and screening applicants to background verification and finalizing agreements - ensuring you get reliable and trustworthy tenants.",
  },
  {
    href: "/services/property-check-inspection-service",
    title: "Property Check Inspection Service",
    description:
      "Stay informed about the condition of your property with our detailed inspection services. We conduct regular on-site visits, assess maintenance needs, and provide you with comprehensive reports and photos so you always know exactly how your property is being maintained.",
  },
  {
    href: "/services/renovation-restoration-service",
    title: "Renovation & Restoration Service",
    description:
      "Whether your property needs minor repairs or a complete makeover, we manage the entire renovation process for you. From planning and vendor coordination to quality checks and execution, we ensure your property is restored, upgraded, and ready to maximize its value.",
  },
  {
    href: "/services/property-sale-service",
    title: "Property Sale Service",
    description:
      "When it's time to sell, we help you navigate the process smoothly and efficiently. From property evaluation and marketing to buyer coordination and documentation support, we ensure your property reaches the right buyers and gets the best possible value.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-1 flex-col items-center bg-[#f2f1ef] px-6 py-16 font-sans text-foreground">
      <main className="w-full max-w-5xl">
        <RevealOnScroll>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700">
            What We Offer
          </p>
          <h1 className="mt-3 text-[clamp(2.2rem,4vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-black">
            Property Services
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delayMs={80}>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-foreground/70">
            Explore our core services for owners who need dependable support from a
            distance.
          </p>
        </RevealOnScroll>

        <section className="mt-10 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service, index) => (
            <Link key={service.href} href={service.href} className="block">
              <RevealOnScroll delayMs={120 + index * 70}>
                <article className="border border-[#e0ded9] bg-[#f9f9f7] p-6 shadow-sm transition-colors hover:bg-white">
                  <div className="mb-4 h-1.5 w-14 rounded-full bg-red-600" />
                  <h2 className="text-xl font-semibold text-black">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-foreground/75">
                    {service.description}
                  </p>
                </article>
              </RevealOnScroll>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
