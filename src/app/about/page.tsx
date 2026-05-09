import type { Metadata } from "next";
import RevealOnScroll from "../../components/reveal-on-scroll";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about RENTSURE & CO",
};

export default function AboutPage() {
  const googleReviewsUrl =
    "https://www.google.com/search?q=NRI+Property+Management+reviews";

  const featuredReviews = [
    {
      name: "Property Owner · Dubai",
      review:
        "The property was tenanted quickly and monthly updates are always clear. We finally have peace of mind.",
    },
    {
      name: "Property Owner · Singapore",
      review:
        "Tenant onboarding, paperwork and communication were handled end-to-end. The process felt professional.",
    },
    {
      name: "Property Owner · United Kingdom",
      review:
        "A major maintenance issue was resolved fast with photos and detailed updates. The follow-through is excellent.",
    },
  ];

  return (
    <div className="flex flex-1 flex-col items-center bg-[#f2f1ef] px-6 py-16 font-sans text-foreground">
      <main className="w-full max-w-5xl border border-[#e0ded9] bg-[#f9f9f7] p-8 shadow-sm sm:p-10">
        <div>
          <RevealOnScroll>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700">
              Our Story
            </p>
            <h1 className="mt-3 text-[clamp(2.2rem,4vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-black">
              About Us
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delayMs={60}>
            <p className="mt-6 text-base leading-8 text-foreground/80">
              At the heart of our work is a simple idea - property ownership
              should not become a burden, no matter where you live.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delayMs={100}>
            <p className="mt-5 text-base leading-8 text-foreground/80">
              Our firm was founded by{" "}
              <span className="font-semibold text-black">Aniket Lad</span>.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delayMs={140}>
            <p className="mt-5 text-base leading-8 text-foreground/80">
              We bring the same rigor we learned in logistics and operations
              management - running complex processes on schedule, with clear
              communication and attention to detail. Those habits are what make
              remote property management dependable.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delayMs={180}>
            <p className="mt-5 text-base leading-8 text-foreground/80">
              Over the past decade we have actively managed rental properties,
              building hands-on expertise in tenant management, maintenance
              coordination, and day-to-day upkeep. We began by supporting family
              members with their properties, and that work shaped how we operate
              today.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delayMs={220}>
            <p className="mt-5 text-base leading-8 text-foreground/80">
              Through that work we saw a recurring challenge: owners living
              overseas often struggle to find trustworthy tenants and reliable
              local support. What started as informal help showed us how large the
              need really was - and why a dedicated service matters.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delayMs={260}>
            <p className="mt-5 text-base leading-8 text-foreground/80">
              This platform is built for property owners who need transparent,
              professional management for homes back home - especially when you are
              living or working overseas.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delayMs={300}>
            <h2 className="mt-8 text-xl font-semibold text-black">Our goal</h2>
          </RevealOnScroll>
          <RevealOnScroll delayMs={340}>
            <p className="mt-3 text-base leading-8 text-foreground/80">
              To provide peace of mind by managing your property as if it were
              our own.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delayMs={380}>
            <p className="mt-5 text-base leading-8 text-foreground/80">
              We combine practical experience, local understanding, and a
              commitment to trust to ensure your property is well cared for -
              from tenant search to ongoing management and beyond.
            </p>
          </RevealOnScroll>
        </div>
      </main>

      <section className="mt-10 w-full max-w-5xl border-t-4 border-red-700 bg-[#111110] p-8 sm:p-10">
        <RevealOnScroll>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-600">
            What Clients Say
          </p>
        </RevealOnScroll>
        <RevealOnScroll delayMs={60}>
          <h2 className="mt-2 text-[clamp(1.8rem,3vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#f0efed]">
            Owners who stopped worrying.
          </h2>
        </RevealOnScroll>

        <div className="mt-8 grid gap-[2px] bg-[#1e1e1c] md:grid-cols-3">
          {featuredReviews.map((item, index) => (
            <RevealOnScroll key={item.name} delayMs={140 + index * 80}>
              <article className="bg-[#111110] p-8">
                <span className="block text-5xl font-bold leading-none text-red-700/70">"</span>
                <p className="mt-4 text-sm italic leading-8 text-[#7a7872]">{item.review}</p>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.08em] text-red-600">
                  {item.name}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delayMs={340}>
          <div className="mt-[2px] flex flex-col items-start gap-4 border-t border-[#1e1e1c] bg-[#0d0d0c] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-[#666560]">
                Rated by happy clients on Google
              </p>
              <p className="mt-1 text-[11px] tracking-[0.04em] text-[#3a3936]">
                Check public reviews before you decide
              </p>
            </div>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center border border-[#2a2a28] px-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-red-600 no-underline transition-colors hover:border-red-600 hover:bg-red-600/10"
            >
              View Google Reviews
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
