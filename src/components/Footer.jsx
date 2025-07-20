import React from 'react';

const Footer = ({ socialLinks }) => (
  <footer>
    <div className="social-links">
      {socialLinks.map((link, idx) => (
        <a href={link.href} key={idx}>{link.icon}</a>
      ))}
    </div>
    <p>&copy; 2025 Retaj | EF. All rights reserved.</p>
  </footer>
);

export default Footer; 