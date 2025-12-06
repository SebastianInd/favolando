import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {currentYear} Compagnia Teatrale Favolando. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;
