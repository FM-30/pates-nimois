import React from 'react';
import Button from '../ui/Button'; // Import du composant Button

const ProductCTASection = () => {
  return (
    <section className="py-16 bg-ocre text-charbon text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-serif mb-8 text-rouge-vin">Envie de Déguster ?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-10 font-sans">
          Que ce soit pour une occasion spéciale, un cadeau gourmand ou simplement pour le plaisir de la tradition, nos petits pâtés nîmois sont disponibles sur commande. Contactez-nous pour toute demande de devis ou pour passer votre commande.
        </p>
        <Button href="/contact" variant="primary" className="py-3 px-10">
          Nous Contacter pour Commander
        </Button>
      </div>
    </section>
  );
};

export default ProductCTASection;
