import React, { useState, useEffect } from 'react';

import ItieBatiment from '../assets/ITIE.jpeg';
import ItieEleves from '../assets/ITIE2.jpeg';
import ItieDirection from '../assets/ITIE1.jpeg';

import VieSport from '../assets/Principale.png';
import VieSport1 from '../assets/surveillant1.jpeg';

const STORY_IMAGES = [
  {
    id: 1,
    url: ItieBatiment,
    alt: "Vue d'ensemble du bâtiment du Collège I.T.I.E",
  },
  {
    id: 2,
    url: ItieEleves,
    alt: "Rassemblement des élèves dans la cour de l'établissement",
  },
  {
    id: 3,
    url: ItieDirection,
    alt: "Équipe administrative, enseignants et élèves diplômés",
  },
];

const TEAM = [
  {
    id: 1,
    name: "M. Directeur Fondateur",
    role: "Directeur Général",
    image: VieSport,
    desc: "Fondateur de l'établissement en 1991, garant de la vision pédagogique.",
    phone: "677 70 44 41",
    email: "direction@itie-edu.cm",
  },
  {
    id: 2,
    name: "Mme Censeur des Études",
    role: "Censeur",
    image: VieSport  ,
    desc: "Responsable du suivi pédagogique et de la discipline générale.",
    phone: "699 98 92 95",
    email: "censorat@itie-edu.cm",
  },
  {
    id: 3,
    name: "M. Surveillant Général",
    role: "Surveillant Général",
    image: VieSport1 ,
    desc: "En charge de la discipline et de la vie scolaire au quotidien.",
    phone: "675 91 83 33",
    email: "surveillance@itie-edu.cm",
  },
  {
    id: 4,
    name: "Mme Intendante",
    role: "Intendante",
    image: VieSport ,
    desc: "Gestion administrative et financière de l'établissement.",
    phone: "690 98 72 84",
    email: "intendance@itie-edu.cm",
  },
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % STORY_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % STORY_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + STORY_IMAGES.length) % STORY_IMAGES.length);
  };

  return (
    <div className="min-h-screen bg-white text-[#241B2F] pt-20">

      {/* ===================== EN-TÊTE DE PAGE ===================== */}
      <section className="bg-gradient-to-b from-[#3D1B5C] to-[#5B2A86] text-white py-16 text-center relative">
        <div className="max-w-[1180px] mx-auto px-6 space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold">À propos du Collège I.T.I.E</h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Institut des Techniques Industrielles d'Etoug-Ebé — Discipline • Travail • Succès
          </p>
          <div className="text-sm text-[#F2994A] font-semibold pt-2">
            <a href="/" className="hover:underline opacity-90">Accueil</a>
            <span className="mx-2 text-white/50">/</span>
            <span>À propos</span>
          </div>
        </div>
      </section>

      {/* ===================== NOTRE HISTOIRE ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Textes explicatifs */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2A86]/10 text-[#5B2A86] font-semibold text-sm">
              🎓 Notre histoire
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D1B5C]">
              Bienvenue au Collège I.T.I.E
            </h2>
            <p className="text-[#665F78] leading-relaxed text-justify">
              Créé en 1991, l’Institut des Techniques Industrielles d’ETOUG-EBE (ITIE) est un établissement secondaire d’enseignement général, Technique et commercial basé à Yaoundé VI - entre les carrefours Etoug-Ebé et TKC - qui au bout de trois décennies a su affirmer son leadership dans l’enseignement professionnel.

              Spécialisé dans les techniques industrielles, mais aussi dans les STT (ESF, CG...), l’ITIE est l’un des plus importants établissements d’enseignement technique de Yaoundé VI en particulier et de la cité capitale en général. L’enseignement général qui va de la 6ème en Tle, n’y est pas en reste. Il prépare d’ailleurs les futurs titulaires de BEPC à une orientation en enseignement technique dès la classe de 2nde.
            </p>
            <p className="text-[#665F78] leading-relaxed text-justify">
              Toutes ces spécialités sont orientées vers la professionnalisation des enseignements tant par la qualification du corps enseignant et l’équipement de ses ateliers que par l’implication effective des entreprises partenaires qui contribuent à la formation des apprenants à travers les stages académiques.

              Nous invitons de ce fait nos futurs postulants à se projeter dans l’avenir et de choisir une spécialité en accord avec leur projet professionnel et leur carrière future.
            </p>
            <p className="text-[#665F78] leading-relaxed text-justify">
              Plus de 3500 diplômés témoignent aujourd'hui de la qualité de notre formation, portée par une équipe de plus de 40 enseignants qualifiés et passionnés.
            </p>
          </div>

          {/* Carrousel d'images locales du Collège ITIE */}
          <div className="relative group rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-[400px] bg-gray-100">
            {STORY_IMAGES.map((img, index) => (
              <img
                key={img.id}
                src={img.url}
                alt={img.alt}
                className={`absolute inset-0 w-full h-[400px] object-cover transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                }`}
              />
            ))}

            <button
              onClick={prevSlide}
              aria-label="Image précédente"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[#5B2A86] text-white flex items-center justify-center transition-colors shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 z-10"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              aria-label="Image suivante"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[#5B2A86] text-white flex items-center justify-center transition-colors shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 z-10"
            >
              ›
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {STORY_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Aller à l'image ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentSlide ? 'bg-[#F2994A] w-6' : 'bg-white/70 hover:bg-white w-2.5'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===================== DEPUIS 1991 ===================== */}
      <section className="py-16 bg-[#F6F5FA] text-center">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col items-center">
          <div className="w-40 h-40 rounded-full border-4 border-dashed border-[#5B2A86] flex flex-col items-center justify-center bg-white shadow-inner mb-4">
            <span className="text-sm font-semibold uppercase text-[#665F78]">Depuis</span>
            <span className="text-4xl font-extrabold text-[#3D1B5C]">1991</span>
          </div>
          <p className="text-xl font-bold text-[#5B2A86]">Nous sommes ensemble</p>
        </div>
      </section>

      {/* ===================== VALEURS ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2A86]/10 text-[#5B2A86] font-semibold text-sm">
              ⭐ Nos valeurs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F6F5FA] p-8 rounded-2xl border border-[#5B2A86]/10 hover:shadow-xl transition-shadow duration-300 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center text-2xl mx-auto">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-[#3D1B5C]">Discipline</h3>
              <p className="text-[#665F78] text-sm leading-relaxed">
                Un cadre structurant qui prépare les élèves à la rigueur de la vie professionnelle.
              </p>
            </div>

            <div className="bg-[#F6F5FA] p-8 rounded-2xl border border-[#5B2A86]/10 hover:shadow-xl transition-shadow duration-300 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center text-2xl mx-auto">
                🔨
              </div>
              <h3 className="text-xl font-bold text-[#3D1B5C]">Travail</h3>
              <p className="text-[#665F78] text-sm leading-relaxed">
                L'effort et la persévérance comme moteurs de la réussite de chaque élève.
              </p>
            </div>

            <div className="bg-[#F6F5FA] p-8 rounded-2xl border border-[#5B2A86]/10 hover:shadow-xl transition-shadow duration-300 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center text-2xl mx-auto">
                🏆
              </div>
              <h3 className="text-xl font-bold text-[#3D1B5C]">Succès</h3>
              <p className="text-[#665F78] text-sm leading-relaxed">
                Des résultats reconnus, portés par un encadrement pédagogique de qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ÉQUIPE ADMINISTRATIVE ===================== */}
      <section className="py-20 bg-[#F6F5FA]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2A86]/10 text-[#5B2A86] font-semibold text-sm">
              👥 Notre équipe
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D1B5C]">Équipe administrative</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col flex-1 justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#3D1B5C]">{member.name}</h3>
                    <div className="text-xs font-semibold text-[#F2994A] uppercase tracking-wider mb-2">
                      {member.role}
                    </div>
                    <p className="text-[#665F78] text-xs leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-gray-100 text-xs font-medium text-[#5B2A86] flex items-center gap-1.5">
                    📞 {member.phone}
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