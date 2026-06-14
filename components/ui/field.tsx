import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const base = "focus-ring w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-navy shadow-sm";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(base, className)} {...props} />;
}

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn(base, className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(base, "min-h-28", className)} {...props} />;
}

export function Label({ children }: { children: ReactNode }) {
  return <label className="mb-2 block text-sm font-bold text-navy">{children}</label>;
}
