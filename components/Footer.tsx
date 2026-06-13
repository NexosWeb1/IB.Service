import { MapPin, Mail, Phone } from "lucide-react";

import {
  contacts,
  location,
  navLinks,
  siteConfig,
} from "@/lib/site-config";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-ink text-white/80">
      <div className="container-tight grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1.2fr] md:py-16">
        <div>
          <div className="text-white">
            <BrandLogo size="md" />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            {siteConfig.legalName}. Soluções em Gestão da Qualidade para
            montadoras e indústrias.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
            Navegação
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/65 transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-white">
            Contato
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span className="text-white/70">{location.full}</span>
            </li>
            {contacts.map((c) => (
              <li key={c.name} className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                <a
                  href={`tel:+${c.phoneRaw}`}
                  className="text-white/70 transition-colors hover:text-brand"
                >
                  {c.phone}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand" />
              <a
                href="mailto:diretoria@ibservices.ind.br"
                className="text-white/70 transition-colors hover:text-brand"
              >
                diretoria@ibservices.ind.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tight flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. {siteConfig.legalName}. Todos os
            direitos reservados.
          </p>
          <p>Betim/MG · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
