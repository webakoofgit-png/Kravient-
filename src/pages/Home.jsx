import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import PlaceholderBox from '../components/PlaceholderBox';
import FeatureCard from '../components/FeatureCard';
import AutoCarousel from '../components/AutoCarousel';

const features = [
  {
    title: 'Works Without Internet',
    text: 'Full functionality, zero connectivity required. Sync happens automatically when you are back online.',
  },
  {
    title: 'Learn It in a Day',
    text: 'No training manuals, no IT department needed. If your staff cannot learn it by evening, we have not done the job.',
  },
  {
    title: 'One Simple Price',
    text: 'No hidden modules, no per-user pricing, no surprise renewal hikes.',
  },
  {
    title: 'Built in India, for India',
    text: 'Built for how Indian businesses actually work, with infrastructure and workflows that fit the market.',
  },
];

const heroHighlights = ['4 Years of client work', '1 Live Product', 'Offline-first by design'];

const carouselItems = [
  {
    label: 'Operations',
    kicker: 'Live workflow',
    title: 'Order Desk',
    text: 'A simple queue for incoming requests, approvals, and daily handoffs.',
  },
  {
    label: 'Finance',
    kicker: 'Kravient HMS',
    title: 'Billing Hub',
    text: 'Billing, collections, and due-date reminders in one focused workflow.',
  },
  {
    label: 'Inventory',
    kicker: 'Kravient platform',
    title: 'Stock Monitor',
    text: 'Stock levels, reorder alerts, and movement history without operational clutter.',
  },
  {
    label: 'Support',
    kicker: 'Kravient platform',
    title: 'Help Desk',
    text: 'Tickets, status tags, and response tracking in a straightforward queue.',
  },
  {
    label: 'People',
    kicker: 'Kravient platform',
    title: 'Team Board',
    text: 'Employees, shifts, and simple access controls arranged for daily use.',
  },
  {
    label: 'Analytics',
    kicker: 'Kravient platform',
    title: 'Insight Panel',
    text: 'Charts, summaries, and performance signals in a calm overview.',
  },
  {
    label: 'Docs',
    kicker: 'Kravient platform',
    title: 'File Vault',
    text: 'Attachments, notes, and templates organized for quick retrieval.',
  },
  {
    label: 'Mobile',
    kicker: 'Responsive',
    title: 'Field App',
    text: 'A compact mobile-friendly module for on-the-go tasks and updates.',
  },
];

export default function Home() {
  return (
    <div className="page">
      <section className="hero-section section-frame">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Praavi Group</p>
            <h1 className="hero-title">
              <span className="hero-title-line hero-title-part--orange">One platform. Every</span>
              <span className="hero-title-line hero-title-part--white">Bharat business.</span>
              <span className="hero-title-line hero-title-part--white">Built to work</span>
              <span className="hero-title-line hero-title-part--green">without the internet.</span>
            </h1>
            <p className="muted">
              Kravient is building the software layer for businesses the tech industry has always overlooked: small hospitals, local shops, schools, farms, clinics, and service businesses across every corner of the country.
            </p>
            <div className="hero-highlight-row">
              {heroHighlights.map((item) => (
                <span key={item} className="hero-pill">{item}</span>
              ))}
            </div>
            <div className="button-row">
              <Link className="button button-primary" to="/products">See Kravient HMS</Link>
              <Link className="button button-secondary" to="/why-kravient">Why Kravient</Link>
            </div>
          </div>
          <PlaceholderBox label="Hero Visual" className="hero-media" />
        </div>
      </section>

      <section className="section-frame">
        <div className="container">
          <div className="home-stat-row">
            <div className="card stat-card">
              <strong>4</strong>
              <span>Years of client work</span>
            </div>
            <div className="card stat-card">
              <strong>1</strong>
              <span>Live product today</span>
            </div>
            <div className="card stat-card">
              <strong>Offline</strong>
              <span>First by default</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="container">
          <div className="feature-grid">
            {features.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} text={feature.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="container">
          <SectionHeading
            eyebrow="Offerings"
            title="Software for teams that need it to work on day one."
            description="Kravient HMS is the first live product. Custom solutions are built with the same rule: if it is not simple enough to learn in a day, it is not ready to ship."
          />
          <div className="split-grid">
            <article className="card offer-card">
              <h3>Kravient HMS</h3>
              <p>Simplicity at scale. Six modules, offline-first sync, and a setup that is ready by evening.</p>
              <p>Built for small hospitals in Tier-3 and Tier-4 India that need hospital software without the usual friction.</p>
              <Link className="button button-secondary" to="/products">View product details</Link>
            </article>
            <article className="card offer-card">
              <h3>Custom-Built Solutions</h3>
              <p>We build simple, offline-first software for businesses that every other tech company forgets.</p>
              <p>From internal tools to full platforms, the approach stays the same: practical, reliable, and designed for the reality on the ground.</p>
              <Link className="button button-secondary" to="/contact">Talk to us</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="container">
          <AutoCarousel
            title="Built for the conditions our clients actually operate in"
            description="Poor internet, low-end devices, and non-technical users are not edge cases for us. They are the baseline."
            items={carouselItems}
          />
        </div>
      </section>
    </div>
  );
}
