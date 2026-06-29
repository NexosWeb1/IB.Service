"use client";

import { useState } from "react";
import {
  Check,
  Award,
  Factory,
  Handshake,
  ShieldCheck,
  ClipboardCheck,
  Layers,
  ChevronRight,
} from "lucide-react";

import { differentials, sectors } from "@/lib/site-config";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const pillars = [
  {
    icon: Award,
    title: "Certificação ISO 9001:2015",
    text: "Nosso Sistema de Gestão da Qualidade é certificado internacionalmente, garantindo padronização, rastreabilidade e melhoria contínua em cada operação.",
  },
  {
    icon: Factory,
    title: "Estrutura própria exclusiva",
    text: "Única empresa em Minas Gerais com área privada de 500 m² para seleção de itens em trânsito, a apenas 8 km da Stellantis.",
  },
  {
    icon: Handshake,
    title: "Suporte técnico completo",
    text: "Ao contratar a iB.Services, o cliente recebe toda a estrutura e suporte técnico da empresa — não apenas disponibilização de mão de obra.",
  },
];

const qualityPolicyItems = [
  "Atender às expectativas dos clientes com serviços que agreguem valor e superem suas expectativas",
  "Manter um ambiente seguro para colaboradores, clientes e parceiros, seguindo rigorosamente as normas aplicáveis",
  "Buscar continuamente a melhoria de processos e serviços, promovendo inovação e boas práticas",
  "Treinar e capacitar colaboradores para garantir alto padrão de qualidade em todas as operações",
  "Operar com integridade, cumprindo todas as leis, regulamentos e normas aplicáveis",
];

const methodologyPhases = [
  {
    label: "Groundwork",
    accent: true,
    steps: [
      "Estabelecer Compromisso com a Qualidade da Equipe",
      "Treinamentos em Conceitos e Fundamentos da Qualidade",
      "Postura, Ética e Confidencialidade",
      "Definição de Procedimento Padrão de Atividade",
    ],
  },
  {
    label: "Working",
    accent: false,
    steps: [
      "Acompanhamento e Gerenciamento das Atividades por técnicos",
      "Verificação de Objetivo Alcançado",
      "Emissão de Relatório Final",
    ],
  },
];

const outsourcingReasons = [
  "Certificação ISO 9001:2015 assegura qualidade e melhoria do produto final",
  "Mantém o foco no core business e na estratégia da sua empresa",
  "Neutraliza investimentos diretos nas atividades terceirizadas",
  "Elimina ociosidade e aumenta a produtividade",
  "Aumenta o lucro com redução de custos operacionais",
  "Cobertura de faltas e férias sem qualquer custo adicional",
  "Elimina gastos com recrutamento, seleção e treinamento de pessoal",
];

