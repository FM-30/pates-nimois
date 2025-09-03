import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-[80px]"> { /* Ajout d'une marge supérieure pour compenser le header fixe */ }
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
