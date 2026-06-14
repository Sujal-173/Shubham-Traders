import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { brand, navItems, services } from "@/lib/content";
import { LinkButton } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-solar text-xl font-black text-navy">ST</span>
            <div>
              <p className="text-xl font-black">{brand.name}</p>
              <p className="text-sm text-white/70">{brand.tagline}</p>
            </div>
          </div>
          <p className="max-w-md leading-7 text-white/70">
            Premium solar EPC services for residential, commercial, industrial and agricultural customers across Madhya Pradesh.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton href="/book-site-survey">Book Free Site Survey</LinkButton>
            <LinkButton href={`https://wa.me/${brand.whatsapp}`} variant="outline">WhatsApp Now</LinkButton>
          </div>
        </div>
        <div>
          <p className="mb-4 font-black">Company</p>
          <div className="grid gap-3 text-sm text-white/70">
            {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/faqs">FAQs</Link>
          </div>
        </div>
        <div>
          <p className="mb-4 font-black">Contact</p>
          <div className="grid gap-3 text-sm text-white/75">
            <a className="flex gap-2" href={`tel:${brand.phones[0].replace(/\s/g, "")}`}><Phone size={17} />{brand.phones[0]}</a>
            <a className="flex gap-2" href={`tel:${brand.phones[1].replace(/\s/g, "")}`}><Phone size={17} />{brand.phones[1]}</a>
            <a className="flex gap-2" href={`mailto:${brand.email}`}><Mail size={17} />{brand.email}</a>
            <p className="flex gap-2"><MapPin size={17} />{brand.location}</p>
            <p className="flex gap-2"><Instagram size={17} />{brand.instagram}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-wrap items-center justify-between gap-3 text-sm text-white/60">
          <p>Copyright 2026 {brand.name}. All rights reserved.</p>
          <p>{services.length} solar EPC service lines. Built for lead generation.</p>
        </div>
      </div>
    </footer>
  );
}
