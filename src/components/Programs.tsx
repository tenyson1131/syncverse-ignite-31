
import { useState, useEffect, useRef } from 'react';
import { Code, Smartphone, Brain, Check, ChevronRight } from 'lucide-react';
import BackgroundPattern from './BackgroundPattern';

const Programs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
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

  const programs = [
    {
      title: "Web Development",
      icon: <Code size={32} className="text-blue-500 dark:text-blue-400" />,
      description: "Master modern web technologies and frameworks. Learn to build responsive, dynamic websites and web applications.",
      skills: ["HTML5 & CSS3", "JavaScript & TypeScript", "React & Next.js", "Backend Development", "Database Management"],
      color: "blue"
    },
    {
      title: "App Development",
      icon: <Smartphone size={32} className="text-violet-500 dark:text-violet-400" />,
      description: "Develop cross-platform mobile applications. From concept to deployment, learn the complete app development cycle.",
      skills: ["iOS & Android Development", "React Native", "Flutter", "UI/UX Design", "App Store Optimization"],
      color: "violet"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain size={32} className="text-indigo-500 dark:text-indigo-400" />,
      description: "Dive into the world of artificial intelligence. Build intelligent systems and learn cutting-edge ML techniques.",
      skills: ["Python for AI", "Data Science", "Neural Networks", "Natural Language Processing", "Computer Vision"],
      color: "indigo"
    }
  ];

  const toggleCard = (index: number) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <section id="programs" className="relative bg-gray-50 dark:bg-gray-800 theme-transition py-20" ref={sectionRef}>
      <BackgroundPattern className="opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/50 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium">
            Our Programs
          </div>
          <h2 className="mb-6 text-gray-900 dark:text-white">Specialized Training Programs</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Choose from our three specialized tracks, each designed to give you the skills and experience 
            needed to excel in today's competitive tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.title}
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              } ${
                expandedCard === index 
                  ? 'ring-2 ring-blue-500 dark:ring-blue-400 shadow-xl transform scale-105 z-10' 
                  : 'card-hover'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => toggleCard(index)}
            >
              <div className="px-6 py-8 cursor-pointer">
                <div className="mb-5 transition-transform duration-300 transform">{program.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{program.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{program.description}</p>
                
                <div className={`space-y-2 transition-all duration-500 ${
                  expandedCard === index ? 'opacity-100 max-h-[300px]' : 'opacity-0 max-h-0 overflow-hidden'
                }`}>
                  {program.skills.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <Check size={16} className={`text-${program.color}-500 dark:text-${program.color}-400 mr-2 flex-shrink-0`} />
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
                
                <div className={`mt-6 flex items-center text-${program.color}-600 dark:text-${program.color}-400 font-medium transition-opacity duration-300 ${
                  expandedCard === index ? 'opacity-0' : 'opacity-100'
                }`}>
                  <span>Learn more</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
              
              <div className={`bg-${program.color}-50 dark:bg-${program.color}-900/20 px-6 py-4 transition-all duration-500 ${
                expandedCard === index ? 'opacity-100' : 'opacity-80'
              }`}>
                <a 
                  href="https://forms.microsoft.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-${program.color}-600 dark:text-${program.color}-400 font-medium flex items-center hover:underline`}
                  onClick={(e) => e.stopPropagation()}
                >
                  Apply for this program
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
