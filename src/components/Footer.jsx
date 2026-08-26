import { Link } from 'react-router-dom';
import { navigation } from '../data/navigation';
import instagramIcon from '../assets/socials/instagram.png';
import twitterIcon from '../assets/socials/twitter.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand footer-logo">
              <span className="brand-mark">K</span>
              <span>KRAVIENT</span>
            </div>
            <p className="footer-copy">
              Kravient builds practical digital systems for SaaS teams and custom product delivery.
              Clear thinking, disciplined execution, and a clean handoff are part of the package.
            </p>
          </div>

          <div className="footer-links-group">
            <h3>Navigation</h3>
            <ul className="footer-links footer-links-columns">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social-group">
            <h3>Social</h3>
            <div className="social-row">
              <a
                className="social-box"
                href="https://www.instagram.com/kravient?igsh=MTE5ZXkzNW1wbXYzeg=="
                target="_blank"
                rel="noreferrer"
                aria-label="Kravient Instagram"
              >
                <img className="social-icon-image" src={instagramIcon} alt="" aria-hidden="true" width="24" height="24" />
              </a>
              <span className="social-box" aria-label="Kravient LinkedIn" title="LinkedIn">
                <span className="linkedin-mark" aria-hidden="true">in</span>
              </span>
              <span className="social-box" aria-label="Kravient Twitter" title="Twitter">
                <img className="social-icon-image" src={twitterIcon} alt="" aria-hidden="true" width="24" height="24" />
              </span>
            </div>
          </div>
        </div>
        <div className="footer-banner">
          <span className="footer-banner-label">Let&apos;s build something useful.</span>
          <span className="footer-banner-copy">Product strategy, design, and engineering aligned around one delivery system.</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>Copyright 2026 Kravient</span>
      </div>
    </footer>
  );
}
