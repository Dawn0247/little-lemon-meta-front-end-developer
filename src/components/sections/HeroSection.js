import React from 'react';

const HeroSection = () => (
  <section className="hero-section bg-light py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="display-4 fw-bold">Little Lemon</h1>
          <h2 className="h4 text-muted">Chicago</h2>
          <p className="lead">A family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className="btn btn-success btn-lg mt-3">Reserve a Table</button>
        </div>
        <div className="col-md-6 text-center">
          {/* Placeholder for hero image */}
          <div className="bg-secondary rounded-3" style={{width: '100%', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem'}}>Image</div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
