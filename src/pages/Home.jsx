import React, { useState } from 'react';
import Imgitie from '../assets/itie.jpeg';
import Principal from '../assets/Principale.png';

import FilierEleq from '../assets/Fillière.jpeg';
import FilierEsf from '../assets/Fillière5.jpeg';
import FilierInfo from '../assets/Fillière4.jpeg';
import FilierMise from '../assets/Fillière3.jpeg';
import FilierMare from '../assets/Fillière1.jpeg';
import FilierF4BA from '../assets/Fillière2.jpeg';

// Données des 3 dernières actualités
const NEWS_PREVIEW = [
  {
    id: 1,
    date: '12 juillet 2026',
    title: 'Journée portes ouvertes',
    text: "Venez découvrir nos ateliers techniques et rencontrer l'équipe pédagogique.",
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 2,
    date: '02 juin 2026',
    title: 'Résultats des examens 2026',
    text: "Nos élèves de Terminale obtiennent d'excellents résultats cette année.",
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=700&auto=format&fit=crop',
  },
  {
    id: 3,
    date: '18 mai 2026',
    title: "Semaine de l'excellence technique",
    text: "Exposition des réalisations des élèves en filières industrielles.",
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=700&auto=format&fit=crop',
  },
];

// Données des témoignages
const TESTIMONIALS = [
  {
    id: 1,
    name: "Mme Ngono, Parent d'élève",
    role: "Parent d'élève",
    message: "Mon fils a énormément progressé depuis son admission au Collège I.T.I.E. L'encadrement est sérieux et humain.",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'M. Etoundi, Ancien élève (promotion 2018)',
    role: 'Ancien élève',
    message: "La filière technique industrielle m'a donné toutes les bases pour réussir dans mon métier aujourd'hui.",
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'M. Belinga, Enseignant',
    role: 'Enseignant',
    message: "Un établissement où la discipline et le travail sont au cœur de chaque enseignement. Une fierté d'y enseigner.",
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
  },
];

// Fillières 

const FILIERES_DATA = [
  {
    id: 1,
    title: "Atelier ELEQ / F3",
    category: "Ens. Technique Industriel",
    description: "Électricité d'Équipement et Électrotechnique, formation pratique aux schémas de commande et de puissance.",
    image: FilierEleq,
    icon: "⚡",
  },
  {
    id: 2,
    title: "Atelier Informatique",
    category: "Ens. Technique Commercial",
    description: "Bureautique, gestion commerciale informatisée et apprentissage des outils numériques modernes.",
    image: FilierInfo,
    icon: "💻",
  },
  {
    id: 3,
    title: "Atelier MISE",
    category: "Ens. Technique Industriel",
    description: "Maintenance et Installation des Systèmes Électroniques, diagnostic et câblage d'équipements.",
    image: FilierMise,
    icon: "🛠️",
  },
  {
    id: 4,
    title: "Atelier MARE / CMA / MVT",
    category: "Ens. Technique Industriel",
    description: "Mécanique automobile, réparation, maintenance des véhicules et moteurs thermiques.",
    image: FilierMare,
    icon: "🚗",
  },
  {
    id: 5,
    title: "Atelier STT / ESF",
    category: "Ens. Technique Commercial",
    description: "Économie Sociale et Familiale, arts ménagers et techniques de gestion de la vie quotidienne.",
    image: FilierEsf,
    icon: "🍳",
  },

  {
    id: 2,
    title: "Atelier F4-BA",
    category: "Ens. Technique Industriel",
    description: "Génie Civil et Bâtiment, travaux pratiques de construction, maçonnerie et structure.",
    image: FilierF4BA,
    icon: "🏗️",
  },
];



