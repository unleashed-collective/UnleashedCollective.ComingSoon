export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export type TextSegment = {
  text: string;
  emphasis?: boolean;
};

export type LocaleCopy = {
  languageLabel: string;
  availability: string;
  headline: string;
  intro: string;
  explore: string;
  available: string;
  collectionLabel: string;
  productNames: string[];
  storyEyebrow: string;
  storyTitle: string;
  storyParagraphs: TextSegment[][];
  social: string;
  secondSocial: string;
  contact: string;
};
