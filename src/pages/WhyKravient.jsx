import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import PlaceholderBox from '../components/PlaceholderBox';
import VideoPlaceholder from '../components/VideoPlaceholder';
import { roadmap } from '../data/products';

const benefits = [
  {
    title: 'Works Without Internet',
    text: 'Full functionality, zero connectivity required. Sync happens automatically when you are back online.',
  },
  {
    title: 'Learn It in a Day',
    text: 'No training manuals, no IT department needed. If your staff cannot learn it by evening, we have not done our job.',
  },
  {
    title: 'One Simple Price',
    text: 'No hidden modules, no per-user pricing, no surprise renewal hikes.',
  },
  {
    title: 'Built in India, for India',
    text: 'Data hosted in India (AWS Mumbai), built to meet how Indian businesses and Indian regulations actually work.',
  },
];

const compactProducts = [
  'Kravient HMS - Hospital management, offline-first, Rs 7,000/year',
  'More Kravient products are on the way',
];

export default function WhyKravient() {
  return (
    <div className="page">
      <section className="section-frame">
        <div className="container">
          <SectionHeading
            eyebrow="Why Kravient"
            title="One platform. Every Bharat business. Built to work without the internet."
            description="Kravient is building the software layer for businesses India's tech industry has always overlooked: small hospitals, local shops, schools, farms, clinics, and service businesses across every corner of the country. Kravient HMS, our hospital management system, is live today. It is the first proof of a much larger platform built for every industry that runs Bharat's economy."
          />
          <div className="why-grid">
            <div className="card intro-card">
              <h3>Offline-first is the foundation</h3>
              <p>
                Offline-first is not a feature added to one product. It is the foundation everything at Kravient is built on.
              </p>
              <p>
                Every Kravient product, starting with HMS, works fully offline and syncs automatically the moment connectivity returns.
                No business should stop running because the internet did.
              </p>
              <div className="button-row">
                <Link className="button button-primary" to="/products">
                  See Kravient HMS in Action
                </Link>
                <Link className="button button-secondary" to="/contact">
                  Start Your Free 30-Day Trial
                </Link>
              </div>
            </div>
            <VideoPlaceholder />
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="container">
          <SectionHeading
            title="Benefits"
            description="Offline-first is not a feature added to one product. It is the foundation everything at Kravient is built on."
          />
          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="card benefit-card">
                <PlaceholderBox label="Icon" className="icon-box" />
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="container">
          <SectionHeading
            title="The first product is live"
            description="More Kravient products are on the way, each built around the same practical foundation."
          />
          <div className="compact-product-grid">
            {compactProducts.map((title, index) => (
              <div key={title} className={`card compact-product ${index === 0 ? 'compact-product--live' : 'compact-product--roadmap'}`}>
                <span className="product-status">{index === 0 ? 'Live today' : 'Platform direction'}</span>
                <PlaceholderBox label={index === 0 ? 'Kravient HMS' : 'Kravient platform'} className="compact-logo" />
                <strong>{index === 0 ? 'Kravient HMS' : 'More products are on the way'}</strong>
                <span>{index === 0 ? 'Hospital management, offline-first, ₹7,000/year.' : title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="container">
          <SectionHeading
            eyebrow="Platform roadmap"
            title="A platform for every part of Bharat's economy."
            description="The roadmap spans 50 products across industries, starting with the live HMS platform. Planned products are shown clearly as planned; Kravient HMS is live today."
          />
          <div className="roadmap-grid">
            {roadmap.map((group) => (
              <article key={group.category} className="card roadmap-card">
                <div className="roadmap-card-heading">
                  <h3>{group.category}</h3>
                  <span>Planned</span>
                </div>
                <div className="roadmap-products">
                  {group.products.map((product) => (
                    <span key={product} className={product === 'Kravient HMS' ? 'is-live' : ''}>
                      {product}
                      {product === 'Kravient HMS' ? <small>Live</small> : null}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
