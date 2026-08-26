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
            description="Praavi Group started as Praavi Consultants four years ago, building software for businesses that needed it done right, not done fast and forgotten. Kravient is the first product, built on the same discipline."
          />
          <div className="about-overview">
            <PlaceholderBox label="Company Image" className="about-media" />
            <div className="card about-copy">
              <h3>Company Overview</h3>
              <p>
                Kravient is our first product. It carries the same discipline we have applied to client work for four years,
                now built into something businesses can pick up off the shelf.
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
          <SectionHeading title="Core Values" description="The four values from the draft, now written out fully." />
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
            description="The draft says this section still needs names, roles, and photos. I have left it as a clear placeholder instead of inventing staff."
          />
          <article className="card team-card">
            <PlaceholderBox label="Team details pending" className="portrait-box" />
            <h3>Need from Malhar</h3>
            <p>Names, roles, and photos for the public team page.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