export function About() {
  const [open, setOpen] = useState(false);

  return (
    <section id="sobre" className="bg-secondary py-20 md:py-28">
      <div className="container-tight grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand">
            <span className="h-px w-6 bg-brand" />
            Quem Somos
            <span className="h-px w-6 bg-brand" />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Especialistas em Gestão da Qualidade com mais de uma década no setor industrial
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A iB.Services é uma empresa brasileira certificada{" "}
            <strong className="font-semibold text-foreground">ISO 9001:2015</strong>,
            especializada em suporte à qualidade para montadoras e indústrias de usinagem,
            plásticos e borracha de todos os portes. Somos a{" "}
            <strong className="font-semibold text-foreground">
              única empresa em Minas Gerais
            </strong>{" "}
            com área privada exclusiva de 500 m² para seleção e triagem de itens
            suspeitos em trânsito, localizada a apenas 8 km da Stellantis.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {differentials.map((d) => (
              <li key={d} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-foreground/90">{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Setores:</span>
            {sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground/80"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="outline" onClick={() => setOpen(true)}>
              Nossa história
            </Button>
            <Button asChild>
              <a href="#contato">Trabalhe com a gente</a>
            </Button>
          </div>
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
                  <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>

      {/* ── Company History Sheet ── */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full overflow-y-auto p-0 sm:max-w-2xl"
        >
          <SheetTitle className="sr-only">Nossa história — iB.Services</SheetTitle>
          <SheetDescription className="sr-only">
            Trajetória, certificações, política da qualidade e método de trabalho da iB.Services
          </SheetDescription>

          {/* Header */}
          <div className="bg-brand px-8 pb-10 pt-14 text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
              Empresa Brasileira de Serviços Ltda
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold">Nossa História</h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-white/85">
              Mais de uma década construindo excelência em Gestão da Qualidade ao lado
              das maiores indústrias e montadoras do país.
            </p>
          </div>

          <div className="space-y-10 px-8 py-10">

            {/* Quem Somos */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Layers className="h-5 w-5 text-brand" />
                <h3 className="font-heading text-xl font-bold">Quem Somos</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A iB.Services é uma empresa prestadora de serviços focada em atender
                negócios de todos os portes, incluindo montadoras e indústrias de
                usinagem, plásticos, borracha, entre outras. Nosso objetivo na área de
                seleção e suporte em qualidade é ser reconhecidos pela nossa solidez e
                competência, tanto no mercado nacional quanto internacional.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Oferecemos um portfólio diversificado de serviços voltados para a
                sustentação da qualidade e a melhoria de desempenho, proporcionando
                soluções eficazes para otimizar resultados. Com um modelo extremamente
                flexível, agregamos conhecimento técnico, estrutura e experiência para
                garantir resultados eficazes.
              </p>
            </div>

            {/* ISO Certification */}
            <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6">
              <div className="mb-4 flex items-center gap-3">
                <Award className="h-5 w-5 text-brand" />
                <h3 className="font-heading text-xl font-bold">
                  Certificação ISO 9001:2015
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A iB.Services é certificada pela norma{" "}
                <strong className="font-semibold text-foreground">ISO 9001:2015</strong>,
                o que qualifica globalmente nosso Sistema de Gestão da Qualidade. Esta
                certificação garante que nossos serviços atendem aos mais altos padrões de
                qualidade, por meio da padronização de nossas operações e metodologias.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A implementação rigorosa de práticas de gestão da qualidade assegura a
                melhoria contínua dos processos, proporcionando maior eficiência e
                satisfação dos clientes.
              </p>
            </div>

            {/* Quality Policy */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-brand" />
                <h3 className="font-heading text-xl font-bold">
                  Política da Qualidade
                </h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Nossa política: assegurar a excelência na prestação de serviços e a
                satisfação total dos clientes. Para isso, comprometemo-nos a:
              </p>
              <ul className="space-y-3">
                {qualityPolicyItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Work Methodology */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <ClipboardCheck className="h-5 w-5 text-brand" />
                <h3 className="font-heading text-xl font-bold">
                  Método de Trabalho
                </h3>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                Nossa metodologia estruturada garante consistência e excelência em cada
                projeto, desde a preparação inicial até a entrega do relatório final.
              </p>
              <div className="space-y-4">
                {methodologyPhases.map((phase) => (
                  <div
                    key={phase.label}
                    className={`rounded-xl border p-5 ${
                      phase.accent
                        ? "border-brand/20 bg-brand/5"
                        : "border-border bg-secondary/50"
                    }`}
                  >
                    <p
                      className={`mb-3 text-xs font-bold uppercase tracking-widest ${
                        phase.accent ? "text-brand" : "text-foreground/60"
                      }`}
                    >
                      {phase.label}
                    </p>
                    <ul className="space-y-2">
                      {phase.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand/60" />
                          <span className="text-sm text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Private Facility Highlight */}
            <div className="rounded-2xl bg-foreground/5 p-6">
              <div className="mb-3 flex items-center gap-3">
                <Factory className="h-5 w-5 text-brand" />
                <h3 className="font-heading text-xl font-bold">
                  Estrutura Própria Exclusiva
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Somos a{" "}
                <strong className="font-semibold text-foreground">
                  única empresa em Minas Gerais
                </strong>{" "}
                com uma área privada exclusiva de{" "}
                <strong className="font-semibold text-foreground">500 m²</strong> para
                receber e realizar a seleção de itens suspeitos em trânsito. Isso garante
                que peças não conformes não cheguem ao cliente final.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Nossa localização é privilegiada: estamos a apenas{" "}
                <strong className="font-semibold text-foreground">8 km da Stellantis</strong>,
                com galpão em Betim/MG equipado com área de carga e descarga, bancadas de
                seleção e infraestrutura de tomadas e iluminação.
              </p>
            </div>

            {/* Why Outsource */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Handshake className="h-5 w-5 text-brand" />
                <h3 className="font-heading text-xl font-bold">
                  Por que terceirizar com a iB.Services?
                </h3>
              </div>
              <ul className="space-y-3">
                {outsourcingReasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="border-t border-border pt-6">
              <p className="mb-4 text-sm text-muted-foreground">
                Pronto para elevar a qualidade da sua operação?
              </p>
              <Button
                asChild
                className="w-full"
                onClick={() => setOpen(false)}
              >
                <a href="#contato">Fale com nossa equipe</a>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
