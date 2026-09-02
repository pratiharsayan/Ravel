"use client";

import { useEnquiry } from "@/components/enquiry-context";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  course?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

const variants = {
  primary: "btn-primary focus-ring",
  secondary: "btn-secondary focus-ring",
  outline: "btn-outline focus-ring",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 font-semibold text-electric hover:bg-blue-50 focus-ring",
};

export function EnquiryButton({ children, className, course, variant = "primary" }: Props) {
  const { openEnquiry } = useEnquiry();
  return (
    <button type="button" className={cn(variants[variant], className)} onClick={() => openEnquiry(course)}>
      {children}
    </button>
  );
}
