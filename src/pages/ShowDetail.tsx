import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { shows, type Show } from '../data/shows';

const ShowDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [show, setShow] = useState<Show | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If id is present, find by id.
    // If no id (e.g. /in-scena route), find the current show.
    let foundShow: Show | undefined;
    
    // We can determine context based on the URL or passed props, 
    // but looking at the route pattern is safer.
    // If this component is mounted at /in-scena, we want the current show.
    // However, useParams won't have 'id' for /in-scena unless we define it that way.
    // A clearer way is to check the current logic or verify if 'id' exists.
    
    if (id) {
        foundShow = shows.find(s => s.id === id);
    } else {
        // Assume "In Scena" context if no ID matches
        foundShow = shows.find(s => s.isCurrent);
    }

    setShow(foundShow || null);
    setLoading(false);
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!show) return <Navigate to="/" replace />; // Or a 404 page

  return (
    <div className="show-detail-page container">
      <div className="show-header">
        <h1 className="page-title">{show.title}</h1>
        <p className="show-season">{show.season}</p>
      </div>

      <div className="show-content">
        <div className="show-image-container">
            <img src={show.imageUrl} alt={show.title} className="show-main-image" />
        </div>
        
        <div className="show-info">
            <div className="info-section description">
                <h3>Trama</h3>
                <p>{show.description}</p>
            </div>

            {show.isCurrent && show.duration && (
                <div className="info-section duration">
                    <h3>Durata</h3>
                    <p>{show.duration}</p>
                </div>
            )}

            {show.director && (
                <div className="info-section director">
                   <h3>Regia</h3>
                   <p>{show.director}</p>
                </div>
            )}
            
            {show.music && (
                <div className="info-section music">
                   <h3>Musiche</h3>
                   <p>{show.music}</p>
                </div>
            )}

            {show.actors && show.actors.length > 0 && (
                <div className="info-section actors">
                    <h3>Attori</h3>
                    <ul>
                        {show.actors.map((actor, idx) => (
                            <li key={idx}>
                                <strong>{actor.character}:</strong> {actor.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {show.customData && show.customData.length > 0 && (
                <div className="show-custom-data">
                    {show.customData.map((data, idx) => (
                        <div key={idx} className="info-section custom-data">
                            <h3>{data.title}</h3>
                            <p>{data.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
