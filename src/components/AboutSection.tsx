
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
                <p className="text-agrobravo-navy text-sm font-medium">About AgroBravo</p>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-agrobravo-navy mb-6">
                New vision, same excellence

              </h2>

              <p className="text-gray-600 mb-6 text-[18px] md:text-[20px]">
                AgroBravo embarks on a new phase in its journey, reinforcing its exclusive positioning for John Deere dealerships and focusing on delivering strategic experiences that strengthen business relationships.
              </p>

              <div className="flex items-center text-agrobravo-navy mb-6">
                <MapPin className="mr-2 text-agrobravo-red" />
                <span className="font-medium text-[18px] md:text-[20px]">
                  Now Based in <span className='font-semibold'>Ames, Iowa (EUA)</span>
                </span>
              </div>

              <p className="text-gray-600 text-[18px] md:text-[20px]">
                Our strategic move to the United States enhances our international expertise and brings us even closer to agricultural industry innovations, enabling us to create even more relevant and impactful experiences for dealerships and their customers.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
