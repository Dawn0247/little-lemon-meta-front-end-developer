import React from 'react';

const NavigationBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      {/* Logo */}
      <a className="navbar-brand fw-bold" href="#">Little Lemon</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Menu</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Reservations</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Order Online</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavigationBar;
