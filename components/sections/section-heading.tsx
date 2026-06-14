import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mb-10 max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-solar">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black tracking-tight text-navy md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}
