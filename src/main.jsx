import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import HistoirePage from './pages/HistoirePage';
import ProduitsPage from './pages/ProduitsPage';
import GaleriePage from './pages/GaleriePage';
import TemoignagesPage from './pages/TemoignagesPage';
import ContactPage from './pages/ContactPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/histoire" element={<HistoirePage />} />
            <Route path="/produits" element={<ProduitsPage />} />
            <Route path="/galerie" element={<GaleriePage />} />
            <Route path="/temoignages" element={<TemoignagesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Ajoutez d'autres routes ici si nécessaire */}
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  </StrictMode>,
);
