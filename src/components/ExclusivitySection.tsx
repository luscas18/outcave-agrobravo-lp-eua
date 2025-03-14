
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
        <div className="flex flex-wrap justify-between items-center">
          <AnimatedSection className='w-full md:w-[45%] mb-[40px] md:mb-0' animation="fade-in-up">
            <div className="inline-block px-3 py-1 rounded-full bg-agrobravo-red/20 backdrop-blur-sm border border-agrobravo-red/30 mb-4">
              <p className="text-white text-sm font-medium">Exclusive Partnership</p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Exclusivity for {' '}<span className='text-agrobravo-red'>John Deere</span> dealerships
            </h2>

            <p className="text-white mb-8 text-[18px] md:text-[20px]">
              Our exclusive <span className='font-medium'>focus on the John Deere network</span> allows us to deeply understand the specific needs of your business and provide experiences that are truly aligned with your commercial strategy.

            </p>

            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 w-12 h-12 flex-shrink-0 bg-agrobravo-red/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Shield className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1 text-white">Access to exclusive visits</h3>
                  <p className="text-white/90">
                    We offer access to locations and events that are not available to the general public, creating unique opportunities for networking and specialized learning in the agricultural sector.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 w-12 h-12 flex-shrink-0 bg-agrobravo-red/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Briefcase className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1 text-white">Extension of your marketing</h3>
                  <p className="text-white/90">
                    We act as an extension of your marketing team, designing personalized experiences that strengthen your commercial strategy.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 w-12 h-12 flex-shrink-0 bg-agrobravo-red/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Users className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1 text-white">Strategic networking</h3>
                  <p className="text-white/90">
                    We create environments for valuable connections between dealerships and premium clients in exclusive settings.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className='w-full md:w-[50%]' animation="slide-in-right" delay={0.3}>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute -left-8 top-8 w-48 h-48 bg-agrobravo-red/10 rounded-full"></div>
              <div className="absolute -right-4 -bottom-4 w-[24] h-24 bg-agrobravo-red/20 rounded-full"></div>

              <div className="glass-card w-full relative z-10 overflow-hidden rounded-2xl p-8 bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="mb-6">
                  <img
                    src="/lovable-uploads/viagem.jpeg"
                    alt="Strategic meeting"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <h3 className="text-xl font-bold mb-4 text-white">Strategic partnership program</h3>

                <p className="text-white text-lg">
                  Turn clients into business partners through our exclusive experiences, designed to strengthen commercial relationships.
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
