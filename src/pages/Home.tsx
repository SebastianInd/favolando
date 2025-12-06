import React from 'react';
import { Link } from 'react-router-dom';
import ShowCard from '../components/ShowCard';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
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
        <ShowCard
          title="Il trapasso con fracasso"
          season="Stagione 2023-2024"
          description="Una commedia esilarante che affronta temi profondi con leggerezza e ironia. Un viaggio tra il ridicolo e il sublime."
          imageUrl="/images/trapasso.png"
          credits={[]}
        />
      </section>

      <section className="teaser-section container">
        <div className="teaser-card">
          <h2>Nuova Produzione 2025</h2>
          <p>Stiamo lavorando a qualcosa di magico per voi!</p>
          <p className="teaser-date">La Prima è prevista per l'inizio del 2025</p>
          <Link to="/upcoming" className="text-link">Scopri di più &rarr;</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
