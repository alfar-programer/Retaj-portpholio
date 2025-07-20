import React, { useState, useEffect } from 'react';

const Certificates = ({ certificates }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedCertificate) {
        closeModal();
      }
    };

    if (selectedCertificate) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset'; // Restore scrolling
    };
  }, [selectedCertificate]);

  return (
    <>
      <section id="certificates" className="section">
        <h2>Certificates & Achievements</h2>
        <div className="certificates-grid">
          {certificates.map((cert, idx) => (
            <div className="certificate-item" key={idx}>
              <div className="certificate-icon">🏆</div>
              <h3>{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-date">{cert.date}</p>
              <p className="certificate-description">{cert.description}</p>
              {cert.link && (
                <button 
                  onClick={() => openModal(cert)} 
                  className="certificate-link"
                >
                  View Certificate
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Modal Overlay */}
      {selectedCertificate && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-header">
              <h3>{selectedCertificate.title}</h3>
              <p>{selectedCertificate.issuer} • {selectedCertificate.date}</p>
            </div>
            <div className="modal-body">
              <img 
                src={selectedCertificate.link} 
                alt={selectedCertificate.title}
                className="certificate-image"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates; 