import React from 'react';

const LocalAnecdotesSection = () => {
  const anecdotes = [
    {
      title: 'Un mets apprécié des empereurs',
      text: 'On raconte que les petits pâtés nîmois étaient déjà très appréciés à l\'époque romaine, servis lors des banquets impériaux dans la cité de Nîmes. Une tradition gourmande qui remonte à l\'Antiquité !',
    },
    {
      title: 'Le secret de la pâte brisée',
      text: 'La légende veut que la pâte brisée des petits pâtés nîmois soit pétrie uniquement les soirs de pleine lune, pour lui conférer une texture et une saveur inégalées. Un secret de grand-mère bien gardé !',
    },
    {
      title: 'Incontournable des ferias',
      text: 'Chaque année, lors des célèbres ferias de Nîmes, des milliers de petits pâtés sont dégustés. C\'est la collation parfaite pour accompagner les festivités et partager un moment convivial.',
    },
  ];

  return (
    <section className="py-16 bg-beige-clair text-charbon">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-serif mb-12 text-rouge-vin">Anecdotes et Histoires Locales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {anecdotes.map((anecdote, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold font-serif mb-4 text-rouge-brique">{anecdote.title}</h3>
              <p className="text-charbon font-sans">{anecdote.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalAnecdotesSection;
