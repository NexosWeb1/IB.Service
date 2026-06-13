import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  withTagline?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
};

export function BrandLogo({
  className,
  withTagline = false,
  size = "md",
}: BrandLogoProps) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span
        className={cn(
          "font-heading font-bold tracking-tight",
          sizeMap[size],
        )}
      >
        <span className="relative mr-[1px] inline-flex items-center">
          <span
            aria-hidden
            className="absolute -inset-x-1 -inset-y-[3px] rounded-[50%] border-2 border-brand"
          />
          <span className="relative z-10 px-1">
            i<span className="text-brand">B</span>
          </span>
        </span>
        <span className="text-brand">.</span>
        <span>Services</span>
      </span>
      {withTagline && (
        <span className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Empresa Brasileira de Serviços
        </span>
      )}
    </span>
  );
}
