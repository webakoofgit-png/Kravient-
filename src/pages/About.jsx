import SectionHeading from '../components/SectionHeading';
import PlaceholderBox from '../components/PlaceholderBox';

const values = [
  {
    title: 'Simplicity, Always',
    text: 'If it needs a manual, we have failed.',
  },
  {
    title: 'Built to Last',
    text: 'We design for 50 years, not 5.',
  },
  {
    title: 'Bharat First',
    text: "We build for how India actually works, not how urban SaaS assumes it does.",
  },
  {
    title: 'Bootstrapped by Choice',
    text: 'Discipline over speed. Ownership over funding.',
  },
];

export default function About() {
  return (
    <div className="page">
      <section className="section-frame">
        <div className="container">
          <SectionHeading
            eyebrow="About Us"
            title="Built for the businesses that need software done right, not done fast and forgotten."
            description="Praavi Group started as Praavi Consultants four years ago, building software for businesses that needed it done right, not done fast and forgotten. Kravient is our first product: the same discipline applied to a product businesses can pick up off the shelf."
          />
          <div className="about-overview">
            <PlaceholderBox label="Company Image" className="about-media" />
            <div className="card about-copy">
              <h3>Company Overview</h3>
              <p>
                Praavi Group started as Praavi Consultants four years ago, building software for businesses that needed it done right, not done fast and forgotten. Kravient is our first product, carrying that same discipline into something businesses can pick up off the shelf.
              </p>
              <p>
                We are bootstrapped, deliberately. No outside investors, no shortcuts, just software that works and a business built to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="container">
          <div className="two-card-grid">
            <article className="card">
              <h3>Mission Statement</h3>
              <p>To build software so simple, any business, regardless of location, connectivity, or technical skill, can run on it without friction.</p>
            </article>
            <article className="card">
              <h3>Vision Statement</h3>
              <p>A future where the smallest hospital in the smallest town has access to the same quality of software as a hospital in a metro at a price that makes sense for where it operates.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="container">
          <SectionHeading title="Core values" description="The principles behind how we build, ship, and support software." />
          <div className="value-grid">
            {values.map((value) => (
              <article key={value.title} className="card simple-card">
                <PlaceholderBox label="Icon" className="icon-box" />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="container">
          <SectionHeading
            title="Team"
            description="The people behind Praavi will be introduced here as the team details are ready to share."
          />
          <article className="card team-card">
            <PlaceholderBox label="Team details pending" className="portrait-box" />
            <h3>A team built around the work</h3>
            <p>Team profiles, roles, and portraits will be added here as the public team page is finalized.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
