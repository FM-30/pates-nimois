import React from 'react';
import SEO from '../components/layout/SEO'; // Import du composant SEO
import ContactHero from '../components/sections/ContactHero';
import ContactFormSection from '../components/sections/ContactFormSection';
import PracticalInfoSection from '../components/sections/PracticalInfoSection';
import MapSection from '../components/sections/MapSection';

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contactez-nous | Petits Pâtés Nîmois"
        description="Contactez Les Petits Pâtés Nîmois pour vos commandes, demandes de devis ou toutes questions. Retrouvez nos informations pratiques et notre localisation à Nîmes."
        keywords="contact petits pâtés nîmois, commander pâtés Nîmes, devis pâtés, adresse Nîmes, téléphone pâtés nîmois, horaires boutique"
      />
      <div>
        <ContactHero />
        <ContactFormSection />
        <PracticalInfoSection />
        <MapSection />
      </div>
    </>
  );
};

export default ContactPage;
