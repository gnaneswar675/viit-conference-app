import React, { useState } from 'react';

const faqs = [
  {
    question: "Do I get any certificate for participating or presenting in the conference?",
    answer: "Yes, absolutely. You would receive a certificate once the conference is done."
  },
  {
    question: "When will I receive my certificate?",
    answer: "Once the conference is done an automated verification process takes place which in return would send your certificate through the user's registered email."
  },
  {
    question: "How do we keep ourselves informed about progress?",
    answer: "All important updates will be communicated via email and posted on the conference website."
  },
  {
    question: "What happens if there is a schedule change?",
    answer: "Any schedule changes will be promptly communicated to all registered participants."
  },
  {
    question: "Why should I pay participation fees? Isn’t it too expensive?",
    answer: "The participation fee covers conference materials, access to all sessions, and certification. We strive to keep fees reasonable for all."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-header">
        <span className="faq-procedures">F.A.Q</span>
        <span className="faq-line"></span>
      </div>
      <h1 className="faq-title">FREQUENTLY ASKED QUESTIONS</h1>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div className={`faq-item${activeIndex === idx ? ' active' : ''}`} key={idx}>
            <div
              className="faq-question"
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              {faq.question}
            </div>
            <div className="faq-answer">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;