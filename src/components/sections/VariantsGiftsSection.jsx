import React from 'react';

const VariantsGiftsSection = () => {
  const items = [
    {
      id: 'saisonnier',
      name: 'Créations Saisonnières',
      description: 'Découvrez nos saveurs éphémères, inspirées des produits de saison et des événements locaux. Des surprises gustatives à chaque période de l\'année.',
      image: '/placeholder-saisonnier.jpg',
    },
    {
      id: 'originales',
      name: 'Créations Originales',
      description: 'Nos artisans innovent et créent de nouvelles recettes audacieuses, repoussant les limites de la tradition pour des expériences culinaires inédites.',
      image: '/placeholder-originales.jpg',
    },
    {
      id: 'coffrets',
      name: 'Coffrets Cadeaux Gourmands',
      description: 'Offrez l\'excellence avec nos coffrets personnalisables, parfaits pour toutes les occasions. Un cadeau qui ravira les palais les plus exigeants.',
      image: '/placeholder-coffret-produits.jpg',
    },
  ];

  return (
    <section className="py-16 bg-beige-clair text-charbon">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-serif text-center mb-12 text-rouge-vin">Variantes & Coffrets Cadeaux</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} id={item.id} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold font-serif mb-2 text-rouge-brique">{item.name}</h3>
                <p className="text-charbon font-sans">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VariantsGiftsSection;
