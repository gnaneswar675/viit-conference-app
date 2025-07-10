import React from 'react';

const CommitteeSection = () => {
  return (
    <section id="committee" className="committee-section">
      <div className="committee-header">
        <span className="committee-procedures">CONFERENCE COMMITTEE</span>
        <span className="committee-line"></span>
      </div>

      <h2 className="committee-title">CHIEF PATRONS</h2>
      <ul className="committee-list">
        <li><b>Er. K. Satyanarayana</b>, President, KLEF</li>
        <li><b>Er. K. L. Havish</b>, Vice-President, KLEF</li>
        <li><b>Er. K. Raja Hareen</b>, Vice-President, KLEF</li>
      </ul>

      <h2 className="committee-title">CO–PATRONS</h2>
      <ul className="committee-list">
        <li><b>Dr. K. S. Jaganatha Rao</b>, Pro Chancellor, KLEF</li>
        <li><b>Dr. G. P. Saradhi Varma</b>, Vice Chancellor, KLEF</li>
        <li><b>Dr. N. Venkatram</b>, Pro Vice-Chancellor, KLEF</li>
        <li><b>Dr. A. V. S. Prasad</b>, Pro Vice-Chancellor, KLEF</li>
        <li><b>Dr. K. Rajasekhara Rao</b>, Pro Vice-Chancellor, KLEF</li>
        <li><b>Dr. K. Subba Rao</b>, Registrar, KLEF</li>
      </ul>

      <h2 className="committee-title">GENERAL CHAIRS:</h2>
      <ul className="committee-list">
        <li><b>Osvaldo Gervasi</b>, University of Perugia, Italy</li>
        <li><b>I Koteswara Rao</b>, KLEF, Bowrampet Campus, Hyderabad, India</li>
      </ul>
    </section>
  );
};

export default CommitteeSection;