import Image from "next/image";
import type { ReactNode } from "react";

export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  prefix,
  children,
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  prefix?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
      <div className="container relative max-w-4xl">
        {prefix}
        <p className="mb-3 font-black uppercase tracking-[0.18em] text-solar">{eyebrow}</p>
        <h1 className="text-4xl font-black md:text-6xl">{title}</h1>
        <p className="mt-5 text-xl leading-8 text-white/82">{description}</p>
        {children}
      </div>
    </section>
  );
}
