import React from 'react';
import { Link } from 'react-router-dom';
import { shows } from '../data/shows';
import ShowCard from '../components/ShowCard';

const Home: React.FC = () => {
  const currentShow = shows.find(s => s.isCurrent) || shows[0];

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(29, 53, 87, 0.8), rgba(29, 53, 87, 0.8)), url("${currentShow.imageUrl}")`
  };

  return (
    <div className="home-page">
      <section className="hero-section" style={heroStyle}>
        <div className="container">
          <div className="hero-content">
            <h1>Benvenuti su Favolando</h1>
            <p className="hero-subtitle">Compagnia Teatrale</p>
            <Link to="/upcoming" className="cta-button">Prossimi Spettacoli</Link>
          </div>
        </div>
      </section>

      <section className="current-production-section container">
        <h2 className="section-title">In Scena</h2>
        <Link to="/in-scena" className="show-card-link">
            <ShowCard
            title={currentShow.title}
            season={currentShow.season}
            description={currentShow.shortDescription}
            imageUrl={currentShow.imageUrl}
            credits={[]}
            />
        </Link>
      </section>

      <section className="teaser-section container">
        <div className="teaser-card">
          <h2>Nuova Produzione 2026</h2>
          <p>Stiamo lavorando a qualcosa di magico per voi!</p>
          <p className="teaser-date">La Prima è prevista per il 18 ottobre 2026</p>
          <Link to="/in-scena" className="text-link">Scopri di più &rarr;</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
