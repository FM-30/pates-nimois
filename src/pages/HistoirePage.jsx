import React from 'react';
import SEO from '../components/layout/SEO'; // Import du composant SEO
import HistoryHero from '../components/sections/HistoryHero';
import HistoryTimeline from '../components/sections/HistoryTimeline';
import SavoirFaireSection from '../components/sections/SavoirFaireSection';
import LocalAnecdotesSection from '../components/sections/LocalAnecdotesSection';

const HistoirePage = () => {
  return (
    <>
      <SEO
        title="Notre Histoire | Petits Pâtés Nîmois"
        description="Plongez dans l'histoire des petits pâtés nîmois, une tradition séculaire et un savoir-faire artisanal transmis de génération en génération."
        keywords="histoire petits pâtés nîmois, tradition culinaire Nîmes, savoir-faire artisanal Gard, patrimoine gourmand"
      />
      <div>
        <HistoryHero />
        <HistoryTimeline />
        <SavoirFaireSection />
        <LocalAnecdotesSection />
      </div>
    </>
  );
};

export default HistoirePage;
