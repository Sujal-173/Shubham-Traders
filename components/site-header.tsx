"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { brand, navItems } from "@/lib/content";
import { LinkButton } from "@/components/ui/button";
import { formatPhone } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-11 w-auto bg-white  rounded-md  ">
            <Image
              src="https://res.cloudinary.com/dbkrxzzv1/image/upload/q_auto/f_auto/v1781406652/ChatGPT_Image_Jun_14_2026_08_40_16_AM_aqwdyk.png"
              alt="Shubham Traders"
              width={64}
              height={64}
              className="h-16 w-auto object-contain relative -top-2"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/80 transition hover:text-white"
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="flex items-center gap-2 text-sm font-bold"
            href={`tel:${formatPhone(brand.phones[0])}`}
            aria-label={`Call ${brand.phones[0]}`}
          >
            <Phone size={17} />
            {brand.phones[0]}
          </a>
          <LinkButton href="/book-site-survey">Book Survey</LinkButton>
        </div>

        <button
          className="focus-ring lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle mobile menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-navy px-4 py-5 lg:hidden">
          <nav className="grid gap-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 font-semibold text-white/85"
                onClick={() => setOpen(false)}
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </Link>
            ))}
            <LinkButton
              href="/book-site-survey"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              Book Free Site Survey
            </LinkButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
