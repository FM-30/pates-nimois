import React from 'react';
import SEO from '../components/layout/SEO'; // Import du composant SEO
import TestimonialsHero from '../components/sections/TestimonialsHero';
import TestimonialsGrid from '../components/sections/TestimonialsGrid';
import LeaveReviewForm from '../components/sections/LeaveReviewForm';

const TemoignagesPage = () => {
  return (
    <>
      <SEO
        title="Vos Avis | Témoignages Clients | Petits Pâtés Nîmois"
        description="Découvrez les avis de nos clients sur les petits pâtés nîmois. Partagez votre expérience et laissez votre témoignage."
        keywords="avis clients, témoignages petits pâtés nîmois, retour expérience, satisfaction client, laisser un avis Nîmes"
      />
      <div>
        <TestimonialsHero />
        <TestimonialsGrid />
        <LeaveReviewForm />
      </div>
    </>
  );
};

export default TemoignagesPage;
