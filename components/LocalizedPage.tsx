import type { Locale } from "@/content/types";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Hero } from "./sections/Hero";
import { ProductSection } from "./sections/ProductSection";
import { Story } from "./sections/Story";

export function LocalizedPage({ locale }: { locale: Locale }) {
  return (
    <>
      <Header locale={locale} />
      <main>
        <Hero locale={locale} />
        <ProductSection locale={locale} />
        <div className="last-screen">
          <Story locale={locale} />
          <Footer locale={locale} />
        </div>
      </main>
    </>
  );
}
