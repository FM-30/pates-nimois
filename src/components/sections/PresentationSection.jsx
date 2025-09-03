import React from 'react';
import { motion } from 'framer-motion'; // Import de motion
import { GiCook, GiWheat, GiHandSaw } from 'react-icons/gi'; // Exemples d'icônes pour la présentation

const PresentationSection = () => {
  const features = [
    {
      icon: <GiCook className="text-rouge-vin text-5xl mb-4" />,
      title: 'Recette Traditionnelle',
      description: 'Un héritage culinaire transmis de génération en génération, gage d\'une saveur authentique et inoubliable.',
    },
    {
      icon: <GiWheat className="text-rouge-vin text-5xl mb-4" />,
      title: 'Ingrédients Locaux',
      description: 'Nous sélectionnons rigoureusement nos produits auprès des meilleurs producteurs locaux pour une qualité inégalée.',
    },
    {
      icon: <GiHandSaw className="text-rouge-vin text-5xl mb-4" />,
      title: 'Savoir-Faire Artisanal',
      description: 'Chaque petit pâté est confectionné à la main, avec passion et minutie, dans le respect des méthodes ancestrales.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-ocre text-charbon">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold font-serif mb-12 text-rouge-vin"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          Une Tradition Culinaire Séculaire
        </motion.h2>
        <motion.p
          className="text-lg max-w-3xl mx-auto mb-16 font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          Plongez au cœur de l'histoire gourmande de Nîmes avec nos petits pâtés, une spécialité qui réveille les papilles depuis plus d'un siècle. Découvrez le secret de notre succès : un savoir-faire préservé et des ingrédients d'exception.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-beige-clair p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4 text-rouge-brique">{feature.title}</h3>
              <p className="text-charbon font-sans">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PresentationSection;
