import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function ImageCard({
  href,
  image,
  imageAlt,
  imageSizes,
  imageHeight = "h-56",
  badge,
  children,
}: {
  href: string;
  image: string;
  imageAlt: string;
  imageSizes: string;
  imageHeight?: string;
  badge?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="group overflow-hidden rounded-xl bg-white shadow-premium">
      <div className={`relative ${imageHeight}`}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes={imageSizes}
          className="object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {badge}
      </div>
      <div className="p-5">{children}</div>
    </Link>
  );
}
