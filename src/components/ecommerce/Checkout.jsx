import React from 'react';

const Checkout = () => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Finaliser la Commande (Fonctionnalité future)</h3>
      <p>Récapitulatif de la commande...</p>
      <p className="text-xl font-bold text-rouge-vin mt-4">Total à payer: XX.XX€</p>

      {/* Intégration de paiement commentée (Stripe/PayPal) */}
      {/*
      <div className="mt-6">
        <h4 className="text-lg font-bold mb-2">Méthodes de Paiement</h4>
        <button className="bg-blue-600 text-white p-2 rounded mr-4">Payer avec Stripe</button>
        <button className="bg-yellow-500 text-white p-2 rounded">Payer avec PayPal</button>
        <p className="text-sm text-gray-600 mt-2">Les intégrations Stripe et PayPal seront configurées ici.</p>
      </div>
      */}
    </div>
  );
};

export default Checkout;
