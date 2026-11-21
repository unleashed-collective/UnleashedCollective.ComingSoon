import type { Locale } from "@/content/types";
import Image from "next/image";
import { content } from "@/content/locales";
import styles from "@/styles/components/layout/Footer.module.css";

export function Footer({ locale }: { locale: Locale }) {
  const copy = content[locale];
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <span className={styles.note}>&copy; 2026 Unleashed Collective</span>
        <nav className={styles.links} aria-label="Social and contact links">
          <a href="#" target="_blank" rel="noopener noreferrer">{copy.social}</a>
          <a href="#amazon">{copy.secondSocial}</a>
          <a href="mailto:hello@unleashedcollective.com">{copy.contact}</a>
        </nav>
        <Image src="/assets/unleashed_collective_wordmark_arcchivo.svg" alt="Unleashed Collective" className={styles.logo} width={183} height={16} />
      </div>
    </footer>
  );
}

