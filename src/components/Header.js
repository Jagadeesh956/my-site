import React from 'react';
import './Header.css';

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
      <nav className="nav">
        <div className="logo">{utcString}</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><button onClick={onContactClick} className="contact-btn">Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
