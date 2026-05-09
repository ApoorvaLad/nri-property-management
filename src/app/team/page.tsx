import type { Metadata } from "next";
import RevealOnScroll from "../../components/reveal-on-scroll";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the RENTSURE & CO team",
};

export default function TeamPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background px-6 py-16 font-sans text-foreground">
      <RevealOnScroll className="w-full max-w-3xl text-center sm:text-left">
        <h1 className="font-comic-display text-3xl font-semibold tracking-tight text-foreground">
          Team
        </h1>
        <p className="mt-4 text-lg leading-8 text-foreground/70">
          Add team bios and photos here.
        </p>
      </RevealOnScroll>
    </div>
  );
}
