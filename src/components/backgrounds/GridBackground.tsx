
import React from 'react';

interface GridBackgroundProps {
  className?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-blue-50/20 dark:to-blue-900/10"></div>
      <div className="absolute w-full h-full grid-bg opacity-[0.07] dark:opacity-[0.15]"></div>
    </div>
  );
};

export default GridBackground;
