import React from 'react';
import { motion } from 'framer-motion';

// Variantes pour l'animation en cascade (Stagger effect)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Filieres() {
  return (
    <div className="min-h-screen bg-white text-[#241B2F] pt-20">

      {/* ===================== EN-TÊTE DE PAGE ===================== */}
      <section className="bg-gradient-to-b from-[#3D1B5C] to-[#5B2A86] text-white py-16 text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1180px] mx-auto px-6 space-y-4"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold">Nos filières</h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Un parcours pour chaque vocation, de la 6e à la Terminale
          </p>
          <div className="text-sm text-[#F2994A] font-semibold pt-2">
            <a href="/" className="hover:underline opacity-90">Accueil</a>
            <span className="mx-2 text-white/50">/</span>
            <span>Filières</span>
          </div>
        </motion.div>
      </section>

      {/* ===================== LISTE DES FILIÈRES ===================== */}
      <section className="py-20 bg-[#F6F5FA]">
        <div className="max-w-[1180px] mx-auto px-6 space-y-16">

          {/* ========== ENSEIGNEMENT GÉNÉRAL ========== */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-[#5B2A86]/20 pb-4">
              <span className="w-12 h-12 rounded-full bg-[#5B2A86] text-white flex items-center justify-center text-xl shadow-md">
                📖
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#3D1B5C]">
                Enseignement Général
              </h2>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center text-xl">
                  👶
                </div>
                <h3 className="text-xl font-bold text-[#3D1B5C]">Premier Cycle</h3>
                <p className="text-[#665F78] text-sm">Tronc commun du premier cycle enseignement général.</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['6e', '5e', '4e ALL/ESP', '3e ALL/ESP'].map((cls) => (
                    <span key={cls} className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">
                      {cls}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center text-xl">
                  🧪
                </div>
                <h3 className="text-xl font-bold text-[#3D1B5C]">Second Cycle</h3>
                <p className="text-[#665F78] text-sm">Séries scientifiques et littéraires jusqu'au Baccalauréat.</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['2nde A4ALL/ESP','2nde C', '1ère A4ALL/ESP', '1ère C', '1ère D', 'Tle A4ALL/ESP', 'Tle C', 'Tle D'].map((cls) => (
                    <span key={cls} className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">
                      {cls}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ========== ENSEIGNEMENT TECHNIQUE COMMERCIAL ========== */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-[#5B2A86]/20 pb-4">
              <span className="w-12 h-12 rounded-full bg-[#5B2A86] text-white flex items-center justify-center text-xl shadow-md">
                📈
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#3D1B5C]">
                Enseignement Technique Commercial
              </h2>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center text-xl">
                  💼
                </div>
                <h3 className="text-xl font-bold text-[#3D1B5C]">Premier Cycle STT / ESF</h3>
                <p className="text-[#665F78] text-sm">Sciences et Technologies Tertiaires — Économie Sociale et Familiale.</p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">A1</span>
                  <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">A2</span>
                  <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">A3</span>
                  <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">A4</span>
                </div>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center text-xl">
                  💼
                </div>
                <h3 className="text-xl font-bold text-[#3D1B5C]">Second Cycle STT / ESF</h3>
                <p className="text-[#665F78] text-sm">Sciences et Technologies Tertiaires — Économie Sociale et Familiale.</p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">2nde</span>
                  <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">1ère</span>
                  <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">Terminale</span>
                </div>
              </motion.div>


              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center text-xl">
                  🧮
                </div>
                <h3 className="text-xl font-bold text-[#3D1B5C]">CG</h3>
                <p className="text-[#665F78] text-sm">Sciences et Technologies Tertiaires — Comptabilité et Gestion.</p>
                <div className="flex items-center gap-2 pt-2">
                  <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">2nde</span>
                   <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">1ère</span>
                  <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">Terminale</span>

                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ========== ENSEIGNEMENT TECHNIQUE INDUSTRIEL ========== */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-[#5B2A86]/20 pb-4">
              <span className="w-12 h-12 rounded-full bg-[#5B2A86] text-white flex items-center justify-center text-xl shadow-md">
                ⚙️
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#3D1B5C]">
                Enseignement Technique Industriel
              </h2>
            </div>

            {/* Sous-section Premier Cycle */}
            <div className="space-y-4">
              <h1 className="text-lg font-bold text-[#5B2A86] text-center">Premier Cycle</h1>
              <div className="flex items-center gap-2 pt-2 text-center justify-center">
                  <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">A1</span>
                  <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">A2</span>
                  <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">A3</span>
                  <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">A4</span>
                </div>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  { icon: '⚡', title: 'ELEQ', desc: 'Électricité et Équipements.' },
                  { icon: '🔨', title: 'MACO', desc: 'Maçonnerie et Construction.' },
                  { icon: '🔧', title: 'MARE', desc: "Maintenance et Réparation d'Engins." },
                  { icon: '🍽️', title: 'COME', desc: "Coupe et Couture / Métiers de l'Économie." },
                ].map((item) => (
                  <motion.div 
                    key={item.title}
                    variants={cardVariants}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3 hover:shadow-xl transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center text-lg">{item.icon}</div>
                    <h4 className="font-bold text-[#3D1B5C]">{item.title}</h4>
                    <p className="text-[#665F78] text-xs">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Sous-section Second Cycle */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-[#5B2A86] text-center">Second Cycle</h3>
              <div className="flex items-center gap-2 pt-2 text-center justify-center">
                  <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">2nde</span>
                   <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">1ère</span>
                  <span className="px-3 py-1 rounded-md bg-[#F6F5FA] text-[#5B2A86] font-semibold text-xs border border-[#5B2A86]/20">Terminale</span>

                </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  { icon: '🏭', title: 'F3', desc: 'Électrotechnique.' },
                  { icon: '🏢', title: 'F4 BA', desc: 'Génie Civil — Bâtiment.' },
                  { icon: '🚘', title: 'CMA / MVT', desc: 'Construction Mécanique Auto / Maintenance des Véhicules.' },
                  { icon: '🧵', title: 'IH', desc: "Industrie de l'Habillement." },
                  { icon: '💻', title: 'MISE', desc: 'Maintenance Informatique et Systèmes Électroniques.' },
                ].map((item) => (
                  <motion.div 
                    key={item.title}
                    variants={cardVariants}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3 hover:shadow-xl transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#5B2A86]/10 text-[#5B2A86] flex items-center justify-center text-lg">{item.icon}</div>
                    <h4 className="font-bold text-[#3D1B5C]">{item.title}</h4>
                    <p className="text-[#665F78] text-xs">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* ===================== CALL TO ACTION (CTA) ===================== */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-[1180px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-[#5B2A86] to-[#3D1B5C] rounded-3xl p-10 md:p-14 text-center text-white space-y-6 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Une filière vous intéresse ?</h2>
            <p className="max-w-xl mx-auto text-white/80">
              Contactez-nous ou commencez directement votre inscription en ligne.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/inscription"
              className="inline-block px-8 py-4 rounded-full font-semibold text-[#3D1B5C] bg-white hover:bg-[#F2994A] hover:text-white transition-colors shadow-lg"
            >
              S'inscrire maintenant
            </motion.a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}