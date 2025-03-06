
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent'
      )}
    >
      <div className="container-wide flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <Logo variant={isScrolled ? 'default' : 'light'} />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className={cn(
              "transition-colors duration-300",
              isScrolled 
                ? "text-agrobravo-navy hover:text-agrobravo-red" 
                : "text-white hover:text-agrobravo-red"
            )}
          >
            Sobre
          </a>
          <a
            href="#benefits"
            className={cn(
              "transition-colors duration-300",
              isScrolled 
                ? "text-agrobravo-navy hover:text-agrobravo-red" 
                : "text-white hover:text-agrobravo-red"
            )}
          >
            Benefícios
          </a>
          <a
            href="#exclusivity"
            className={cn(
              "transition-colors duration-300",
              isScrolled 
                ? "text-agrobravo-navy hover:text-agrobravo-red" 
                : "text-white hover:text-agrobravo-red"
            )}
          >
            Exclusividade
          </a>
          <a
            href="#contact"
            className="btn-primary"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden",
            isScrolled ? "text-agrobravo-navy" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out pt-20',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          <a
            href="#about"
            className="text-agrobravo-navy text-xl hover:text-agrobravo-red transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre
          </a>
          <a
            href="#benefits"
            className="text-agrobravo-navy text-xl hover:text-agrobravo-red transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Benefícios
          </a>
          <a
            href="#exclusivity"
            className="text-agrobravo-navy text-xl hover:text-agrobravo-red transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Exclusividade
          </a>
          <a
            href="#contact"
            className="btn-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
