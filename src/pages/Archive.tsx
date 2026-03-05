import React from 'react';
import { Link } from 'react-router-dom';
import ShowCard from '../components/ShowCard';
import { shows } from '../data/shows';

const Archive: React.FC = () => {
  const pastShows = shows.filter(show => !show.isCurrent);

  return (
    <div className="archive-page container">
      <h1 className="page-title">Archivio Spettacoli</h1>
      <div className="shows-grid">
        {pastShows.map((show) => (
          <Link to={`/archivio/${show.id}`} key={show.id} className="show-card-link">
            <ShowCard
                title={show.title}
                season={show.season}
                description={show.shortDescription}
                imageUrl={show.imageUrl}
                credits={[]} // ShowCard expects credits, we can pass empty or adapt ShowCard later
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Archive;
