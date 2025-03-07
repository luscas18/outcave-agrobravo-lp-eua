
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
        <div className="w-12 h-12 bg-agrobravo-gold/20 rounded-full flex items-center justify-center mb-4">
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
        <AnimatedSection animation="fade-in-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-agrobravo-gold/10 border border-agrobravo-gold/20 mb-4">
            <p className="text-agrobravo-dark text-sm font-medium">Benefícios estratégicos</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-agrobravo-dark mb-6">
            Por que Participar das Nossas Experiências?
          </h2>
          
          <p className="text-agrobravo-gray">
            Nossos programas de viagens estratégicas são cuidadosamente desenhados 
            para fortalecer sua marca e impulsionar seus resultados comerciais.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard
            icon={<UserPlus className="text-agrobravo-gold" />}
            title="Fortalecimento de Relacionamentos"
            description="Consolide laços com clientes estratégicos em ambientes exclusivos, criando conexões que vão além do negócio."
            delay={0.1}
          />
          
          <BenefitCard
            icon={<TrendingUp className="text-agrobravo-gold" />}
            title="Novas Oportunidades de Negócio"
            description="Ambientes propícios para conversas estratégicas que frequentemente se convertem em novas vendas e parcerias."
            delay={0.2}
          />
          
          <BenefitCard
            icon={<Award className="text-agrobravo-gold" />}
            title="Diferencial Competitivo"
            description="Ofereça aos seus clientes experiências exclusivas que seus concorrentes não conseguem proporcionar."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
