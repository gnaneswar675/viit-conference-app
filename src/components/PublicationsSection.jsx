import React, { useState } from 'react';
import conferenceImg from '../media/conference.jpg';
import journalImg from '../media/journal-publication.jpg';

const PublicationsSection = () => {
  const [activeTab, setActiveTab] = useState('proceedings');
  const imgSrc = activeTab === 'journal'
    ? journalImg
    : conferenceImg;
  const imgAlt = activeTab === 'journal'
    ? 'Journal Publication'
    : 'Online Conference';

  // Dynamic button link and label based on active tab
  const buttonLabel =
    activeTab === 'journal'
      ? 'Journal Publication Details'
      : 'Conference Proceedings Details';
  const buttonHref =
    activeTab === 'journal'
      ? 'https://www.springer.com/series/10533'
      : 'https://www.springer.com/gp/authors-editors/conference-proceedings/conference-proceedings-guidelines';

  // Handler for button click to also set the active tab
  

  return (
    <section className="publications-section">
      <div className="publications-header">
        PUBLICATIONS
        <span className="publications-header-line"></span>
      </div>
      <h2 className="publications-title">ABOUT PUBLICATIONS</h2>
      <div className="pub-cards">
        <div
          className={`pub-card pub-tab${activeTab === 'proceedings' ? ' active' : ''}`}
          data-tab="proceedings"
          onClick={() => setActiveTab('proceedings')}
        >
          <span className="pub-icon" style={{ fontSize: '2rem', color: activeTab === 'proceedings' ? '#fff' : '#222' }}>&#9906;</span>
          Conference Proceedings
        </div>
        <div
          className={`pub-card pub-card-secondary pub-tab${activeTab === 'journal' ? ' active' : ''}`}
          data-tab="journal"
          onClick={() => setActiveTab('journal')}
        >
          <span className="pub-icon" style={{ color: activeTab === 'journal' ? '#fff' : '#222' }}>&#128279;</span>
          Journal publication of extended selective papers
        </div>
      </div>
      <div className="pub-details">
        <div className={`pub-info pub-pane${activeTab === 'proceedings' ? ' active' : ''}`} data-pane="proceedings">
          <div className="pub-info-title">Conference Proceedings:</div>
          <ul className="pub-info-list">
            <li>
              <span className="pub-info-icon">&#10003;</span>
              <span>
                All accepted papers will be published in Conference Proceedings, Scopus Indexed.
              </span>
            </li>
            <li>
              <span className="pub-info-icon">&#10003;</span>
              <span>
                Proposal is submitted to "Springer Proceedings in Mathematics &amp; Statistics" (
                <a
                  href="https://www.springer.com/series/10533"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#d4a245' }}
                >
                  https://www.springer.com/series/10533
                </a>
                ), a Scopus-indexed book series for possible publication after the evaluation and screening of all submissions.
              </span>
            </li>
          </ul>
        </div>
        <div className={`pub-info pub-pane${activeTab === 'journal' ? ' active' : ''}`} data-pane="journal">
          <div className="pub-info-title">Journal publication of extended selective papers:</div>
          <ul className="pub-info-list">
            <li>
              <span className="pub-info-icon">&#10003;</span>
              <span>
                Selected high-quality papers will be invited for extended versions in reputed Scopus/SCI-indexed journals (TBA).
              </span>
            </li>
            <li>
              <span className="pub-info-icon">&#10003;</span>
              <span>
                Details of journal publication opportunities will be updated soon.
              </span>
            </li>
          </ul>
        </div>
        <div className="pub-image" id="pub-image">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className="pub-paper-format" style={{ marginTop: 24 }}>
          {activeTab === 'journal' ? (
            <a
              href={buttonHref}
              target="_blank"
              rel="noreferrer"
              className="pub-paper-btn"
              onClick={() => setActiveTab('journal')}
            >
              {buttonLabel}
            </a>
          ) : (
            <a
              href={buttonHref}
              target="_blank"
              rel="noreferrer"
              className="pub-paper-btn"
              onClick={() => setActiveTab('proceedings')}
              style={{
                background: '#fff',
                color: '#222',
                borderColor: '#e0e0e0'
              }}
            >
              {buttonLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;