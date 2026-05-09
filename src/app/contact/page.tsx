import type { Metadata } from "next";
import ContactEnquiryForm from "../../components/contact-enquiry-form";
import RevealOnScroll from "../../components/reveal-on-scroll";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about your properties",
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-[#f2f1ef] px-6 py-16 font-sans text-foreground">
      <RevealOnScroll className="w-full max-w-5xl text-center sm:text-left">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700">
          Get in touch
        </p>
        <h1 className="mt-3 text-[clamp(2.2rem,4vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.03em] text-black">
          Contact
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground/70">
          Share your details and property requirements. Our team will reach out
          to you shortly.
        </p>

        <ContactEnquiryForm />
      </RevealOnScroll>
    </div>
  );
}
