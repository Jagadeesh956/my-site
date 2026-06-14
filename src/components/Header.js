import React from 'react';
import './Header.css';

const menuSections = [
  { label: 'About', href: '#about', icon: '👤' },
  {
    label: 'Experience',
    icon: '💼',
    subItems: [
      { label: 'Current Role', href: '#experience' },
      { label: 'Previous Roles', href: '#experience' },
    ],
  },
  {
    label: 'Education',
    icon: '🎓',
    subItems: [{ label: 'Cleveland State University', href: '#education' }],
  },
  {
    label: 'Blogs',
    icon: '📝',
    subItems: [
      { label: 'Getting Started', href: '#blogs' },
      { label: 'Advanced Topics', href: '#blogs' },
    ],
  },
];

const LINKEDIN_URL = 'https://www.linkedin.com/in/poralla-jagadeesh/';

function Header({ onContactClick }) {
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dayName = days[now.getUTCDay()];
  const date = now.getUTCDate();
  const month = months[now.getUTCMonth()];
  const year = now.getUTCFullYear();
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');

  const utcString = `${dayName}, ${month} ${date}, ${year} | ${hours}:${minutes}:${seconds} UTC`;

  return (
    <header className="header">
      <div className="header-menu">
        <div className="menu-container">
          <button type="button" className="menu-trigger" aria-haspopup="true" aria-label="Open menu">
            <span className="menu-icon">☰</span>
            <span className="menu-label">Menu</span>
          </button>
          <div className="menu-dropdown">
            {menuSections.map((section) =>
              section.subItems ? (
                <div key={section.label} className="menu-item-with-submenu">
                  <span className="menu-item">
                    <span className="menu-item-icon">{section.icon}</span>
                    {section.label}
                    <span className="submenu-arrow">›</span>
                  </span>
                  <div className="submenu">
                    {section.subItems.map((subItem) => (
                      <a key={subItem.label} href={subItem.href} className="submenu-link">
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={section.label} href={section.href} className="menu-item">
                  <span className="menu-item-icon">{section.icon}</span>
                  {section.label}
                </a>
              )
            )}
            <button type="button" className="menu-item menu-contact" onClick={onContactClick}>
              <span className="menu-item-icon">✉️</span>
              Contact
            </button>
          </div>
        </div>
      </div>

      <div className="header-center">
        <div className="logo">{utcString}</div>
      </div>

      <div className="header-right">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
          aria-label="LinkedIn profile"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}

export default Header;
