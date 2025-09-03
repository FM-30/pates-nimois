import React from 'react';
import { motion } from 'framer-motion'; // Import de motion
import Button from '../ui/Button';

const FeaturedProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Petit Pâté Traditionnel',
      description: 'La recette originale, un mélange savoureux de veau et de porc.',
      image: '/placeholder-pate-trad-detail.jpg', // Placeholder image
    },
    {
      id: 2,
      name: 'Petit Pâté à la Brandade',
      description: 'Une variante audacieuse avec la célèbre brandade de morue nîmoise.',
      image: '/placeholder-pate-brandade-detail.jpg', // Placeholder image
    },
    {
      id: 3,
      name: 'Coffret Découverte',
      description: 'Assortiment de nos meilleures spécialités, idéal pour offrir ou partager.',
      image: '/placeholder-coffret-produits.jpg', // Placeholder image
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-beige-clair text-charbon">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold font-serif mb-12 text-rouge-vin"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          Nos Spécialités en Vedette
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold font-serif mb-2 text-rouge-brique">{product.name}</h3>
                <p className="text-charbon font-sans">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          <Button href="/produits" variant="primary">
            Découvrir Tous Nos Produits
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
