import React from 'react';
import { Link } from 'react-router-dom';
import { shows } from '../data/shows';
import ShowCard from '../components/ShowCard';

const Home: React.FC = () => {
  const currentShow = shows.find(s => s.isCurrent) || shows[0];

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(29, 53, 87, 0.8), rgba(29, 53, 87, 0.8)), url("${currentShow.overviewImageUrl}")`
  };

  return (
    <div className="home-page">
      <section className="hero-section" style={heroStyle}>
        <div className="container">
          <div className="hero-content">
            <h1>Benvenuti su FaVolando</h1>
            <p className="hero-subtitle">Compagnia teatrale</p>
            <Link to="/upcoming" className="cta-button">Prossimi spettacoli</Link>
          </div>
        </div>
      </section>

      <section className="current-production-section container">
        <h2 className="section-title">In scena</h2>
        <Link to="/in-scena" className="show-card-link">
            <ShowCard
            title={currentShow.title}
            season={currentShow.season}
            description={currentShow.shortDescription}
            imageUrl={currentShow.overviewImageUrl}
            credits={[]}
            />
        </Link>
      </section>

      <section className="contact-section container">
        <div className="contact-card">
          <h2>Contatti</h2>
          <p>FaVolando | Via Credera 15 | 6987 Caslano</p>
          <p className="contact-info">
            <a href="mailto:compagnia.favolando@gmail.com" className="text-link">compagnia.favolando@gmail.com</a>
          </p>
          <p className="contact-info">
            <a href="tel:+41764539414" className="text-link">+41 76 453 94 14</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
