import React from 'react';

const About = () => (
  <section className="about-section py-5 bg-white">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="fw-bold" style={{ color: 'var(--ll-primary)' }}>
            Little Lemon{' '}
          </h2>
          <h3 className="fw-bold" style={{ color: 'var(--ll-primary)' }}>
            Chicago
          </h3>
          <p className="lead" style={{ color: 'var(--ll-primary)' }}>
            Adrian and Mario bring you the best Mediterranean food in Chicago.
            Enjoy our story and our food!
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center gap-3">
          <div
            className="about-photo bg-secondary rounded-3 d-flex align-items-center justify-content-center text-white fw-bold me-2"
            style={{ width: 120, height: 160, fontSize: '1.2rem' }}
          >
            Adrian
          </div>
          <div
            className="about-photo bg-secondary rounded-3 d-flex align-items-center justify-content-center text-white fw-bold"
            style={{ width: 120, height: 160, fontSize: '1.2rem' }}
          >
            Mario
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
