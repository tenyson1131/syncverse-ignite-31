
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
          <StarfieldBackground starCount={150} animated={true} />
          <Programs />
        </div>
        <div className="relative">
          <GeometricBackground density="medium" />
          <WhyChooseUs />
        </div>
        <div className="relative">
          <GridBackground gridSize={25} gridColor="rgba(99, 102, 241, 0.08)" />
          <Process />
        </div>
        <div className="relative">
          <DotsBackground dotSize={1.5} dotSpacing={30} dotColor="#4f46e5" />
          <Testimonials />
        </div>
        <div className="relative">
          <StarfieldBackground starCount={80} animated={true} />
          <ContactUs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
