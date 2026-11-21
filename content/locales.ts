import type { LocaleCopy } from "./types";

export const content = {
  en: {
    languageLabel: "Language",
    availability: "Now Available. The Palette Collection.",
    headline: "Made for life together",
    intro: "Thoughtfully designed essentials for dogs and their people.",
    explore: "Explore the Collection",
    available: "Now Available",
    collectionLabel: "The Palette Collection",
    productNames: ["Lilac dog harness", "Butter dog harness", "Blue dog harness"],
    storyEyebrow: "The idea",
    storyTitle: "TWO WORDS, ONE PURPOSE.",
    storyParagraphs: [
      [
        { text: "Unleashed", emphasis: true },
        { text: " is the bold and energetic essence that drives us to create the freedom and comfort everyone is meant to feel. " },
        { text: "Collective", emphasis: true },
        { text: " is what makes it distinctive: a movement, a community that shares the passion for the premium feeling of design and the care for our companions." },
      ],
      [
        { text: "The idea is simple, held to a high standard: sophisticated, detail-oriented and never at the expense of comfort. The best, made accessible. Because every companion deserves it and so does everyone who loves one." },
      ],
    ],
    social: "Instagram",
    secondSocial: "TikTok",
    contact: "Contact",
  },
  es: {
    languageLabel: "Idioma",
    availability: "Ya disponible. La colecci\u00f3n Palette.",
    headline: "Comodidad en cada detalle.",
    intro: "Accesorios premium para perros y las personas que caminan junto a ellos. Comodidad anat\u00f3mica, funcionalidad refinada y dise\u00f1o atemporal para los momentos cotidianos juntos.",
    explore: "Comprar ahora",
    available: "Ya disponible",
    collectionLabel: "La colecci\u00f3n Palette",
    productNames: ["Arn\u00e9s lila", "Arn\u00e9s color mantequilla", "Arn\u00e9s azul"],
    storyEyebrow: "La idea",
    storyTitle: "DOS PALABRAS, UN PROP\u00d3SITO.",
    storyParagraphs: [
      [
        { text: "Unleashed", emphasis: true },
        { text: " es audaz y en\u00e9rgico, la libertad y comodidad que todo perro merece sentir. " },
        { text: "Collective", emphasis: true },
        { text: " es lo que lo hace distintivo: una comunidad y la sensaci\u00f3n premium de un dise\u00f1o hecho con verdadero cuidado por nuestros compa\u00f1eros." },
      ],
      [
        { text: "La idea es simple, con un est\u00e1ndar alto: sofisticada, meticulosa y nunca a costa de la comodidad. Lo mejor, hecho accesible. Porque cada compa\u00f1ero se lo merece, y tambi\u00e9n quienes los aman." },
      ],
    ],
    social: "Instagram",
    secondSocial: "Amazon",
    contact: "Contacto",
  },
} satisfies Record<"en" | "es", LocaleCopy>;
