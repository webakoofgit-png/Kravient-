import PlaceholderBox from './PlaceholderBox';

export default function CaseStudyCard({ title, description, info, reverse = false }) {
  return (
    <article className={`case-study ${reverse ? 'reverse' : ''}`}>
      <PlaceholderBox label="Case Study Image" className="case-study-media" />
      <div className="case-study-content card">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="info-list">
          {info.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <span className="case-study-status">Full case study coming soon</span>
      </div>
    </article>
  );
}
