# iB.Services

Site institucional da iB.Services (Empresa Brasileira de Serviços Ltda), prestadora de serviços industriais em Gestão da Qualidade para montadoras e indústrias.

## Stack

- Next.js 15 (App Router) com export estático
- Tailwind CSS + shadcn/ui
- Framer Motion (animações)
- react-leaflet + tiles CARTO (mapa, sem API key)

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera o site estático em out/
```

## Estrutura

- `app/` layout, página e estilos globais
- `components/` componentes de UI e seções (`components/sections/`)
- `lib/site-config.ts` conteúdo centralizado (serviços, contatos, endereço, clientes)
- `public/logos/` wordmarks dos clientes usados na faixa animada
- `public/brand/` logos da marca
- `scripts/gen-logos.mjs` gera os wordmarks dos clientes

## Personalização rápida

- Textos, contatos e endereço: `lib/site-config.ts`
- Logos de clientes: substitua os arquivos em `public/logos/` mantendo o mesmo nome
- Cores da marca e tema: `app/globals.css` e `tailwind.config.ts`
