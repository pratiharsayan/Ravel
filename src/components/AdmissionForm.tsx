"use client";

import { FormEvent, useState } from "react";

export function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={onSubmit} className="site-card grid gap-4 md:grid-cols-2">
      <h2 className="md:col-span-2 font-display text-2xl text-navy-deep">
        Application Form
      </h2>
      <p className="md:col-span-2 text-muted text-sm -mt-2">
        Apply Now: Complete Your Application Form for Admission to the best male
        nursing college in Kolkata, West Bengal, Ravel Institute Of Nursing.
      </p>

      {[
        { id: "studentName", label: "Student Name", type: "text" },
        { id: "studentPhone", label: "Student Phone No", type: "tel" },
        { id: "studentEmail", label: "Student Email", type: "email" },
        { id: "dob", label: "Date of Birth", type: "date" },
      ].map((field) => (
        <div key={field.id}>
          <label className="block text-sm font-semibold mb-1.5" htmlFor={field.id}>
            {field.label} *
          </label>
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            required
            className="input-field"
          />
        </div>
      ))}

      <div>
        <label className="block text-sm font-semibold mb-1.5" htmlFor="course">
          Course Applied For *
        </label>
        <select id="course" name="course" required className="input-field">
          <option value="">Select</option>
          <option>B.Sc Nursing</option>
          <option>GNM Nursing</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <button type="submit" className="btn-primary">
          Submit Application
        </button>
      </div>

      {submitted && (
        <p className="md:col-span-2 text-sm bg-sky text-navy rounded-md px-3 py-2">
          Thank you! Your application has been received. Our admissions team will
          contact you shortly. (Form backend integration pending.)
        </p>
      )}
    </form>
  );
}
