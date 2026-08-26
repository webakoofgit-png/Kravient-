import PlaceholderBox from './PlaceholderBox';

export default function FeatureCard({ title, text }) {
  return (
    <article className="card feature-card">
      <PlaceholderBox label="Icon" className="icon-box" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
