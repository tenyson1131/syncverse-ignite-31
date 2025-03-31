
import React, { useEffect, useState } from 'react';

interface DotsBackgroundProps {
  className?: string;
  dotSize?: number;
  dotSpacing?: number;
  dotColor?: string;
  opacity?: number;
  animated?: boolean;
}

const DotsBackground: React.FC<DotsBackgroundProps> = ({ 
  className = '',
  dotSize = 1,
  dotSpacing = 25,
  dotColor = '#3b82f6',
  opacity = 0.05,
  animated = true
}) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!animated) return;
    
    const interval = setInterval(() => {
      setOffset({
        x: Math.sin(Date.now() / 10000) * 5,
        y: Math.cos(Date.now() / 15000) * 5
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, [animated]);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <div 
        className="absolute w-full h-full transition-transform duration-[5000ms] ease-in-out"
        style={{
          backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
          opacity: opacity,
          transform: animated ? `translate(${offset.x}px, ${offset.y}px)` : 'none'
        }}
      />

      {/* Gradient orbs */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className="absolute rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(79,70,229,0.05) 40%, transparent 70%)',
            width: `${Math.random() * 300 + 200}px`,
            height: `${Math.random() * 300 + 200}px`,
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${20 + Math.random() * 20}s`,
            opacity: 0.2,
            filter: 'blur(40px)'
          }}
        />
      ))}
    </div>
  );
};

export default DotsBackground;
