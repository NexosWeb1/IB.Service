import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../public/logos");

// Wordmarks monocromáticos, consistentes e leves. Usam currentColor para que
// o CSS controle a cor (cinza -> vermelho da marca no hover). Substitua por
// logos oficiais mantendo o mesmo nome de arquivo.
const brands = [
  { file: "bosch.svg", text: "BOSCH", spacing: 2 },
  { file: "stellantis.svg", text: "STELLANTIS", spacing: 3 },
  { file: "mahle.svg", text: "MAHLE", spacing: 2 },
  { file: "magna.svg", text: "MAGNA", spacing: 2 },
  { file: "marelli.svg", text: "Marelli", spacing: 0, weight: 600 },
  { file: "saint-gobain.svg", text: "SAINT-GOBAIN", spacing: 1.5 },
  { file: "hutchinson.svg", text: "Hutchinson", spacing: 0, weight: 600 },
  { file: "dayco.svg", text: "DAYCO", spacing: 2 },
  { file: "moura.svg", text: "MOURA", spacing: 2 },
  { file: "bosal.svg", text: "bosal", spacing: 1, weight: 700 },
  { file: "hi-lex.svg", text: "HI-LEX", spacing: 2 },
  { file: "itw.svg", text: "ITW", spacing: 3 },
  { file: "hydro.svg", text: "Hydro", spacing: 0, weight: 600 },
  { file: "plascar.svg", text: "Plascar", spacing: 0, weight: 600 },
  { file: "iochpe-maxion.svg", text: "IOCHPE-MAXION", spacing: 1.5 },
  { file: "brose.svg", text: "brose", spacing: 1, weight: 700 },
  { file: "landini.svg", text: "LANDINI", spacing: 2 },
  { file: "akwel.svg", text: "AKWEL", spacing: 2 },
  { file: "aethra.svg", text: "AETHRA", spacing: 2 },
  { file: "sascar.svg", text: "SASCAR", spacing: 2 },
  { file: "sila-group.svg", text: "SILA GROUP", spacing: 1.5 },
  { file: "gerber.svg", text: "GERBER", spacing: 2 },
  { file: "cebi.svg", text: "cebi", spacing: 1, weight: 700 },
  { file: "neumayer-tekfor.svg", text: "NEUMAYER TEKFOR", spacing: 1 },
  { file: "centrasa.svg", text: "Centrasa", spacing: 0, weight: 600 },
  { file: "roda-forte.svg", text: "RODA FORTE", spacing: 1.5 },
];

const H = 48;
const PAD = 8;

function svg({ text, spacing = 1.5, weight = 700 }) {
  // largura aproximada por caractere para um viewBox proporcional
  const charW = 16;
  const w = Math.round(text.length * (charW + spacing) + PAD * 2);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${H}" role="img" aria-label="${text}">
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
    font-family="'Poppins','Segoe UI',Arial,sans-serif" font-weight="${weight}"
    font-size="26" letter-spacing="${spacing}" fill="currentColor">${text}</text>
</svg>
`;
}

await mkdir(outDir, { recursive: true });
await Promise.all(
  brands.map((b) => writeFile(resolve(outDir, b.file), svg(b), "utf8")),
);
console.log(`Gerados ${brands.length} logos em public/logos`);
