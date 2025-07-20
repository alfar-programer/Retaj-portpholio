import React from 'react';

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-container">
      <div className="hero-content">
        <h1>Creative Developer</h1>
        <p className="subtitle">I'm a passionate developer with experience in C++ and Python, and I build modern web interfaces using HTML and CSS. I love turning ideas into real, functional projects</p>
        <a href="#portfolio" className="cta-button">View My Work</a>
      </div>
      <div className="hero-image">
        <div className="hero-image-container">
          <img
            src="/public/images/pix.jpg"
            alt="Alex Thompson - Creative Developer"
            onError={e => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDQwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTUwIiByPSI2MCIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIi8+CjxwYXRoIGQ9Ik0xMDAgMzUwQzEwMCAzMDAgMTQ1IDI1MCAyMDAgMjUwUzMwMCAzMDAgMzAwIDM1MFY0MDBIMTAwVjM1MFoiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSIvPgo8dGV4dCB4PSIyMDAiIHk9IjQ1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIiBmb250LXNpemU9IjE0IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiPllvdXIgUHJvZmlsZSBQaG90bzwvdGV4dD4KPHN2Zz4K';
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero; 