import React from 'react';
import { FaDownload, FaUserEdit } from 'react-icons/fa';

const SubmissionSection = () => {
  return (
    <section id="submission" className="submission-section">
      <div className="submission-header">
        <span className="submission-procedures">SUBMISSION PROCEDURES</span>
        <span className="submission-line"></span>
      </div>
      <h1 className="submission-title">SUBMISSION</h1>
      <div className="submission-buttons-row">
        <button className="submission-btn download-btn">
          <span className="submission-btn-icon"><FaDownload /></span>
          Click to Download the Format
        </button>
        <button className="submission-btn author-btn">
          <span className="submission-btn-icon"><FaUserEdit /></span>
          Submitters/Authors: Register & Upload Paper
        </button>
      </div>
      <div className="submission-note">
        Submitted paper length should be 8 and 10 pages.
      </div>
      <ul className="submission-list">
        <li>Submitted papers should not have been previously published nor be currently under consideration for publication elsewhere.</li>
        <li>All submissions will be thoroughly peer-reviewed by experts based on originality, significance and clarity.</li>
        <li>Only papers presenting novel research results or successful innovative applications will be considered for publication in the conference proceedings.</li>
      </ul>
    </section>
  );
};

export default SubmissionSection;