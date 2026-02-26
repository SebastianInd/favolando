export interface Show {
  id: string;
  title: string;
  season: string;
  description: string;
  shortDescription?: string;
  imageUrl: string;
  isCurrent: boolean;
  duration?: string;
  actors?: string[];
  director?: string;
  music?: string;
}

export const shows: Show[] = [
  {
    id: "fidanzato-ideale",
    title: "Il fidanzato ideale",
    season: "Stagione 2026-2027",
    shortDescription: "Tra equivoci e un portinaio complice, vi aspettiamo a teatro con \"Il fidanzato ideale\" di Stefania de Ruvo. Una commedia brillante in due atti che ci ricorda come, a volte, la realtà superi di gran lunga la fantasia (soprattutto quando bussa alla porta).",
    description: "Chiara è vedova e non ha figli. Le sue sorelle, tormentate dall'idea che possa invecchiare in solitudine, la tallonano nel tentativo di vederla finalmente risposata. Esasperata dalle continue pressioni, Chiara inventa un fidanzato immaginario. Grazie alla complicità dell'amica Valeria e del portinaio Gaspare, il \"fidanzato ideale\" prende forma e consistenza. L'inganno rischia però di crollare quando il fantomatico compagno si palesa davvero, proprio mentre entra in scena un vicino di casa in carne e ossa, segretamente innamorato di Chiara. Come riuscirà il trio a gestire questo caos imprevisto?",
    imageUrl: `${import.meta.env.BASE_URL}images/fidanzato-ideale.png`,
    isCurrent: true,
    duration: "ca. 75 minuti",
    actors: ["Attore 1", "Attore 2", "Attore 3"], // Placeholder data
    director: "Martina Inderst"
  },
  {
    id: "trapasso-con-fracasso",
    title: "Il trapasso con fracasso",
    season: "Stagione 2023-2024",
    description: "Una commedia esilarante che affronta temi profondi con leggerezza e ironia. Un viaggio tra il ridicolo e il sublime.",
    imageUrl: `${import.meta.env.BASE_URL}images/trapasso.png`,
    isCurrent: false,
    director: "Martina Inderst"
  },
  {
    id: "prezzemolina",
    title: "Prezzemolina",
    season: "Stagione 2018-2019",
    description: "Una fiaba classica rivisitata con brio e colori.",
    imageUrl: `${import.meta.env.BASE_URL}images/prezzemolina.png`,
    isCurrent: false,
    director: "Martina Inderst"
  },
  {
    id: "pifferaio-magico",
    title: "Il Pifferaio Magico",
    season: "Stagione 2016-2017",
    description: "La leggenda di Hamelin prende vita sul palco.",
    imageUrl: `${import.meta.env.BASE_URL}images/pifferaio.png`,
    isCurrent: false,
    director: "Martina Inderst"
  },
  {
    id: "aladino",
    title: "Aladino",
    season: "Stagione 2013-2015",
    description: "Un viaggio da mille e una notte.",
    imageUrl: `${import.meta.env.BASE_URL}images/aladino.png`,
    isCurrent: false,
    director: "Martina Inderst"
  }
];
