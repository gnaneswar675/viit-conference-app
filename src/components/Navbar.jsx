import React from 'react';

const Navbar = () => {
  return (
    <section class="nav-section">
    <nav className="main-nav">
      <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '18px', justifyContent: 'center', padding: 0, margin: 0 }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#submission">Submission</a></li>
        <li><a href="#extendedpublication">Extended Publications</a></li>
        <li><a href="#topics">Topics</a></li>
        <li><a href="#keydates">Key Dates</a></li>
        <li><a href="#speakers">Keynote Speakers</a></li>
        <li><a href="#register">Register</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#committee">Committee</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </section>
  );
};

export default Navbar;