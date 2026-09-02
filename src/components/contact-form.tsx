"use client";

import { useEffect, useState } from "react";
import { courses } from "@/data/courses";
import { site } from "@/data/site";
import { IconClose } from "@/components/icons";
import { useEnquiry } from "@/components/enquiry-context";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

type Props = {
  defaultCourse?: string;
  compact?: boolean;
  onSuccess?: () => void;
};

export function ContactForm({ defaultCourse = "", compact = false, onSuccess }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [course, setCourse] = useState(defaultCourse);
  const selectedCourse = course || defaultCourse;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const name = String(data.name ?? "").trim();
    const phone = String(data.phone ?? "").trim();
    const email = String(data.email ?? "").trim();
    const selected = String(data.course ?? "").trim();
    const note = String(data.message ?? "").trim();

    if (name.length < 2) {
      setStatus("error");
      setMessage("Please enter your name.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      setStatus("error");
      setMessage("Please enter a valid phone number.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const json = (await res.json()) as { ok?: boolean; error?: string };
        if (json.ok) {
          setStatus("success");
          setMessage("Thank you. Our counsellor will contact you shortly.");
          form.reset();
          setCourse("");
          onSuccess?.();
          return;
        }
      }
    } catch {
      // Static hosting has no API route — send the enquiry through WhatsApp.
    }

    const text = encodeURIComponent(
      `Hi XIG Digital, I would like to enquire.\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCourse: ${selected || "Not selected"}\nMessage: ${note || "Please call me back."}`,
    );
    window.open(`https://wa.me/${site.contact.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    setStatus("success");
    setMessage("Thank you. We opened WhatsApp so you can send this enquiry to our counsellor.");
    form.reset();
    setCourse("");
    onSuccess?.();
  }

  return (
    <form onSubmit={handleSubmit} className={cn("grid gap-4", compact ? "" : "md:grid-cols-2")}>
      <label className="grid gap-1.5 text-sm font-medium text-navy-800">
        Name
        <input
          required
          name="name"
          autoComplete="name"
          className="h-12 rounded-xl border border-line bg-white px-4 font-normal text-ink outline-none ring-electric/30 focus:ring-4"
        />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-navy-800">
        Phone
        <input
          required
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className="h-12 rounded-xl border border-line bg-white px-4 font-normal text-ink outline-none ring-electric/30 focus:ring-4"
        />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-navy-800">
        Email
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          className="h-12 rounded-xl border border-line bg-white px-4 font-normal text-ink outline-none ring-electric/30 focus:ring-4"
        />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-navy-800">
        Course interested in
        <select
          name="course"
          value={selectedCourse}
          onChange={(e) => setCourse(e.target.value)}
          className="h-12 rounded-xl border border-line bg-white px-4 font-normal text-ink outline-none ring-electric/30 focus:ring-4"
        >
          <option value="">Select a course</option>
          {courses.map((item) => (
            <option key={item.slug} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </label>
      <label className={cn("grid gap-1.5 text-sm font-medium text-navy-800", compact ? "" : "md:col-span-2")}>
        Message
        <textarea
          name="message"
          rows={compact ? 4 : 5}
          className="rounded-xl border border-line bg-white px-4 py-3 font-normal text-ink outline-none ring-electric/30 focus:ring-4"
          placeholder="Tell us your goal — job, freelance or business growth."
        />
      </label>
      <div className={cn("flex flex-col gap-3", compact ? "" : "md:col-span-2")}>
        <button className="btn-primary w-full sm:w-auto" disabled={status === "submitting"} type="submit">
          {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
        </button>
        {message ? (
          <p className={status === "success" ? "text-sm text-emerald-700" : "text-sm text-red-600"} role="status">
            {message}
          </p>
        ) : (
          <p className="text-sm text-muted">
            Or write to{" "}
            <a className="font-medium text-electric" href={site.contact.emailHref}>
              {site.contact.email}
            </a>
          </p>
        )}
      </div>
    </form>
  );
}

export function EnquiryModal() {
  const { open, closeEnquiry, course } = useEnquiry();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeEnquiry();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeEnquiry]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="enquiry-title">
      <button type="button" className="absolute inset-0 bg-navy/70 backdrop-blur-sm" aria-label="Close enquiry form" onClick={closeEnquiry} />
      <div className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:max-w-lg sm:rounded-3xl sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">Enquire now</p>
            <h2 id="enquiry-title" className="mt-1 text-2xl font-semibold text-navy">
              Start your digital marketing journey
            </h2>
            <p className="mt-2 text-sm text-muted">Talk to a counsellor about the right course for your career or business.</p>
          </div>
          <button type="button" className="rounded-full p-2 text-muted hover:bg-mist" onClick={closeEnquiry} aria-label="Close">
            <IconClose />
          </button>
        </div>
        <ContactForm key={course} compact defaultCourse={course} />
      </div>
    </div>
  );
}
