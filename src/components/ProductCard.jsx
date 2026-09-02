import ProductMockup from './ProductMockup';

export default function ProductCard({ title, tagline, description, details, modules = [], cta = 'View Product' }) {
  return (
    <article className="card product-card">
      <ProductMockup />
      <div className="product-copy">
        {tagline ? <p className="product-tagline">{tagline}</p> : null}
        <h3>{title}</h3>
        <p>{description}</p>
        {details ? <p className="product-details">{details}</p> : null}
        {modules.length ? (
          <div className="module-list" aria-label={`${title} modules`}>
            {modules.map((module) => <span key={module}>{module}</span>)}
          </div>
        ) : null}
        <button className="button button-primary" type="button">{cta} <span aria-hidden="true">↗</span></button>
      </div>
    </article>
  );
}
