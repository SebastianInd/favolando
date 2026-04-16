export interface Actor {
  name: string;
  character: string;
}

export interface Video {
  title: string;
  url: string;
}

export interface CustomData {
  title: string;
  content: string;
}

export interface Show {
  id: string;
  title: string;
  season: string;
  description?: string;
  shortDescription: string;
  imageUrl: string;
  isCurrent: boolean;
  duration?: string;
  actors?: Actor[];
  director?: string;
  music?: string;
  customData?: CustomData[];
  songUrl?: string;
  videos?: Video[];
}

export const shows: Show[] = [
  {
    id: "fidanzato-ideale",
    title: "Il fidanzato ideale di S. de Ruvo",
    season: "Stagione 2026-2027",
    shortDescription: "Tra equivoci e un portinaio complice, vi aspettiamo a teatro con \"Il fidanzato ideale\" di Stefania de Ruvo. Una commedia brillante in due atti che ci ricorda come, a volte, la realtà superi di gran lunga la fantasia (soprattutto quando bussa alla porta).\nLa Prima è prevista per il 18 ottobre 2026 a Paradiso.",
    description: "Chiara è vedova e non ha figli. Le sue sorelle, tormentate dall'idea che possa invecchiare in solitudine, la tallonano nel tentativo di vederla finalmente risposata. Esasperata dalle continue pressioni, Chiara inventa un fidanzato immaginario.\nGrazie alla complicità dell'amica Valeria e del portinaio Gaspare, il \"fidanzato ideale\" prende forma e consistenza. L'inganno rischia però di crollare quando il fantomatico compagno si palesa davvero, proprio mentre entra in scena un vicino di casa in carne e ossa, segretamente innamorato di Chiara. Come riuscirà il trio a gestire questo caos imprevisto?",
    imageUrl: `${import.meta.env.BASE_URL}images/fidanzato-ideale.png`,
    isCurrent: true,
    duration: "ca. 75 minuti",
    actors: [
      { name: "Fulvia Parisi", character: "Chiara" },
      { name: "Luisa Manzoni", character: "Franca" },
      { name: "Prisca Valenti", character: "Martina" },
      { name: "Patrizia Ferretti e Adelia Ferreira", character: "Valeria" },
      { name: "Francesco Cirelli", character: "Paolo" },
      { name: "Simone Parisi", character: "Gaspare" },
      { name: "Claudio Ferretti", character: "Christian" },
    ],
    director: "Martina Inderst",
    customData: [
      { title: "Scenografia e trovarobe", content: "Stefano Bettelini, Giuliana e Manuel Friedrich, Enza e Nicola Roncoroni" },
      { title: "Trucco", content: "Donata Beltraminelli e Ivana Mazzoletti" },
      { title: "Luci e suono", content: "Patrizio Maspoli e Martina Inderst" },
      { title: "Macchinista", content: "Giancarlo Parisi" },
      { title: "Cassiera", content: "Annamaria Storni" },
    ]
  },
  {
    id: "trapasso-con-fracasso",
    title: "Il trapasso con fracasso",
    season: "Stagione 2021-2023",
    shortDescription: "Una commedia esilarante che affronta temi profondi con leggerezza e ironia. Un viaggio tra il ridicolo e il sublime.",
    imageUrl: `${import.meta.env.BASE_URL}images/11_il_trapasso_con_fracasso.jpeg`,
    isCurrent: false
  },
  {
    id: "prezzemolina",
    title: "Prezzemolina",
    season: "Stagione 2018-2019",
    shortDescription: "Una fiaba classica rivisitata con brio e colori.",
    imageUrl: `${import.meta.env.BASE_URL}images/10_Prezzemolina.png`,
    isCurrent: false
  },
  {
    id: "pifferaio-magico",
    title: "Il Pifferaio Magico",
    season: "Stagione 2016-2017",
    shortDescription: "La leggenda di Hamelin prende vita sul palco.",
    imageUrl: `${import.meta.env.BASE_URL}images/pifferaio.png`,
    isCurrent: false,
    videos: [
      {
        title: "Trailer",
        url: `${import.meta.env.BASE_URL}videos/9_pifferaio_trailer.mp4`
      },
      {
        title: "Dietro le quinte",
        url: `${import.meta.env.BASE_URL}videos/9_pifferaio_dietro_le_quinte.m4v`
      }
    ]
  },
  {
    id: "aladino",
    title: "Aladino",
    season: "Stagione 2013-2015",
    shortDescription: "Un viaggio da mille e una notte.",
    imageUrl: `${import.meta.env.BASE_URL}images/8_Aladino_finale_Jafar.jpg`,
    isCurrent: false,
    songUrl: `${import.meta.env.BASE_URL}songs/8_aladino_jasmina.mp3`
  },
  {
    id: "emil",
    title: "Emil e i detective",
    season: "Stagione 2011-2012",
    shortDescription: "Un classico per ragazzi che insegna il valore dell'amicizia e della giustizia.",
    imageUrl: `${import.meta.env.BASE_URL}images/7_Emil_e_i_detective_palco.jpg`,
    isCurrent: false,
    songUrl: `${import.meta.env.BASE_URL}songs/7_emil_compagni.mp3`
  },
  {
    id: "robinhood",
    title: "Robin Hood",
    season: "Stagione 2009-2010",
    shortDescription: "La leggenda di Robin Hood prende vita sul palco.",
    imageUrl: `${import.meta.env.BASE_URL}images/6_Robin_Hood_gruppo.png`,
    isCurrent: false,
    songUrl: `${import.meta.env.BASE_URL}songs/6_robin_hood.mp3`
  },
  {
    id: "gattigattinigattacci",
    title: "Gatti, gattini e gattacci",
    season: "Stagione 2007-2008",
    shortDescription: "",
    imageUrl: `${import.meta.env.BASE_URL}images/5_gatti_gattini_gattacci_gruppo.jpg`,
    isCurrent: false,
    songUrl: `${import.meta.env.BASE_URL}songs/5_gatti_amici_per_sempre.wav`
  },
  {
    id: "rosaspina",
    title: "Rosaspina",
    season: "Stagione 2005-2006",
    shortDescription: "",
    imageUrl: `${import.meta.env.BASE_URL}images/4_Rosaspina_gruppo.JPG`,
    isCurrent: false,
    songUrl: `${import.meta.env.BASE_URL}songs/4_rosaspina_il_pianto_della_regina.m4a`
  },
  {
    id: "tavolinomagico",
    title: "Il Tavolino Magico",
    season: "Stagione 2004",
    shortDescription: "",
    imageUrl: `${import.meta.env.BASE_URL}images/3_Tavolino_magico_le_nostre_scenografe.jpg`,
    isCurrent: false,
    songUrl: `${import.meta.env.BASE_URL}songs/3_tavolino_insieme.m4a`
  },
  {
    id: "malok",
    title: "Malok e la sfortuna di De Scalognes",
    season: "Stagione 2002-2003",
    shortDescription: "",
    imageUrl: `${import.meta.env.BASE_URL}images/2_Malok_gruppo.jpg`,
    isCurrent: false,
    songUrl: `${import.meta.env.BASE_URL}songs/2_malok_oje_oje.m4a`
  },
  {
    id: "hamelin",
    title: "Il Pifferaio di Hamelin",
    season: "Stagione 2001-2002",
    shortDescription: "",
    imageUrl: `${import.meta.env.BASE_URL}images/1_Il_pifferaio_di_hamelin_gruppo.jpg`,
    isCurrent: false
  }
];
