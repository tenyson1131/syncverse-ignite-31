
import { useEffect, useState, useRef } from 'react';
import BackgroundPattern from './BackgroundPattern';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { title: "Our Mission", content: "SyncVerse was founded with a mission to bridge the gap between academic education and industry demands. We provide hands-on training and real-world experience through our internship programs, focusing on the most in-demand skills in tech today." },
    { title: "Our Team", content: "Our team consists of industry veterans, passionate about nurturing talent and helping individuals transform their passion for technology into successful careers. We believe in learning by doing, which is why our programs emphasize practical projects and industry exposure." },
    { title: "Our Vision", content: "We envision creating a global community of skilled tech professionals who can shape the future of technology. By providing accessible, quality education and real-world experiences, we aim to democratize access to tech careers for everyone with passion and aptitude." }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
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

  return (
    <section id="about" className="relative bg-white dark:bg-gray-900 theme-transition py-20" ref={sectionRef}>
      <BackgroundPattern />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-medium">Building tomorrow's tech leaders today</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-70 z-0 animate-blob"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 dark:bg-purple-900/30 rounded-full opacity-70 z-0 animate-blob animation-delay-2000"></div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/50 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium">
              About SyncVerse
            </div>
            <h2 className="mb-6 text-gray-900 dark:text-white">We're Building the Next Generation of Tech Talent</h2>
            
            {/* Tabs */}
            <div className="mb-6">
              <div className="flex space-x-1 border-b border-gray-200 dark:border-gray-700">
                {tabs.map((tab, index) => (
                  <button 
                    key={tab.title}
                    onClick={() => setActiveTab(index)}
                    className={`py-2 px-4 font-medium text-sm transition-all duration-200 relative ${
                      activeTab === index 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    {tab.title}
                    {activeTab === index && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform transition-transform duration-300"></span>
                    )}
                  </button>
                ))}
              </div>
              <div className="py-4 text-gray-600 dark:text-gray-300 min-h-[100px]">
                {tabs.map((tab, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-500 ${
                      activeTab === index 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4 absolute pointer-events-none'
                    }`}
                  >
                    {tab.content}
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our team consists of industry veterans, passionate about nurturing talent and helping individuals transform 
              their passion for technology into successful careers. We believe in learning by doing, which is why our 
              programs emphasize practical projects and industry exposure.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg card-hover hover:shadow-blue-100 dark:hover:shadow-blue-900/10">
                <div className="text-blue-600 dark:text-blue-400 font-bold text-3xl mb-1">500+</div>
                <div className="text-gray-500 dark:text-gray-400">Graduates</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg card-hover hover:shadow-purple-100 dark:hover:shadow-purple-900/10">
                <div className="text-blue-600 dark:text-blue-400 font-bold text-3xl mb-1">95%</div>
                <div className="text-gray-500 dark:text-gray-400">Placement Rate</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg card-hover hover:shadow-blue-100 dark:hover:shadow-blue-900/10">
                <div className="text-blue-600 dark:text-blue-400 font-bold text-3xl mb-1">50+</div>
                <div className="text-gray-500 dark:text-gray-400">Partner Companies</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg card-hover hover:shadow-purple-100 dark:hover:shadow-purple-900/10">
                <div className="text-blue-600 dark:text-blue-400 font-bold text-3xl mb-1">3+</div>
                <div className="text-gray-500 dark:text-gray-400">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
