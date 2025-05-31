import React from 'react';
import TestimonialCard from '../cards/TestimonialCard';

const testimonials = [
  {
    name: 'Maria',
    rating: 5,
    review: 'Amazing food and wonderful service! Highly recommend.',
    photo: '',
  },
  {
    name: 'John',
    rating: 4,
    review: 'Great atmosphere and delicious specials.',
    photo: '',
  },
  {
    name: 'Linda',
    rating: 5,
    review: 'The lemon dessert is a must-try!',
    photo: '',
  },
  {
    name: 'Alex',
    rating: 4,
    review: 'Loved the Greek salad and the friendly staff.',
    photo: '',
  },
];

const Testimonials = () => (
  <section className="testimonials py-5 bg-light">
    <div className="container">
      <h2 className="fw-bold mb-4 text-center">Testimonials</h2>
      <div className="row justify-content-center">
        {testimonials.map((item, idx) => (
          <div className="col-md-3 mb-4" key={idx}>
            <TestimonialCard {...item} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
