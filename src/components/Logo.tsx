
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  if (variant === 'default' || variant === 'dark') {
    return (
      <div className={`flex items-center ${className}`}>
        <img 
          src="/lovable-uploads/ddeed80f-336b-4d80-8fd5-950606aa6f98.png" 
          alt="AgroBravo Enterprise" 
          className="h-10 md:h-12"
        />
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
