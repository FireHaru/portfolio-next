'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Gallery({ photos, alt }) {
  const [trackIndex, setTrackIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const slideCount = photos.length + 2;
  const activeIndex = (trackIndex - 1 + photos.length) % photos.length;
  const slides = [photos[photos.length - 1], ...photos, photos[0]];

  useEffect(() => {
    if (photos.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setTrackIndex((index) => index + 1);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [photos.length]);

  function finishSlide(event) {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform') return;

    if (trackIndex === 0 || trackIndex === photos.length + 1) {
      setTransitionEnabled(false);
      setTrackIndex(trackIndex === 0 ? photos.length : 1);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }
  }

  function goTo(index) {
    setTrackIndex(index + 1);
  }

  return (
    <div className="photo-gallery" role="region" aria-roledescription="carousel" aria-label={alt}>
      <div
        className={`gallery-track${transitionEnabled ? '' : ' no-transition'}`}
        style={{
          width: `${slideCount * 100}%`,
          transform: `translate3d(-${trackIndex * (100 / slideCount)}%, 0, 0)`,
        }}
        onTransitionEnd={finishSlide}
      >
        {slides.map((photo, index) => (
          <Image
            className="gallery-image"
            key={`${photo}-${index}`}
            src={photo}
            width={1600}
            height={1000}
            sizes="(max-width: 680px) 82vw, 50vw"
            alt={index === trackIndex ? `${alt} — ảnh ${activeIndex + 1} trên ${photos.length}` : ''}
            aria-hidden={index !== trackIndex}
            style={{ flexBasis: `${100 / slideCount}%`, width: `${100 / slideCount}%` }}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
      {photos.length > 1 && (
        <>
          <button
            className="gallery-arrow gallery-prev"
            type="button"
            aria-label="Ảnh trước"
            onClick={() => setTrackIndex((index) => index - 1)}
          >
            <span className="gallery-chevron" aria-hidden="true" />
          </button>
          <button
            className="gallery-arrow gallery-next"
            type="button"
            aria-label="Ảnh tiếp theo"
            onClick={() => setTrackIndex((index) => index + 1)}
          >
            <span className="gallery-chevron" aria-hidden="true" />
          </button>
          <div className="gallery-pagination" aria-label="Chọn ảnh">
            {photos.map((photo, index) => (
              <button
                key={photo}
                className={index === activeIndex ? 'gallery-dot is-active' : 'gallery-dot'}
                type="button"
                aria-label={`Xem ảnh ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <span className="gallery-count" aria-live="polite">
            {activeIndex + 1} / {photos.length}
          </span>
        </>
      )}
    </div>
  );
}
