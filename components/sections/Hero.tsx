"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { sectors, siteConfig } from "@/lib/site-config";

const highlights = [
  "Inspeção e seleção de peças",
  "Retrabalho na sua linha",
  "Equipes qualificadas",
];

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ink text-white"
    >
      {/* fundo: grade + brilhos */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
        <div className="absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-brand/25 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-[32rem] w-[32rem] rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
      </div>

      <div className="container-tight relative z-10 grid gap-12 pb-20 pt-28 md:pb-28 md:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur"
          >
            <ShieldCheck className="h-4 w-4 text-brand" />
            {siteConfig.experienceYears} anos de experiência industrial
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Sustentação da qualidade e melhoria de{" "}
            <span className="text-brand">desempenho</span> para a sua indústria
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            A iB.Services oferece soluções flexíveis em Gestão da Qualidade
            (inspeção, retrabalho, seleção de peças e terceirização de mão de
            obra) para montadoras e indústrias de usinagem, plásticos e
            borracha.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <a href="#contato">
                Fale Conosco
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <a href="#servicos">Ver Serviços</a>
            </Button>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-2"
          >
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-2 text-sm text-white/75"
              >
                <CheckCircle2 className="h-4 w-4 text-brand" />
                {h}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* cartão de setores */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -14, 0] }}
            transition={
              reduce
                ? undefined
                : {
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md shadow-2xl"
          >
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/30 blur-3xl"
            />
            <p className="relative text-sm font-semibold uppercase tracking-widest text-brand">
              Setores atendidos
            </p>
            <div className="relative mt-6 grid grid-cols-2 gap-3">
              {sectors.map((s) => (
                <div
                  key={s}
                  className="rounded-2xl border border-white/10 bg-ink-surface/60 p-4 text-sm font-medium text-white/90"
                >
                  {s}
                </div>
              ))}
            </div>
            <div className="relative mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-brand/20 to-transparent p-5">
              <div>
                <p className="font-heading text-3xl font-bold">
                  {siteConfig.experienceYears}
                </p>
                <p className="text-xs text-white/65">anos de mercado</p>
              </div>
              <div className="text-right">
                <p className="font-heading text-3xl font-bold">100%</p>
                <p className="text-xs text-white/65">foco em qualidade</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
