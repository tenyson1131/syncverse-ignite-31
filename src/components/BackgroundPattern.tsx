
import React from 'react';

interface BackgroundPatternProps {
  className?: string;
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTVoLTJ2LTJoMnYyem0wLTV2LTJoLTJ2Mmgyem0tNSAwaC0ydi0yaDJ2MnptLTUgMHYtMmgtMnYyaDJ6bTUgMTBoLTJ2LTJoMnYyem0wLTV2LTJoLTJ2Mmgyem0tNSA1aC0ydi0yaDJ2MnptMC01aC0ydi0yaDJ2MnptMTUgMTBoLTJ2LTJoMnYyem0wLTV2LTJoLTJ2Mmgyem0tNSA1aC0ydi0yaDJ2MnptMC01di0yaC0ydjJoMnptLTUgNWgtMnYtMmgydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 dark:opacity-25"></div>
    </div>
  );
};

export default BackgroundPattern;
