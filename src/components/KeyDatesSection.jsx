import React from 'react';

const KeyDatesSection = () => {
  return (
    <section id="keydates" className="keydates-section">
      <h1 className="keydates-title">KEY DATES</h1>
      <div className="roadmap-timeline">
        <div className="roadmap-item">
          <div className="roadmap-dot"></div>
          <div className="roadmap-card">
            <div className="roadmap-label">Paper Submission Deadline.</div>
            <span className="roadmap-date">26 April, 2025</span>
          </div>
        </div>
        <div className="roadmap-item">
          <div className="roadmap-dot"></div>
          <div className="roadmap-card">
            <div className="roadmap-label">Acceptance Notification.</div>
            <span className="roadmap-date">30 May, 2025</span>
          </div>
        </div>
        <div className="roadmap-item">
          <div className="roadmap-dot"></div>
          <div className="roadmap-card">
            <div className="roadmap-label">Submission deadline for revised papers.</div>
            <span className="roadmap-date">07 June, 2025</span>
          </div>
        </div>
        <div className="roadmap-item">
          <div className="roadmap-dot"></div>
          <div className="roadmap-card">
            <div className="roadmap-label">Author Registration Deadline.</div>
            <span className="roadmap-date">10 June, 2025</span>
          </div>
        </div>
        <div className="roadmap-item">
          <div className="roadmap-dot"></div>
          <div className="roadmap-card">
            <div className="roadmap-label">Full-Day Workshop</div>
            <span className="roadmap-date">16 July, 2025</span>
          </div>
        </div>
        <div className="roadmap-item">
          <div className="roadmap-dot"></div>
          <div className="roadmap-card">
            <div className="roadmap-label">Conference Dates<br />
              <span className="roadmap-venue">Venue: Hyderabad</span>
            </div>
            <span className="roadmap-date">17 - 18 July, 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyDatesSection;