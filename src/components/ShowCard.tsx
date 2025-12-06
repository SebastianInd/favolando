import React from 'react';

interface ShowCardProps {
  title: string;
  season?: string;
  description?: string;
  imageUrl?: string;
  credits?: { role: string; name: string }[];
}

const ShowCard: React.FC<ShowCardProps> = ({ title, season, description, imageUrl, credits }) => {
  return (
    <div className="show-card">
      {imageUrl && (
        <div className="show-image-container">
          <img src={imageUrl} alt={`Locandina di ${title}`} className="show-image" />
        </div>
      )}
      <div className="show-details">
        {season && <span className="show-season">{season}</span>}
        <h3 className="show-title">{title}</h3>
        {description && <p className="show-description">{description}</p>}
        
        {credits && credits.length > 0 && (
          <div className="show-credits">
            {credits.map((credit, index) => (
              <div key={index} className="credit-item">
                <strong>{credit.role}:</strong> {credit.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowCard;
