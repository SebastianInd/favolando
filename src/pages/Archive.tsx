import React from 'react';
import ShowCard from '../components/ShowCard';

const Archive: React.FC = () => {
  const pastShows = [
    {
      title: "Prezzemolina",
      season: "Stagione 2018-2019",
      description: "Una fiaba classica rivisitata con brio e colori.",
      imageUrl: `${import.meta.env.BASE_URL}images/prezzemolina.png`,
      credits: [
      ]
    },
    {
      title: "Il Pifferaio Magico",
      season: "Stagione 2016-2017",
      description: "La leggenda di Hamelin prende vita sul palco.",
      imageUrl: `${import.meta.env.BASE_URL}images/pifferaio.png`,
      credits: []
    },
    {
      title: "Aladino",
      season: "Stagione 2013-2015",
      description: "Un viaggio da mille e una notte.",
      imageUrl: `${import.meta.env.BASE_URL}images/aladino.png`,
      credits: []
    }
  ];

  return (
    <div className="archive-page container">
      <h1 className="page-title">Archivio Spettacoli</h1>
      <div className="shows-grid">
        {pastShows.map((show, index) => (
          <ShowCard key={index} {...show} />
        ))}
      </div>
    </div>
  );
};

export default Archive;
