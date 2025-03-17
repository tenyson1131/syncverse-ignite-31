
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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
      }, 6000);
      
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
    },
    {
      name: "Sophia Rodriguez",
      role: "Mobile Developer at Spotify",
      program: "App Development",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
      quote: "After completing the app development program, I had a portfolio that truly stood out. The real-world projects and industry connections helped me secure a position at Spotify within weeks of graduating.",
    },
    {
      name: "Marcus Johnson",
      role: "AI Researcher at OpenAI",
      program: "AI & Machine Learning",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
      quote: "The AI & ML program at SyncVerse provided me with both theoretical knowledge and practical experience. The curriculum was cutting-edge, and the mentors were genuinely invested in my success.",
    },
    {
      name: "Emily Wang",
      role: "Frontend Developer at Adobe",
      program: "Web Development",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
      quote: "SyncVerse didn't just teach me to code; they taught me to think like a developer. The emphasis on problem-solving and best practices has been invaluable in my role at Adobe.",
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
    <section id="testimonials" className="bg-white" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
            Testimonials
          </div>
          <h2 className="mb-6">What Our Graduates Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it. Hear from the professionals who launched their 
            careers through our programs.
          </p>
        </div>

        <div 
          className={`relative max-w-4xl mx-auto py-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                      <div className="md:mr-8 mb-6 md:mb-0">
                        <div className="relative">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
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
                      <div>
                        <p className="text-gray-700 italic text-lg mb-6">"{testimonial.quote}"</p>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-blue-600">{testimonial.role}</p>
                          <p className="text-gray-500 text-sm mt-1">Program: {testimonial.program}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between mt-8">
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
                    activeIndex === index ? 'bg-blue-500 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
