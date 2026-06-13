import { cn } from "@/lib/utils";
import { clients } from "@/lib/site-config";

type Client = { name: string; file: string };

function LogoChip({ client }: { client: Client }) {
  return (
    <div className="group/logo flex h-12 w-36 shrink-0 items-center justify-center px-2 sm:w-40">
      <span
        role="img"
        aria-label={client.name}
        title={client.name}
        className={cn(
          "h-7 w-full bg-muted-foreground/70 transition-colors duration-300",
          "group-hover/logo:bg-brand",
        )}
        style={{
          maskImage: `url(/logos/${client.file})`,
          WebkitMaskImage: `url(/logos/${client.file})`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskSize: "contain",
          WebkitMaskSize: "contain",
        }}
      />
    </div>
  );
}

function Row({
  items,
  direction,
}: {
  items: Client[];
  direction: "left" | "right";
}) {
  return (
    <div className="marquee-track marquee-mask overflow-hidden py-1">
      <div
        className={cn(
          "marquee-anim flex w-max",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
        )}
      >
        {/* duas cópias para loop contínuo sem emenda */}
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0"
            aria-hidden={copy === 1}
          >
            {items.map((c) => (
              <LogoChip key={`${copy}-${c.file}`} client={c} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  const mid = Math.ceil(clients.length / 2);
  const rowA = clients.slice(0, mid);
  const rowB = clients.slice(mid);

  return (
    <div className="flex flex-col gap-2">
      <Row items={rowA} direction="left" />
      {/* segunda linha (sentido oposto), oculta em telas muito pequenas */}
      <div className="hidden sm:block">
        <Row items={rowB} direction="right" />
      </div>
    </div>
  );
}
