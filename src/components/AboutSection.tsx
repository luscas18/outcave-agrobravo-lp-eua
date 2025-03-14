
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
                  src="/lovable-uploads/eua.jpg" 
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
              
              <p className="text-gray-600 mb-6 text-[18px] md:text-[20px]">
              A AgroBravo inicia uma nova fase em sua trajetória, consolidando seu posicionamento <span className='font-medium'>exclusivo para concessionárias John Deere</span> e focando em oferecer experiências estratégicas que fortalecem o relacionamento comercial.
              </p>
              
              <div className="flex items-center text-agrobravo-navy mb-6">
                <MapPin className="mr-2 text-agrobravo-red" />
                <span className="font-medium text-[18px] md:text-[20px]">
                  Agora com sede em <span className='font-semibold'>Ames, Iowa (EUA)</span>
                </span>
              </div>
              
              <p className="text-gray-600 text-[18px] md:text-[20px]">
                Nossa mudança estratégica para os Estados Unidos reforça nossa <span className='font-semibold'>expertise internacional</span>{' '}
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
