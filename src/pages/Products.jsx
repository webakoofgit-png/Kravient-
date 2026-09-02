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
                title="Software that keeps your hospital moving."
                description="Praavi Group builds simple, offline-first software for the businesses that every other tech company forgets: small hospitals, local shops, schools, farms, and everyday operations across Bharat. Kravient HMS is our first live product; it is the proof of a platform we are building out across dozens of industries, one product at a time. Whether it is a Kravient product you can start using today or a custom solution built around exactly what your business needs, everything we build follows one rule: if it is not simple enough to learn in a day, it is not ready to ship."
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
          <div className="product-grid product-grid--featured">
            {products.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                tagline={product.tagline}
                description={product.description}
                details={product.details}
                modules={product.modules}
                cta={product.cta}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="container">
          <SectionHeading
            title="Custom solution categories"
            description="From internal tools to full platforms, we build practical systems around the way your business actually works."
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

      <section className="section-frame section-frame--full-width">
        <div className="container container--wide">
          <SectionHeading
            title="Methodology"
            description="We understand the work, simplify the system, build for real-world conditions, and stay with you after launch."
          />
          <div className="methodology methodology--wide">
            {methodologySteps.map((step, index) => (
              <div key={step.title} className="method-step card">
                <span className="step-index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
