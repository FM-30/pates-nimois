import React from 'react';
import { FaStar } from 'react-icons/fa';

const SocialProofSection = () => {
  return (
    <section className="py-16 bg-ocre text-charbon">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-serif mb-12 text-rouge-vin">Ils nous font confiance</h2>

        {/* Chiffres Clés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-beige-clair rounded-lg shadow-xl">
            <p className="text-5xl font-bold text-rouge-vin mb-2">500k+</p>
            <p className="text-lg font-sans">Petits pâtés vendus/an</p>
          </div>
          <div className="p-6 bg-beige-clair rounded-lg shadow-xl">
            <p className="text-5xl font-bold text-rouge-vin mb-2">15</p>
            <p className="text-lg font-sans">Artisans Nîmois passionnés</p>
          </div>
          <div className="p-6 bg-beige-clair rounded-lg shadow-xl">
            <p className="text-5xl font-bold text-rouge-vin mb-2">130+</p>
            <p className="text-lg font-sans">Ans de tradition culinaire</p>
          </div>
        </div>

        {/* Témoignage Client Vedette */}
        <div className="max-w-4xl mx-auto bg-beige-clair p-10 rounded-lg shadow-2xl flex flex-col md:flex-row items-center md:items-start text-left">
          <img
            src="/placeholder-client.jpg" // Placeholder image
            alt="Témoignage client"
            className="w-32 h-32 rounded-full object-cover mb-6 md:mb-0 md:mr-8 border-4 border-dore shadow-md"
          />
          <div>
            <div className="flex justify-center md:justify-start mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-dore text-xl" />
              ))}
            </div>
            <p className="text-lg font-sans italic mb-4">
              "Absolument délicieux ! Les Petits Pâtés Nîmois sont un vrai délice, un voyage gustatif au cœur de la tradition. Chaque bouchée est un pur bonheur. Je recommande vivement !"
            </p>
            <p className="font-bold text-rouge-brique text-xl">Marie Dubois</p>
            <p className="text-charbon text-md">Touriste passionnée, Lyon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
