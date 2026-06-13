"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import { contacts } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const schema = z.object({
  name: z.string().min(2, "Informe seu nome."),
  company: z.string().optional(),
  email: z.string().email("Informe um e-mail válido."),
  phone: z.string().min(8, "Informe um telefone válido."),
  message: z.string().min(10, "Conte um pouco sobre sua necessidade."),
});

type FormValues = z.infer<typeof schema>;

const director = contacts.find((c) => c.whatsapp) ?? contacts[0];

export function Contact() {
  const [sent, setSent] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    const text = [
      `Olá! Sou ${values.name}${values.company ? ` (${values.company})` : ""}.`,
      `E-mail: ${values.email}`,
      `Telefone: ${values.phone}`,
      "",
      values.message,
    ].join("\n");

    // Pequena espera para feedback visual e abertura do WhatsApp.
    await new Promise((r) => setTimeout(r, 600));
    const url = `https://wa.me/${director.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    reset();
  }

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Fale Conosco"
          title="Vamos conversar sobre o seu projeto"
          description="É um prazer receber a sua empresa e apresentar nossos serviços. Preencha o formulário ou fale direto com o nosso time."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-10">
          {/* Formulário */}
          <Reveal>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-3xl border border-border bg-card p-7 shadow-sm md:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Nome <span className="text-brand">*</span>
                  </Label>
                  <Input
                    id="name"
                    autoComplete="name"
                    placeholder="Seu nome"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    autoComplete="organization"
                    placeholder="Nome da empresa"
                    {...register("company")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    E-mail <span className="text-brand">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="voce@empresa.com.br"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Telefone <span className="text-brand">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(31) 9 0000-0000"
                    aria-invalid={!!errors.phone}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="message">
                  Mensagem <span className="text-brand">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Como podemos ajudar a sua operação?"
                  aria-invalid={!!errors.message}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-sm text-destructive" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Enviar mensagem
                    </>
                  )}
                </Button>
                <p
                  aria-live="polite"
                  className="text-sm text-muted-foreground"
                >
                  {sent && (
                    <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-brand" />
                      Abrimos o WhatsApp para concluir o envio.
                    </span>
                  )}
                </p>
              </div>
            </form>
          </Reveal>

          {/* Contatos diretos */}
          <Reveal delay={0.1} className="flex flex-col gap-5">
            {contacts.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <p className="font-heading text-lg font-semibold">{c.name}</p>
                <p className="text-sm text-brand">{c.role}</p>
                <div className="mt-4 space-y-2.5 text-sm">
                  <a
                    href={`tel:+${c.phoneRaw}`}
                    className="flex items-center gap-3 text-foreground/85 transition-colors hover:text-brand"
                  >
                    <Phone className="h-4 w-4 text-brand" />
                    {c.phone}
                  </a>
                  {c.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="flex items-center gap-3 break-all text-foreground/85 transition-colors hover:text-brand"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-brand" />
                      {email}
                    </a>
                  ))}
                </div>
                {c.whatsapp && (
                  <Button asChild variant="outline" size="sm" className="mt-5">
                    <a
                      href={`https://wa.me/${c.phoneRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chamar no WhatsApp
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
