import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button'; // Import du composant Button

const LeaveReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Le nom est requis.';
    }
    if (!formData.email) {
      newErrors.email = 'L\'email est requis.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide.';
    }
    if (!formData.comment) {
      newErrors.comment = 'Le commentaire est requis.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    // Valide uniquement le champ qui vient de perdre le focus
    const fieldErrors = {};
    if (name === 'name' && !formData.name) {
      fieldErrors.name = 'Le nom est requis.';
    }
    if (name === 'email') {
      if (!formData.email) {
        fieldErrors.email = 'L\'email est requis.';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
        fieldErrors.email = 'Format d\'email invalide.';
      }
    }
    if (name === 'comment' && !formData.comment) {
      fieldErrors.comment = 'Le commentaire est requis.';
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...fieldErrors,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Avis soumis :', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        rating: 5,
        comment: '',
      });
      // Réinitialiser les erreurs après soumission réussie
      setErrors({});
    } else {
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
    <section className="py-16 bg-ocre text-charbon">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold font-serif text-center mb-12 text-rouge-vin"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Laissez Votre Avis
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto bg-beige-clair p-8 rounded-lg shadow-xl"
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
              Merci pour votre avis ! Il sera examiné prochainement.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-lg font-sans mb-2">Votre Nom :</label>
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
                <label htmlFor="email" className="block text-lg font-sans mb-2">Votre Email :</label>
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
                <label htmlFor="rating" className="block text-lg font-sans mb-2">Votre Note :</label>
                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-dore focus:outline-none text-charbon"
                >
                  <option value="5">5 Étoiles</option>
                  <option value="4">4 Étoiles</option>
                  <option value="3">3 Étoiles</option>
                  <option value="2">2 Étoiles</option>
                  <option value="1">1 Étoile</option>
                </select>
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="comment" className="block text-lg font-sans mb-2">Votre Commentaire :</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="5"
                  className={`w-full p-3 rounded-md border ${errors.comment ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-dore focus:outline-none text-charbon`}
                ></textarea>
                {errors.comment && <p className="text-red-500 text-sm mt-1">{errors.comment}</p>}
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button type="submit" variant="primary" className="w-full py-3 px-6">
                  Envoyer mon Avis
                </Button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default LeaveReviewForm;
