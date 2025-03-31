
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

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
      rating: 5,
      initials: "AC"
    },
    {
      name: "Sophia Rodriguez",
      role: "Mobile Developer at Spotify",
      program: "App Development",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
      quote: "After completing the app development program, I had a portfolio that truly stood out. The real-world projects and industry connections helped me secure a position at Spotify within weeks of graduating.",
      rating: 5,
      initials: "SR"
    },
    {
      name: "Marcus Johnson",
      role: "AI Researcher at OpenAI",
      program: "AI & Machine Learning",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
      quote: "The AI & ML program at SyncVerse provided me with both theoretical knowledge and practical experience. The curriculum was cutting-edge, and the mentors were genuinely invested in my success.",
      rating: 4,
      initials: "MJ"
    },
    {
      name: "Emily Wang",
      role: "Frontend Developer at Adobe",
      program: "Web Development",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
      quote: "SyncVerse didn't just teach me to code; they taught me to think like a developer. The emphasis on problem-solving and best practices has been invaluable in my role at Adobe.",
      rating: 5,
      initials: "EW"
    },
  ];

  const goToPrevious = () => {
    if (!transitioning) {
      setTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      setTimeout(() => setTransitioning(false), 300);
    }
  };

  const goToNext = () => {
    if (!transitioning) {
      setTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      setTimeout(() => setTransitioning(false), 300);
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
          <div className="max-w-4xl mx-auto">
            {/* Fixed height container to prevent layout shifts */}
            <div className="relative h-[340px] md:h-[320px]">
              <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg overflow-hidden absolute inset-0">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.name}
                    className={`transition-all absolute inset-0 ${
                      activeIndex === index 
                        ? 'opacity-100 translate-x-0' 
                        : index < activeIndex || (activeIndex === 0 && index === testimonials.length - 1)
                          ? 'opacity-0 -translate-x-full' 
                          : 'opacity-0 translate-x-full'
                    } duration-300 ease-in-out`}
                  >
                    <CardContent className="p-8 h-full flex flex-col">
                      {/* Quote and rating */}
                      <div className="mb-8 flex-1">
                        <div className="flex justify-between items-center mb-4">
                          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                            <span className="text-blue-600 dark:text-blue-300 text-xl font-bold">"</span>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={`${
                                  i < testimonial.rating 
                                    ? 'text-yellow-400 fill-yellow-400' 
                                    : 'text-gray-300 dark:text-gray-600'
                                } ml-1`} 
                              />
                            ))}
                          </div>
                        </div>
                        <blockquote className="text-lg md:text-xl font-light text-gray-700 dark:text-gray-200 leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                      
                      {/* User info row */}
                      <div className="flex items-center justify-between border-t pt-6 dark:border-gray-700">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8 border-2 border-white dark:border-gray-800">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                            <AvatarFallback className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs">
                              {testimonial.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.role}</p>
                          </div>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                          {testimonial.program}
                        </span>
                      </div>
                    </CardContent>
                  </div>
                ))}
              </Card>
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
                      setTimeout(() => setTransitioning(false), 300);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-blue-500 w-6' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex space-x-3">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-sm"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
