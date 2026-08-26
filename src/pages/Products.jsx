import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import { customSolutions, methodologySteps, productStats, products } from '../data/products';

export default function Products() {
  return (
    <div className="page">
      <section className="section-frame">
        <div className="container">
          <div className="page-intro-grid">
            <div>
              <SectionHeading
                eyebrow="Products"
                title="We build software that works where the internet does not."
                description="Praavi Group builds simple, offline-first software for the businesses that every other tech company forgets: small hospitals, local shops, schools, farms, and everyday operations across Bharat."
              />
            </div>
            <div className="stat-box card">
              <span className="stat-value">{productStats.total}</span>
              <span className="stat-label">{productStats.label}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="container">
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.title} title={product.title} description={product.description} cta={product.cta} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="container">
          <SectionHeading
            title="Custom solution categories"
            description="A starting structure for Praavi's consultancy services, based on the draft and ready to be renamed if you send the final service lines."
          />
          <div className="custom-grid">
            {customSolutions.map((item) => (
              <article key={item.title} className="card custom-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="container">
          <SectionHeading
            title="Methodology"
            description="The process from the draft, written in the order it was provided."
          />
          <div className="methodology">
            {methodologySteps.map((step, index) => (
              <div key={step} className="method-step card">
                <span className="step-index">0{index + 1}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
