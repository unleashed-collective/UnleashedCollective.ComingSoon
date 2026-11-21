import type { Locale } from "@/content/types";
import { content } from "@/content/locales";
import styles from "@/styles/components/sections/Hero.module.css";

export function Hero({ locale }: { locale: Locale }) {
  const copy = content[locale];
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1>{copy.headline}</h1>
          <p>{copy.intro}</p>
          <a href="#product">{copy.explore}</a>
        </div>
      </div>
    </section>
  );
}
