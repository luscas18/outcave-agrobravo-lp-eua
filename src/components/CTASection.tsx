
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { ArrowRight, CalendarCheck } from 'lucide-react';

const CTASection: React.FC = () => {
  const [envio, setEnvio] = useState(false);
  return (
    <section id="contact" className="section-padding bg-[url(/lovable-uploads/forms.jpg)] bg-cover">
      <div className="container-wide">
        <div className="container-wide mx-auto glass-card p-8 md:p-12 rounded-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-white/80 backdrop-blur-sm -z-10"></div>
          <div className="absolute top-0 left-0 w-2 h-full bg-agrobravo-navy"></div>

          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <div className="flex flex-wrap gap-7 items-center">
              <div className="w-full lg:w-[48%] flex flex-col space-y-6">
                <AnimatedSection animation="fade-in-up" className="text-center lg:text-left mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-agrobravo-dark mb-6">
                    Vamos fortalecer sua estratégia comercial?
                  </h2>

                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Entre em contato para descobrir como podemos criar <span className='font-semibold'>experiências estratégicas
                      personalizadas para sua concessionária John Deere.</span>
                  </p>
                </AnimatedSection>
                <div className="flex items-start">
                  <div className="mr-4 w-10 h-10 flex-shrink-0 bg-agrobravo-navy/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-agrobravo-navy font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-agrobravo-dark mb-2">Agende uma conversa</h3>
                    <p className="text-agrobravo-gray">
                      Vamos entender seus objetivos comerciais e como podemos ajudar a alcançá-los.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 w-10 h-10 flex-shrink-0 bg-agrobravo-navy/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-agrobravo-navy font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-agrobravo-dark mb-2">Planejamento personalizado</h3>
                    <p className="text-agrobravo-gray">
                      Desenvolvemos uma proposta sob medida para suas necessidades específicas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 w-10 h-10 flex-shrink-0 bg-agrobravo-navy/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-agrobravo-navy font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-agrobravo-dark mb-2">Experiências impactantes</h3>
                    <p className="text-agrobravo-gray">
                      Implementamos experiências únicas que fortalecem seus relacionamentos comerciais.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[48%] flex flex-col">
                <div className="bg-agrobravo-navy p-6 rounded-xl shadow-md border border-gray-100">
                  <iframe name="frame" className="hidden"></iframe>
                  {
                    envio ?
                      <div>
                        <h2 className='text-lg text-white text-center mb-[8px]'>Cadastro realizado com sucesso!</h2>
                        <p className='text-center text-white text-lg'>Um de nossos especialista entrará em contato com você</p>
                      </div> :
                      <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                          <CalendarCheck className="mr-2 text-agrobravo-red" />
                          Agendar reunião
                        </h3>
                        <form action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSdolpSyPyQitsRyGqoq24dQf5xNFnWkSt2X8FaPczF9lINaVg/formResponse' target='frame' className="space-y-4" onSubmit={() => {
                          setTimeout(() => {
                            setEnvio(true)
                          }, 1000)
                        }}>
                          <div>
                            <input
                              name='entry.823912085'
                              type="text"
                              required
                              placeholder="Nome completo"
                              className="w-full  text-black placeholder:text-gray-600/80 p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-agrobravo-navy/50"
                            />
                          </div>

                          <div>
                            <input
                              required
                              name='entry.618917644'
                              type="email"
                              placeholder="Email"
                              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-agrobravo-navy/50"
                            />
                          </div>

                          <div>
                            <input
                              required
                              name='entry.1454942656'
                              type="text"
                              placeholder="Concessionária"
                              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-agrobravo-navy/50"
                            />
                          </div>

                          <div>
                            <textarea
                              name='entry.83084844'
                              placeholder="Mensagem (opcional)"
                              className="w-full p-3 border border-gray-200 rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-agrobravo-navy/50"
                            ></textarea>
                          </div>

                          <button type="submit" className="w-full btn-primary bg-agrobravo-red hover:bg-agrobravo-red text-black flex items-center justify-center group">
                            <span>Agendar reunião</span>
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
                          </button>
                        </form>
                      </div>
                  }
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
