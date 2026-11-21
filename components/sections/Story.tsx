import type { Locale } from "@/content/types";
import { content } from "@/content/locales";
import { Reveal } from "../ui/Reveal";
import styles from "@/styles/components/sections/Story.module.css";

export function Story({ locale }: { locale: Locale }) {
  const copy = content[locale];
  return (
    <section className={styles.story}>
      <div className={`wrap ${styles.inner}`}>
        <Reveal>
          <div className={styles.eyebrow}>{copy.storyEyebrow}</div>
          <h2>{copy.storyTitle}</h2>
        </Reveal>
        <Reveal className={styles.body}>
          {copy.storyParagraphs.map((paragraph, index) => (
            <p key={index}>
              {paragraph.map((segment, segmentIndex) =>
                segment.emphasis ? <strong key={segmentIndex}>{segment.text}</strong> : segment.text,
              )}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
