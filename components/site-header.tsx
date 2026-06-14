"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { brand, navItems } from "@/lib/content";
import { LinkButton } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-6">
        {/* <Link href="/" className="flex items-center gap-3">
            <img
    src="https://res.cloudinary.com/dbkrxzzv1/image/upload/q_auto/f_auto/v1781405126/Generated_Image_June_14_2026_-_8_13AM_2_v18fbj.png"
    alt="Shubham Traders Logo"
    className="h-12 w-12 object-contain"
  />
            <span className="block text-lg font-black">{brand.name}</span>
            <span className="block text-xs text-white/70">Solar EPC Company</span>
        </Link> */}
        <Link href="/" className="flex items-center gap-3">
        <span className="relative h-11 w-auto bg-white  rounded-md  ">

    <img
  src="https://res.cloudinary.com/dbkrxzzv1/image/upload/q_auto/f_auto/v1781406652/ChatGPT_Image_Jun_14_2026_08_40_16_AM_aqwdyk.png"
  alt="Shubham Traders"
  className="h-16 w-auto object-contain relative -top-2"
/>
        </span>
</Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-white/80 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="flex items-center gap-2 text-sm font-bold" href={`tel:${brand.phones[0].replace(/\s/g, "")}`}>
            <Phone size={17} />
            {brand.phones[0]}
          </a>
          <LinkButton href="/book-site-survey">Book Survey</LinkButton>
        </div>

        <button className="focus-ring lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-navy px-4 py-5 lg:hidden">
          <nav className="grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-3 font-semibold text-white/85" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <LinkButton href="/book-site-survey" className="mt-2" onClick={() => setOpen(false)}>
              Book Free Site Survey
            </LinkButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
