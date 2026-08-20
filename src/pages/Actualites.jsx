import React from 'react';
import Evenement from '../assets/ITIE2.jpeg';

// Tableau des actualités dynamique et modifiable
const NEWS = [
  {
    id: 1,
    date: "12 juillet 2026",
    title: "Journée portes ouvertes",
    text: "Venez découvrir nos ateliers techniques, nos salles de classe et rencontrer l'équipe pédagogique lors de notre journée portes ouvertes annuelle.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: 2,
    date: "02 juin 2026",
    title: "Résultats des examens 2026",
    text: "Nos élèves de Terminale obtiennent d'excellents résultats cette année, confirmant la qualité de l'encadrement pédagogique.",
    // image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: 3,
    date: "18 mai 2026",
    title: "Semaine de l'excellence technique",
    text: "Exposition des réalisations des élèves des filières industrielles : électricité, mécanique, construction et informatique.",
    // image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: 4,
    date: "22 avril 2026",
    title: "Tournoi sportif inter-classes",
    text: "Football, basketball et athlétisme ont rythmé cette semaine sportive très disputée entre les classes.",
    // image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: 5,
    date: "10 mars 2026",
    title: "Semaine culturelle",
    text: "Théâtre, musique et exposition d'art organisés par les élèves autour du thème de l'identité camerounaise.",
    // image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: 6,
    date: "15 septembre 2025",
    title: "Rentrée scolaire 2025-2026",
    text: "Cérémonie de rentrée en présence des parents, des enseignants et de l'administration du Collège I.T.I.E.",
    image: Evenement,
  },
];

export default function Actualites() {
  return (
    <div className="min-h-screen bg-white text-[#241B2F] pt-20">

      {/* ===================== EN-TÊTE DE PAGE ===================== */}
      <section className="bg-gradient-to-b from-[#3D1B5C] to-[#5B2A86] text-white py-16 text-center relative">
        <div className="max-w-[1180px] mx-auto px-6 space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold">Actualités & évènements</h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Toute la vie scolaire du Collège I.T.I.E
          </p>
          {/* Fil d'ariane */}
          <div className="text-sm text-[#F2994A] font-semibold pt-2">
            <a href="/" className="hover:underline opacity-90">Accueil</a>
            <span className="mx-2 text-white/50">/</span>
            <span>Actualités</span>
          </div>
        </div>
      </section>

      {/* ===================== GRILLE D'ACTUALITÉS ===================== */}
      <section className="py-20 bg-[#F6F5FA]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
              >
                {/* Conteneur image */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#5B2A86] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {item.date}
                  </span>
                </div>

                {/* Contenu textuel */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#3D1B5C] group-hover:text-[#F2994A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#665F78] text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href="/contact"
                      className="inline-flex items-center text-[#5B2A86] font-semibold text-sm hover:text-[#F2994A] transition-colors"
                    >
                      En savoir plus <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}