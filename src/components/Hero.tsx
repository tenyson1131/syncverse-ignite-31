
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-[60%] -left-[10%] w-[60%] h-[60%] bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className={`relative z-10 section-container text-center pt-24 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium animate-fade-in-down">
          Transform Your Future
        </div>
        
        <h1 className="mb-6 max-w-4xl mx-auto animate-fade-in-down animation-delay-200">
          <span>Empowering Future </span>
          <span className="text-gradient">Developers, Innovators,</span>
          <span> and </span>
          <span className="text-gradient">AI Experts</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400">
          Join our industry-leading internships and training programs in Web Development, 
          App Development, and AI/ML to kickstart your tech career.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-600">
          <a
            href="https://forms.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Apply Now
          </a>
          <a
            href="#programs"
            className="bg-white hover:bg-gray-50 text-gray-800 font-medium px-8 py-3 rounded-full border border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Explore Programs
          </a>
        </div>

        <div className="flex justify-center animate-fade-in animation-delay-1000">
          <button
            onClick={scrollToNextSection}
            className="p-2 rounded-full bg-white border border-gray-100 shadow-md animate-float"
            aria-label="Scroll down"
          >
            <ChevronDown className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
