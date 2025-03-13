
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { UserPlus, TrendingUp, Award } from 'lucide-react';

const BenefitCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => {
  return (
    <AnimatedSection animation="scale-in" delay={delay}>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100">
        <div className="w-12 h-12 bg-agrobravo-navy/20 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-agrobravo-dark mb-3">{title}</h3>
        <p className="text-agrobravo-gray">{description}</p>
      </div>
    </AnimatedSection>
  );
};

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-wide">
        <AnimatedSection animation="fade-in-up" className="text-center max-w-[800px] mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-agrobravo-navy/10 border border-agrobravo-navy/20 mb-4">
            <p className="text-agrobravo-dark text-sm font-medium">Benefícios estratégicos</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-agrobravo-dark mb-6">
            Por que participar das nossas experiências?
          </h2>
          
          <p className="text-gray-600 text-[18px] md:text-[20px]">
           <span className='font-semibold'>Nossos programas de viagens estratégicas</span> são cuidadosamente desenhados 
            para fortalecer sua marca e impulsionar seus resultados comerciais.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard
            icon={<UserPlus className="text-agrobravo-navy" />}
            title="Fortalecimento de relacionamentos"
            description="Consolide laços com clientes estratégicos em ambientes exclusivos, criando conexões que vão além do negócio."
            delay={0.1}
          />
          
          <BenefitCard
            icon={<TrendingUp className="text-agrobravo-navy" />}
            title="Novas oportunidades de negócio"
            description="Conversas casuais em cenários inspiradores frequentemente se transformam em grandes acordos. Esteja no lugar certo, com as pessoas certas."
            delay={0.2}
          />
          
          <BenefitCard
            icon={<Award className="text-agrobravo-navy" />}
            title="Diferencial competitivo"
            description="Surpreenda seus clientes com experiências que a concorrência não pode oferecer. Exclusividade, sofisticação e impacto real nos negócios."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
