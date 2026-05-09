import type { Metadata } from "next";
import RevealOnScroll from "../../components/reveal-on-scroll";

export const metadata: Metadata = {
  title: "Blogs",
  description: "News and insights from RENSTSURE AND CO",
};

export default function BlogsPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background px-6 py-16 font-sans text-foreground">
      <RevealOnScroll className="w-full max-w-3xl text-center sm:text-left">
        <h1 className="font-comic-display text-3xl font-semibold tracking-tight text-foreground">
          Blogs
        </h1>
        <p className="mt-4 text-lg leading-8 text-foreground/70">
          Publish articles and updates here.
        </p>
      </RevealOnScroll>
    </div>
  );
}
