
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
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center theme-transition"
    >
      {/* Tech-inspired background with grid and floating elements */}
      <BackgroundPattern className="opacity-40 dark:opacity-20" />
      
      {/* Floating tech icons */}
      <div className="absolute w-full h-full pointer-events-none">
        <div 
          className="absolute top-[15%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 animate-float"
          style={{ 
            animationDelay: '0s',
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px) translateX(-50%) translateY(-50%)`
          }}
        >
          <Code className="w-12 h-12 text-blue-500/40 dark:text-blue-400/40" />
        </div>
        <div 
          className="absolute bottom-[20%] right-[15%] transform -translate-x-1/2 -translate-y-1/2 animate-float" 
          style={{ 
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px) translateX(-50%) translateY(-50%)`
          }}
        >
          <Terminal className="w-14 h-14 text-purple-500/40 dark:text-purple-400/40" />
        </div>
        <div 
          className="absolute top-[60%] right-[30%] transform -translate-x-1/2 -translate-y-1/2 animate-float" 
          style={{ 
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px) translateX(-50%) translateY(-50%)`
          }}
        >
          <Database className="w-10 h-10 text-green-500/40 dark:text-green-400/40" />
        </div>
        <div 
          className="absolute bottom-[40%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 animate-float" 
          style={{ 
            animationDelay: '3s',
            transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px) translateX(-50%) translateY(-50%)`
          }}
        >
          <Cpu className="w-16 h-16 text-indigo-500/40 dark:text-indigo-400/40" />
        </div>
      </div>

      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 to-violet-500/5 dark:from-blue-500/10 dark:to-violet-500/10 animate-pulse-slow"></div>

      {/* Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/50 border border-blue-100 dark:border-blue-700 text-blue-700 dark:text-blue-300 text-sm font-medium animate-slide-in-left">
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
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 animate-slide-in-right animation-delay-400">
          Join our industry-leading internships and training programs in Web Development, 
          App Development, and AI/ML to kickstart your tech career.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-600">
          <a
            href="https://forms.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 transform hover:-translate-y-0.5 relative overflow-hidden"
          >
            <span className="relative z-10">Apply Now</span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-500 dark:to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          </a>
          <a
            href="#programs"
            className="group bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium px-8 py-3 rounded-full border border-gray-200 dark:border-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 relative overflow-hidden"
          >
            <span className="relative z-10">Explore Programs</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300 z-0"></span>
          </a>
        </div>

        <div className="flex justify-center animate-bounce-slow animation-delay-1000">
          <button
            onClick={scrollToNextSection}
            className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg dark:shadow-gray-900/10 dark:hover:shadow-gray-900/20 transition-all duration-300"
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
