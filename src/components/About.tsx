
import { useEffect, useState, useRef } from 'react';

const About = () => {
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
    <section id="about" className="bg-white" ref={sectionRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-70 z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 rounded-full opacity-70 z-0"></div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
              About SyncVerse
            </div>
            <h2 className="mb-6">We're Building the Next Generation of Tech Talent</h2>
            <p className="text-gray-600 mb-6">
              SyncVerse was founded with a mission to bridge the gap between academic education and industry demands. 
              We provide hands-on training and real-world experience through our internship programs, focusing on the most 
              in-demand skills in tech today: Web Development, App Development, and Artificial Intelligence.
            </p>
            <p className="text-gray-600 mb-8">
              Our team consists of industry veterans, passionate about nurturing talent and helping individuals transform 
              their passion for technology into successful careers. We believe in learning by doing, which is why our 
              programs emphasize practical projects and industry exposure.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-blue-600 font-bold text-3xl mb-1">500+</div>
                <div className="text-gray-500">Graduates</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-blue-600 font-bold text-3xl mb-1">95%</div>
                <div className="text-gray-500">Placement Rate</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-blue-600 font-bold text-3xl mb-1">50+</div>
                <div className="text-gray-500">Partner Companies</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-blue-600 font-bold text-3xl mb-1">3+</div>
                <div className="text-gray-500">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
