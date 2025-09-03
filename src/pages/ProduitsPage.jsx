import React from 'react';
import SEO from '../components/layout/SEO'; // Import du composant SEO
import ProductHero from '../components/sections/ProductHero';
import TraditionalRangeSection from '../components/sections/TraditionalRangeSection';
import IngredientsQualitySection from '../components/sections/IngredientsQualitySection';
import VariantsGiftsSection from '../components/sections/VariantsGiftsSection';
import ProductCTASection from '../components/sections/ProductCTASection';

const ProduitsPage = () => {
  return (
    <>
      <SEO
        title="Nos Produits | Petits Pâtés Nîmois"
        description="Découvrez notre gamme de petits pâtés nîmois : traditionnels, à la brandade, créations saisonnières et coffrets cadeaux. Qualité et saveurs garanties."
        keywords="produits petits pâtés nîmois, pâté traditionnel, brandade de morue, coffrets gourmands Nîmes, spécialités culinaires Gard"
      />
      <div>
        <ProductHero />
        <TraditionalRangeSection />
        <IngredientsQualitySection />
        <VariantsGiftsSection />
        <ProductCTASection />
      </div>
    </>
  );
};

export default ProduitsPage;
