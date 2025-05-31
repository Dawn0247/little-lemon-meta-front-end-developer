import React from 'react';

// Helper to scroll with offset for fixed navbar
const scrollWithOffset = (id) => {
  const yOffset = -56; // height of navbar
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const NavigationBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow" aria-label="Main navigation">
    <div className="container-fluid">
      {/* Logo */}
      <a className="navbar-brand fw-bold" href="#home" onClick={e => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>Little Lemon</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#home" onClick={e => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#menu" onClick={e => { e.preventDefault(); scrollWithOffset('menu'); }}>Menu</a></li>
          <li className="nav-item"><a className="nav-link" href="#booking" onClick={e => { e.preventDefault(); scrollWithOffset('booking'); }}>Booking</a></li>
          <li className="nav-item"><a className="nav-link" href="#order" onClick={e => { e.preventDefault(); scrollWithOffset('order'); }}>Order Online</a></li>
          <li className="nav-item"><a className="nav-link" href="#about" onClick={e => { e.preventDefault(); scrollWithOffset('about'); }}>About</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavigationBar;
