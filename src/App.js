import NavigationBar from './components/sections/NavigationBar';
import HeroSection from './components/sections/HeroSection';
import Highlights from './components/sections/Highlights';
import Testimonials from './components/sections/Testimonials';
import About from './components/sections/About';
import Footer from './components/sections/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
