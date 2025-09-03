import React from 'react';

const Card = ({ children, className = '' }) => {
  const classes = `bg-white p-6 rounded-lg shadow-lg ${className}`.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;
