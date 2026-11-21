import type { Metadata } from "next";
import { FontLinks } from "@/components/layout/FontLinks";
import "../globals.css";

export const metadata: Metadata = {
  title: "Unleashed Collective: The Palette Collection",
  description: "Thoughtfully designed essentials for dogs and their people.",
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head><FontLinks /></head>
      <body>{children}</body>
    </html>
  );
}
