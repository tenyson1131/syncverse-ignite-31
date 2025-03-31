
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import GridBackground from '../components/backgrounds/GridBackground';
import DotsBackground from '../components/backgrounds/DotsBackground';
import StarfieldBackground from '../components/backgrounds/StarfieldBackground';
import GeometricBackground from '../components/backgrounds/GeometricBackground';

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
        <div className="relative">
          <StarfieldBackground />
          <Programs />
        </div>
        <div className="relative">
          <GeometricBackground />
          <WhyChooseUs />
        </div>
        <div className="relative">
          <GridBackground />
          <Process />
        </div>
        <div className="relative">
          <DotsBackground />
          <Testimonials />
        </div>
        <div className="relative">
          <StarfieldBackground starCount={50} />
          <ContactUs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
