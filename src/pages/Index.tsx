
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
          {/* Subtle starfield with very few stars */}
          <StarfieldBackground starCount={50} animated={true} opacity={0.3} speed={0.2} />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-indigo-50/10 dark:from-blue-900/5 dark:to-indigo-900/5"></div>
          <Programs />
        </div>
        <div className="relative">
          {/* Subtle gradient blobs */}
          <div className="absolute top-0 left-5 w-64 h-64 rounded-full bg-blue-200/10 dark:bg-blue-400/5 filter blur-3xl"></div>
          <div className="absolute bottom-0 right-5 w-80 h-80 rounded-full bg-indigo-200/10 dark:bg-indigo-400/5 filter blur-3xl"></div>
          <WhyChooseUs />
        </div>
        <div className="relative">
          {/* Very subtle grid with lower opacity */}
          <GridBackground gridSize={40} gridColor="rgba(99, 102, 241, 0.03)" />
          <Process />
        </div>
        <div className="relative">
          {/* More subtle dots */}
          <DotsBackground dotSize={1} dotSpacing={40} dotColor="#4f46e5" opacity={0.03} />
          <Testimonials />
        </div>
        <div className="relative">
          {/* Subtle gradient background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-1/4 w-80 h-80 rounded-full bg-blue-200/10 dark:bg-blue-400/5 filter blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-indigo-200/10 dark:bg-indigo-400/5 filter blur-3xl"></div>
          </div>
          <ContactUs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
