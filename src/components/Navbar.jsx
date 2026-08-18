import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpeg'; // Adaptez le chemin si votre image est ailleurs

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Style CSS pour les liens de navigation
  const navLinkClass = ({ isActive }) =>
    `font-semibold text-sm transition-colors ${
      isActive ? 'text-[#F2994A]' : 'text-[#241B2F] hover:text-[#5B2A86]'
    }`;

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all">
      <div className="max-w-[1180px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Marque avec Blason Officiel */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logoImg} 
            alt="Logo Collège I.T.I.E" 
            className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <b className="text-lg leading-tight text-[#3D1B5C]">Collège I.T.I.E</b>
            <span className="text-[11px] text-[#665F78]">Discipline • Travail • Succès</span>
          </div>
        </Link>

        {/* Liens Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>Accueil</NavLink>
          <NavLink to="/about" className={navLinkClass}>À propos</NavLink>
          <NavLink to="/filieres" className={navLinkClass}>Filières</NavLink>
          <NavLink to="/galerie" className={navLinkClass}>Galerie</NavLink>
          <NavLink to="/actualites" className={navLinkClass}>Actualités</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        {/* CTA Inscription */}
        <div className="hidden md:flex items-center">
          <Link
            to="/inscription"
            className="px-5 py-2.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#F2994A] to-[#D9772E] hover:from-[#5B2A86] hover:to-[#3D1B5C] transition-all shadow-md"
          >
            Inscription en ligne
          </Link>
        </div>

        {/* Bouton Burger Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-[#3D1B5C] focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-6 space-y-4 shadow-xl">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="block py-2 text-[#3D1B5C] font-semibold">Accueil</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-[#3D1B5C] font-semibold">À propos</NavLink>
          <NavLink to="/filieres" onClick={() => setIsOpen(false)} className="block py-2 text-[#3D1B5C] font-semibold">Filières</NavLink>
          <NavLink to="/galerie" onClick={() => setIsOpen(false)} className="block py-2 text-[#3D1B5C] font-semibold">Galerie</NavLink>
          <NavLink to="/actualites" onClick={() => setIsOpen(false)} className="block py-2 text-[#3D1B5C] font-semibold">Actualités</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-[#3D1B5C] font-semibold">Contact</NavLink>
          
          <Link
            to="/inscription"
            onClick={() => setIsOpen(false)}
            className="block text-center py-3 rounded-full font-semibold text-white bg-[#F2994A]"
          >
            Inscription en ligne
          </Link>
        </div>
      )}
    </header>
  );
}