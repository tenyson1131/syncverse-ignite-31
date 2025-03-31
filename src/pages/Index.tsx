
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
          {/* Very subtle blurred starfield with slow movement */}
          <StarfieldBackground starCount={40} animated={true} opacity={0.2} speed={0.02} />
          
          {/* Soft gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/5 to-indigo-50/5 dark:from-blue-900/5 dark:to-indigo-900/5"></div>
          
          {/* Blurred circles */}
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-blue-200/5 dark:bg-blue-400/3 filter blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-indigo-200/5 dark:bg-indigo-400/3 filter blur-[80px]"></div>
          
          <Programs />
        </div>
        <div className="relative">
          {/* Multiple blurred gradient blobs with higher transparency */}
          <div className="absolute top-0 left-5 w-96 h-96 rounded-full bg-blue-200/5 dark:bg-blue-400/3 filter blur-[120px]"></div>
          <div className="absolute bottom-0 right-5 w-80 h-80 rounded-full bg-indigo-200/5 dark:bg-indigo-400/3 filter blur-[100px]"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-violet-200/5 dark:bg-violet-400/3 filter blur-[80px]"></div>
          
          <WhyChooseUs />
        </div>
        <div className="relative">
          {/* Very subtle grid with higher blur */}
          <GridBackground gridSize={50} gridColor="rgba(99, 102, 241, 0.02)" opacity={0.7} />
          
          {/* Subtle gradient overlays */}
          <div className="absolute top-0 right-0 w-full h-1/3 bg-gradient-to-b from-blue-50/5 to-transparent dark:from-blue-900/3 dark:to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-indigo-50/5 to-transparent dark:from-indigo-900/3 dark:to-transparent"></div>
          
          <Process />
        </div>
        <div className="relative">
          {/* Ultra-subtle dots with extreme blur */}
          <DotsBackground dotSize={1} dotSpacing={50} dotColor="#4f46e5" opacity={0.02} />
          
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-50/5 to-transparent dark:from-blue-900/3 dark:to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-indigo-50/5 to-transparent dark:from-indigo-900/3 dark:to-transparent"></div>
          </div>
          
          <Testimonials />
        </div>
        <div className="relative">
          {/* Subtle gradient background with extremely high blur */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-blue-200/5 dark:bg-blue-400/3 filter blur-[150px]"></div>
            <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-indigo-200/5 dark:bg-indigo-400/3 filter blur-[130px]"></div>
          </div>
          
          {/* Very faint moving stars */}
          <StarfieldBackground starCount={30} animated={true} opacity={0.15} speed={0.01} />
          
          <ContactUs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
