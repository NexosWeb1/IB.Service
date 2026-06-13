export const siteConfig = {
  name: "iB.Services",
  legalName: "Empresa Brasileira de Serviços Ltda",
  description:
    "Prestadora de serviços industriais em Gestão da Qualidade: inspeção, retrabalho, seleção de peças e terceirização de mão de obra para montadoras e indústrias.",
  url: "https://ibservices.ind.br",
  experienceYears: "10+",
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
];

export const contacts = [
  {
    name: "Ricardo Ferraz",
    role: "Diretor",
    phone: "(31) 9 9107-2056",
    phoneRaw: "5531991072056",
    whatsapp: true,
    emails: ["diretoria@ibservices.ind.br"],
  },
  {
    name: "Ludmila Rodrigues da Silva",
    role: "Administrativo & Financeiro",
    phone: "(31) 3615-2631",
    phoneRaw: "553136152631",
    whatsapp: false,
    emails: ["financeiro@ibservices.ind.br", "administrativo@ibservices.ind.br"],
  },
];

export const location = {
  label: "Matriz em Betim/MG",
  street: "R. Texaco, 470",
  district: "Dom I. Jardim Piemonte / Sul",
  city: "Betim",
  state: "MG",
  zip: "32689-350",
  full: "R. Texaco, 470 - Dom I. Jardim Piemonte / Sul, Betim - MG, 32689-350",
  // Coordenadas aproximadas da região (ajuste fino após geocodificação precisa).
  lat: -19.9678,
  lng: -44.1985,
  hours: "Segunda a sexta, 8h às 18h",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Texaco,+470,+Betim+-+MG,+32689-350",
  wazeUrl: "https://waze.com/ul?q=R.%20Texaco%2C%20470%2C%20Betim%20-%20MG",
};

export const stats = [
  { value: "10+", label: "Anos de experiência industrial" },
  { value: "40+", label: "Indústrias e montadoras atendidas" },
  { value: "100%", label: "Foco em qualidade e desempenho" },
  { value: "4", label: "Setores industriais atendidos" },
];

export const sectors = [
  "Automotivo & Montadoras",
  "Usinagem",
  "Plásticos",
  "Borracha",
];

import type { LucideIcon } from "lucide-react";
import {
  SearchCheck,
  Wrench,
  Users,
  ShieldCheck,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: SearchCheck,
    title: "Inspeção de Qualidade",
    description:
      "Inspeção 100% e por amostragem de peças e componentes, com registro e rastreabilidade dos resultados para garantir conformidade.",
  },
  {
    icon: Wrench,
    title: "Retrabalho e Seleção de Peças",
    description:
      "Seleção, separação e retrabalho de itens não conformes diretamente na sua linha ou em nossa estrutura, reduzindo refugo e parada de produção.",
  },
  {
    icon: Users,
    title: "Terceirização de Mão de Obra",
    description:
      "Equipes qualificadas e dimensionadas para a sua demanda, com gestão de pessoas, treinamento e foco em produtividade.",
  },
  {
    icon: ShieldCheck,
    title: "Gestão da Qualidade",
    description:
      "Sustentação da qualidade no chão de fábrica com indicadores, controle de processos e apoio às exigências de montadoras.",
  },
  {
    icon: ClipboardCheck,
    title: "Auditoria de Processos",
    description:
      "Verificação de processos, requisitos e padrões para identificar desvios e assegurar o atendimento às normas do setor.",
  },
  {
    icon: TrendingUp,
    title: "Apoio à Melhoria Contínua",
    description:
      "Soluções flexíveis para otimizar resultados, eliminar desperdícios e elevar o desempenho operacional do seu negócio.",
  },
];

export const differentials = [
  "Mais de uma década de experiência industrial",
  "Soluções abrangentes e flexíveis em Gestão da Qualidade",
  "Equipes treinadas e atendimento próximo ao cliente",
  "Agilidade na implantação e resposta rápida",
];

// Marcas exibidas na faixa de clientes. Os arquivos ficam em /public/logos.
// São wordmarks monocromáticos gerados a partir da imagem de referência;
// substitua por logos oficiais (SVG/PNG) mantendo o mesmo nome de arquivo.
export const clients: { name: string; file: string }[] = [
  { name: "Bosch", file: "bosch.svg" },
  { name: "Stellantis", file: "stellantis.svg" },
  { name: "Mahle", file: "mahle.svg" },
  { name: "Magna", file: "magna.svg" },
  { name: "Marelli", file: "marelli.svg" },
  { name: "Saint-Gobain", file: "saint-gobain.svg" },
  { name: "Hutchinson", file: "hutchinson.svg" },
  { name: "Dayco", file: "dayco.svg" },
  { name: "Moura", file: "moura.svg" },
  { name: "Bosal", file: "bosal.svg" },
  { name: "Hi-Lex", file: "hi-lex.svg" },
  { name: "ITW", file: "itw.svg" },
  { name: "Hydro", file: "hydro.svg" },
  { name: "Plascar", file: "plascar.svg" },
  { name: "Iochpe-Maxion", file: "iochpe-maxion.svg" },
  { name: "Brose", file: "brose.svg" },
  { name: "Landini", file: "landini.svg" },
  { name: "Akwel", file: "akwel.svg" },
  { name: "Aethra", file: "aethra.svg" },
  { name: "Sascar", file: "sascar.svg" },
  { name: "Sila Group", file: "sila-group.svg" },
  { name: "Gerber", file: "gerber.svg" },
  { name: "Cebi", file: "cebi.svg" },
  { name: "Neumayer Tekfor", file: "neumayer-tekfor.svg" },
  { name: "Centrasa", file: "centrasa.svg" },
  { name: "Roda Forte", file: "roda-forte.svg" },
];
