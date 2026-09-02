import PlaceholderBox from './PlaceholderBox';

export default function ProductCard({ title, tagline, description, details, modules = [], cta = 'View Product' }) {
  return (
    <article className="card product-card">
      <PlaceholderBox label="Kravient HMS product visual" className="media-box product-media" />
      {tagline ? <p className="product-tagline">{tagline}</p> : null}
      <h3>{title}</h3>
      <p>{description}</p>
      {details ? <p className="product-details">{details}</p> : null}
      {modules.length ? (
        <div className="module-list" aria-label={`${title} modules`}>
          {modules.map((module) => <span key={module}>{module}</span>)}
        </div>
      ) : null}
      <button className="button button-secondary" type="button">{cta}</button>
    </article>
  );
}
