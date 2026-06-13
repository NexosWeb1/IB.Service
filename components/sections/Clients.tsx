import { SectionHeading } from "@/components/SectionHeading";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Reveal } from "@/components/Reveal";

export function Clients() {
  return (
    <section id="clientes" className="overflow-hidden py-20 md:py-28">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Clientes & Parceiros"
          title="Indústrias que confiam na iB.Services"
          description="Atendemos montadoras e fornecedores de grande porte do setor automotivo e industrial, com a qualidade e a confiabilidade que cada operação exige."
        />
      </div>

      <Reveal className="mt-14">
        <LogoMarquee />
      </Reveal>

      <div className="container-tight mt-10 text-center">
        <p className="text-sm text-muted-foreground">
          Passe o cursor para destacar cada marca.
        </p>
      </div>
    </section>
  );
}
