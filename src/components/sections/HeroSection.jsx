import React from 'react';
import { motion } from 'framer-motion'; // Import de motion
import Button from '../ui/Button';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-beige-clair"
      style={{ backgroundImage: `url('/placeholder-pates.jpg')` }}
    >
      <div className="absolute inset-0 bg-charbon opacity-60"></div>
      <motion.div
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-4"
          variants={itemVariants}
        >
          Les Authentiques Petits Pâtés Nîmois
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl font-script mb-6"
          variants={itemVariants}
        >
          Tradition artisanale depuis 1890 • Spécialité emblématique du Gard
        </motion.p>
        <motion.p
          className="text-lg md:text-xl font-sans mb-8"
          variants={itemVariants}
        >
          Savourez l'âme de Nîmes dans chaque bouchée
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <Button href="/histoire" variant="secondary">
            Découvrir Notre Histoire
          </Button>
          <Button href="/produits" variant="primary">
            Commander Maintenant
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
