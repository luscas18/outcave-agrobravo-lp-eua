
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  if (variant === 'default') {
    return (
      <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold text-black">
        Agro<span className="text-agrobravo-red">Bravo</span>
        <span className="text-black text-sm ml-1 tracking-wider">ENTERPRISE</span>
      </span>
    </div>
    );
  }
  
  // Light variant (white text for dark backgrounds)
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold text-white">
        Agro<span className="text-agrobravo-red">Bravo</span>
        <span className="text-white text-sm ml-1 tracking-wider">ENTERPRISE</span>
      </span>
    </div>
  );
};

export default Logo;
