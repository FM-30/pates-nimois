import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Utilisation d'Heroicons pour le menu burger
import Button from '../ui/Button'; // Import du composant Button

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Notre Histoire', href: '/histoire' },
    { name: 'Nos Produits', href: '/produits' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Témoignages', href: '/temoignages' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-beige-clair text-charbon shadow-lg fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold font-serif text-rouge-vin">
          <a href="/">Petits Pâtés Nîmois</a>
        </div>

        {/* Navigation Desktop */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-charbon hover:text-rouge-brique font-sans text-lg transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton CTA Desktop */}
        <div className="hidden md:block">
          <Button href="/produits" variant="primary" className="py-2 px-6">
            Commander
          </Button>
        </div>

        {/* Menu Burger Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-charbon focus:outline-none"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-beige-clair shadow-inner pb-4"
        >
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-charbon hover:text-rouge-brique font-sans text-xl transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <Button href="/produits" variant="primary" className="py-2 px-6">
                Commander
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
