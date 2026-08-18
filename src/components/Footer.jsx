import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1C1226] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Identité */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#5B2A86] text-white flex items-center justify-center font-bold text-lg">
              ITIE
            </div>
            <b className="text-lg text-white">Collège I.T.I.E</b>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Institut des Techniques Industrielles d'Etoug-Ebé — Discipline • Travail • Succès.
          </p>
        </div>

        {/* Liens Rapides */}
        <div className="space-y-3">
          <h4 className="font-bold text-[#F2994A] text-lg">Liens rapides</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-[#F2994A] transition-colors">À propos</Link></li>
            <li><Link to="/filieres" className="hover:text-[#F2994A] transition-colors">Nos filières</Link></li>
            <li><Link to="/galerie" className="hover:text-[#F2994A] transition-colors">Galerie</Link></li>
            <li><Link to="/actualites" className="hover:text-[#F2994A] transition-colors">Actualités</Link></li>
            <li><Link to="/inscription" className="hover:text-[#F2994A] transition-colors">Inscription</Link></li>
          </ul>
        </div>

        {/* Horaires */}
        <div className="space-y-3">
          <h4 className="font-bold text-[#F2994A] text-lg">Horaires</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Lundi – Vendredi : 7h00 – 16h30</li>
            <li>Samedi : 8h00 – 12h00 (activités)</li>
            <li>Dimanche : Fermé</li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="space-y-3">
          <h4 className="font-bold text-[#F2994A] text-lg">Contacts</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>BP 952 Yaoundé, Cameroun</li>
            <li>677 70 44 41 / 699 98 92 95</li>
            <li>contact@itie-edu.cm</li>
          </ul>
        </div>

      </div>

      <div className="max-w-[1180px] mx-auto px-6 pt-12 mt-12 border-t border-white/10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Collège I.T.I.E. Tous droits réservés.
      </div>
    </footer>
  );
}