export default function Home() {
  const [currentTesti, setCurrentTesti] = useState(0);

  const nextTestimonial = () => {
    setCurrentTesti((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTesti((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="min-h-screen bg-white text-[#241B2F] pt-20">

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-[#F6F5FA] to-white">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#5B2A86] to-[#F2994A] flex items-center justify-center text-white font-bold text-xl shadow-lg">
              ITIE
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#3D1B5C] leading-tight">
              Collège I.T.I.E
            </h1>
            <span className="inline-block text-[#F2994A] font-semibold text-lg tracking-wide">
              Discipline • Travail • Succès
            </span>
            <p className="text-[#665F78] text-base md:text-lg leading-relaxed">
              Institut des Techniques Industrielles d'Etoug-Ebé — un établissement d'excellence qui forme depuis 1991 des générations d'élèves dans l'enseignement général, technique commercial et technique industriel.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#inscription"
                className="px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-br from-[#F2994A] to-[#D9772E] hover:bg-none hover:bg-[#5B2A86] shadow-[0_10px_24px_rgba(242,153,74,0.35)] hover:shadow-[0_10px_24px_rgba(91,42,134,0.35)] hover:-translate-y-1 transition-all duration-300"
              >
                Inscription en ligne
              </a>
              <a
                href="#apropos"
                className="px-7 py-3.5 rounded-full font-semibold text-white bg-[#5B2A86] hover:bg-[#3D1B5C] shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                Découvrir le Collège
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={Imgitie}
                alt="Vue du Collège I.T.I.E"
                className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DEPUIS 1991 ===================== */}
      <section className="py-16 text-center">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col items-center">
          <div className="w-40 h-40 rounded-full border-4 border-dashed border-[#5B2A86] flex flex-col items-center justify-center bg-[#F6F5FA] shadow-inner mb-4">
            <span className="text-sm font-semibold uppercase text-[#665F78]">Depuis</span>
            <span className="text-4xl font-extrabold text-[#3D1B5C]">1991</span>
          </div>
          <p className="text-xl font-bold text-[#5B2A86]">Nous sommes ensemble au service de la nation </p>
        </div>
      </section>

      {/* ===================== À PROPOS ===================== */}
      <section className="py-16 bg-white" id="apropos">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2A86]/10 text-[#5B2A86] font-semibold text-sm">
              🎓 Qui sommes-nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D1B5C]">
              Bienvenue au Collège I.T.I.E
            </h2>
            <p className="text-[#665F78] leading-relaxed">
              Depuis 1991, le Collège I.T.I.E accompagne les élèves de la 6e à la Terminale à travers un enseignement général, technique commercial et technique industriel de qualité. Notre mission : discipline, travail et succès pour chaque apprenant, dans un cadre moderne et bienveillant.
            </p>
            <div>
              <a
                href="#apropos"
                className="inline-block px-7 py-3 rounded-full font-semibold text-white bg-[#5B2A86] hover:bg-[#3D1B5C] transition-colors shadow-md"
              >
                En savoir plus
              </a>
            </div>
          </div>
          {/* DIV de l'image modifiée ci-dessous */}
          <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-50 flex items-center justify-center p-4">
            <img
              src={Principal}
              alt="Le Principal du Collège I.T.I.E"
              className="max-w-full max-h-[450px] w-auto h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </section>
      

{/* ===================== FILIÈRES & ATELIERS ===================== */}
<section className="py-20 bg-[#F6F5FA]" id="filieres">
  <div className="max-w-[1180px] mx-auto px-6">
    <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2A86]/10 text-[#5B2A86] font-semibold text-sm">
        ⚙️ Formations & Ateliers Pratiques
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-[#3D1B5C]">Nos Ateliers & Filières</h2>
      <p className="text-[#665F78]">
        Des équipements adaptés pour une formation technique, commerciale et industrielle d'excellence.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {FILIERES_DATA.map((filiere) => (
        <div 
          key={filiere.id} 
          className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            {/* Conteneur d'image ajusté : fond sombre/neutre pour les images en object-contain */}
            <div className="h-56 overflow-hidden bg-gray-900/5 flex items-center justify-center p-2 border-b border-gray-100">
              <img
                src={filiere.image}
                alt={filiere.title}
                /* Utilisation de object-contain pour afficher l'image entière sans rognage */
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F2994A]/15 text-[#D9772E]">
                  {filiere.category}
                </span>
                <span className="text-xl">{filiere.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-[#3D1B5C]">{filiere.title}</h3>
              <p className="text-[#665F78] text-sm leading-relaxed">
                {filiere.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <a
        href="#inscription"
        className="px-7 py-3 rounded-full font-semibold text-white bg-[#5B2A86] hover:bg-[#3D1B5C] transition-colors shadow-md inline-block"
      >
        S'inscrire dans un atelier
      </a>
    </div>
  </div>
</section>
      {/* ===================== CHIFFRES CLÉS ===================== */}
      <section className="py-16 bg-[#3D1B5C] text-white">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-[#F2994A] mb-2">1991</div>
            <div className="text-sm md:text-base opacity-80">Année de création</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-[#F2994A] mb-2">3500+</div>
            <div className="text-sm md:text-base opacity-80">Diplômés formés</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-[#F2994A] mb-2">40+</div>
            <div className="text-sm md:text-base opacity-80">Enseignants qualifiés</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-[#F2994A] mb-2">18</div>
            <div className="text-sm md:text-base opacity-80">Filières proposées</div>
          </div>
        </div>
      </section>

      {/* ===================== ACTUALITÉS ===================== */}
      <section className="py-20 bg-[#F6F5FA]" id="actualites">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2A86]/10 text-[#5B2A86] font-semibold text-sm">
              📰 Vie scolaire
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D1B5C]">Dernières actualités</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_PREVIEW.map((news) => (
              <div key={news.id} className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col">
                <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-[#F2994A] block mb-1">{news.date}</span>
                    <h3 className="text-lg font-bold text-[#3D1B5C] mb-2">{news.title}</h3>
                    <p className="text-[#665F78] text-sm">{news.text}</p>
                  </div>
                  <a href="#actualites" className="text-[#5B2A86] font-semibold text-sm hover:underline">
                    Lire plus →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#actualites"
              className="px-7 py-3 rounded-full font-semibold text-white bg-[#5B2A86] hover:bg-[#3D1B5C] transition-colors shadow-md"
            >
              Toutes les actualités
            </a>
          </div>
        </div>
      </section>

      {/* ===================== TÉMOIGNAGES ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2A86]/10 text-[#5B2A86] font-semibold text-sm">
              💬 Témoignages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D1B5C]">Ce qu'ils disent de nous</h2>
          </div>

          <div className="max-w-2xl mx-auto bg-[#F6F5FA] p-8 md:p-10 rounded-2xl text-center relative shadow-sm">
            <img
              src={TESTIMONIALS[currentTesti].avatar}
              alt={TESTIMONIALS[currentTesti].name}
              className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-md mb-4"
            />
            <p className="text-[#241B2F] italic text-base md:text-lg mb-4">
              "{TESTIMONIALS[currentTesti].message}"
            </p>
            <div className="text-[#F2994A] text-lg mb-2">★★★★★</div>
            <div className="font-bold text-[#3D1B5C]">{TESTIMONIALS[currentTesti].name}</div>

            <div className="flex justify-between items-center absolute inset-y-1/2 -left-4 -right-4 pointer-events-none">
              <button
                onClick={prevTestimonial}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-md text-[#3D1B5C] hover:bg-[#5B2A86] hover:text-white transition-colors flex items-center justify-center font-bold"
                aria-label="Précédent"
              >
                ‹
              </button>
              <button
                onClick={nextTestimonial}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-md text-[#3D1B5C] hover:bg-[#5B2A86] hover:text-white transition-colors flex items-center justify-center font-bold"
                aria-label="Suivant"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CALL TO ACTION (CTA) ===================== */}
      <section className="py-16 bg-[#F6F5FA]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="bg-gradient-to-r from-[#5B2A86] to-[#3D1B5C] rounded-3xl p-10 md:p-14 text-center text-white space-y-6 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold">Prêt à rejoindre le Collège I.T.I.E ?</h2>
            <p className="max-w-xl mx-auto text-white/80">
              Les inscriptions pour la prochaine rentrée sont ouvertes. Constituez votre dossier en ligne dès aujourd'hui.
            </p>
            <a
              href="#inscription"
              className="inline-block px-8 py-4 rounded-full font-semibold text-[#3D1B5C] bg-white hover:bg-[#F2994A] hover:text-white transition-colors shadow-lg"
            >
              Commencer l'inscription
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}