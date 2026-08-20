import React, { useState } from 'react';

// --- IMPORTATION DES IMAGES RÉELLES (Assets locaux) ---

// Images "Vie scolaire"
import VieSport from '../assets/vie.jpeg';
import VieBanner from '../assets/vie1.jpeg';
import VieReunion from '../assets/vie2.jpeg';
import VieClasse1 from '../assets/vie3.jpeg';
import VieClasse2 from '../assets/vie4.jpeg';

// Images "Événements"
import Evenement1 from '../assets/evenement1.jpeg';
import Evenement2 from '../assets/evenement2.jpeg';
import Evenement4 from '../assets/evenement4.jpeg';
import Evenement5 from '../assets/evenement5.jpeg';
import Evenement6 from '../assets/evenement6.jpeg';
import Evenement7 from '../assets/evenement7.jpeg';

// Images "Infrastructures" (Vos nouvelles images)
import InfraBatimentInterieur1 from '../assets/infra1.jpeg';
import InfraFacadeArbre from '../assets/infra2.jpeg';
import InfraFacadeAngle from '../assets/infra3.jpeg';
import InfraFacadeRoute from '../assets/infra4.jpeg';
import InfraBatimentInterieur2 from '../assets/infra5.jpeg';
import Infrainformatique from '../assets/informatique.jpeg';
import Infraauto from '../assets/auto.jpeg';
import Infraelct from '../assets/elect.jpeg';



// Liste des catégories pour les filtres
const CATEGORIES = [
  { id: 'all', label: 'Toutes les photos' },
  { id: 'vie-scolaire', label: 'Vie scolaire' },
  { id: 'ateliers', label: 'Ateliers & Pratique' },
  { id: 'evenements', label: 'Événements' },
  { id: 'infrastructures', label: 'Infrastructures' },
];

// Base de données des images de la galerie
const GALLERY_ITEMS = [
  // --- VIE SCOLAIRE ---
  {
    id: 1,
    title: "Activités sportives et sorties",
    category: "vie-scolaire",
    image: VieSport,
    caption: "Rassemblement des élèves et encadreurs lors d'une activité sportive.",
  },
  {
    id: 2,
    title: "Défilé et présence institutionnelle",
    category: "vie-scolaire",
    image: VieBanner,
    caption: "Les élèves fiers de représenter la bannière du Collège I.T.I.E.",
  },
  {
    id: 3,
    title: "Conférence et réunions d'élèves",
    category: "vie-scolaire",
    image: VieReunion,
    caption: "Participation des élèves aux rencontres et événements éducatifs.",
  },
  {
    id: 4,
    title: "Cours théorique en salle de classe",
    category: "vie-scolaire",
    image: VieClasse1,
    caption: "Session de travail et d'apprentissage dans les salles de classe.",
  },
  {
    id: 5,
    title: "Travail individuel et évaluations",
    category: "vie-scolaire",
    image: VieClasse2,
    caption: "Concentration des élèves durant les heures d'enseignements théoriques.",
  },

  // --- INFRASTRUCTURES (Nouvelles images ajoutées ici) ---
  {
    id: 6,
    title: "Bâtiment intérieur et cour de récréation",
    category: "infrastructures",
    image: InfraBatimentInterieur1,
    caption: "Vue sur les différents niveaux du bâtiment entourant la cour principale.",
  },
  {
    id: 7,
    title: "Façade extérieure et espace vert",
    category: "infrastructures",
    image: InfraFacadeArbre,
    caption: "Vue de la façade principale du collège avec la végétation environnante.",
  },
  {
    id: 8,
    title: "Entrée principale du collège",
    category: "infrastructures",
    image: InfraFacadeAngle,
    caption: "L'entrée du Collège I.T.I.E accueillant les élèves.",
  },
  {
    id: 9,
    title: "Vue d'ensemble depuis la route",
    category: "infrastructures",
    image: InfraFacadeRoute,
    caption: "Le bâtiment imposant du Collège I.T.I.E vu depuis la voie publique à Etoug-Ebé.",
  },
  {
    id: 10,
    title: "Architecture intérieure",
    category: "infrastructures",
    image: InfraBatimentInterieur2,
    caption: "Perspective sur les couloirs et escaliers desservant les salles de classe.",
  },

  // --- ÉVÉNEMENTS ---
  {
    id: 11,
    title: "Remise officielle du diplôme d'excellence",
    category: "evenements",
    image: Evenement1,
    caption: "Présentation et remise du diplôme d'excellence scolaire.",
  },
  {
    id: 12,
    title: "Rassemblement général dans la cour",
    category: "evenements",
    image: Evenement2,
    caption: "Photo de famille réunissant la direction, les enseignants et les élèves.",
  },
  {
    id: 13,
    title: "Célébration avec les élèves",
    category: "evenements",
    image: Evenement4,
    caption: "Présentation de la distinction entouré des élèves.",
  },
  {
    id: 14,
    title: "Photo officielle du corps administratif",
    category: "evenements",
    image: Evenement5,
    caption: "L'équipe administrative et pédagogique lors de la cérémonie officielle.",
  },

  // --- ATELIERS (Images externes conservées pour l'instant) ---
  {
    id: 15,
    title: "Atelier de génie électrique",
    category: "ateliers",
    image: Infraelct,
    caption: "Travaux pratiques des élèves en filière Électrotechnique (F3).",
  },
  {
    id: 16,
    title: "Salle d'informatique",
    category: "ateliers", // Corrigé ici : Informatique est aussi pratique
    image: Infrainformatique ,
    caption: "Équipements informatiques modernes pour les cours pratiques.",
  },
  {
    id: 17,
    title: "Atelier Mécanique Automobile",
    category: "ateliers",
    image: Infraauto,
    caption: "Apprentissage sur moteurs réels en filières CMA/MVT.",
  },
];

