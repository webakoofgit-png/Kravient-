import PlaceholderBox from './PlaceholderBox';

function MarqueeRow({ items, direction, label }) {
  const repeatedGroups = [0, 1, 2];

  return (
    <div className="tech-row">
      <div className={`tech-track tech-track--${direction}`} aria-label={label}>
        {repeatedGroups.map((groupIndex) => (
          <div
            key={`${direction}-group-${groupIndex}`}
            className="tech-group"
            aria-hidden={groupIndex > 0 ? 'true' : undefined}
          >
            {items.map((technology, index) => (
              <PlaceholderBox
                key={`${direction}-${groupIndex}-${technology}-${index}`}
                label={technology}
                className="tech-box"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechnologyGrid({ technologies }) {
  return (
    <div className="tech-marquee">
      <MarqueeRow items={technologies} direction="left" label="Technology modules carousel" />
      <MarqueeRow
        items={technologies}
        direction="right"
        label="Technology modules carousel moving in reverse"
      />
    </div>
  );
}
