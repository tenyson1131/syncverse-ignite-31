
import React, { useState, useEffect } from 'react';

interface StarfieldBackgroundProps {
  className?: string;
  starCount?: number;
}

const StarfieldBackground: React.FC<StarfieldBackgroundProps> = ({ 
  className = '',
  starCount = 100
}) => {
  const [stars, setStars] = useState<Array<{x: number, y: number, size: number, opacity: number}>>([]);
  
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.7 + 0.3
        });
      }
      setStars(newStars);
    };
    
    generateStars();
  }, [starCount]);
  
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/10 dark:to-blue-900/5"></div>
      {stars.map((star, index) => (
        <div 
          key={index}
          className="absolute rounded-full bg-white dark:bg-blue-100 animate-pulse-slow"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
};

export default StarfieldBackground;
