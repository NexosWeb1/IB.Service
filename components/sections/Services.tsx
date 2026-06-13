import { ArrowUpRight } from "lucide-react";

import { services } from "@/lib/site-config";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Nossos Serviços"
          title="Soluções completas em Gestão da Qualidade"
          description="Atuamos do chão de fábrica à gestão de processos, com agilidade na implantação e foco em reduzir refugo, parada de linha e não conformidades."
        />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <RevealItem key={service.title}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl">
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100"
                  />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ArrowUpRight
                    aria-hidden
                    className="absolute right-6 top-7 h-5 w-5 text-muted-foreground/40 transition-all duration-300 group-hover:right-5 group-hover:text-brand"
                  />
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
