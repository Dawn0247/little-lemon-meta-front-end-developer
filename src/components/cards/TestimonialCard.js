import React from 'react';
import Card from './Card';

const TestimonialCard = ({ name, rating, review, photo }) => (
  <Card className="testimonial-card h-100 shadow-sm border-0 text-center p-3">
    <div className="testimonial-rating mb-2 text-warning fw-bold" style={{fontSize: '1.2rem'}}>{'★'.repeat(rating)}<span className="text-muted">{'★'.repeat(5-rating)}</span></div>
    <div className="testimonial-photo mx-auto mb-2" style={{width: 64, height: 64}}>
      {photo ? (
        <img src={photo} alt={name} className="rounded-circle img-fluid" style={{width: 64, height: 64, objectFit: 'cover'}} />
      ) : (
        <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white" style={{width: 64, height: 64}}>Photo</div>
      )}
    </div>
    <div className="testimonial-content">
      <h4 className="h6 fw-bold mb-1">{name}</h4>
      <p className="text-muted small mb-0">{review}</p>
    </div>
  </Card>
);

export default TestimonialCard;
