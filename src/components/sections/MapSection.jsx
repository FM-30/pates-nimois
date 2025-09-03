import React from 'react';

const MapSection = () => {
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.9861619623696!2d4.35711681577718!3d43.83617347911679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b5b37e9d7f49a1%3A0x6d9f7e8a9f6d1d2e!2sN%C3%AEmes%2C%20France!5e0!3m2!1sen!2sfr!4v1678888888888!5m2!1sen!2sfr"; // Placeholder URL for Nîmes

  return (
    <section className="py-16 bg-beige-clair text-charbon">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-serif text-center mb-12 text-rouge-vin">Où nous Trouver</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de notre boutique à Nîmes"
              className="rounded-lg shadow-xl"
            ></iframe>
          </div>
          <div>
            <h3 className="text-3xl font-bold font-serif mb-4 text-rouge-brique">Nîmes, au cœur du Gard</h3>
            <p className="text-charbon font-sans mb-4 leading-relaxed">
              Notre atelier et boutique sont situés dans le centre historique de Nîmes, à quelques pas des célèbres Arènes. Venez découvrir nos petits pâtés dans l'ambiance chaleureuse de notre boutique traditionnelle.
            </p>
            <p className="text-charbon font-sans mb-4 leading-relaxed">
              Nous proposons également un service de <span className="font-bold text-rouge-vin">livraison locale</span> dans la région nîmoise et un service de <span className="font-bold text-rouge-vin">retrait sur place</span> pour vos commandes. N'hésitez pas à nous contacter pour plus d'informations.
            </p>
            <p className="text-charbon font-sans text-lg italic">"Savourez l'authenticité du terroir Occitan à chaque bouchée."- Équipe Petits Pâtés Nîmois</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
