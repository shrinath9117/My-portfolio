import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        form.reset();
        setSuccess(true);

        // Hide message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert('❌ Error sending message. Please try again.');
      }
    } catch (error) {
      alert('❌ Submission failed. Please check your internet connection.');
    }
  };

  return (
    <div>
      {/* 📩 Contact Form Section */}
      <section className="contact-section">
        <h2>📩 Contact Me</h2>
        <form
          className="contact-form"
          id="contactForm"
          action="https://formspree.io/f/xjkoalar"
          method="POST"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          {/* Honeypot field for bots */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} />

          <button type="submit">Send</button>
        </form>

        {/* ✅ Success Message */}
        {success && (
          <div className="success-popup">
            ✅ Your message has been sent successfully!
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
