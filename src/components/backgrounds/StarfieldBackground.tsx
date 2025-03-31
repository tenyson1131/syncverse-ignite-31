
import React, { useState, useEffect, useRef } from 'react';

interface StarfieldBackgroundProps {
  className?: string;
  starCount?: number;
  animated?: boolean;
  opacity?: number;
  speed?: number;
  twinkle?: boolean;
}

const StarfieldBackground: React.FC<StarfieldBackgroundProps> = ({ 
  className = '',
  starCount = 100,
  animated = true,
  opacity = 1,
  speed = 0.05,
  twinkle = true
}) => {
  const [stars, setStars] = useState<Array<{x: number, y: number, size: number, opacity: number, speed: number, twinkleSpeed: number}>>([]);
  const requestRef = useRef<number>();
  
  // Generate initial stars
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.7 + 0.3,
          speed: Math.random() * speed + (speed / 5),
          twinkleSpeed: 1 + Math.random() * 4
        });
      }
      setStars(newStars);
    };
    
    generateStars();
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [starCount, speed]);
  
  // Animate stars if animation is enabled
  useEffect(() => {
    if (!animated && !twinkle) return;
    
    let twinklePhase = 0;
    
    const animate = (time: number) => {
      twinklePhase = time / 1000;
      
      setStars(prevStars => 
        prevStars.map((star, index) => ({
          ...star,
          y: animated ? (star.y + star.speed) % 100 : star.y,
          opacity: twinkle 
            ? 0.3 + Math.sin(twinklePhase / star.twinkleSpeed + index) * 0.3
            : star.opacity
        }))
      );
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animated, twinkle]);
  
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/10 dark:to-blue-900/5"></div>
      {stars.map((star, index) => (
        <div 
          key={index}
          className="absolute rounded-full bg-white dark:bg-blue-100"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            transition: animated ? 'top 0.1s linear' : undefined,
            filter: `blur(${star.size > 2 ? 0.5 : 0}px)`
          }}
        />
      ))}
      
      {/* Add a few larger "spotlight" stars */}
      {[...Array(3)].map((_, i) => (
        <div 
          key={`spotlight-${i}`}
          className="absolute rounded-full bg-indigo-100/30 dark:bg-blue-300/20 animate-pulse-slow"
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            filter: 'blur(5px)',
            animationDuration: `${3 + Math.random() * 3}s`,
            animationDelay: `${i * 1}s`
          }}
        />
      ))}
    </div>
  );
};

export default StarfieldBackground;
