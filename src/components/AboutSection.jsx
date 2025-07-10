import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h1 className="about-title">About</h1>
      <div className="about-subtitle">The Conference</div>
      <ul className="about-list">
        <li>
          <span className="about-icon">&#10003;</span>
          <span>
            In recent past, Generative AI is one of the most trending topics and application in every field of Science and Engineering with AI and Machine Intelligence. It is used to develop new products and automate the system by generating the new and improved models and improve decision making systems. Machine Intelligence and Generative AI collaboratively are using in healthcare decision making, drug discovery, personalized care, synthetic data generation, automations, and many more. Mathematical models like Adversarial Networks, and Variational Autoencoders are deployed to produce images, for data augmentation, improving disease diagnosis, and advanced medical imaging research area.
          </span>
        </li>
        <li>
          <span className="about-icon">&#10003;</span>
          <span>
            Combination of Computational Intelligence and Generative AI techniques can be utilized for generating Electronic Health Records (EHRs) and computed patient data, to support the privacy-preserving data sharing, and encouraging innovative Research for personalized well-being and drug discovery. NLP models also can be used to transformer-based deep learning techniques to present the contextual information in large medical datasets, such as electronic health records (EHRs), information, and can improve the presentation of medical terminologies, domain-specific language, and contextual nuances that are unique to the healthcare field.
          </span>
        </li>
        <li>
          <span className="about-icon">&#10003;</span>
          <span>
            In this Conference, we will focus on the Math-Model design and generations for improved solutions and decision makings by exploring of Computational Intelligence and Generative AI research areas across the World with the Theme eHealthCare, Data Science and Decision Making Systems.
          </span>
        </li>
      </ul>

      <div className="about-cfp">
        <div className="about-cfp-subtitle">
          ABOUT RESEARCH FINDINGS OF AUTHORS
          <span className="about-cfp-line"></span>
        </div>
        <h2 className="about-cfp-title">CALL FOR PAPER</h2>
        <ul className="about-list">
          <li>
            <span className="about-icon">&#10003;</span>
            <span>
              1st version of CIGAI aims to bring together leading research scientists, academicians, researchers, and research scholars to exchange and share their experiences and research findings on all aspects of Computational Intelligence and Generative Modeling.
            </span>
          </li>
          <li>
            <span className="about-icon">&#10003;</span>
            <span>
              This will be a purely research-oriented conference. 8 pages to be submitted by the Author.
            </span>
          </li>
          <li>
            <span className="about-icon">&#10003;</span>
            <span>
              It also provides a premier interdisciplinary platform for researchers, Practitioners, and educators to present and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered, and solutions adopted in the fields of Mathematics, Computational Intelligence and Generative Modeling.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;