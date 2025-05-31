import React from 'react';
import heroBanner from '../../assets/hero banner lemon restaurant.avif';

const HeroSection = () => (
  <section className="hero-section bg-light py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="display-4 fw-bold">Little Lemon</h1>
          <h2 className="h3 fw-bold">Chicago</h2>
          <p className="lead">A family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className="btn btn-success btn-lg mt-3">Reserve a Table</button>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={heroBanner}
            alt="Little Lemon Chicago"
            style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '1rem' }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
