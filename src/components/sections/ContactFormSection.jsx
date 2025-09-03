import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import de motion
import Button from '../ui/Button'; // Import du composant Button

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requestType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Le nom est requis.';
    }
    if (!formData.email) {
      newErrors.email = 'L\'email est requis.';
    } else if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide.';
    }
    if (!formData.message) {
      newErrors.message = 'Le message est requis.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const fieldErrors = {};
    if (name === 'name' && !formData.name) {
      fieldErrors.name = 'Le nom est requis.';
    }
    if (name === 'email') {
      if (!formData.email) {
        fieldErrors.email = 'L\'email est requis.';
      } else if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
        fieldErrors.email = 'L\'email n\'est pas valide.';
      }
    }
    if (name === 'message' && !formData.message) {
      fieldErrors.message = 'Le message est requis.';
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...fieldErrors,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Données du formulaire soumises :', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        requestType: '',
        message: '',
      });
      setErrors({}); // Réinitialiser les erreurs après soumission réussie
    } else {
      // Si la validation échoue, les erreurs sont déjà mises à jour par validateForm
      console.log('Validation échouée', errors);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 bg-beige-clair text-charbon">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold font-serif text-center mb-12 text-rouge-vin"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Envoyez-nous un Message
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center text-rouge-vin text-2xl font-serif py-10"
            >
              Votre demande a été envoyée avec succès ! Nous vous recontacterons bientôt.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-lg font-sans mb-2">Nom Complet :</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-dore focus:outline-none text-charbon`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-lg font-sans mb-2">Email :</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-dore focus:outline-none text-charbon`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="phone" className="block text-lg font-sans mb-2">Téléphone (Optionnel) :</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-dore focus:outline-none text-charbon"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="requestType" className="block text-lg font-sans mb-2">Type de Demande :</label>
                <select
                  id="requestType"
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-dore focus:outline-none text-charbon"
                >
                  <option value="">-- Sélectionnez un type --</option>
                  <option value="informations">Informations Générales</option>
                  <option value="devis">Demande de Devis</option>
                  <option value="commande">Passer une Commande</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autres">Autres</option>
                </select>
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-lg font-sans mb-2">Votre Message :</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="6"
                  className={`w-full p-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-dore focus:outline-none text-charbon`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button type="submit" variant="primary" className="w-full py-3 px-6">
                  Envoyer ma Demande
                </Button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;
