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
  overviewImageUrl: string;
  detailImageUrl: string;
  gallery?: string[];
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
    overviewImageUrl: `${import.meta.env.BASE_URL}images/fidanzato-ideale.png`,
    detailImageUrl: `${import.meta.env.BASE_URL}images/fidanzato-ideale.png`,
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
    shortDescription: "Una nuova casa, un'inquilina di troppo... e invisibile! Tra strampalati acchiappafantasmi, bizzarri personaggi e un'amicizia impossibile, riuscirà questo buffo sodalizio a sopravvivere al caos?",
    description: "Una giovane donna scopre che la sua nuova casa è già occupata... da un’inquilina che solo lei può vedere! Tra lo scetticismo della famiglia e l’arrivo di improbabili acchiappafantasmi, tra le due donne nasce un’inaspettata amicizia. In un crescendo di equivoci e bizzarri personaggi, riusciranno le due protagoniste a salvare la loro convivenza?",
    overviewImageUrl: `${import.meta.env.BASE_URL}images/11_trapasso/manifesto.jpg`,
    detailImageUrl: `${import.meta.env.BASE_URL}images/11_trapasso/gruppo.jpeg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/11_trapasso/scena_1.jpeg`,
      `${import.meta.env.BASE_URL}images/11_trapasso/scena_2.jpeg`,
      `${import.meta.env.BASE_URL}images/11_trapasso/scena_3.jpeg`,
      `${import.meta.env.BASE_URL}images/11_trapasso/scena_4.jpeg`,
      `${import.meta.env.BASE_URL}images/11_trapasso/scena_5.jpeg`,
      `${import.meta.env.BASE_URL}images/11_trapasso/scena_6.jpeg`,
      `${import.meta.env.BASE_URL}images/11_trapasso/scenografi.jpeg`
    ],
    isCurrent: false,
    videos: [
      {
        title: "Prova a seguire il tuo cuore",
        url: `${import.meta.env.BASE_URL}videos/11_trapasso_prova_a_seguire_il_tuo_cuore.mp4`
      }
    ]
  },
  {
    id: "prezzemolina",
    title: "Prezzemolina",
    season: "Stagione 2018-2019",
    shortDescription: "Promessa a una fata malvagia per un pugno di prezzemolo rubato, la piccola Prezzemolina dovrà affrontare prove impossibili per sfuggire al suo destino. Riuscirà a liberarsi dall'incantesimo?",
    description: "C'era una volta una coppia che desiderava tanto un figlio. Finalmente la moglie rimase incinta e dopo nove mesi nacque una bella bambina che chiamarono Prezzemolina.\nOra vi chiederete, come mai questo nome? Ebbene, mettetevi comodi e lasciatevi trasportare da questa favola dove non mancheranno prove da superare, fate, buoni e cattivi, e... momenti divertenti per tutta la famiglia!",
    overviewImageUrl: `${import.meta.env.BASE_URL}images/10_prezzemolina/manifesto.jpg`,
    detailImageUrl: `${import.meta.env.BASE_URL}images/10_prezzemolina/gruppo.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/10_prezzemolina/scena_1.jpg`,
      `${import.meta.env.BASE_URL}images/10_prezzemolina/scena_2.jpg`,
      `${import.meta.env.BASE_URL}images/10_prezzemolina/scena_3.jpg`,
      `${import.meta.env.BASE_URL}images/10_prezzemolina/finale.jpg`
    ],
    isCurrent: false
  },
  {
    id: "pifferaio-magico",
    title: "Il Pifferaio Magico",
    season: "Stagione 2016-2017",
    shortDescription: "Tra topi, avarizia e magia, chi vincerà la sfida tra il Mago e il Pifferaio per salvare la città di Hamelin?",
    description: "Cera una volta, in una città chiamata Hamelin, un avido Borgomastro di nome Otto Panzer, il quale pensava solo ad arricchirsi sulle spalle degli altri e inoltre non si curava di tenere pulita la città.\nContinuò così finché un giorno quest'ultima fu letteralmente invasa dai topi e per potersene liberare Otto Panzer, insieme al suo fido Cancelliere, indisse un concorso.\nTanti furono quelli attirati dalla lauta ricompensa, ma il Borgomastro e il Cancelliere eliminarono tutti i concorrenti eccetto due: il Mago Prostaferis ed un buffo Pifferaio. Chissà se riusciranno a riportare la città al suo antico splendore?\n",
    overviewImageUrl: `${import.meta.env.BASE_URL}images/9_pifferaio/manifesto.jpg`,
    detailImageUrl: `${import.meta.env.BASE_URL}images/9_pifferaio/gruppo.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/9_pifferaio/scenografia.jpeg`,
      `${import.meta.env.BASE_URL}images/9_pifferaio/scenografi.jpeg`,
      `${import.meta.env.BASE_URL}images/9_pifferaio/scena_1.jpeg`,
      `${import.meta.env.BASE_URL}images/9_pifferaio/scena_2.jpeg`,
      `${import.meta.env.BASE_URL}images/9_pifferaio/scena_3.jpeg`,
      `${import.meta.env.BASE_URL}images/9_pifferaio/scena_4.jpeg`,
      `${import.meta.env.BASE_URL}images/9_pifferaio/maren.jpg`
    ],
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
    shortDescription: "Tra fughe dal palazzo, colpi di scena e un pizzico di magia, segui l'avventura mirabolante di un giovane ladruncolo per ritrovare la sua principessa. Un viaggio incantato nel cuore del Medio Oriente!",
    description: "La Principessa Jasmine, figlia del Sultano, è stanca della vita dorata ma monotona del palazzo. Un giorno decide di fuggire in incognito tra le strade di Agrabah, dove, tra i profumi e i colori del mercato, incontra Aladino, un giovane e scaltro ladruncolo dal cuore d’oro. I due provengono da mondi opposti, lontani come la terra dal cielo, eppure uniti dallo stesso desiderio di libertà. Ma proprio quando i loro destini sembrano intrecciarsi, un oscuro scherzo della sorte li divide bruscamente. Per riabbracciare la sua principessa e ritrovare la propria strada, Aladino dovrà affrontare avventure mirabolanti. Lasciatevi trasportare nella magia del Medio Oriente: un viaggio fatto di sogni, coraggio e incantesimi vi aspetta.",
    overviewImageUrl: `${import.meta.env.BASE_URL}images/8_aladino/manifesto.jpg`,
    detailImageUrl: `${import.meta.env.BASE_URL}images/8_aladino/gruppo.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/8_aladino/imbonitrice.png`,
      `${import.meta.env.BASE_URL}images/8_aladino/danzatrici.jpg`,
      `${import.meta.env.BASE_URL}images/8_aladino/finale.jpg`
    ],
    isCurrent: false,
    songUrl: `${import.meta.env.BASE_URL}songs/8_aladino_jasmina.mp3`
  },
  {
    id: "emil",
    title: "Emil e i detective",
    season: "Stagione 2011-2012",
    shortDescription: "Dieci anni di teatro festeggiati con un grande giallo: riuscirà Emil, insieme alla sua banda di piccoli detective, a risolvere il caso? Uno spettacolo ricco di musica e sorprese per grandi e piccini!",
    description: "Per la prima volta, Mamma manda il suo Emil da solo a Berlino dalla nonna, alla quale dovrà portare 140 Marchi, all’epoca una considerevole somma. Ma durante il viaggio Emil viene derubato con un subdolo stratagemma, e l’avventura comincia: per inseguire il ladro, Emil scende alla stazione sbagliata e si ritrova da solo in mezzo a una città sconosciuta. Partecipate anche voi per un’ora alla sua storia e lasciatevi sorprendere!",
    overviewImageUrl: `${import.meta.env.BASE_URL}images/7_emil/manifesto.jpg`,
    detailImageUrl: `${import.meta.env.BASE_URL}images/7_emil/attori.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/7_emil/trucco.jpg`,
      `${import.meta.env.BASE_URL}images/7_emil/scena_1.jpg`,
      `${import.meta.env.BASE_URL}images/7_emil/scena_2.jpg`,
      `${import.meta.env.BASE_URL}images/7_emil/scena_3.jpg`,
      `${import.meta.env.BASE_URL}images/7_emil/scena_4.jpg`,
      `${import.meta.env.BASE_URL}images/7_emil/scena_5.jpg`
    ],
    isCurrent: false,
    songUrl: `${import.meta.env.BASE_URL}songs/7_emil_compagni.mp3`
  },
  {
    id: "robinhood",
    title: "Robin Hood",
    season: "Stagione 2009-2010",
    shortDescription: "Tra le ombre della foresta di Sherwood, l'eroico fuorilegge Robin Hood sfida la tirannia del Principe Giovanni: riuscirà a sconfiggere il male e riportare la giustizia prima che sia troppo tardi?",
    description: "Nella contea di Nottingham il Principe Giovanni tiranneggia i sudditi per il suo interesse personale e in questo è spalleggiato dallo Sceriffo e dal perfido Consigliere Sir Louis Pent. In realtà il regno appartiene a Re Riccardo che, impegnato in una crociata, ignora quello che sta succedendo nel suo reame. A contrastare le malefatte del tiranno e ad alleviare le sofferenze dei poveri della contea c'è Robin Hood, un cavaliere messo al bando che si nasconde nella Foresta di Sherwood con i suoi amici Will Scarlet e Little John. Riusciranno i nostri eroi a sconfiggere il Principe Giovanni?",
    overviewImageUrl: `${import.meta.env.BASE_URL}images/6_robin_hood/manifesto.jpg`,
    detailImageUrl: `${import.meta.env.BASE_URL}images/6_robin_hood/gruppo.png`,
    gallery: [
      `${import.meta.env.BASE_URL}images/6_robin_hood/narratrici.jpg`,
      `${import.meta.env.BASE_URL}images/6_robin_hood/scena_1.jpg`,
      `${import.meta.env.BASE_URL}images/6_robin_hood/scena_2.jpg`,
      `${import.meta.env.BASE_URL}images/6_robin_hood/scena_3.jpg`,
      `${import.meta.env.BASE_URL}images/6_robin_hood/scena_4.jpg`,
      `${import.meta.env.BASE_URL}images/6_robin_hood/scena_5.jpg`
    ],
    isCurrent: false,
    songUrl: `${import.meta.env.BASE_URL}songs/6_robin_hood.mp3`
  },
  {
    id: "gattigattinigattacci",
    title: "Gatti, gattini e gattacci",
    season: "Stagione 2007-2008",
    shortDescription: "Traditi dal perfido maggiordomo e abbandonati lontano da casa, riusciranno Duchessa e i suoi piccoli, con l'aiuto del carismatico Romeo, a ritrovare la strada e salvare la loro eredità?",
    description: "Un'eccentrica miliardaria decide di lasciare il suo patrimonio ai suoi adorati gatti. Un'idea che non piace per niente al suo perfido maggiordomo, che studia un piano per togliere di mezzo la dolce Duchessa e i suoi gattini. Nella notte, infatti, li abbandona in mezzo ai prati e tutto sembra perduto. Ma ecco apparire Romeo, un gatto randagio e casanova, un re dei vicoli che canta e si muove con un ritmo originale e accattivante. Romeo diventerà la loro guida in una sarabanda di peripezie, pericoli e avventure.",
    overviewImageUrl: `${import.meta.env.BASE_URL}images/5_gatti/manifesto.jpg`,
    detailImageUrl: `${import.meta.env.BASE_URL}images/5_gatti/gruppo.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/5_gatti/dietro_le_quinte.jpg`,
      `${import.meta.env.BASE_URL}images/5_gatti/prove.jpg`,
      `${import.meta.env.BASE_URL}images/5_gatti/scena_1.jpg`,
      `${import.meta.env.BASE_URL}images/5_gatti/scena_2.jpg`,
      `${import.meta.env.BASE_URL}images/5_gatti/scena_3.jpg`,
      `${import.meta.env.BASE_URL}images/5_gatti/scena_4.jpg`
    ],
    isCurrent: false,
    songUrl: `${import.meta.env.BASE_URL}songs/5_gatti_amici_per_sempre.wav`
  },
  {
    id: "rosaspina",
    title: "Rosaspina",
    season: "Stagione 2005-2006",
    shortDescription: "Sul palcoscenico la celebre fiaba dei fratelli Grimm: il castello ritrova la gioia per la nascita di una principessa, ma un'ombra improvvisa metterà a rischio il lieto fine...",
    description: "C'era una volta un re e una regina che desideravano tanto avere un bambino, ma che ahimè non arrivava mai. Tutti erano talmente tristi che al castello regnava un profondo silenzio. Perfino le due ancelle, quelle più pettegole, non osavano pronunciar parola. Un bel giorno arrivò un viandante che interruppe il silenzio, trovando la soluzione al grosso problema. Nacque la principessa e tutti vissero felici e contenti … ma la storia non finisce qui! Quello che accade dopo certamente non lo riveliamo, non vogliamo rovinarvi la sorpresa!",
    overviewImageUrl: `${import.meta.env.BASE_URL}images/4_rosaspina/manifesto.jpg`,
    detailImageUrl: `${import.meta.env.BASE_URL}images/4_rosaspina/gruppo.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/4_rosaspina/scena.jpg`,
      `${import.meta.env.BASE_URL}images/4_rosaspina/prove.jpg`,
      `${import.meta.env.BASE_URL}images/4_rosaspina/registrazione.jpg`,
      `${import.meta.env.BASE_URL}images/4_rosaspina/scenografia.jpg`,
      `${import.meta.env.BASE_URL}images/4_rosaspina/dietro_le_quinte.jpg`,
      `${import.meta.env.BASE_URL}images/4_rosaspina/trucco.jpg`
    ],
    isCurrent: false,
    songUrl: `${import.meta.env.BASE_URL}songs/4_rosaspina_il_pianto_della_regina.m4a`
  },
  {
    id: "tavolinomagico",
    title: "Il Tavolino Magico",
    season: "Stagione 2004",
    shortDescription: "Mandate via di casa a causa delle bugie di una capra, riusciranno le tre sorelle a superare tutte le sfide per tornare a casa?",
    description: "C'era una volta un sarto che aveva tre figlie ed una capra. Berta la capra nutriva tutti col suo latte. Ogni giorno Berta veniva portata al pascolo a turno dalle figlie.  La capra era molto bugiarda e diceva di essere trattata male dalle figlie del sarto. Quest 'ultimo, credendo a Berta invece che a Gina, Pina e a Lina le mandò una dopo l'altra via di casa. Col passar del tempo si accorse che aveva preso la decisione sbagliata e divenne triste. Le figlie, lontane da casa, impararono un mestiere. Ognuna aveva comunque tanta nostalgia della propria famiglia e perciò tutte e tre decisero di tornare dal padre. Sulla via del ritorno si ritrovarono per caso in una locanda gestita da due ladri maldestri che le derubarono dei loro doni.\nRiusciranno le figlie a riprendersi i loro preziosi oggetti e a ritornare a casa dal loro padre?",
    overviewImageUrl: `${import.meta.env.BASE_URL}images/3_tavolino/manifesto.jpg`,
    detailImageUrl: `${import.meta.env.BASE_URL}images/3_tavolino/gruppo.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/3_tavolino/scena.jpg`,
      `${import.meta.env.BASE_URL}images/3_tavolino/scenografe.jpg`,
      `${import.meta.env.BASE_URL}images/3_tavolino/maren.jpg`
    ],
    isCurrent: false,
    songUrl: `${import.meta.env.BASE_URL}songs/3_tavolino_insieme.m4a`
  },
  {
    id: "malok",
    title: "Malok e la sfortuna di De Scalognes",
    season: "Stagione 2002-2003",
    shortDescription: "Tra incantesimi da annullare e pasticci da rimediare, riuscirà la pigra strega Malok a salvare la situazione?",
    description: "L'indirizzo della strega Malok non lo trovate in internet e nemmeno sull'elenco telefonico, perché, nell'epoca in cui vive Malok, il telefono non è ancora stato inventato.\nLa nostra pigra e un po' pasticciona Malok dovrà risolvere una situazione davvero delicata e trovare un rimedio per risolvere tutti gli incantesimi.\nCi riuscirà? Venite a scoprirlo e divertitevi con noi!\n",
    overviewImageUrl: `${import.meta.env.BASE_URL}images/2_malok/manifesto.jpg`,
    detailImageUrl: `${import.meta.env.BASE_URL}images/2_malok/gruppo.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/2_malok/scena.jpg`,
      `${import.meta.env.BASE_URL}images/2_malok/trucco.jpg`,
      `${import.meta.env.BASE_URL}images/2_malok/maschere.jpg`,
      `${import.meta.env.BASE_URL}images/2_malok/prove.jpg`
    ],
    isCurrent: false,
    songUrl: `${import.meta.env.BASE_URL}songs/2_malok_oje_oje.m4a`
  },
  {
    id: "hamelin",
    title: "Il pifferaio di Hamelin",
    season: "Stagione 2001-2002",
    shortDescription: "Tra topi, avarizia e magia, chi vincerà la sfida tra il Mago e il Pifferaio per salvare la città di Hamelin?",
    description: "C'era una volta, nella città di Hamelin, un avido borgomastro di nome Otto Panzer, il quale pensava solo ad arricchirsi sulle spalle degli altri e non si curava affatto della pulizia della città.\nContinuò così finché un giorno quest'ultima fu letteralmente invasa dai topi. Per potersene liberare, Otto Panzer, insieme al suo Cancelliere, indisse un concorso. In molti furono attirati dalla lauta ricompensa, ma il Borgomastro e il Cancelliere eliminarono tutti i concorrenti eccetto due: il Mago Prostaferis e un buffo Pifferaio.\nRiusciranno i nostri eroi a riportare la città al suo antico splendore? Vieni a scoprirlo ascoltando il resto della storia...",
    overviewImageUrl: `${import.meta.env.BASE_URL}images/1_pifferaio/manifesto.jpg`,
    detailImageUrl: `${import.meta.env.BASE_URL}images/1_pifferaio/gruppo.jpg`,
    gallery: [
      `${import.meta.env.BASE_URL}images/1_pifferaio/preparativi.jpg`,
      `${import.meta.env.BASE_URL}images/1_pifferaio/scena_2001.jpg`,
      `${import.meta.env.BASE_URL}images/1_pifferaio/scena_mago.jpg`
    ],
    isCurrent: false
  }
];
