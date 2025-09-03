import React from 'react';

const SavoirFaireSection = () => {
  return (
    <section className="py-16 bg-ocre text-charbon">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-serif text-center mb-12 text-rouge-vin">Notre Savoir-Faire Artisanal</h2>
        <p className="text-lg max-w-3xl mx-auto text-center mb-16 font-sans">
          La confection de nos petits pâtés nîmois est un art qui se transmet. Chaque étape, du pétrissage de la pâte à la préparation de la farce, est réalisée avec soin et passion, garantissant une qualité et une saveur inégalées.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <img
              src="/placeholder-savoir-faire-1.jpg" // Placeholder image
              alt="Processus de fabrication artisanal"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="md:order-1">
            <h3 className="text-3xl font-bold font-serif mb-4 text-rouge-brique">Des techniques ancestrales, une qualité moderne</h3>
            <p className="text-charbon font-sans mb-4">
              Nos artisans perpétuent les gestes précis et les secrets de fabrication qui font la renommée des petits pâtés nîmois depuis des décennies. Nous utilisons des ingrédients frais et locaux, travaillés avec minutie pour préserver toutes leurs saveurs.
            </p>
            <p className="text-charbon font-sans">
              Le respect de la tradition est au cœur de notre démarche, tout en intégrant des standards d'hygiène et de qualité modernes. C'est cette alliance qui confère à nos produits leur caractère unique et leur goût authentique.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="">
            <img
              src="/placeholder-savoir-faire-2.jpg" // Placeholder image
              alt="Ingrédients locaux"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold font-serif mb-4 text-rouge-brique">L'authenticité du terroir gardois</h3>
            <p className="text-charbon font-sans mb-4">
              Le Gard est notre source d'inspiration et notre garde-manger. La richesse de notre terroir nous permet de sélectionner les meilleures viandes et les légumes les plus frais, cultivés avec passion par des producteurs locaux.
            </p>
            <p className="text-charbon font-sans">
              Chaque petit pâté est une célébration de la gastronomie nîmoise, un véritable ambassadeur des saveurs du sud. En choisissant nos produits, vous soutenez une économie locale et un savoir-faire qui fait la fierté de notre région.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavoirFaireSection;
