
import { useState, useEffect, useRef } from 'react';

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 5);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const steps = [
    {
      number: "01",
      title: "Apply",
      description: "Fill out our application form with your information, background, and the program you're interested in.",
    },
    {
      number: "02",
      title: "Assessment",
      description: "Complete a brief assessment and interview to help us understand your skills and goals.",
    },
    {
      number: "03",
      title: "Onboarding",
      description: "Once accepted, you'll receive all necessary resources and be assigned to a mentor.",
    },
    {
      number: "04",
      title: "Learn & Practice",
      description: "Dive into the curriculum, work on real projects, and receive regular feedback.",
    },
    {
      number: "05",
      title: "Graduate & Connect",
      description: "Showcase your final project, receive your certificate, and connect with potential employers.",
    },
  ];

  return (
    <section id="process" className="bg-gray-50 dark:bg-gray-800 theme-transition" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium">
            Our Process
          </div>
          <h2 className="mb-6 text-gray-900 dark:text-white">How It Works</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our streamlined process is designed to assess your fit, provide comprehensive training, 
            and set you up for success in the tech industry.
          </p>
        </div>

        <div className="relative">
          {/* Desktop process steps (horizontal) */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Progress bar */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2"></div>
              <div 
                className="absolute top-1/2 left-0 h-0.5 bg-blue-500 -translate-y-1/2 transition-all duration-500"
                style={{ width: `${(activeStep + 1) * 25}%` }}
              ></div>
              
              {/* Step circles */}
              <div className="flex justify-between relative z-10">
                {steps.map((step, index) => (
                  <div 
                    key={step.number} 
                    className={`transition-all duration-700 ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div 
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-500 shadow-md ${
                        index <= activeStep 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-white dark:bg-gray-700 text-gray-400 dark:text-gray-300 border border-gray-200 dark:border-gray-600'
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Step details */}
            <div className="mt-8 grid grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile process steps (vertical) */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`flex items-start transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0 transition-all duration-500 shadow-md ${
                    index <= activeStep 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white dark:bg-gray-700 text-gray-400 dark:text-gray-300 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div 
          className={`mt-20 text-center transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <a
            href="https://forms.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
