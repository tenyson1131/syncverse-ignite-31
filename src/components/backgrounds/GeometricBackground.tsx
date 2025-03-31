
import React from 'react';

interface GeometricBackgroundProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
}

const GeometricBackground: React.FC<GeometricBackgroundProps> = ({ 
  className = '',
  density = 'medium' 
}) => {
  // Create dynamic floating shapes based on density
  const shapeCount = density === 'low' ? 5 : density === 'medium' ? 10 : 15;
  
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/10 dark:to-blue-900/5"></div>
      <div className="absolute inset-0 geometric-pattern opacity-[0.06] dark:opacity-[0.12]"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(shapeCount)].map((_, i) => {
          const shapes = ['circle', 'rectangle', 'triangle'];
          const shape = shapes[Math.floor(Math.random() * shapes.length)];
          const size = Math.random() * 40 + 20;
          
          return (
            <div 
              key={i} 
              className={`
                absolute animate-float 
                ${shape === 'circle' ? 'rounded-full' : 
                  shape === 'rectangle' ? 'rounded-md' : 'triangle'}
                bg-blue-400/5 dark:bg-blue-500/5 border border-blue-200/10 dark:border-blue-500/10
              `}
              style={{
                width: shape !== 'triangle' ? `${size}px` : 0,
                height: shape !== 'triangle' ? `${size}px` : 0,
                borderWidth: shape === 'triangle' ? `${size/2}px` : '1px',
                borderStyle: shape === 'triangle' ? 'solid' : 'solid',
                borderColor: shape === 'triangle' ? 'transparent transparent rgba(59, 130, 246, 0.05) transparent' : 'rgba(59, 130, 246, 0.05)',
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                animationDuration: `${15 + Math.random() * 15}s`,
                animationDelay: `${i * 0.7}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GeometricBackground;
