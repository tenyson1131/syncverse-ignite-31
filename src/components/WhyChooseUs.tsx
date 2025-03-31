
import { useState, useEffect, useRef } from 'react';
import { Briefcase, UserCog, Lightbulb, Network } from 'lucide-react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: "Real-World Projects",
      description: "Work on actual client projects, building a portfolio of work that showcases your skills to potential employers.",
      icon: <Briefcase className="h-12 w-12 text-blue-500 dark:text-blue-400" />,
    },
    {
      title: "Expert Mentorship",
      description: "Receive guidance from industry professionals who bring years of experience and insights to your learning journey.",
      icon: <UserCog className="h-12 w-12 text-violet-500 dark:text-violet-400" />,
    },
    {
      title: "Cutting-Edge Technologies",
      description: "Stay at the forefront of tech with training in the latest tools, frameworks, and methodologies used by top companies.",
      icon: <Lightbulb className="h-12 w-12 text-indigo-500 dark:text-indigo-400" />,
    },
    {
      title: "Networking Opportunities",
      description: "Connect with industry leaders, potential employers, and fellow tech enthusiasts through our extensive network.",
      icon: <Network className="h-12 w-12 text-blue-500 dark:text-blue-400" />,
    },
  ];

  return (
    <section id="why-us" className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm theme-transition relative overflow-hidden" ref={sectionRef}>
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-transparent dark:from-blue-900/10 dark:to-transparent"></div>
        
        {/* Subtle center glow */}
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 via-indigo-100/10 to-purple-100/20 dark:from-blue-900/10 dark:via-indigo-900/5 dark:to-purple-900/10 rounded-full blur-3xl transition-opacity duration-1000 ${isVisible ? 'opacity-60' : 'opacity-0'}`}></div>
        
        {/* Light dots pattern overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="dots-pattern w-full h-full"></div>
        </div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium">
            Why Choose SyncVerse
          </div>
          <h2 className="mb-6 text-gray-900 dark:text-white">What Sets Us Apart</h2>
          <p className="text-gray-600 dark:text-gray-300">
            SyncVerse offers more than just technical training. We provide a comprehensive experience that 
            prepares you for a successful career in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`flex transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mr-6 flex-shrink-0">
                <div className="p-4 bg-blue-50/80 dark:bg-blue-900/30 rounded-xl shadow-sm">{feature.icon}</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`mt-20 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          } relative overflow-hidden`}
          style={{ transitionDelay: '600ms' }}
        >
          {/* Inner glow effect */}
          <div className="absolute left-1/4 top-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute right-1/4 bottom-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Future?</h3>
              <p className="opacity-90 mb-6">
                Join thousands of successful graduates who have launched their careers through our programs. 
                The tech industry is waiting for talent like yours.
              </p>
              <a
                href="https://forms.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Apply Now
              </a>
            </div>
            <div className="hidden md:block">
              <div className="flex justify-center items-center h-full">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></div>
                  <div className="absolute inset-4 rounded-full bg-white opacity-40"></div>
                  <div className="absolute inset-8 rounded-full bg-white"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-2xl">Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
