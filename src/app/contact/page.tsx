import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about your properties",
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background px-6 py-16 font-sans text-foreground">
      <main className="w-full max-w-3xl text-center sm:text-left">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Contact
        </h1>
        <p className="mt-4 text-lg leading-8 text-foreground/70">
          Add your contact form or office details here.
        </p>
      </main>
    </div>
  );
}
