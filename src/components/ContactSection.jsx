import React, { useState } from 'react';

const ContactSection = () => {
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
      const res = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <span className="contact-procedures">CONTACT</span>
        <span className="contact-line"></span>
      </div>
      <h1 className="contact-title">CONTACT</h1>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-info-block">
            <div className="contact-icon">
              <img src="https://cdn.simpleicons.org/googlemaps/E7B84D/32" alt="Location" width="32" height="32" />
            </div>
            <div>
              <div className="contact-label">Location:</div>
              <div className="contact-value">Hyderabad</div>
            </div>
          </div>
          <div className="contact-info-block">
            <div className="contact-icon">
              <img src="https://cdn.simpleicons.org/maildotru/E7B84D/32" alt="Email" width="32" height="32" />
            </div>
            <div>
              <div className="contact-label">Email:</div>
              <div className="contact-value">math-cigai2025@klh.edu.in</div>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <input type="text" name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" required value={form.email} onChange={handleChange} />
          </div>
          <input type="text" name="subject" placeholder="Subject" required value={form.subject} onChange={handleChange} />
          <textarea name="message" placeholder="Message" rows="5" required value={form.message} onChange={handleChange}></textarea>
          <button type="submit" className="contact-btn">Send Message</button>
          <div className="contact-status">{status}</div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;