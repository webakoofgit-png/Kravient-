import PlaceholderBox from './PlaceholderBox';

export default function ProductCard({ title, description, cta = 'View Product' }) {
  return (
    <article className="card product-card">
      <PlaceholderBox label="Product Image" className="media-box" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="button button-secondary" type="button">{cta}</button>
    </article>
  );
}
