
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
        <div className="relative overflow-hidden">
          {/* Enhanced starfield with twinkling effect */}
          <StarfieldBackground starCount={60} animated={true} opacity={0.3} speed={0.01} twinkle={true} />
          
          {/* Gradient orbs */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-500/5 dark:bg-indigo-400/10 filter blur-[100px]"></div>
          <div className="absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 dark:bg-blue-400/10 filter blur-[120px]"></div>
          
          {/* Subtle gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/5 to-indigo-50/5 dark:from-blue-900/5 dark:to-indigo-900/10"></div>
          
          <Programs />
        </div>
        <div className="relative overflow-hidden">
          {/* Multiple gradient blobs */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-400/5 to-indigo-500/5 dark:from-blue-400/10 dark:to-indigo-500/10 filter blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-400/5 to-purple-500/5 dark:from-indigo-400/10 dark:to-purple-500/10 filter blur-[150px]"></div>
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-violet-400/5 to-purple-500/5 dark:from-violet-400/10 dark:to-purple-500/10 filter blur-[130px]"></div>
          
          {/* Spotlight highlights */}
          <div className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full bg-indigo-200/30 dark:bg-indigo-300/10 filter blur-[30px] animate-pulse-slow" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full bg-blue-200/30 dark:bg-blue-300/10 filter blur-[25px] animate-pulse-slow" style={{ animationDuration: '10s' }}></div>
          
          <WhyChooseUs />
        </div>
        <div className="relative overflow-hidden">
          {/* Enhanced grid with subtle animation */}
          <GridBackground gridSize={40} gridColor="rgba(99, 102, 241, 0.03)" opacity={0.9} />
          
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-50/5 to-transparent dark:from-blue-900/10 dark:to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-indigo-50/5 to-transparent dark:from-indigo-900/10 dark:to-transparent"></div>
          
          {/* Tech spotlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-radial from-blue-400/5 to-transparent dark:from-blue-400/5 dark:to-transparent filter blur-[80px]"></div>
          
          <Process />
        </div>
        <div className="relative overflow-hidden">
          {/* Ultra-subtle animated dots */}
          <DotsBackground dotSize={1} dotSpacing={40} dotColor="rgba(79, 70, 229, 0.2)" opacity={0.02} animated={true} />
          
          {/* Soft gradients */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-50/5 to-transparent dark:from-blue-900/5 dark:to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-indigo-50/5 to-transparent dark:from-indigo-900/5 dark:to-transparent"></div>
          </div>
          
          {/* Subtle tech glow */}
          <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-blue-400/5 dark:bg-blue-400/10 filter blur-[100px] animate-pulse-slow" style={{ animationDuration: '15s' }}></div>
          
          <Testimonials />
        </div>
        <div className="relative overflow-hidden">
          {/* Subtle animated starfield */}
          <StarfieldBackground starCount={50} animated={true} opacity={0.2} speed={0.005} twinkle={true} />
          
          {/* Gradient background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400/5 to-indigo-500/5 dark:from-blue-400/10 dark:to-indigo-500/10 filter blur-[150px]"></div>
            <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-400/5 to-violet-500/5 dark:from-indigo-400/10 dark:to-violet-500/10 filter blur-[180px]"></div>
          </div>
          
          {/* Tech spotlights */}
          <div className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full bg-indigo-300/10 dark:bg-indigo-300/5 filter blur-[50px] animate-pulse-slow" style={{ animationDuration: '12s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full bg-blue-300/10 dark:bg-blue-300/5 filter blur-[40px] animate-pulse-slow" style={{ animationDuration: '9s' }}></div>
          
          <ContactUs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
