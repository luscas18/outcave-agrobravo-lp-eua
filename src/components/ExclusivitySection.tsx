
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Shield, Briefcase, Users } from 'lucide-react';

const ExclusivitySection: React.FC = () => {
  return (
    <section id="exclusivity" className="section-padding relative bg-agrobravo-navy text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container-wide relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in-up">
            <div className="inline-block px-3 py-1 rounded-full bg-agrobravo-red/20 backdrop-blur-sm border border-agrobravo-red/30 mb-4">
              <p className="text-white text-sm font-medium">Parceria exclusiva</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Exclusividade para Concessionárias John Deere
            </h2>
            
            <p className="text-white mb-8">
              Nosso foco exclusivo na rede John Deere nos permite compreender profundamente
              as necessidades específicas do seu negócio e oferecer experiências verdadeiramente 
              alinhadas com sua estratégia comercial.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 w-12 h-12 flex-shrink-0 bg-agrobravo-red/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Shield className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Comprometimento Exclusivo</h3>
                  <p className="text-white/90">
                    Trabalhamos exclusivamente com a rede John Deere, garantindo alinhamento 
                    total com os valores e objetivos da marca.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 w-12 h-12 flex-shrink-0 bg-agrobravo-red/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Briefcase className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Extensão do seu Marketing</h3>
                  <p className="text-white/90">
                    Atuamos como uma extensão da sua equipe de marketing, criando experiências 
                    personalizadas que fortalecem sua estratégia comercial.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 w-12 h-12 flex-shrink-0 bg-agrobravo-red/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Users className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Networking Estratégico</h3>
                  <p className="text-white/90">
                    Criamos ambientes para conexões valiosas entre concessionárias 
                    e clientes premium em contextos exclusivos.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right" delay={0.3}>
            <div className="relative h-full flex items-center justify-center">
              <div className="absolute -left-8 top-8 w-48 h-48 bg-agrobravo-red/10 rounded-full"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-agrobravo-red/20 rounded-full"></div>
              
              <div className="glass-card relative z-10 overflow-hidden rounded-2xl p-8 max-w-md bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="mb-6">
                  <img 
                    src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Strategic meeting" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white">Programa de Parceria Estratégica</h3>
                
                <p className="text-white">
                  Transforme clientes em parceiros de negócios através das nossas experiências 
                  exclusivas direcionadas para fortalecer laços comerciais.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ExclusivitySection;
