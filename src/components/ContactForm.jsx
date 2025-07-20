import React from 'react';

const ContactForm = ({ formStatus, handleFormSubmit, submitBtnRef }) => (
  <section id="contact" className="section">
    <h2>Let's Work Together</h2>
    <form className="contact-form" onSubmit={handleFormSubmit} autoComplete="off">
      <div className="form-group">
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className="form-group">
        <input type="email" placeholder="Your Email" required />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Subject" required />
      </div>
      <div className="form-group">
        <textarea rows="6" placeholder="Your Message" required></textarea>
      </div>
      <button
        type="submit"
        className="submit-btn"
        ref={submitBtnRef}
        style={
          formStatus === 'sending'
            ? { background: 'linear-gradient(45deg, #4ecdc4, #44a08d)' }
            : formStatus === 'sent'
            ? { background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)' }
            : undefined
        }
        disabled={formStatus === 'sending'}
      >
        {formStatus === 'sending'
          ? 'Sending...'
          : formStatus === 'sent'
          ? 'Message Sent!'
          : 'Send Message'}
      </button>
    </form>
  </section>
);

export default ContactForm; 