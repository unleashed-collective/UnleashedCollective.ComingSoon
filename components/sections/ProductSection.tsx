import Image from "next/image";
import type { Locale } from "@/content/types";
import { content } from "@/content/locales";
import { Reveal } from "../ui/Reveal";
import styles from "@/styles/components/sections/ProductSection.module.css";

const products = [
  { image: "/assets/lilac_harness.jpg", name: "Lilac" },
  { image: "/assets/yellow_harness.jpg", name: "Butter" },
  { image: "/assets/blue_harness.png", name: "Blue" },
];

export function ProductSection({ locale }: { locale: Locale }) {
  return (
    <section className={styles.section} id="product" aria-label={content[locale].collectionLabel}>
      <div className={`wrap ${styles.wrap}`}>
        <Reveal className={styles.grid}>
          {products.map((product, index) => (
            <article className={styles.card} key={product.name}>
              <Image src={product.image} alt={content[locale].productNames[index]} fill sizes="(max-width: 860px) 100vw, 33vw" />
              <span className={styles.status}>{content[locale].available}</span>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
