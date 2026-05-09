"use client";

import { FormEvent, useState } from "react";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  serviceInterest: "",
  message: "",
};

export default function ContactEnquiryForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("");
    setIsError(false);

    if (!formData.fullName || !formData.email || !formData.message) {
      setIsError(true);
      setStatusMessage("Please fill in name, email, and message.");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const raw = await response.text();
      let data: { message?: string };
      try {
        data = JSON.parse(raw) as { message?: string };
      } catch {
        throw new Error(
          response.status === 404 || raw.trimStart().startsWith("<!")
            ? "Contact form is unavailable on this deployment. Use a full Next.js deploy on Vercel (not static export only)."
            : "Invalid response from server."
        );
      }
      if (!response.ok) {
        throw new Error(data.message || "Failed to submit enquiry.");
      }

      setStatusMessage(data.message || "Enquiry sent successfully.");
      setFormData(INITIAL_FORM);
    } catch (error) {
      setIsError(true);
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your enquiry."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-8 border border-[#e0ded9] bg-[#f9f9f7] p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-black">
          Full Name *
          <input
            value={formData.fullName}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, fullName: event.target.value }))
            }
            className="h-11 border border-[#d7d3cc] bg-white px-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
            placeholder="Enter your name"
            required
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-black">
          Email *
          <input
            type="email"
            value={formData.email}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, email: event.target.value }))
            }
            className="h-11 border border-[#d7d3cc] bg-white px-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
            placeholder="name@email.com"
            required
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-black">
          Phone Number
          <input
            value={formData.phone}
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, phone: event.target.value }))
            }
            className="h-11 border border-[#d7d3cc] bg-white px-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
            placeholder="+1 555 000 0000"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-black">
          Service Interested In
          <select
            value={formData.serviceInterest}
            onChange={(event) =>
              setFormData((prev) => ({
                ...prev,
                serviceInterest: event.target.value,
              }))
            }
            className="h-11 border border-[#d7d3cc] bg-white px-3 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
          >
            <option value="">Select a service</option>
            <option value="Property Management Service">
              Property Management Service
            </option>
            <option value="Tenant Search Service">Tenant Search Service</option>
            <option value="Property Check Inspection Service">
              Property Check Inspection Service
            </option>
            <option value="Renovation & Restoration Service">
              Renovation & Restoration Service
            </option>
            <option value="Property Sale Service">Property Sale Service</option>
          </select>
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-black">
        Message *
        <textarea
          value={formData.message}
          onChange={(event) =>
            setFormData((prev) => ({ ...prev, message: event.target.value }))
          }
          rows={6}
          className="border border-[#d7d3cc] bg-white px-3 py-2 text-sm outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
          placeholder="Tell us about your property and requirements..."
          required
        />
      </label>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-11 items-center justify-center bg-red-600 px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-400"
        >
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </button>
        {statusMessage ? (
          <p className={`text-sm ${isError ? "text-red-700" : "text-green-700"}`}>
            {statusMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
