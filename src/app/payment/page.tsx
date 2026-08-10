import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Payment",
  description: "Online payment gateway placeholder for Ravel Institute of Nursing.",
};

export default function PaymentPage() {
  return (
    <>
      <PageHero
        title="Payment Gateway"
        subtitle="Secure online fee payment — coming soon"
      />
      <section className="container-site py-12 md:py-16">
        <div className="site-card max-w-xl mx-auto">
          <div className="text-center mb-6">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky text-2xl">
              💳
            </div>
            <h2 className="font-display text-2xl text-navy-deep">Online Payment</h2>
            <p className="text-muted text-sm mt-2">
              Payment gateway integration will be completed in a later phase. This
              page is a UI placeholder for fee payments.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1.5" htmlFor="studentId">
                Student ID / Application No.
              </label>
              <input id="studentId" name="studentId" className="input-field" disabled />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5" htmlFor="amount">
                Amount (INR)
              </label>
              <input
                id="amount"
                name="amount"
                type="number"
                className="input-field"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5" htmlFor="purpose">
                Payment Purpose
              </label>
              <select id="purpose" name="purpose" className="input-field" disabled>
                <option>Admission Fee</option>
                <option>Tuition Fee</option>
                <option>Hostel Fee</option>
                <option>Other</option>
              </select>
            </div>
            <button
              type="button"
              className="btn-primary w-full opacity-70 cursor-not-allowed"
              disabled
            >
              Pay Securely (Coming Soon)
            </button>
          </div>

          <p className="text-center text-sm text-muted mt-6">
            For fee-related queries,{" "}
            <Link href="/contact" className="text-blue font-semibold">
              contact us
            </Link>{" "}
            or call the admissions office.
          </p>
        </div>
      </section>
    </>
  );
}
