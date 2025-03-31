
import React from 'react';

interface DotsBackgroundProps {
  className?: string;
}

const DotsBackground: React.FC<DotsBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute w-full h-full dots-pattern"></div>
    </div>
  );
};

export default DotsBackground;
