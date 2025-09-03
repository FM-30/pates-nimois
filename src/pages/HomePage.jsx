import HeroSection from '../components/sections/HeroSection';
import PresentationSection from '../components/sections/PresentationSection';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import SocialProof from '../components/sections/SocialProof';
import SEO from '../components/layout/SEO';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Accueil - Petits Pâtés Nîmois"
        description="Découvrez les authentiques petits pâtés nîmois, une tradition culinaire de qualité."
        keywords="pâté nîmois, spécialité nîmoise, gastronomie Nîmes, produit artisanal"
      />
      <div className="min-h-screen">
        <HeroSection />
        <PresentationSection />
        <FeaturedProducts />
        <SocialProof />
      </div>
    </>
  );
};

export default HomePage;

