import React from 'react';

const HistoryTimeline = () => {
  const events = [
    {
      year: '1890',
      title: 'Naissance d\'une Légende',
      description: 'Création des premiers petits pâtés nîmois par Delcasso-Vernet et Charles Durand, marquant le début d\'une tradition gourmande.',
    },
    {
      year: 'Début XXe',
      title: 'Évolution Familiale',
      description: 'La recette se transmet de génération en génération, chaque famille d\'artisan apportant sa touche unique tout en respectant l\'essence originale.',
    },
    {
      year: 'Après-guerre',
      title: 'Période de Renouveau',
      description: 'Face à la demande croissante, de nouveaux artisans rejoignent le mouvement, perpétuant le savoir-faire et la renommée du petit pâté.',
    },
    {
      year: 'Aujourd\'hui',
      title: 'Rayonnement et Modernité',
      description: 'Le petit pâté nîmois continue de séduire, se modernisant tout en préservant son authenticité, et s\'exporte au-delà des frontières gardoises.',
    },
  ];

  return (
    <section className="py-16 bg-beige-clair text-charbon">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-serif text-center mb-16 text-rouge-vin">Une Histoire Riche en Saveurs</h2>
        <div className="relative flex flex-col items-center">
          {/* Ligne verticale de la timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-ocre h-full hidden md:block"></div>

          {events.map((event, index) => (
            <div
              key={index}
              className={`relative mb-8 md:mb-16 w-full md:w-1/2 flex ${index % 2 === 0 ? 'md:pr-16 justify-end' : 'md:pl-16 justify-start'}`}
            >
              {/* Point sur la timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-rouge-vin rounded-full border-4 border-beige-clair z-10 hidden md:block"></div>

              <div className="bg-white p-6 rounded-lg shadow-xl w-full">
                <p className="text-rouge-brique font-script text-2xl mb-2">{event.year}</p>
                <h3 className="text-2xl font-bold font-serif mb-3 text-charbon">{event.title}</h3>
                <p className="text-charbon font-sans">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
