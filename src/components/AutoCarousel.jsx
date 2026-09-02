import { useEffect, useRef } from 'react';
import PlaceholderBox from './PlaceholderBox';

export default function AutoCarousel({ items, title, description, eyebrow = null }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) {
      return undefined;
    }

    let animationFrame = 0;
    let lastTime = 0;
    let paused = false;

    const pause = () => {
      paused = true;
    };

    const resume = () => {
      paused = false;
      lastTime = 0;
    };

    const tick = (time) => {
      if (!paused) {
        if (!lastTime) {
          lastTime = time;
        }

        const delta = time - lastTime;
        lastTime = time;

        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 0) {
          viewport.scrollLeft += delta * 0.045;
          if (viewport.scrollLeft >= halfWidth) {
            viewport.scrollLeft -= halfWidth;
          }
        }
      }

      animationFrame = window.requestAnimationFrame(tick);
    };

    viewport.addEventListener('mouseenter', pause);
    viewport.addEventListener('mouseleave', resume);
    viewport.addEventListener('focusin', pause);
    viewport.addEventListener('focusout', resume);

    animationFrame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      viewport.removeEventListener('mouseenter', pause);
      viewport.removeEventListener('mouseleave', resume);
      viewport.removeEventListener('focusin', pause);
      viewport.removeEventListener('focusout', resume);
    };
  }, []);

  const loopedItems = [...items, ...items];

  return (
    <section className="carousel-shell" aria-label={title}>
      <div className="carousel-heading">
        <div className="carousel-heading-copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          {description ? <p className="muted carousel-description">{description}</p> : null}
        </div>
      </div>

      <div className="carousel-viewport" ref={viewportRef} tabIndex={0}>
        <div className="carousel-track" ref={trackRef}>
          {loopedItems.map((item, index) => (
            <article key={`${item.title}-${index}`} className="card carousel-card">
              <PlaceholderBox label={item.label} className="carousel-card-visual" />
              <div className="carousel-card-copy">
                <p className="carousel-card-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
