import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import de vos composants / pages
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Filieres from './pages/Filieres';
import Galerie from './pages/Galerie';
import Actualites from './pages/Actualites';
import Contact from './pages/Contact';
import Inscription from './pages/Inscription';

// Composant pour remettre le scroll en haut lors d'un changement de page
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Navigation universelle */}
        <Navbar />

        {/* Zone dynamique du contenu selon la route */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/filieres" element={<Filieres />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inscription" element={<Inscription />} />
            
            {/* Route de secours pour les liens introuvables (Page 404) */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Pied de page universel */}
        <Footer />
      </div>
    </Router>
  );
}