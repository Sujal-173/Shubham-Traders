import { Phone } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { brand } from "@/lib/content";
import { formatPhone, whatsappUrl } from "@/lib/utils";

export function CtaBanner() {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="container grid items-center gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-3 font-black uppercase tracking-[0.18em] text-solar">Ready to go solar?</p>
          <h2 className="text-3xl font-black md:text-5xl">Book a free site survey and get a clear solar plan.</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/book-site-survey">Book Free Site Survey</LinkButton>
          <LinkButton href={`tel:${formatPhone(brand.phones[0])}`} variant="outline"><Phone size={18} /> Talk To Expert</LinkButton>
          <LinkButton href={whatsappUrl(brand.whatsapp)} variant="outline">WhatsApp Now</LinkButton>
        </div>
      </div>
    </section>
  );
}
