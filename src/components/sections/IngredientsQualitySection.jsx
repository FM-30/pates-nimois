import React from 'react';
import { FaSeedling, FaHandsHelping, FaAward } from 'react-icons/fa';

const IngredientsQualitySection = () => {
  const qualities = [
    {
      icon: <FaSeedling className="text-dore text-4xl mb-3" />,
      title: 'Origine Locale et Durable',
      description: 'Nous privilégions les ingrédients issus de producteurs du Gard et d\'Occitanie, garantissant fraîcheur et soutien à l\'économie locale.',
    },
    {
      icon: <FaHandsHelping className="text-dore text-4xl mb-3" />,
      title: 'Fabrication Artisanale Soignée',
      description: 'Chaque petit pâté est préparé à la main, avec un savoir-faire transmis de génération en génération, pour une qualité gustative unique.',
    },
    {
      icon: <FaAward className="text-dore text-4xl mb-3" />,
      title: 'Labels et Certifications',
      description: 'Nos produits respectent les normes de qualité les plus strictes, avec des certifications reconnues garantissant leur excellence et leur traçabilité.',
    },
  ];

  return (
    <section className="py-16 bg-ocre text-charbon">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-serif mb-12 text-rouge-vin">Ingrédients et Qualité : Nos Engagements</h2>
        <p className="text-lg max-w-3xl mx-auto mb-16 font-sans">
          La qualité est au cœur de notre démarche. Nous sélectionnons nos ingrédients avec le plus grand soin et appliquons un processus de fabrication rigoureux pour vous offrir des petits pâtés d'exception.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualities.map((item, index) => (
            <div key={index} className="bg-beige-clair p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold font-serif mb-3 text-rouge-brique">{item.title}</h3>
              <p className="text-charbon font-sans">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsQualitySection;
