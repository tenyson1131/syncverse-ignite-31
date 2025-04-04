
import React from 'react';

interface GridBackgroundProps {
  className?: string;
  gridSize?: number;
  gridColor?: string;
  opacity?: number;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ 
  className = '', 
  gridSize = 20,
  gridColor = 'rgba(99, 102, 241, 0.05)',
  opacity = 1
}) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity }}>
      <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-blue-50/10 dark:to-blue-900/5"></div>
      <div 
        className="absolute w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`
        }}
      />
      
      {/* Animated grid highlights */}
      {[...Array(5)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-lg bg-indigo-500/5 dark:bg-indigo-400/5 animate-pulse-slow"
          style={{
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${i * 1.5}s`,
            transform: `rotate(${Math.random() * 45}deg)`,
            filter: 'blur(30px)'
          }}
        />
      ))}
    </div>
  );
};

export default GridBackground;
