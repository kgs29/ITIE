import React, { useState } from 'react';

export default function Inscription() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    naissance: '',
    sexe: '',
    classe: '',
    tel: '',
    email: '',
    parent: '',
    profession: '',
    adresse: '',
    message: '',
  });

  const [files, setFiles] = useState({
    acte: null,
    photo: null,
    bulletin: null,
  });

  const [statusMsg, setStatusMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement ou envoi via votre endpoint Formspree / API
    setStatusMsg({
      type: 'success',
      text: 'Votre dossier d\'inscription a été soumis avec succès !',
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#241B2F] pt-20">

      {/* ===================== EN-TÊTE DE PAGE ===================== */}
      <section className="bg-gradient-to-b from-[#3D1B5C] to-[#5B2A86] text-white py-16 text-center relative">
        <div className="max-w-[1180px] mx-auto px-6 space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold">Inscription en ligne</h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Constituez votre dossier en quelques minutes
          </p>
          {/* Fil d'ariane */}
          <div className="text-sm text-[#F2994A] font-semibold pt-2">
            <a href="/" className="hover:underline opacity-90">Accueil</a>
            <span className="mx-2 text-white/50">/</span>
            <span>Inscription</span>
          </div>
        </div>
      </section>

      {/* ===================== FORMULAIRE DE DOSSIER ===================== */}
      <section className="py-20 bg-[#F6F5FA]">
        <div className="max-w-[880px] mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 space-y-8">
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#3D1B5C]">Dossier d'inscription</h2>
              <p className="text-[#665F78] text-sm mt-1">Tous les champs marqués * sont obligatoires.</p>
            </div>

            {statusMsg && (
              <div className="p-4 rounded-xl bg-green-100 text-green-800 text-sm font-semibold text-center">
                {statusMsg.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nom */}
                <div className="space-y-2">
                  <label htmlFor="nom" className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">Nom *</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5B2A86] transition-colors text-sm"
                  />
                </div>

                {/* Prénom */}
                <div className="space-y-2">
                  <label htmlFor="prenom" className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">Prénom *</label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    required
                    value={formData.prenom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5B2A86] transition-colors text-sm"
                  />
                </div>

                {/* Date de naissance */}
                <div className="space-y-2">
                  <label htmlFor="naissance" className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">Date de naissance *</label>
                  <input
                    type="date"
                    id="naissance"
                    name="naissance"
                    required
                    value={formData.naissance}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5B2A86] transition-colors text-sm"
                  />
                </div>

                {/* Sexe */}
                <div className="space-y-2">
                  <label htmlFor="sexe" className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">Sexe *</label>
                  <select
                    id="sexe"
                    name="sexe"
                    required
                    value={formData.sexe}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5B2A86] transition-colors text-sm"
                  >
                    <option value="">Sélectionner…</option>
                    <option value="Masculin">Masculin</option>
                    <option value="Féminin">Féminin</option>
                  </select>
                </div>
              </div>

              {/* Classe sollicitée */}
              <div className="space-y-2">
                <label htmlFor="classe" className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">Classe sollicitée *</label>
                <select
                  id="classe"
                  name="classe"
                  required
                  value={formData.classe}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5B2A86] transition-colors text-sm"
                >
                  <option value="">Sélectionner une classe…</option>
                  <optgroup label="Enseignement Général">
                    <option value="6e">6e</option>
                    <option value="5e">5e</option>
                    <option value="4e">4e</option>
                    <option value="3e">3e</option>
                    <option value="2nde">2nde</option>
                    <option value="1ère">1ère</option>
                    <option value="Terminale A">Terminale A</option>
                    <option value="Terminale C">Terminale C</option>
                    <option value="Terminale D">Terminale D</option>
                  </optgroup>
                  <optgroup label="Technique Commercial">
                    <option value="STT/ESF">STT/ESF</option>
                    <option value="STT/CG">STT/CG</option>
                  </optgroup>
                  <optgroup label="Technique Industriel — 1er cycle">
                    <option value="ELEQ">ELEQ</option>
                    <option value="MACO">MACO</option>
                    <option value="MARE">MARE</option>
                    <option value="COME">COME</option>
                  </optgroup>
                  <optgroup label="Technique Industriel — 2nd cycle">
                    <option value="F3">F3</option>
                    <option value="F4 BA">F4 BA</option>
                    <option value="CMA/MVT">CMA/MVT</option>
                    <option value="IH">IH</option>
                    <option value="MISE">MISE</option>
                  </optgroup>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Téléphone */}
                <div className="space-y-2">
                  <label htmlFor="tel" className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">Téléphone *</label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    required
                    placeholder="6XX XX XX XX"
                    value={formData.tel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5B2A86] transition-colors text-sm"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="vous@exemple.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5B2A86] transition-colors text-sm"
                  />
                </div>

                {/* Nom du parent */}
                <div className="space-y-2">
                  <label htmlFor="parent" className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">Nom du parent / tuteur *</label>
                  <input
                    type="text"
                    id="parent"
                    name="parent"
                    required
                    value={formData.parent}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5B2A86] transition-colors text-sm"
                  />
                </div>

                {/* Profession du parent */}
                <div className="space-y-2">
                  <label htmlFor="profession" className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">Profession du parent</label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5B2A86] transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Adresse */}
              <div className="space-y-2">
                <label htmlFor="adresse" className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">Adresse *</label>
                <input
                  type="text"
                  id="adresse"
                  name="adresse"
                  required
                  value={formData.adresse}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5B2A86] transition-colors text-sm"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">Message (facultatif)</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Informations complémentaires…"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#5B2A86] transition-colors text-sm resize-none"
                ></textarea>
              </div>

              {/* Fichiers / Pièces jointes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                <div className="space-y-2">
                  <label htmlFor="acte" className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">Acte de naissance (PDF/JPG) *</label>
                  <input
                    type="file"
                    id="acte"
                    name="acte"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    onChange={handleFileChange}
                    className="w-full text-xs text-[#665F78] file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#5B2A86]/10 file:text-[#5B2A86] hover:file:bg-[#5B2A86]/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="photo" className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">Photo d'identité *</label>
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept=".jpg,.jpeg,.png"
                    required
                    onChange={handleFileChange}
                    className="w-full text-xs text-[#665F78] file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#5B2A86]/10 file:text-[#5B2A86] hover:file:bg-[#5B2A86]/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="bulletin" className="text-xs font-bold uppercase tracking-wider text-[#3D1B5C]">Dernier bulletin (PDF/JPG)</label>
                <input
                  type="file"
                  id="bulletin"
                  name="bulletin"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="w-full text-xs text-[#665F78] file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#5B2A86]/10 file:text-[#5B2A86] hover:file:bg-[#5B2A86]/20"
                />
                <span className="block text-xs text-[#665F78] mt-1">Formats acceptés : PDF, JPG, PNG — 5 Mo maximum par fichier.</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-6 rounded-full font-semibold text-white bg-gradient-to-r from-[#F2994A] to-[#D9772E] hover:from-[#5B2A86] hover:to-[#3D1B5C] shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                🚀 Envoyer mon dossier
              </button>
            </form>

          </div>
        </div>
      </section>

    </div>
  );
}