import React, { useState } from 'react';
import AlertDialog from '../dialogs/AlertDialog';
import * as Yup from 'yup';

const times = [
  '6:00pm', '6:30pm', '7:00pm', '7:30pm', '8:00pm', '8:30pm'
];

const bookingSchema = Yup.object().shape({
  date: Yup.string().required('Date is required'),
  guests: Yup.number().min(1).max(10).required('Number of guests is required'),
  time: Yup.string().required('Time is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^(\+\d{1,2}\s?)?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
      'Invalid phone number'),
  info: Yup.string()
});

const BookingSection = () => {
  const today = new Date().toISOString().split('T')[0];
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    date: today,
    guests: '2',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    info: ''
  });
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTimeSelect = t => {
    setForm({ ...form, time: t });
  };

  const handleNext = e => {
    e.preventDefault();
    setStep(2);
  };

  const handleBack = () => setStep(1);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await bookingSchema.validate(form, { abortEarly: false });
      setFormErrors({});
      setAlertMessage(
        `Booking confirmed!\n\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}\nName: ${form.firstName} ${form.lastName}`
      );
      setAlertOpen(true);
      setForm({
        date: '', guests: '2', time: '', firstName: '', lastName: '', email: '', phone: '', info: ''
      });
      setStep(1);
    } catch (err) {
      if (err.inner) {
        const errors = {};
        err.inner.forEach(e => { errors[e.path] = e.message; });
        setFormErrors(errors);
      }
    }
  };

  return (
    <section className="booking-section py-5" style={{ background: 'var(--ll-primary)', color: 'var(--ll-text)' }}>
      <div className="container">
        <h2 className="fw-bold mb-4 text-center" style={{ color: 'var(--ll-accent)' }}>Reserve a Table</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            {step === 1 ? (
              <form onSubmit={handleNext} className="mb-4">
                <div className="mb-3">
                  <label className="form-label fw-bold" htmlFor="date">When?</label>
                  <input type="date" className="form-control" id="date" name="date" value={form.date} onChange={handleChange} required min={today} />
                  {formErrors.date && <div className="text-danger small">{formErrors.date}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold" htmlFor="guests">How Many?</label>
                  <select className="form-select" id="guests" name="guests" value={form.guests} onChange={handleChange} required>
                    {[...Array(10)].map((_, i) => <option key={i+1} value={i+1}>{i+1}</option>)}
                  </select>
                  {formErrors.guests && <div className="text-danger small">{formErrors.guests}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Available Times</label>
                  <div className="d-flex flex-wrap gap-2">
                    {times.map(t => (
                      <button type="button" key={t} className={`btn btn-warning flex-fill${form.time === t ? ' active' : ''}`} style={{ minWidth: 90 }} onClick={() => handleTimeSelect(t)}>{t}</button>
                    ))}
                  </div>
                  {formErrors.time && <div className="text-danger small">{formErrors.time}</div>}
                </div>
                <button className="btn btn-lg w-100 mt-4" style={{ background: 'var(--ll-accent)', color: 'var(--ll-primary)' }} disabled={!form.date || !form.time}>Next Step: Your Details</button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="mb-4">
                <h3 className="fw-bold mb-3" style={{ color: 'var(--ll-accent)' }}>Your Details</h3>
                <div className="mb-2">
                  <label className="form-label" htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
                  {formErrors.firstName && <div className="text-danger small">{formErrors.firstName}</div>}
                </div>
                <div className="mb-2">
                  <label className="form-label" htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
                  {formErrors.lastName && <div className="text-danger small">{formErrors.lastName}</div>}
                </div>
                <div className="mb-2">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
                  {formErrors.email && <div className="text-danger small">{formErrors.email}</div>}
                </div>
                <div className="mb-2">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" name="phone" value={form.phone} onChange={handleChange} required />
                  {formErrors.phone && <div className="text-danger small">{formErrors.phone}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="info">Additional Information</label>
                  <textarea className="form-control" id="info" name="info" value={form.info} onChange={handleChange} placeholder="Allergen Information" rows={3} />
                  {formErrors.info && <div className="text-danger small">{formErrors.info}</div>}
                </div>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-secondary flex-fill" onClick={handleBack}>Back</button>
                  <button className="btn btn-lg flex-fill" style={{ background: 'var(--ll-accent)', color: 'var(--ll-primary)' }}>Confirm Booking</button>
                </div>
              </form>
            )}
            <AlertDialog open={alertOpen} onClose={() => setAlertOpen(false)} message={alertMessage} title="Booking Status" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
