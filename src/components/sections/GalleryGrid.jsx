import React, { useState } from 'react';

const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: '/gallery-products-1.jpg', alt: 'Petit Pâté Traditionnel', category: 'produits' },
    { id: 2, src: '/gallery-atelier-1.jpg', alt: 'Fabrication en atelier', category: 'atelier' },
    { id: 3, src: '/gallery-degustation-1.jpg', alt: 'Dégustation raffinée', category: 'degustation' },
    { id: 4, src: '/gallery-events-1.jpg', alt: 'Événement de la Feria', category: 'evenements' },
    { id: 5, src: '/gallery-products-2.jpg', alt: 'Petit Pâté à la Brandade', category: 'produits' },
    { id: 6, src: '/gallery-atelier-2.jpg', alt: 'Pétrissage de la pâte', category: 'atelier' },
    { id: 7, src: '/gallery-degustation-2.jpg', alt: 'Accompagnement d\'un vin local', category: 'degustation' },
    { id: 8, src: '/gallery-events-2.jpg', alt: 'Marché artisanal', category: 'evenements' },
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter((image) => image.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  const categories = [
    { label: 'Toutes', value: 'all' },
    { label: 'Nos Produits', value: 'produits' },
    { label: 'L\'Atelier', value: 'atelier' },
    { label: 'Dégustation', value: 'degustation' },
    { label: 'Événements', value: 'evenements' },
  ];

  return (
    <section className="py-16 bg-beige-clair text-charbon">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-serif text-center mb-12 text-rouge-vin">Capturez l'Instant Gourmand</h2>

        {/* Filtres de catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`py-2 px-6 rounded-full font-sans text-lg transition-colors duration-300 
                ${selectedCategory === cat.value
                  ? 'bg-rouge-vin text-beige-clair shadow-md'
                  : 'bg-ocre hover:bg-dore text-charbon'}
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille de Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div key={image.id} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-xl"
                 onClick={() => openLightbox(image)}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-charbon bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-beige-clair font-sans text-lg text-center p-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && selectedImage && (
          <div
            className="fixed inset-0 bg-charbon bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={closeLightbox}
          >
            <div className="relative bg-white p-4 rounded-lg shadow-2xl max-w-3xl max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}> {/* Empêche la fermeture au clic sur l'image */}
              <button
                onClick={closeLightbox}
                className="absolute top-2 right-2 text-charbon text-3xl font-bold p-2 leading-none hover:text-rouge-vin transition-colors duration-200"
              >
                &times;
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain mx-auto rounded-md"
              />
              {selectedImage.alt && (
                <p className="text-charbon text-center mt-4 font-sans text-lg">{selectedImage.alt}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
