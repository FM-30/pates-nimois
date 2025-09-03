import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const PracticalInfoSection = () => {
  return (
    <section className="py-16 bg-ocre text-charbon">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-serif text-center mb-12 text-rouge-vin">Informations Pratiques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-beige-clair rounded-lg shadow-xl flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            <FaMapMarkerAlt className="text-dore text-5xl mb-4" />
            <h3 className="text-xl font-bold font-serif mb-2 text-rouge-brique">Notre Atelier / Boutique</h3>
            <p className="font-sans">12, Rue des Pâtés Nîmois</p>
            <p className="font-sans">30000 Nîmes, France</p>
          </div>
          <div className="p-6 bg-beige-clair rounded-lg shadow-xl flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            <FaPhone className="text-dore text-5xl mb-4" />
            <h3 className="text-xl font-bold font-serif mb-2 text-rouge-brique">Nous Appeler</h3>
            <p className="font-sans"><a href="tel:+33466XXYYZZ" className="hover:text-ocre transition-colors duration-300">+33 4 66 XX YY ZZ</a></p>
          </div>
          <div className="p-6 bg-beige-clair rounded-lg shadow-xl flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            <FaEnvelope className="text-dore text-5xl mb-4" />
            <h3 className="text-xl font-bold font-serif mb-2 text-rouge-brique">Nous Écrire</h3>
            <p className="font-sans"><a href="mailto:contact@petits-pates-nimois.fr" className="hover:text-ocre transition-colors duration-300">contact@petits-pates-nimois.fr</a></p>
          </div>
          <div className="p-6 bg-beige-clair rounded-lg shadow-xl flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            <FaClock className="text-dore text-5xl mb-4" />
            <h3 className="text-xl font-bold font-serif mb-2 text-rouge-brique">Horaires d'Ouverture</h3>
            <p className="font-sans">Lundi - Samedi : 9h00 - 18h00</p>
            <p className="font-sans">Dimanche : Fermé</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalInfoSection;
