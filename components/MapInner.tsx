"use client";

import * as React from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useTheme } from "next-themes";

import { location, siteConfig } from "@/lib/site-config";

const brandPin = L.divIcon({
  className: "ib-pin",
  html: `
    <span class="relative flex h-9 w-9 -translate-x-1/2 -translate-y-full items-center justify-center">
      <span class="absolute bottom-0 h-9 w-9 animate-pulse-ring rounded-full bg-[hsl(355_84%_45%)]/40"></span>
      <svg viewBox="0 0 24 24" class="relative h-9 w-9 drop-shadow-lg" aria-hidden="true">
        <path fill="hsl(355 84% 45%)" stroke="white" stroke-width="1.5"
          d="M12 2c-3.9 0-7 3.1-7 7 0 5 7 13 7 13s7-8 7-13c0-3.9-3.1-7-7-7z"/>
        <circle cx="12" cy="9" r="2.6" fill="white"/>
      </svg>
    </span>`,
  iconSize: [0, 0],
  iconAnchor: [0, 0],
});

export default function MapInner() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const tileUrl = isDark
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={15}
      scrollWheelZoom={false}
      className="h-full w-full"
      style={{ minHeight: "100%" }}
    >
      <TileLayer
        key={isDark ? "dark" : "light"}
        url={tileUrl}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <Marker position={[location.lat, location.lng]} icon={brandPin}>
        <Popup>
          <strong>{siteConfig.name}</strong>
          <br />
          {location.full}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
