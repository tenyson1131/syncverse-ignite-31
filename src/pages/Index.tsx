
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="relative tech-bg">
          <div className="absolute inset-0 circuit-pattern"></div>
          <About />
        </div>
        <div className="relative tech-grid">
          <div className="absolute inset-0 digital-noise"></div>
          <Programs />
        </div>
        <div className="relative tech-bg">
          <div className="absolute inset-0 circuit-pattern"></div>
          <WhyChooseUs />
        </div>
        <div className="relative tech-grid">
          <div className="absolute inset-0 digital-noise"></div>
          <Process />
        </div>
        <div className="relative tech-bg">
          <div className="absolute inset-0 circuit-pattern"></div>
          <Testimonials />
        </div>
        <div className="relative tech-grid">
          <div className="absolute inset-0 digital-noise"></div>
          <ContactUs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
