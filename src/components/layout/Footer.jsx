import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Utilisation de React Icons pour les réseaux sociaux

const Footer = () => {
  return (
    <footer className="bg-charbon text-beige-clair py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Colonne 1: Liens Rapides */}
        <div>
          <h3 className="text-dore font-serif text-xl mb-4">Liens Rapides</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-ocre transition-colors duration-300">Accueil</a></li>
            <li><a href="/histoire" className="hover:text-ocre transition-colors duration-300">Notre Histoire</a></li>
            <li><a href="/produits" className="hover:text-ocre transition-colors duration-300">Nos Produits</a></li>
            <li><a href="/contact" className="hover:text-ocre transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Colonne 2: Nos Spécialités */}
        <div>
          <h3 className="text-dore font-serif text-xl mb-4">Nos Spécialités</h3>
          <ul className="space-y-2">
            <li><a href="/produits#traditionnel" className="hover:text-ocre transition-colors duration-300">Petit Pâté Traditionnel</a></li>
            <li><a href="/produits#variantes" className="hover:text-ocre transition-colors duration-300">Variantes</a></li>
            <li><a href="/produits#coffrets" className="hover:text-ocre transition-colors duration-300">Coffrets</a></li>
          </ul>
        </div>

        {/* Colonne 3: Informations */}
        <div>
          <h3 className="text-dore font-serif text-xl mb-4">Informations</h3>
          <ul className="space-y-2">
            <li>Horaires : Lun-Sam, 9h-18h</li>
            <li>Livraison : Nîmes & Alentours</li>
            <li><a href="/mentions-legales" className="hover:text-ocre transition-colors duration-300">Mentions Légales</a></li>
            <li><a href="/politique-confidentialite" className="hover:text-ocre transition-colors duration-300">Politique de Confidentialité</a></li>
          </ul>
        </div>

        {/* Colonne 4: Nous Suivre */}
        <div>
          <h3 className="text-dore font-serif text-xl mb-4">Nous Suivre</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" aria-label="Instagram" className="hover:text-ocre transition-colors duration-300"><FaInstagram /></a>
            <a href="#" aria-label="Facebook" className="hover:text-ocre transition-colors duration-300"><FaFacebook /></a>
          </div>
          <p className="mt-4 text-sm">Abonnez-vous à notre newsletter pour ne rien manquer !</p>
          {/* Placeholder Newsletter (sera un composant séparé plus tard) */}
          <form className="mt-2 flex">
            <input
              type="email"
              placeholder="Votre email"
              className="p-2 rounded-l-md bg-beige-clair text-charbon focus:outline-none focus:ring-2 focus:ring-ocre w-full"
            />
            <button type="submit" className="bg-ocre text-charbon p-2 rounded-r-md hover:bg-dore transition-colors duration-300">
              OK
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center text-sm border-t border-gray-700 pt-6">
        <p>&copy; {new Date().getFullYear()} Petits Pâtés Nîmois. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