export default function Galerie() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  // Filtrer les images selon la catégorie active
  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-[#241B2F] pt-20">

      {/* ===================== EN-TÊTE DE PAGE ===================== */}
      <section className="bg-gradient-to-b from-[#3D1B5C] to-[#5B2A86] text-white py-16 text-center relative">
        <div className="max-w-[1180px] mx-auto px-6 space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold">Galerie Photos</h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Découvrez en images le quotidien, les infrastructures modernes et les événements du Collège I.T.I.E
          </p>
          {/* Fil d'ariane */}
          <div className="text-sm text-[#F2994A] font-semibold pt-2">
            <a href="/" className="hover:underline opacity-90">Accueil</a>
            <span className="mx-2 text-white/50">/</span>
            <span>Galerie</span>
          </div>
        </div>
      </section>

      {/* ===================== SECTION GALERIE ===================== */}
      <section className="py-20 bg-[#F6F5FA]">
        <div className="max-w-[1180px] mx-auto px-6 space-y-12">

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                  activeCategory === cat.id
                    ? 'bg-[#5B2A86] text-white shadow-[#5B2A86]/20 scale-105'
                    : 'bg-white text-[#665F78] hover:bg-[#5B2A86]/10 hover:text-[#5B2A86]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grille d'images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
              >
                <div className="h-60 overflow-hidden relative bg-gray-100 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Surcouche au survol */}
                  <div className="absolute inset-0 bg-[#3D1B5C]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                    <span className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center text-xl backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform">
                      🔍
                    </span>
                  </div>
                </div>

                {/* Info bas de carte */}
                <div className="p-4 bg-white flex-grow">
                  <h3 className="font-bold text-[#3D1B5C] text-sm truncate">{item.title}</h3>
                  <p className="text-xs text-[#665F78] truncate mt-1">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== MODAL LIGHTBOX (ZOOM) ===================== */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            
            {/* Bouton fermer */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center text-xl transition-colors"
            >
              ✕
            </button>

            {/* Image agrandie */}
            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Détails de la photo */}
            <div className="p-6 bg-white space-y-2 border-t border-gray-100">
              <div className="flex items-center gap-3">
                 <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#5B2A86]/10 text-[#5B2A86]">
                   {CATEGORIES.find(c => c.id === selectedImage.category)?.label}
                 </span>
                 <h3 className="text-xl font-bold text-[#3D1B5C]">{selectedImage.title}</h3>
              </div>
              <p className="text-[#665F78] text-sm leading-relaxed">{selectedImage.caption}</p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}