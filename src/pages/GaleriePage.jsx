import React from 'react';
import SEO from '../components/layout/SEO'; // Import du composant SEO
import GalleryHero from '../components/sections/GalleryHero';
import GalleryGrid from '../components/sections/GalleryGrid';

const GaleriePage = () => {
  return (
    <>
      <SEO
        title="Galerie Photos | Petits Pâtés Nîmois"
        description="Découvrez notre galerie de photos : produits, atelier, dégustation et événements. Capturez l'instant gourmand des petits pâtés nîmois."
        keywords="galerie photos Nîmes, images petits pâtés nîmois, atelier artisanal, dégustation produits locaux, événements Nîmes"
      />
      <div>
        <GalleryHero />
        <GalleryGrid />
      </div>
    </>
  );
};

export default GaleriePage;
