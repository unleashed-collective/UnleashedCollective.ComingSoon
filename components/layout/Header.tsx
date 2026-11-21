import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/content/types";
import { content } from "@/content/locales";
import styles from "@/styles/components/layout/Header.module.css";

export function Header({ locale }: { locale: Locale }) {
  const copy = content[locale];
  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.inner}`}>
        <Link className="wordmark" href={locale === "en" ? "/" : "/es"} aria-label="Unleashed Collective home">
          <Image src="/assets/unleashed_collective_wordmark_arcchivo.svg" alt="Unleashed Collective" className="logo-mark" width={240} height={21} priority />
        </Link>
        <a className={styles.tag} href="#product">{copy.availability}</a>
        <nav className={styles.language} aria-label={copy.languageLabel}>
          <Link href="/" className={locale === "en" ? styles.active : ""} aria-current={locale === "en" ? "page" : undefined}>EN</Link>
          <span aria-hidden="true" />
          <Link href="/es" className={locale === "es" ? styles.active : ""} aria-current={locale === "es" ? "page" : undefined}>ES</Link>
        </nav>
      </div>
    </header>
  );
}
