export interface Show {
  id: string;
  title: string;
  season: string;
  description: string;
  imageUrl: string;
  isCurrent: boolean;
  duration?: string;
  actors?: string[];
  director?: string;
  music?: string;
}

export const shows: Show[] = [
  {
    id: "trapasso-con-fracasso",
    title: "Il trapasso con fracasso",
    season: "Stagione 2023-2024",
    description: "Una commedia esilarante che affronta temi profondi con leggerezza e ironia. Un viaggio tra il ridicolo e il sublime.",
    imageUrl: `${import.meta.env.BASE_URL}images/trapasso.png`,
    isCurrent: true,
    duration: "120 minuti",
    actors: ["Attore 1", "Attore 2", "Attore 3"], // Placeholder data
    director: "Nome Regista",
    music: "Nome Musicista"
  },
  {
    id: "prezzemolina",
    title: "Prezzemolina",
    season: "Stagione 2018-2019",
    description: "Una fiaba classica rivisitata con brio e colori.",
    imageUrl: `${import.meta.env.BASE_URL}images/prezzemolina.png`,
    isCurrent: false,
    director: "Regista Passato",
    music: "Musicista Passato"
  },
  {
    id: "pifferaio-magico",
    title: "Il Pifferaio Magico",
    season: "Stagione 2016-2017",
    description: "La leggenda di Hamelin prende vita sul palco.",
    imageUrl: `${import.meta.env.BASE_URL}images/pifferaio.png`,
    isCurrent: false
  },
  {
    id: "aladino",
    title: "Aladino",
    season: "Stagione 2013-2015",
    description: "Un viaggio da mille e una notte.",
    imageUrl: `${import.meta.env.BASE_URL}images/aladino.png`,
    isCurrent: false
  }
];
