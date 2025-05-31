import NavigationBar from './components/sections/NavigationBar';
import HeroSection from './components/sections/HeroSection';
import Highlights from './components/sections/Highlights';
import Testimonials from './components/sections/Testimonials';
import BookingSection from './components/sections/BookingSection';
import About from './components/sections/About';
import Footer from './components/sections/Footer';
import './App.css';

function App() {
  return (
    <div className="App" id="home">
      <NavigationBar />
      <section id="hero"><HeroSection /></section>
      <section id="menu"><Highlights /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="booking"><BookingSection /></section>
      <section id="about"><About /></section>
      <section id="order"><Footer /></section>
    </div>
  );
}

export default App;
