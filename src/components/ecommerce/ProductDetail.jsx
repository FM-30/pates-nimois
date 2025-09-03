import React from 'react';

const ProductDetail = ({ productId }) => {
  // Dans un vrai projet, vous feriez une requête API pour récupérer les détails du produit
  const product = {
    id: productId,
    name: "Petit Pâté Nîmois Traditionnel",
    description: "Le classique indémodable, préparé selon la recette ancestrale.",
    price: parseFloat(import.meta.env.VITE_BASE_PRODUCT_PRICE || 2.50).toFixed(2),
    imageUrl: "/placeholder-pates-detail.jpg",
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">Détail du Produit: {product.name} (Fonctionnalité future)</h3>
      <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
      <p className="text-lg mb-2">Description: {product.description}</p>
      <p className="text-xl font-bold text-rouge-vin">Prix: {product.price}€</p>
      {/*
      <div className="mt-4">
        <label htmlFor="quantity" className="block text-md font-medium text-gray-700">Quantité:</label>
        <input type="number" id="quantity" name="quantity" defaultValue="1" min="1" className="mt-1 block w-20 rounded-md border-gray-300 shadow-sm focus:border-dore focus:ring-dore" />
        <button className="mt-4 bg-ocre text-charbon p-2 rounded">Ajouter au Panier</button>
      </div>
      */}
    </div>
  );
};

export default ProductDetail;
