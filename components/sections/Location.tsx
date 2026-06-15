import { Clock, MapPin, Navigation, MessageCircle } from "lucide-react";

import { contacts, location } from "@/lib/site-config";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { LocationMap } from "@/components/LocationMap";

const whatsapp = contacts.find((c) => c.whatsapp);

export function Location() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Onde Estamos"
          title="Venha nos visitar"
          description="Estamos na região industrial de Betim/MG, perto das principais montadoras e indústrias que atendemos."
        />

        <Reveal className="mt-14">
          <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-xl lg:grid-cols-[1fr_0.9fr]">
            {/* Mapa */}
            <div className="relative isolate z-0 min-h-[320px] lg:min-h-[460px]">
              <LocationMap />
            </div>

            {/* Card de endereço */}
            <div className="flex flex-col justify-center gap-7 p-8 md:p-10">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                    {location.label}
                  </p>
                  <p className="mt-1.5 text-lg font-semibold leading-snug">
                    {location.street}
                  </p>
                  <p className="text-muted-foreground">
                    {location.district}
                  </p>
                  <p className="text-muted-foreground">
                    {location.city} - {location.state}, {location.zip}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Clock className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                    Horário de atendimento
                  </p>
                  <p className="mt-1.5 font-medium">{location.hours}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild className="flex-1">
                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="h-4 w-4" />
                    Como chegar
                  </a>
                </Button>
                {whatsapp && (
                  <Button asChild variant="outline" className="flex-1">
                    <a
                      href={`https://wa.me/${whatsapp.phoneRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
