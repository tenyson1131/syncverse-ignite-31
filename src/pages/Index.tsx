
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
        <About />
        <Programs />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
