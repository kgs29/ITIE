import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });

  const [statusMsg, setStatusMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement du formulaire
    setStatusMsg({ type: 'success', text: 'Votre message a été envoyé avec succès !' });
    setFormData({ nom: '', email: '', sujet: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white text-[#241B2F] pt-20">

      {/* ===================== EN-TÊTE DE PAGE ===================== */}
      <section className="bg-gradient-to-b from-[#3D1B5C] to-[#5B2A86] text-white py-16 text-center relative">
        <div className="max-w-[1180px] mx-auto px-6 space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold">Contactez-nous</h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Nous sommes à votre écoute
          </p>
          {/* Fil d'ariane */}
          <div className="text-sm text-[#F2994A] font-semibold pt-2">
            <a href="/" className="hover:underline opacity-90">Accueil</a>
            <span className="mx-2 text-white/50">/</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* ===================== SITUATION GÉOGRAPHIQUE & CARTE ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Informations de contact */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2A86]/10 text-[#5B2A86] font-semibold text-sm">
              📍 Situation géographique
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D1B5C]">
              Comment nous trouver
            </h2>
            <p className="text-[#665F78] leading-relaxed">
              Le Collège I.T.I.E est situé entre le Carrefour Etoug-Ebé et TKC, à Yaoundé. Un emplacement facilement accessible en transport en commun comme en véhicule personnel.
            </p>

            {/* Liste des infos */}
            <div className="space-y-4 pt-4">
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F6F5FA] border border-gray-100">
                <span className="w-10 h-10 rounded-lg bg-[#5B2A86] text-white flex items-center justify-center text-lg shrink-0">
                  📍
                </span>
                <div>
                  <b className="block text-[#3D1B5C] font-bold">Adresse</b>
                  <span className="text-[#665F78] text-sm">BP 952 Yaoundé — Cameroun</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F6F5FA] border border-gray-100">
                <span className="w-10 h-10 rounded-lg bg-[#5B2A86] text-white flex items-center justify-center text-lg shrink-0">
                  🗺️
                </span>
                <div>
                  <b className="block text-[#3D1B5C] font-bold">Situation</b>
                  <span className="text-[#665F78] text-sm">Entre le Carrefour Etoug-Ebé et TKC</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F6F5FA] border border-gray-100">
                <span className="w-10 h-10 rounded-lg bg-[#5B2A86] text-white flex items-center justify-center text-lg shrink-0">
                  📞
                </span>
                <div>
                  <b className="block text-[#3D1B5C] font-bold">Téléphones</b>
                  <span className="text-[#665F78] text-sm">
                    677 70 44 41 · 699 98 92 95 · 675 91 83 33 · 690 98 72 84 · 676 17 32 32
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F6F5FA] border border-gray-100">
                <span className="w-10 h-10 rounded-lg bg-[#5B2A86] text-white flex items-center justify-center text-lg shrink-0">
                  ✉️
                </span>
                <div>
                  <b className="block text-[#3D1B5C] font-bold">Email</b>
                  <span className="text-[#665F78] text-sm">itiecampus237@gmail.com</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F6F5FA] border border-gray-100">
                <span className="w-10 h-10 rounded-lg bg-[#5B2A86] text-white flex items-center justify-center text-lg shrink-0">
                  🌐
                </span>
                <div>
                  <b className="block text-[#3D1B5C] font-bold">Site web</b>
                  <span className="text-[#665F78] text-sm">www.itie-edu.cm</span>
                </div>
              </div>

            </div>
          </div>

          {/* Carte Google Maps */}
          <div className="h-[480px] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
            <iframe
              title="Localisation Collège I.T.I.E"
              src="https://www.google.com/maps?q=Etoug-Ebe,Yaounde,Cameroun&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

      {/* ===================== FORMULAIRE DE CONTACT ===================== */}
      <section className="py-20 bg-[#F6F5FA]">
        <div className="max-w-[720px] mx-auto px-6">
          <div className="text-center mb-10 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2A86]/10 text-[#5B2A86] font-semibold text-sm">
              💬 Écrivez-nous
            </span>
            <h2 className="text-3xl font-bold text-[#3D1B5C]">Envoyer un message</h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 space-y-6"
          >
            {statusMsg && (
              <div className="p-4 rounded-xl bg-green-100 text-green-800 text-sm font-semibold text-center">
                {statusMsg.text}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5B2A86] transition-colors text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5B2A86] transition-colors text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">
                Sujet
              </label>
              <input
                type="text"
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                placeholder="Objet de votre message"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5B2A86] transition-colors text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">
                Message *
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Votre message ici..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5B2A86] transition-colors text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#F2994A] to-[#D9772E] hover:from-[#5B2A86] hover:to-[#3D1B5C] shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              🚀 Envoyer le message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}