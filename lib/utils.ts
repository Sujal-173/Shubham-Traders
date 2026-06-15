import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shubham-traders.vercel.app";

export function absoluteUrl(path = "") {
  return `${siteUrl}${path}`;
}

export function formatPhone(phone: string) {
  return phone.replace(/\s/g, "");
}

export function whatsappUrl(number: string, text?: string) {
  const base = `https://wa.me/${number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
