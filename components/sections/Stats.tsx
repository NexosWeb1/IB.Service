import { stats } from "@/lib/site-config";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export function Stats() {
  return (
    <section className="relative z-10 -mt-12 md:-mt-16">
      <div className="container-tight">
        <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-xl lg:grid-cols-4">
          {stats.map((stat) => (
            <RevealItem
              key={stat.label}
              className="bg-card p-6 text-center md:p-8"
            >
              <p className="font-heading text-4xl font-bold text-brand md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
