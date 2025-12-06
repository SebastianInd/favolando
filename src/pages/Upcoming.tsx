import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

interface ShowEvent {
  Date: string;
  City: string;
  Venue: string;
  Time: string;
  TicketLink?: string;
}

const Upcoming: React.FC = () => {
  const [events, setEvents] = useState<ShowEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Papa.parse(`${import.meta.env.BASE_URL}upcoming_shows.csv`, {
      download: true,
      header: true,
      complete: (results) => {
        setEvents(results.data as ShowEvent[]);
        setLoading(false);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
        setLoading(false);
      }
    });
  }, []);

  return (
    <div className="upcoming-page container">
      <h1 className="page-title">Prossimi Spettacoli</h1>
      
      <div className="upcoming-intro">
        <p>Non perderti le nostre prossime date! Ecco dove potrai trovarci.</p>
      </div>

      {loading ? (
        <div className="loading">Caricamento date...</div>
      ) : (
        <div className="events-list">
          {events.length > 0 ? (
            <table className="events-table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Città</th>
                  <th>Luogo</th>
                  <th>Ora</th>
                  <th>Biglietti</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  event.Date && ( // Filter out empty lines
                    <tr key={index}>
                      <td data-label="Data">{event.Date}</td>
                      <td data-label="Città">{event.City}</td>
                      <td data-label="Luogo">{event.Venue}</td>
                      <td data-label="Ora">{event.Time}</td>
                      <td data-label="Biglietti">
                        {event.TicketLink ? (
                          <a href={event.TicketLink} target="_blank" rel="noopener noreferrer" className="ticket-btn">
                            Acquista
                          </a>
                        ) : (
                          <span className="no-link">-</span>
                        )}
                      </td>
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-events">Al momento non ci sono date confermate. Torna a trovarci presto!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Upcoming;
