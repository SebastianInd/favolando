import React, { useEffect, useRef, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { shows, type Show } from '../data/shows';

const ShowDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [show, setShow] = useState<Show | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let foundShow: Show | undefined;
    if (id) {
      foundShow = shows.find(s => s.id === id);
    } else {
      foundShow = shows.find(s => s.isCurrent);
    }
    setShow(foundShow || null);
    setLoading(false);
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!show) return <Navigate to="/" replace />;

  return (
    <div className="show-detail-page container">
      <div className="show-header">
        <h1 className="page-title">{show.title}</h1>
        <p className="show-season">{show.season}</p>
      </div>

      <div className="show-content">
        <div className="show-image-container-detail">
          <img src={show.detailImageUrl} alt={show.title} className="show-main-image" />
        </div>

        <div className="show-info">
          <div className="info-section description">
            <h3>Trama</h3>
            <p>{show.description || show.shortDescription}</p>
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

          {show.songUrl && (
            <div className="info-section song">
              <h3>Canzone</h3>
              <audio controls style={{ width: '100%' }}>
                <source
                  src={show.songUrl}
                  type={
                    show.songUrl.toLowerCase().endsWith('.wav')
                      ? 'audio/wav'
                      : show.songUrl.toLowerCase().endsWith('.mp3')
                      ? 'audio/mpeg'
                      : 'audio/mp4'
                  }
                />
                Il tuo browser non supporta l'elemento audio.
              </audio>
              {show.songLyrics && <LyricsAccordion lyrics={show.songLyrics} songTitle={show.songTitle} />}
            </div>
          )}

          {show.videos && show.videos.length > 0 && (
            <div className="info-section videos-section">
              <h3>Video</h3>
              <div className="videos-grid">
                {show.videos.map((video, idx) => (
                  <div key={idx} className="video-item">
                    <h4>{video.title}</h4>
                    <video controls width="100%">
                      <source
                        src={video.url}
                        type={video.url.toLowerCase().endsWith('.m4v') ? 'video/mp4' : 'video/mp4'}
                      />
                      Il tuo browser non supporta il tag video.
                    </video>
                  </div>
                ))}
              </div>
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

      {show.gallery && show.gallery.length > 0 && (
        <GallerySection images={show.gallery} title={show.title} />
      )}
    </div>
  );
};

/* ── Lyrics Accordion ────────────────────────────────────────────── */
interface LyricsAccordionProps {
  lyrics: string;
  songTitle?: string;
}

const LyricsAccordion: React.FC<LyricsAccordionProps> = ({ lyrics, songTitle }) => {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`lyrics-accordion${open ? ' lyrics-accordion--open' : ''}`}>
      <button
        className="lyrics-toggle"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        id="lyrics-toggle-btn"
      >
        <span className="lyrics-toggle-label">
          <svg className="lyrics-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 18V6l12-2v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.8" fill="none"/>
            <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.8" fill="none"/>
          </svg>
          {songTitle ? <>Canta con noi: <em>{songTitle}</em></> : 'Canta con noi'}
        </span>
        <svg
          className="lyrics-chevron"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </button>
      <div
        ref={bodyRef}
        className="lyrics-body"
        style={{
          maxHeight: open
            ? `${bodyRef.current?.scrollHeight ?? 2000}px`
            : '0px',
        }}
        aria-hidden={!open}
      >
        <pre className="lyrics-text">{lyrics.trim()}</pre>
      </div>
    </div>
  );
};

/* ── Lightbox-enabled Gallery ─────────────────────────────────────── */
interface GallerySectionProps {
  images: string[];
  title: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ images, title }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (idx: number) => setLightboxIndex(idx);
  const close = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex(i => (i !== null ? (i - 1 + images.length) % images.length : 0));
  const next = () =>
    setLightboxIndex(i => (i !== null ? (i + 1) % images.length : 0));

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  return (
    <>
      <div className="gallery-section">
        <h2 className="section-title">Galleria</h2>
        <div className="gallery-grid">
          {images.map((imgUrl, idx) => (
            <div
              key={idx}
              className="gallery-item"
              onClick={() => open(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Apri immagine ${idx + 1}`}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && open(idx)}
            >
              <img src={imgUrl} alt={`${title} gallery image ${idx + 1}`} className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-zoom-icon">&#43;</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox-backdrop" onClick={close} aria-modal="true" role="dialog">
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={close} aria-label="Chiudi">&times;</button>
            <button className="lightbox-nav lightbox-prev" onClick={prev} aria-label="Precedente">
              &#8249;
            </button>
            <img
              src={images[lightboxIndex]}
              alt={`${title} – immagine ${lightboxIndex + 1}`}
              className="lightbox-img"
            />
            <button className="lightbox-nav lightbox-next" onClick={next} aria-label="Successiva">
              &#8250;
            </button>
            <div className="lightbox-counter">{lightboxIndex + 1} / {images.length}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowDetail;
