
import { ChevronDown, Code, Terminal, Database, Cpu } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { toast } from 'sonner';
import BackgroundPattern from './BackgroundPattern';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  const words = ["Developers", "Innovators", "Creators", "Leaders"];

  useEffect(() => {
    setIsVisible(true);
    
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    
    // Show welcome toast when component mounts
    toast.success('Welcome to SyncVerse!', {
      description: 'Explore our internship programs and kickstart your tech career.',
      duration: 5000,
      position: 'bottom-right',
    });

    // Mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(wordInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center theme-transition mt-0"
      style={{ 
        marginTop: 0,
        paddingTop: '4rem' // Add padding to account for the navbar height
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced tech-style blob effects with more defined edges */}
        <div className="blob top-[10%] left-[20%] w-[30%] h-[30%] bg-blue-300/80 dark:bg-blue-700/60 rounded-[40%] filter blur-2xl"></div>
        <div className="blob top-[40%] right-[15%] w-[35%] h-[40%] bg-violet-200/80 dark:bg-violet-800/60 rounded-[60%] animation-delay-2000 filter blur-2xl"></div>
        <div className="blob bottom-[10%] left-[35%] w-[25%] h-[25%] bg-purple-200/80 dark:bg-purple-700/60 rounded-[50%] animation-delay-4000 filter blur-2xl"></div>
        
        {/* Tech-style grid overlay - more prominent */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] dark:opacity-[0.06]"></div>
        
        {/* Digital circuit pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwMCAwIEwgMCAwIDAgMTAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTc0LCAyMzUsIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-[0.05] dark:opacity-[0.08]"></div>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-50/90 dark:bg-blue-900/50 border border-blue-100 dark:border-blue-700 text-blue-700 dark:text-blue-300 text-sm font-medium animate-slide-in-left backdrop-blur-sm">
          Transform Your Future
        </div>
        
        <h1 className="mb-6 max-w-4xl mx-auto text-gray-900 dark:text-white">
          <span className="block animate-fade-in-left animation-delay-200">Empowering Future</span>
          <div className="h-20 sm:h-24 relative mt-2">
            {words.map((word, index) => (
              <span
                key={word}
                className={`absolute inset-0 flex items-center justify-center w-full transition-all duration-500 ease-in-out ${
                  index % 2 === 0 ? 'text-gradient' : 'text-gradient-alt'
                }`}
                style={{
                  opacity: currentWord === index ? 1 : 0,
                  transform: currentWord === index ? 'translateY(0)' : 'translateY(20px)',
                  filter: currentWord === index ? 'blur(0px)' : 'blur(4px)'
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 animate-slide-in-right animation-delay-400 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm py-2 px-4 rounded-lg">
          Join our industry-leading internships and training programs in Web Development, 
          App Development, and AI/ML to kickstart your tech career.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-600">
          <a
            href="https://forms.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 transform hover:-translate-y-0.5 relative overflow-hidden backdrop-blur-md"
          >
            <span className="relative z-10">Apply Now</span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-500 dark:to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          </a>
          <a
            href="#programs"
            className="group bg-white/80 dark:bg-gray-800/80 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium px-8 py-3 rounded-full border border-gray-200 dark:border-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 relative overflow-hidden backdrop-blur-md"
          >
            <span className="relative z-10">Explore Programs</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300 z-0"></span>
          </a>
        </div>

        <div className="flex justify-center animate-bounce-slow animation-delay-1000">
          <button
            onClick={scrollToNextSection}
            className="p-3 rounded-full bg-white/90 dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg dark:shadow-gray-900/10 dark:hover:shadow-gray-900/20 transition-all duration-300 backdrop-blur-sm"
            aria-label="Scroll down"
          >
            <ChevronDown className="text-gray-400 dark:text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
