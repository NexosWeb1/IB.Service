import { MessageCircle } from "lucide-react";

import { contacts } from "@/lib/site-config";

const director = contacts.find((c) => c.whatsapp) ?? contacts[0];

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${director.phoneRaw}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg ring-1 ring-black/5 transition-transform duration-200 hover:scale-105 hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-sm font-medium text-white shadow-md md:group-hover:block">
        Fale no WhatsApp
      </span>
    </a>
  );
}
