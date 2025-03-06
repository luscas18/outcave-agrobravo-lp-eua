
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'slide-in-right' | 'scale-in';
  delay?: number;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.2,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, [threshold]);

  const animationClass = isVisible
    ? animation === 'fade-in'
      ? 'animate-fade-in'
      : animation === 'slide-in-right'
      ? 'animate-slide-in-right'
      : animation === 'scale-in'
      ? 'animate-scale-in'
      : 'animate-fade-in-up'
    : 'opacity-0';

  const delayStyle = { animationDelay: `${delay}s` };

  return (
    <div
      ref={sectionRef}
      className={cn(animationClass, className)}
      style={delay > 0 ? delayStyle : undefined}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
