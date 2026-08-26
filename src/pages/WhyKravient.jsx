import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import PlaceholderBox from '../components/PlaceholderBox';
import VideoPlaceholder from '../components/VideoPlaceholder';

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
    text: 'Data hosted in India and built to match how Indian businesses actually operate.',
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
            description="Kravient is building the software layer for businesses India's tech industry has always overlooked: small hospitals, local shops, schools, farms, clinics, and service businesses across every corner of the country."
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
            description="The four pillars from the draft, kept in the same card layout."
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
            title="Product strip"
            description="A compact summary of the live product and the platform direction."
          />
          <div className="compact-product-grid">
            {compactProducts.map((title) => (
              <div key={title} className="card compact-product">
                <PlaceholderBox label="Product Logo" className="compact-logo" />
                <span>{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
