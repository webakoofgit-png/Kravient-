import SectionHeading from '../components/SectionHeading';
import PlaceholderBox from '../components/PlaceholderBox';

export default function Contact() {
  return (
    <div className="page">
      <section className="section-frame">
        <div className="container">
          <SectionHeading
            eyebrow="Contact"
            title="Have a question about Kravient, want a custom solution built, or just want to talk to someone who will actually pick up?"
            description="Reach out. The draft still marks the real contact details as required inputs, so those fields remain clearly labelled placeholders."
          />
          <div className="contact-grid">
            <div className="card contact-copy">
              <h3>Get in touch</h3>
              <p>Have a question about Kravient, want a custom solution built, or just want to talk to someone who will actually pick up? Reach out.</p>
              <ul className="contact-list">
                <li>Email: [PROVIDE - e.g. hello@kravient.com]</li>
                <li>Phone: [PROVIDE]</li>
                <li>Office Address: [PROVIDE - Pune, confirm exact address]</li>
              </ul>
            </div>
            <form className="card contact-form" onSubmit={(event) => event.preventDefault()}>
              <div className="contact-form-grid">
                <label className="contact-field">
                  <span>Full Name</span>
                  <input type="text" name="fullName" autoComplete="name" />
                </label>
                <label className="contact-field">
                  <span>Company / Hospital Name</span>
                  <input type="text" name="organization" autoComplete="organization" />
                </label>
                <label className="contact-field">
                  <span>Email Address</span>
                  <input type="email" name="email" autoComplete="email" />
                </label>
                <label className="contact-field">
                  <span>Phone Number</span>
                  <input type="tel" name="phone" autoComplete="tel" />
                </label>
                <label className="contact-field">
                  <span>I&apos;m interested in</span>
                  <select name="interest" defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="hms">Kravient HMS</option>
                    <option value="custom">Custom Solution</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </label>
                <label className="contact-field contact-field--full">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us a little about your goals, timeline, or any details that matter."
                  />
                </label>
                <label className="contact-field contact-field--full">
                  <span>How did you hear about us?</span>
                  <input type="text" name="source" />
                </label>
              </div>

              <div className="contact-actions">
                <p className="contact-note">
                  Share as much context as you can. We&apos;ll come back with a practical next step.
                </p>
                <button className="button button-primary contact-submit" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="container">
          <PlaceholderBox label="Embed Google Maps link here after address is confirmed" className="map-box" />
        </div>
      </section>
    </div>
  );
}
