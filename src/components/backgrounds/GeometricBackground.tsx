
import React from 'react';

interface GeometricBackgroundProps {
  className?: string;
}

const GeometricBackground: React.FC<GeometricBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/10 dark:to-blue-900/5"></div>
      <div className="absolute inset-0 geometric-pattern opacity-[0.06] dark:opacity-[0.12]"></div>
    </div>
  );
};

export default GeometricBackground;
