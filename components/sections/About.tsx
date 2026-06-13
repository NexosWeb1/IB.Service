import { Check, Factory, Target, Handshake } from "lucide-react";

import { differentials, sectors } from "@/lib/site-config";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Target,
    title: "Qualidade que sustenta resultados",
    text: "Processos controlados, indicadores e rastreabilidade para manter a conformidade exigida pelas montadoras.",
  },
  {
    icon: Factory,
    title: "Experiência industrial",
    text: "Mais de uma década atuando dentro de indústrias de usinagem, plásticos, borracha e no setor automotivo.",
  },
  {
    icon: Handshake,
    title: "Parceria de longo prazo",
    text: "Atendimento próximo e soluções flexíveis que se adaptam à realidade e à demanda de cada cliente.",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-secondary py-20 md:py-28">
      <div className="container-tight grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand">
            <span className="h-px w-6 bg-brand" />
            Quem Somos
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Uma empresa brasileira focada em qualidade e desempenho
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A iB.Services oferece um portfólio diversificado de serviços
            voltados para a sustentação da qualidade e a melhoria de
            desempenho, proporcionando soluções eficazes para otimizar
            resultados. Com mais de uma década de experiência industrial, nosso
            time está pronto para implementar soluções abrangentes e flexíveis
            em Gestão da Qualidade.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {differentials.map((d) => (
              <li key={d} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-foreground/90">
                  {d}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              Setores:
            </span>
            {sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground/80"
              >
                {s}
              </span>
            ))}
          </div>

          <Button asChild className="mt-9">
            <a href="#contato">Trabalhe com a gente</a>
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
