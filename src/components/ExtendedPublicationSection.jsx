import React from 'react';
import p1 from '../media/p1.png';
import p2 from '../media/p2.png';
import p3 from '../media/p3.png';
import p4 from '../media/p4.png';

const ExtendedPublicationSection = () => {
  return (
    <section id="extendedpublication" className="extended-publication-section">
      <div className="extended-header">
        <span className="extended-procedures">POST CONFERENCE EXTENDED PUBLICATIONS:</span>
        <span className="extended-line"></span>
      </div>
      <h1 className="extended-title">EXTENDED PUBLICATIONS</h1>
      <div className="extended-desc">
        Post Conference selective extended articles will be recommended for possible publications in the following Journals after normal review process by the journal editorial team:
      </div>
      <div className="extended-journals-row">
        <div className="journal-card">
          <div className="journal-img-wrap">
            <img src={p1} alt="Supply Chain Analytics" />
          </div>
          <div className="journal-caption">
            a. Supply Chain Analytics (Elsevier, Scopus Indexed)
          </div>
        </div>
        <div className="journal-card">
          <div className="journal-img-wrap">
            <img src={p2} alt="Healthcare Analytics" />
          </div>
          <div className="journal-caption">
            b. Healthcare Analytics (Elsevier, Scopus Indexed)
          </div>
        </div>
        <div className="journal-card">
          <div className="journal-img-wrap">
            <img src={p3} alt="Decision Analytics Journal" />
          </div>
          <div className="journal-caption">
            c. Decision Analytics Journal (Elsevier, Scopus Indexed)
          </div>
        </div>
        <div className="journal-card">
          <div className="journal-img-wrap">
            <img src={p4} alt="Technical Journal" />
          </div>
          <div className="journal-caption">
            Technical Journal (TG – TJ) (Scopus and WoS)
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtendedPublicationSection;