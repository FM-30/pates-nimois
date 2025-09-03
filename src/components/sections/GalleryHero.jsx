import React from 'react';
import { motion } from 'framer-motion'; // Import de motion

const GalleryHero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-beige-clair"
      style={{ backgroundImage: `url('/placeholder-gallery-hero.jpg')` }}
    >
      <div className="absolute inset-0 bg-charbon opacity-70"></div>
      <motion.div
        className="relative z-10 text-center px-4"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <h1 className="text-5xl md:text-6xl font-bold font-serif leading-tight">Notre Galerie Photo</h1>
      </motion.div>
    </section>
  );
};

export default GalleryHero;
