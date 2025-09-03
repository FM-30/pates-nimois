import React from 'react';

const ContactHero = () => {
  return (
    <section
      className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-beige-clair"
      style={{ backgroundImage: 'url(\'/placeholder-contact-hero.jpg\')' }} // Placeholder pour l'image de fond
    >
      <div className="absolute inset-0 bg-charbon opacity-70"></div> {/* Overlay sombre */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold font-serif leading-tight">Nous Contacter</h1>
      </div>
    </section>
  );
};

export default ContactHero;
