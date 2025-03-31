
import React from 'react';

interface DotsBackgroundProps {
  className?: string;
  dotSize?: number;
  dotSpacing?: number;
  dotColor?: string;
  opacity?: number;
}

const DotsBackground: React.FC<DotsBackgroundProps> = ({ 
  className = '',
  dotSize = 1,
  dotSpacing = 25,
  dotColor = '#3b82f6',  // Default blue color
  opacity = 0.05
}) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <div 
        className="absolute w-full h-full"
        style={{
          backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
          opacity: opacity
        }}
      />
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-blue-400/10 dark:bg-blue-500/10 animate-float"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
              filter: 'blur(40px)',
              opacity: 0.07
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DotsBackground;
