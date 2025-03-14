
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
            <p className="text-agrobravo-dark text-sm font-medium">Strategic benefits</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-agrobravo-dark mb-6">
            Why join our experiences?
          </h2>

          <p className="text-gray-600 text-[18px] md:text-[20px]">
            Our <span className='font-medium'>strategic travel programs</span> are carefully designed to strengthen your brand and boost your business results.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard
            icon={<UserPlus className="text-agrobravo-navy" />}
            title="Strengthening Relationships"
            description="Build strong bonds with strategic clients in exclusive environments, creating connections that go beyond business."
            delay={0.1}
          />

          <BenefitCard
            icon={<TrendingUp className="text-agrobravo-navy" />}
            title="New Business Opportunities"
            description="Casual conversations in inspiring settings often turn into major deals. Be in the right place, with the right people."
            delay={0.2}
          />

          <BenefitCard
            icon={<Award className="text-agrobravo-navy" />}
            title="Competitive Advantage"
            description="Impress your clients with experiences that competitors can't offer: Exclusivity, sophistication, and real business impact."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
