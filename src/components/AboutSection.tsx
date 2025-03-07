
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { MapPin } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-agrobravo-light">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in-up">
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-agrobravo-red/20 rounded-full"></div>
              <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-agrobravo-red/30 rounded-full"></div>
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070" 
                  alt="AgroBravo team" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-sm border border-white/20">
              <div className="inline-block px-3 py-1 rounded-full bg-agrobravo-navy/10 border border-agrobravo-navy/20 mb-4">
                <p className="text-agrobravo-navy text-sm font-medium">Sobre a AgroBravo</p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-agrobravo-navy mb-6">
                Nova visão, mesma excelência
              </h2>
              
              <p className="text-agrobravo-gray mb-6">
                A AgroBravo agora conta com uma nova fase em sua trajetória, consolidando seu 
                posicionamento exclusivo para concessionárias John Deere, com foco em oferecer 
                experiências estratégicas que fortalecem o relacionamento comercial.
              </p>
              
              <div className="flex items-center text-agrobravo-navy mb-6">
                <MapPin className="mr-2 text-agrobravo-red" />
                <span className="font-medium">
                  Agora com sede em Ames, Iowa (EUA)
                </span>
              </div>
              
              <p className="text-agrobravo-gray">
                Nossa mudança estratégica para os Estados Unidos reforça nossa expertise internacional 
                e nos coloca ainda mais próximos das inovações do setor agrícola, 
                permitindo criar experiências ainda mais relevantes e impactantes para 
                concessionárias e seus clientes.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
