
import { useState, useEffect, useRef } from 'react';
import { Code, Smartphone, Brain, Check } from 'lucide-react';

const Programs = () => {
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

  const programs = [
    {
      title: "Web Development",
      icon: <Code size={32} className="text-blue-500" />,
      description: "Master modern web technologies and frameworks. Learn to build responsive, dynamic websites and web applications.",
      skills: ["HTML5 & CSS3", "JavaScript & TypeScript", "React & Next.js", "Backend Development", "Database Management"],
      color: "blue"
    },
    {
      title: "App Development",
      icon: <Smartphone size={32} className="text-violet-500" />,
      description: "Develop cross-platform mobile applications. From concept to deployment, learn the complete app development cycle.",
      skills: ["iOS & Android Development", "React Native", "Flutter", "UI/UX Design", "App Store Optimization"],
      color: "violet"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain size={32} className="text-indigo-500" />,
      description: "Dive into the world of artificial intelligence. Build intelligent systems and learn cutting-edge ML techniques.",
      skills: ["Python for AI", "Data Science", "Neural Networks", "Natural Language Processing", "Computer Vision"],
      color: "indigo"
    }
  ];

  return (
    <section id="programs" className="bg-gray-50" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
            Our Programs
          </div>
          <h2 className="mb-6">Specialized Training Programs</h2>
          <p className="text-gray-600">
            Choose from our three specialized tracks, each designed to give you the skills and experience 
            needed to excel in today's competitive tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.title}
              className={`bg-white rounded-xl shadow-md overflow-hidden card-hover transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`px-6 py-8`}>
                <div className="mb-5">{program.icon}</div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-2">
                  {program.skills.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <Check size={16} className={`text-${program.color}-500 mr-2 flex-shrink-0`} />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`bg-${program.color}-50 px-6 py-4`}>
                <a 
                  href="https://forms.microsoft.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-${program.color}-600 font-medium flex items-center hover:underline`}
                >
                  Apply for this program
                  <span className="ml-1">→</span>
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
