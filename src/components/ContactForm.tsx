"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form onSubmit={onSubmit} className="site-card space-y-4">
        <h2 className="font-display text-2xl text-navy-deep">Send a Message</h2>
        <div>
          <label className="block text-sm font-semibold mb-1.5" htmlFor="name">
            Name *
          </label>
          <input id="name" name="name" required className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5" htmlFor="mobile">
            Mobile *
          </label>
          <input id="mobile" name="mobile" type="tel" required className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5" htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" className="input-field" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5" htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="input-field"
          />
        </div>
        <button type="submit" className="btn-primary">
          Submit
        </button>
        {submitted && (
          <p className="text-sm bg-sky text-navy rounded-md px-3 py-2">
            Thank you for contacting us. We will get back to you soon.
          </p>
        )}
      </form>

      <div className="site-card space-y-5">
        <h2 className="font-display text-2xl text-navy-deep">Contact Details</h2>
        <div>
          <h3 className="font-semibold text-navy mb-1">Address</h3>
          <p className="text-muted text-sm">{siteConfig.address}</p>
          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue text-sm font-semibold mt-1 inline-block"
          >
            View on Google Maps →
          </a>
        </div>
        <div>
          <h3 className="font-semibold text-navy mb-1">Email</h3>
          <a href={`mailto:${siteConfig.email}`} className="text-muted text-sm">
            {siteConfig.email}
          </a>
        </div>
        <div>
          <h3 className="font-semibold text-navy mb-1">Phone</h3>
          <ul className="text-muted text-sm space-y-1">
            {siteConfig.phones.map((phone, i) => (
              <li key={phone}>
                <a href={siteConfig.phoneHrefs[i]}>{phone}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-navy mb-1">Hours</h3>
          <p className="text-muted text-sm">{siteConfig.hours}</p>
        </div>
      </div>
    </div>
  );
}
