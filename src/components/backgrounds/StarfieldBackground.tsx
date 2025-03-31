
import React, { useState, useEffect, useRef } from 'react';

interface StarfieldBackgroundProps {
  className?: string;
  starCount?: number;
  animated?: boolean;
  opacity?: number;
  speed?: number;
}

const StarfieldBackground: React.FC<StarfieldBackgroundProps> = ({ 
  className = '',
  starCount = 100,
  animated = true,
  opacity = 1,
  speed = 0.05
}) => {
  const [stars, setStars] = useState<Array<{x: number, y: number, size: number, opacity: number, speed: number}>>([]);
  const requestRef = useRef<number>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
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
          speed: Math.random() * speed + (speed / 5)
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
    if (!animated) return;
    
    const animate = () => {
      setStars(prevStars => 
        prevStars.map(star => ({
          ...star,
          y: (star.y + star.speed) % 100
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
  }, [animated]);
  
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/10 dark:to-blue-900/5"></div>
      {stars.map((star, index) => (
        <div 
          key={index}
          className={`absolute rounded-full bg-white dark:bg-blue-100 ${animated ? '' : 'animate-pulse-slow'}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: animated ? undefined : `${Math.random() * 3}s`,
            animationDuration: animated ? undefined : `${3 + Math.random() * 4}s`,
            transition: animated ? 'top 0.1s linear' : undefined
          }}
        />
      ))}
    </div>
  );
};

export default StarfieldBackground;
