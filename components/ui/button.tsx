import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return <button className={buttonClasses(variant, className)} {...props} />;
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
};

export function LinkButton({ className, variant = "primary", href, children, ...props }: LinkButtonProps) {
  return (
    <Link className={buttonClasses(variant, className)} href={href} {...props}>
      {children}
    </Link>
  );
}

function buttonClasses(variant: NonNullable<ButtonProps["variant"]>, className?: string) {
  return cn(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition",
    variant === "primary" && "bg-solar text-navy shadow-lg shadow-solar/25 hover:bg-[#e49600]",
    variant === "secondary" && "bg-primary text-white hover:bg-[#062f5d]",
    variant === "outline" && "border border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white/20",
    variant === "ghost" && "text-primary hover:bg-primary/5",
    className
  );
}
