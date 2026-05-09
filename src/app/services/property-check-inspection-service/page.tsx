import type { Metadata } from "next";
import RevealOnScroll from "../../../components/reveal-on-scroll";

export const metadata: Metadata = {
  title: "Property Check Inspection Service",
  description: "Detailed inspection reports and updates for your property.",
};

const INCLUDED_ITEMS = [
  "Scheduled on-site property inspections.",
  "Condition checks for interiors, fittings, and utilities.",
  "Photo-backed reports with maintenance observations.",
  "Action recommendations and follow-up support.",
];

export default function PropertyCheckInspectionServicePage() {
  return (
    <div className="flex flex-1 flex-col items-center bg-[#f2f1ef] px-6 py-16 font-sans text-foreground">
      <RevealOnScroll className="w-full max-w-5xl border border-[#e0ded9] bg-[#f9f9f7] p-8 shadow-sm sm:p-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700">
          Services
        </p>
        <h1 className="mt-3 text-[clamp(2.2rem,4vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.03em] text-black">
          Property Check Inspection Service
        </h1>
        <p className="mt-6 text-base leading-8 text-foreground/80">
          Stay informed about the condition of your property with our detailed
          inspection services. We conduct regular on-site visits, assess
          maintenance needs, and provide you with comprehensive reports and
          photos so you always know exactly how your property is being
          maintained.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-black">
          What is included
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          {INCLUDED_ITEMS.map((item, index) => (
            <RevealOnScroll key={item} delayMs={90 + index * 80}>
              <li className="text-sm leading-7 text-foreground/80 transition-all duration-300 hover:translate-x-1">
                {item}
              </li>
            </RevealOnScroll>
          ))}
        </ul>
      </RevealOnScroll>
    </div>
  );
}
