import PlaceholderBox from './PlaceholderBox';

export default function TechnologyGrid({ technologies }) {
  return (
    <div className="tech-grid">
      {technologies.map((technology, index) => (
        <PlaceholderBox key={`${technology}-${index}`} label={technology} className="tech-box" />
      ))}
    </div>
  );
}
