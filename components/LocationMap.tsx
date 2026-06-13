"use client";

import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";

const MapInner = dynamic(() => import("@/components/MapInner"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-muted">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 animate-pulse text-brand" />
        Carregando mapa...
      </div>
    </div>
  ),
});

export function LocationMap() {
  return <MapInner />;
}
