import type { Metadata } from "next";
import { FontLinks } from "@/components/layout/FontLinks";
import "../globals.css";

export const metadata: Metadata = {
  title: "Unleashed Collective: La Colecci\u00f3n Palette",
  description: "Accesorios premium para perros y las personas que caminan junto a ellos.",
};

export default function SpanishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head><FontLinks /></head>
      <body>{children}</body>
    </html>
  );
}
