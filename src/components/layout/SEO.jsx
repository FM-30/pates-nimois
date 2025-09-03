import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Petits Pâtés Nîmois Artisanaux | Spécialité Culinaire du Gard',
  description = 'Découvrez les authentiques petits pâtés nîmois, spécialité artisanale de Nîmes depuis 1890. Tradition culinaire gardoise, ingrédients locaux, savoir-faire ancestral.',
  keywords = 'petits pâtés nîmois, pâtisserie artisanale Nîmes, spécialité locale Nîmes, gastronomie gardoise, cadeau gourmand Nîmes',
  ogType = 'website',
  ogUrl = window.location.href,
  ogTitle = title,
  ogDescription = description,
  ogImage = '/og-image.jpg', // Placeholder for a default Open Graph image
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
