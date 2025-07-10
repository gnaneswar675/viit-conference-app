import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-title">CIGAI–2025</div>
        <div className="footer-tagline">
          <em>"International Conference on Mathematical Modeling in Computational Intelligence and GenAI"</em>
        </div>
        <div className="footer-socials">
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter size={24} color="#15161c" />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebook size={24} color="#15161c" />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram size={24} color="#15161c" />
          </a>
          <a href="https://telegram.org/" target="_blank" rel="noreferrer" aria-label="Telegram">
            <FaTelegram size={24} color="#15161c" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} color="#15161c" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;