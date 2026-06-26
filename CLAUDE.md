# CLAUDE.md — Site institucional iB.Services

Documentação técnica do projeto para quem for dar manutenção. O site é institucional
(uma única página, landing) da **iB.Services**, prestadora de serviços industriais em
Gestão da Qualidade (inspeção, retrabalho, seleção de peças e terceirização de mão de obra).

## Stack

- **Next.js 15** (App Router) com **export estático** (`output: "export"` em `next.config.mjs`).
- **React 19** + **TypeScript**.
- **Tailwind CSS 3** + **shadcn/ui** (componentes em `components/ui`, config em `components.json`).
- **Framer Motion** para animações de entrada (`components/Reveal.tsx`).
- **React-Leaflet / Leaflet** para o mapa da localização.
- **next-themes** para tema claro/escuro.
- Fontes: **Poppins** (títulos) e **Open Sans** (texto), via `next/font/google`.

## Comandos

| Comando | O que faz |
| --- | --- |
| `npm install` | Instala as dependências (versões fixas no `package.json`). |
| `npm run dev` | Sobe o servidor de desenvolvimento em `http://localhost:3000`. |
| `npm run build` | Gera o **export estático** na pasta `out/` (saída para deploy). |
| `npm run lint` | Roda o ESLint (`eslint-config-next`). |

> Por ser export estático, **não há servidor Node em produção**. O conteúdo de `out/`
> é hospedado como arquivos estáticos (Netlify, Vercel, qualquer host estático).
> Não use `npm run start` — não se aplica a um build exportado.

## Estrutura

```
app/
  layout.tsx        Layout raiz: fontes, metadata/SEO, JSON-LD (LocalBusiness), ThemeProvider
  page.tsx          Monta a home na ordem das seções (Hero → Stats → ... → Contact)
  globals.css       Estilos globais, variáveis de tema, animações do marquee e ajustes do Leaflet
  icon.svg          Favicon

components/
  Navbar.tsx, Footer.tsx, WhatsAppFab.tsx, ThemeToggle.tsx, BrandLogo.tsx
  Reveal.tsx        Wrapper de animação de entrada (Framer Motion)
  SectionHeading.tsx  Cabeçalho padrão das seções (eyebrow + título + descrição)
  LogoMarquee.tsx   Carrossel infinito de logos de clientes (duas faixas em sentidos opostos)
  LocationMap.tsx / MapInner.tsx   Mapa Leaflet (MapInner é carregado client-side)
  sections/         Uma seção por arquivo: Hero, Stats, Services, About, Clients, Location, Contact
  ui/               Componentes shadcn/ui (button, input, label, sheet, textarea)

lib/
  site-config.ts    >>> FONTE ÚNICA DE CONTEÚDO <<< (ver abaixo)
  utils.ts          Helper `cn()` (clsx + tailwind-merge)

scripts/
  gen-logos.mjs     Gera os wordmarks SVG dos clientes em /public/logos

public/             Imagens e logos servidos estaticamente (inclui /public/logos/*.svg)
img/                Imagens de referência (Designer*.png)
```

## Onde editar o conteúdo

Quase todo o texto e dados do site ficam centralizados em **`lib/site-config.ts`**.
Para mudar conteúdo, edite ali — não nas seções:

- **`siteConfig`** — nome, razão social, descrição, URL, anos de experiência.
- **`navLinks`** — itens do menu (cada `href` é uma âncora `#id` de uma seção).
- **`contacts`** — nomes, cargos, telefones (`phoneRaw` é usado no link de WhatsApp/tel) e e-mails.
- **`location`** — endereço, CEP, coordenadas (`lat`/`lng` do mapa), horário, links Maps/Waze.
- **`stats`** — números de destaque da seção de estatísticas.
- **`sectors`**, **`services`**, **`differentials`** — setores atendidos, serviços e diferenciais.
- **`clients`** — marcas exibidas no carrossel; cada item aponta para um arquivo em `/public/logos`.

Os `href` da navbar precisam casar com os `id` das `<section>` em `components/sections/*`.

### Logos de clientes

Os logos atuais são **wordmarks monocromáticos** gerados a partir de imagem de referência.
Para substituir por logos oficiais, mantenha o mesmo nome de arquivo em `/public/logos`
(ex.: `bosch.svg`) ou ajuste a entrada correspondente em `clients` (`lib/site-config.ts`).
O carrossel aplica máscara CSS e pinta o logo na cor do tema; ele roda continuamente e
fica vermelho (`bg-brand`) ao passar o cursor, sem pausar a animação.

## Deploy

O projeto gera arquivos estáticos. Para publicar:

```bash
npm run build          # gera a pasta out/
# subir o conteúdo de out/ para o host estático
```

Em hosts estáticos (Netlify/Vercel), configure: **build command** = `npm run build`,
**publish directory** = `out`.

## Convenções

- Conteúdo e dados sempre em `lib/site-config.ts`; componentes só consomem esses dados.
- Use o helper `cn()` de `lib/utils.ts` para compor classes Tailwind.
- Textos em **português (pt-BR)**, sem emojis e sem travessões usados como pontuação.
- Imagens são servidas sem otimização do Next (`images.unoptimized: true`), exigência do export estático.
- `trailingSlash: true` — as rotas terminam com `/`.

## Observações de manutenção

- Coordenadas do mapa em `location.lat`/`lng` são aproximadas; ajuste se precisar de precisão.
- O JSON-LD (`LocalBusiness`) em `app/layout.tsx` usa dados de `site-config`; ao mudar
  endereço/telefone, ele atualiza junto.
- Não há backend, formulário com envio real, variáveis de ambiente nem segredos no projeto.
