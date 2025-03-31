
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

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

  // Auto-advance testimonials
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        if (!transitioning) {
          goToNext();
        }
      }, 8000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, activeIndex, transitioning]);

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Software Engineer at Google",
      program: "Web Development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
      quote: "SyncVerse's web development program completely transformed my career. The hands-on projects and mentorship gave me the confidence and skills to land my dream job at Google.",
      rating: 5
    },
    {
      name: "Sophia Rodriguez",
      role: "Mobile Developer at Spotify",
      program: "App Development",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
      quote: "After completing the app development program, I had a portfolio that truly stood out. The real-world projects and industry connections helped me secure a position at Spotify within weeks of graduating.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "AI Researcher at OpenAI",
      program: "AI & Machine Learning",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
      quote: "The AI & ML program at SyncVerse provided me with both theoretical knowledge and practical experience. The curriculum was cutting-edge, and the mentors were genuinely invested in my success.",
      rating: 4
    },
    {
      name: "Emily Wang",
      role: "Frontend Developer at Adobe",
      program: "Web Development",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
      quote: "SyncVerse didn't just teach me to code; they taught me to think like a developer. The emphasis on problem-solving and best practices has been invaluable in my role at Adobe.",
      rating: 5
    },
  ];

  const goToPrevious = () => {
    if (!transitioning) {
      setTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      setTimeout(() => setTransitioning(false), 500);
    }
  };

  const goToNext = () => {
    if (!transitioning) {
      setTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      setTimeout(() => setTransitioning(false), 500);
    }
  };

  return (
    <section id="testimonials" className="bg-white dark:bg-gray-900 theme-transition" ref={sectionRef}>
      <div className="section-container py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium">
            Testimonials
          </div>
          <h2 className="mb-6 text-gray-900 dark:text-white">What Our Graduates Say</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Hear from the professionals who launched their 
            careers through our programs.
          </p>
        </div>

        <div 
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Desktop Design */}
          <div className="hidden md:block">
            <div className="relative h-[500px] overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.name}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
                    activeIndex === index 
                      ? 'opacity-100 translate-x-0 z-10' 
                      : index < activeIndex 
                        ? 'opacity-0 -translate-x-full z-0' 
                        : 'opacity-0 translate-x-full z-0'
                  }`}
                >
                  <div className="grid grid-cols-12 gap-8 h-full">
                    {/* Left side - Quote and details */}
                    <div className="col-span-7 flex flex-col justify-center">
                      <div className="mb-8">
                        <Quote size={48} className="text-blue-400 dark:text-blue-300 opacity-20" />
                        <p className="text-2xl font-light italic text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="mr-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                          <p className="text-blue-600 dark:text-blue-400">{testimonial.role}</p>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={`${
                                  i < testimonial.rating 
                                    ? 'text-yellow-400 fill-yellow-400' 
                                    : 'text-gray-300 dark:text-gray-600'
                                } mr-0.5`} 
                              />
                            ))}
                            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">Program: {testimonial.program}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side - Visual */}
                    <div className="col-span-5 relative">
                      <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/30 dark:from-blue-900/30 dark:to-purple-900/40 mix-blend-multiply"></div>
                        <img 
                          src={`https://images.unsplash.com/photo-${index === 0 ? '1517245386807-bb43389b5b1c' : 
                                  index === 1 ? '1531746020798-e6953c6e8e04' : 
                                  index === 2 ? '1573164713988-8665fc963095' : 
                                  '1497215842964-222b430dc094'}?auto=format&fit=crop&q=80`} 
                          alt="Student working" 
                          className="h-full w-full object-cover opacity-90 transform scale-110 hover:scale-100 transition-transform duration-5000"
                        />
                      </div>
                      
                      <div className="absolute bottom-8 left-8 right-8 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                        <div className="text-center">
                          <div className="text-blue-600 dark:text-blue-400 font-bold text-2xl mb-1">{
                            index === 0 ? '94%' : 
                            index === 1 ? '12+' : 
                            index === 2 ? '86%' : 
                            '$96K'
                          }</div>
                          <div className="text-gray-600 dark:text-gray-300 text-sm">{
                            index === 0 ? 'Placement Rate' : 
                            index === 1 ? 'Avg. Projects Completed' : 
                            index === 2 ? 'Find Jobs In-Field' : 
                            'Avg. Starting Salary'
                          }</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Design */}
          <div className="md:hidden">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.name}
                  className={`transition-all duration-500 ease-in-out ${
                    activeIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-md">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-1 rounded-full">
                          <Quote size={16} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`${
                            i < testimonial.rating 
                              ? 'text-yellow-400 fill-yellow-400' 
                              : 'text-gray-300 dark:text-gray-600'
                          } mx-0.5`} 
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-200 italic text-center mb-6">"{testimonial.quote}"</p>
                    
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-blue-600 dark:text-blue-400 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">Program: {testimonial.program}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-10">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!transitioning) {
                      setTransitioning(true);
                      setActiveIndex(index);
                      setTimeout(() => setTransitioning(false), 500);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-blue-500 w-8' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex space-x-3">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-sm"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
