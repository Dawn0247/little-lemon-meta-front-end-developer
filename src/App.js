import NavigationBar from './components/sections/NavigationBar';
import HeroSection from './components/sections/HeroSection';
import Highlights from './components/sections/Highlights';
import Testimonials from './components/sections/Testimonials';
import BookingSection from './components/sections/BookingSection';
import About from './components/sections/About';
import Footer from './components/sections/Footer';
import './App.css';

const times = [
  '6:00pm', '6:30pm', '7:00pm', '7:30pm', '8:00pm', '8:30pm'
];

function App() {
  return (
    <div className="App" id="home">
      <NavigationBar />
      <section id="hero"><HeroSection /></section>
      <section id="menu"><Highlights /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="booking"><BookingSection times={times} /></section>
      <section id="about"><About /></section>
      <section id="order"><Footer /></section>
    </div>
  );
}

export default App;
