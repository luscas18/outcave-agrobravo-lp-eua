
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ArrowRight, CalendarCheck } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-agrobravo-light">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-white/80 backdrop-blur-sm -z-10"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-agrobravo-gold"></div>
          
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-agrobravo-dark mb-6">
              Vamos fortalecer sua estratégia comercial?
            </h2>
            
            <p className="text-agrobravo-gray text-lg max-w-2xl mx-auto">
              Entre em contato para descobrir como podemos criar experiências estratégicas 
              personalizadas para sua concessionária John Deere.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 w-10 h-10 flex-shrink-0 bg-agrobravo-gold/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-agrobravo-gold font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-agrobravo-dark mb-2">Agende uma Conversa</h3>
                    <p className="text-agrobravo-gray">
                      Vamos entender seus objetivos comerciais e como podemos ajudar a alcançá-los.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 w-10 h-10 flex-shrink-0 bg-agrobravo-gold/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-agrobravo-gold font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-agrobravo-dark mb-2">Planejamento Personalizado</h3>
                    <p className="text-agrobravo-gray">
                      Desenvolvemos uma proposta sob medida para suas necessidades específicas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 w-10 h-10 flex-shrink-0 bg-agrobravo-gold/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-agrobravo-gold font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-agrobravo-dark mb-2">Experiências Impactantes</h3>
                    <p className="text-agrobravo-gray">
                      Implementamos experiências únicas que fortalecem seus relacionamentos comerciais.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-agrobravo-dark mb-6 flex items-center">
                    <CalendarCheck className="mr-2 text-agrobravo-gold" />
                    Agendar Reunião
                  </h3>
                  
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Nome completo" 
                        className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-agrobravo-gold/50"
                      />
                    </div>
                    
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-agrobravo-gold/50"
                      />
                    </div>
                    
                    <div>
                      <input 
                        type="text" 
                        placeholder="Concessionária" 
                        className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-agrobravo-gold/50"
                      />
                    </div>
                    
                    <div>
                      <textarea 
                        placeholder="Mensagem (opcional)" 
                        className="w-full p-3 border border-gray-200 rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-agrobravo-gold/50"
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="w-full btn-primary flex items-center justify-center group">
                      <span>Agendar Reunião</span>
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
