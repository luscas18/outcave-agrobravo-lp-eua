
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1635174815612-fd9636f70146?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundPosition: '50% 50%'
        }}
      >
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-20 md:py-32">
        <div className="max-w-[1000px]">
          <div className="inline-block px-4 py-1 rounded-full bg-agrobravo-red/20 backdrop-blur-sm border border-agrobravo-red/30 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <p className="text-white font-medium">Exclusivo para concessionárias John Deere</p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Retorno da AgroBravo – Exclusividade para concessionárias <span className='text-agrobravo-red'>John Deere</span>
          </h1>

          <p className="text-[18px] md:text-[20px] text-white/90 mb-8 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            Viagens estratégicas que fortalecem conexões e impulsionam negócios. Agora <span className='font-semibold'>contamos com sede nos EUA</span>, criando experiências ainda mais impactantes para você e seus clientes.
          </p>

          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <a href="#contact" className={cn(
              "inline-flex items-center btn-primary group"
            )}>
              <span>Fale com um Especialista</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
        <p className="text-white text-sm mb-2">Saiba mais</p>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
