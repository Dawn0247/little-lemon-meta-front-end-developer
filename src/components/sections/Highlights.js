import React from 'react';
import SpecialCard from '../cards/SpecialCard';

const specials = [
  {
    title: 'Greek Salad',
    price: '$12.99',
    description: 'Crispy lettuce, peppers, olives, and feta cheese, garnished with garlic and rosemary croutons.',
    image: '',
    link: '#',
  },
  {
    title: 'Bruschetta',
    price: '$5.99',
    description: 'Grilled bread smeared with garlic and seasoned with salt and olive oil.',
    image: '',
    link: '#',
  },
  {
    title: 'Lemon Dessert',
    price: '$4.99',
    description: 'Authentic homemade lemon dessert with a tangy twist.',
    image: '',
    link: '#',
  },
];

const Highlights = () => (
  <section className="highlights py-5 bg-white">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Specials</h2>
        <button className="btn btn-warning fw-bold">Online Menu</button>
      </div>
      <div className="row">
        {specials.map((item, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <SpecialCard {...item} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Highlights;
