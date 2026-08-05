"use client";

import { FormEvent, useState } from "react";

type LoginFormProps = {
  title: string;
  subtitle: string;
  role: "admin" | "user" | "student";
};

export function LoginForm({ title, subtitle, role }: LoginFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="site-card !p-0 overflow-hidden">
        <div className="bg-navy px-6 py-5 text-white">
          <p className="text-gold-bright text-xs font-bold uppercase tracking-wider mb-1">
            {role} portal
          </p>
          <h1 className="font-display text-2xl">{title}</h1>
          <p className="text-white/75 text-sm mt-1">{subtitle}</p>
        </div>
        <form onSubmit={onSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1.5" htmlFor={`${role}-id`}>
              {role === "student" ? "Student ID / Email" : "Username / Email"}
            </label>
            <input
              id={`${role}-id`}
              name="username"
              type="text"
              required
              className="input-field"
              placeholder="Enter your ID or email"
            />
          </div>
          <div>
            <label
              className="block text-sm font-semibold mb-1.5"
              htmlFor={`${role}-password`}
            >
              Password
            </label>
            <input
              id={`${role}-password`}
              name="password"
              type="password"
              required
              className="input-field"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Sign In
          </button>
          {submitted && (
            <p className="text-sm text-muted bg-sky rounded-md px-3 py-2">
              Login authentication will be connected to the admin system later.
              This is a UI placeholder.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
