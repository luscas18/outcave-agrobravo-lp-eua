
import React from 'react';

interface LogoProps {
  variant?: 'default' | 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '' }) => {
  
  // Light variant (white text for dark backgrounds)
  return (
    <div>
      {
        variant === 'light' && (
          <img src="/lovable-uploads/logo_allwith.svg" alt="logo Agro Bravo" className={`max-w-[200px]`} />
        )
      }
       {
        variant === 'dark' && (
          <img src="/lovable-uploads/logo_negativa.svg" alt="logo Agro Bravo" className={`max-w-[200px]`} />
        )
      }
    </div>
  );
};

export default Logo;
