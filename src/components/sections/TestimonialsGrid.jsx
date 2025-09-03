import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const TestimonialsGrid = () => {
  const [filterType, setFilterType] = useState('all');

  const testimonials = [
    {
      id: 1, type: 'particulier', name: 'Sophie M.', city: 'Nîmes', rating: 5, photo: '/testimonial-sophie.jpg',
      text: 'Les meilleurs petits pâtés nîmois que j\'ai jamais goûtés ! Une explosion de saveurs et une pâte incroyablement légère. Un vrai délice !',
    },
    {
      id: 2, type: 'entreprise', name: 'Bernard L.', company: 'Saveurs du Sud', rating: 4, photo: '/testimonial-bernard.jpg',
      text: 'Nous commandons régulièrement des coffrets pour nos clients, et les retours sont toujours excellents. Une qualité irréprochable et un service impeccable.',
    },
    {
      id: 3, type: 'touriste', name: 'Elena P.', city: 'Rome', rating: 5, photo: '/testimonial-elena.jpg',
      text: 'J\'ai découvert cette spécialité lors de ma visite à Nîmes. C\'est un véritable trésor culinaire ! Je reviendrai rien que pour ça.',
    },
    {
      id: 4, type: 'particulier', name: 'Lucas D.', city: 'Montpellier', rating: 5, photo: '/testimonial-lucas.jpg',
      text: 'Fan absolu ! C\'est toute la tradition de Nîmes dans un petit format. Parfait pour l\'apéritif ou une petite faim.',
    },
    {
      id: 5, type: 'entreprise', name: 'Agnès V.', company: 'Occitanie Gourmande', rating: 4, photo: '/testimonial-agnes.jpg',
      text: 'Nos partenaires apprécient énormément les coffrets personnalisés. C\'est un excellent moyen de promouvoir le patrimoine culinaire local.',
    },
    {
      id: 6, type: 'touriste', name: 'Hiroshi K.', city: 'Tokyo', rating: 5, photo: '/testimonial-hiroshi.jpg',
      text: 'Amazing taste, very traditional and authentic. A must-try when visiting Nîmes. I brought some back home !',
    },
  ];

  const filteredTestimonials = filterType === 'all'
    ? testimonials
    : testimonials.filter((t) => t.type === filterType);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} className={`text-xl ${i < rating ? 'text-dore' : 'text-gray-400'}`} />
    ));
  };

  return (
    <section className="py-16 bg-beige-clair text-charbon">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-serif text-center mb-12 text-rouge-vin">Ce qu'ils disent de nous</h2>

        {/* Filtres de témoignages */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilterType('all')}
            className={`py-2 px-6 rounded-full font-sans text-lg transition-colors duration-300 
              ${filterType === 'all'
                ? 'bg-rouge-vin text-beige-clair shadow-md'
                : 'bg-ocre hover:bg-dore text-charbon'}
            `}
          >
            Tous
          </button>
          <button
            onClick={() => setFilterType('particulier')}
            className={`py-2 px-6 rounded-full font-sans text-lg transition-colors duration-300 
              ${filterType === 'particulier'
                ? 'bg-rouge-vin text-beige-clair shadow-md'
                : 'bg-ocre hover:bg-dore text-charbon'}
            `}
          >
            Particuliers
          </button>
          <button
            onClick={() => setFilterType('entreprise')}
            className={`py-2 px-6 rounded-full font-sans text-lg transition-colors duration-300 
              ${filterType === 'entreprise'
                ? 'bg-rouge-vin text-beige-clair shadow-md'
                : 'bg-ocre hover:bg-dore text-charbon'}
            `}
          >
            Entreprises
          </button>
          <button
            onClick={() => setFilterType('touriste')}
            className={`py-2 px-6 rounded-full font-sans text-lg transition-colors duration-300 
              ${filterType === 'touriste'
                ? 'bg-rouge-vin text-beige-clair shadow-md'
                : 'bg-ocre hover:bg-dore text-charbon'}
            `}
          >
            Touristes
          </button>
        </div>

        {/* Grille de Témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
              <img
                src={t.photo}
                alt={`Photo de ${t.name}`}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-dore shadow-md"
              />
              <div className="flex mb-2">{renderStars(t.rating)}</div>
              <p className="text-lg font-sans italic mb-4">"{t.text}"</p>
              <p className="font-bold text-rouge-brique text-xl">{t.name}</p>
              <p className="text-charbon text-md">{t.company || t.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;
