import React from 'react';

const TraditionalRangeSection = () => {
  const products = [
    {
      id: 'traditionnel',
      name: 'Petit Pâté Traditionnel',
      price: 'À partir de 3.50€',
      description: 'Notre recette originale, un mélange subtil de veau et de porc de qualité supérieure, enveloppé dans une pâte brisée dorée et croustillante. Un classique indémodable qui incarne l\'âme de Nîmes.',
      image: '/placeholder-pate-trad-detail.jpg',
    },
    {
      id: 'brandade',
      name: 'Petit Pâté à la Brandade',
      price: 'À partir de 4.00€',
      description: 'Une création audacieuse et savoureuse, mariant la richesse de notre pâte brisée à la délicatesse de la brandade de morue nîmoise. Une expérience gustative unique en son genre.',
      image: '/placeholder-pate-brandade-detail.jpg',
    },
  ];

  return (
    <section className="py-16 bg-beige-clair text-charbon">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-serif text-center mb-12 text-rouge-vin">Notre Gamme Traditionnelle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product) => (
            <div key={product.id} id={product.id} className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row transform hover:scale-105 transition-transform duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full md:w-1/2 h-64 md:h-auto object-cover"
              />
              <div className="p-6 flex-1">
                <h3 className="text-3xl font-bold font-serif mb-3 text-rouge-brique">{product.name}</h3>
                <p className="text-dore text-xl font-script mb-4">{product.price}</p>
                <p className="text-charbon font-sans leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TraditionalRangeSection;
