import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { navigation } from '../data/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container header-shell">
        <div className="header-inner">
          <Link to="/" className="brand" aria-label="Kravient home">
            <span className="brand-mark">K</span>
            <span>KRAVIENT</span>
          </Link>

          <div className="header-right">
            <button className="menu-toggle menu-toggle--label" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="site-nav-panel" aria-label="Toggle navigation">
              <span className="hamburger" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="menu-text">Menu</span>
            </button>
            <nav id="site-nav-panel" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Primary">
              {navigation.map((item) => (
                <NavLink key={item.path} to={item.path} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
