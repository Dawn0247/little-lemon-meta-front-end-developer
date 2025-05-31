import React from 'react';
import adrianImg from '../../assets/about adrian.avif';
import marioImg from '../../assets/about mario.avif';

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
          <img
            src={adrianImg}
            alt="Adrian - Owner"
            className="about-photo bg-secondary rounded-3 me-2"
            style={{ width: 120, height: 160, objectFit: 'cover', fontSize: '1.2rem' }}
          />
          <img
            src={marioImg}
            alt="Mario - Owner"
            className="about-photo bg-secondary rounded-3"
            style={{ width: 120, height: 160, objectFit: 'cover', fontSize: '1.2rem' }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
