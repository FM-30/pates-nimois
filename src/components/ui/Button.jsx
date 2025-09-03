import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', href = null, type = 'button' }) => {
  const baseStyles = "font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105";

  const variants = {
    primary: "bg-rouge-vin hover:bg-rouge-brique text-beige-clair",
    secondary: "bg-ocre hover:bg-dore text-charbon",
    // Ajoutez d'autres variantes si nécessaire
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
