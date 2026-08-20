import React, { useState, useRef } from 'react';
import jsPDF from 'jspdf';

/* ============================================================
   CONFIGURATION — à renseigner avant mise en production
   ============================================================
   1) WEB3FORMS_ACCESS_KEY
      -> Créez un compte gratuit sur https://web3forms.com
      -> Ajoutez itiecampus237@gmail.com comme email de réception
      -> Copiez la clé d'accès générée ci-dessous.

   2) CLOUDINARY_CLOUD_NAME / CLOUDINARY_UPLOAD_PRESET
      -> Créez un compte gratuit sur https://cloudinary.com
      -> Dans Settings > Upload, créez un "Upload preset" en mode
         "Unsigned" (nom au choix, ex: "inscription_dossiers")
      -> Copiez le "Cloud name" (visible sur le dashboard) et le
         nom du preset ci-dessous.

   Ces valeurs sont publiques côté client (c'est normal pour ce
   type d'intégration sans backend) mais elles ne permettent pas
   de lire vos données, seulement d'envoyer vers ces formulaires.
   ============================================================ */
const WEB3FORMS_ACCESS_KEY = 'VOTRE_CLE_WEB3FORMS';
const CLOUDINARY_CLOUD_NAME = 'VOTRE_CLOUD_NAME';
const CLOUDINARY_UPLOAD_PRESET = 'VOTRE_UPLOAD_PRESET';
const DEST_EMAIL = 'itiecampus237@gmail.com';
const SCHOOL_NAME = 'ITIE Campus';
const MAX_FILE_SIZE_MB = 5;

const FIELD_LABELS = {
  nom: 'Nom',
  prenom: 'Prénom',
  naissance: 'Date de naissance',
  sexe: 'Sexe',
  classe: 'Classe sollicitée',
  tel: 'Téléphone',
  email: 'Email',
  parent: 'Nom du parent / tuteur',
  profession: 'Profession du parent',
  adresse: 'Adresse',
  message: 'Message',
};

const FILE_LABELS = {
  acte: "Acte de naissance",
  photo: "Photo d'identité",
  bulletin: 'Dernier bulletin',
};

function generateReference() {
  const now = new Date();
  const y = now.getFullYear();
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `INS-${y}-${rand}`;
}

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStep, setSubmitStep] = useState('');
  const [submittedRecord, setSubmittedRecord] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files: selected } = e.target;
    const file = selected[0] || null;

    if (file && file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setStatusMsg({
        type: 'error',
        text: `Le fichier "${file.name}" dépasse ${MAX_FILE_SIZE_MB} Mo. Merci de choisir un fichier plus léger.`,
      });
      e.target.value = '';
      setFiles({ ...files, [name]: null });
      return;
    }

    setStatusMsg(null);
    setFiles({ ...files, [name]: file });
  };

  // Envoie un fichier vers Cloudinary (upload non signé) et renvoie son URL publique
  const uploadFileToCloudinary = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    data.append('folder', 'dossiers-inscription');

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`,
      { method: 'POST', body: data }
    );

    if (!res.ok) {
      throw new Error(`Échec de l'envoi du fichier "${file.name}"`);
    }

    const json = await res.json();
    return json.secure_url;
  };

  // Génère et télécharge le PDF récapitulatif du dossier soumis
  const downloadPDF = (record) => {
    const doc = new jsPDF();
    const marginX = 18;
    let y = 20;

    doc.setFillColor(61, 27, 92);
    doc.rect(0, 0, 210, 32, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(SCHOOL_NAME, marginX, 15);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text("Récapitulatif de dossier d'inscription", marginX, 23);

    y = 42;
    doc.setTextColor(102, 95, 120);
    doc.setFontSize(10);
    doc.text(`Référence : ${record.reference}`, marginX, y);
    doc.text(`Date d'envoi : ${record.date}`, 130, y);

    y += 10;
    doc.setDrawColor(230, 230, 230);
    doc.line(marginX, y, 192, y);
    y += 10;

    doc.setTextColor(36, 27, 47);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('Informations du candidat', marginX, y);
    y += 8;

    doc.setFontSize(10.5);
    Object.entries(FIELD_LABELS).forEach(([key, label]) => {
      const value = record.formData[key];
      if (!value) return;
      doc.setFont('helvetica', 'bold');
      doc.text(`${label} :`, marginX, y);
      doc.setFont('helvetica', 'normal');
      const lines = doc.splitTextToSize(String(value), 120);
      doc.text(lines, marginX + 55, y);
      y += 7 * lines.length;
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });

    y += 6;
    doc.setDrawColor(230, 230, 230);
    doc.line(marginX, y, 192, y);
    y += 10;

    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text('Pièces jointes envoyées', marginX, y);
    y += 8;
    doc.setFontSize(10.5);
    doc.setFont('helvetica', 'normal');
    Object.entries(FILE_LABELS).forEach(([key, label]) => {
      const fileMeta = record.uploadedFiles[key];
      doc.text(
        `• ${label} : ${fileMeta ? fileMeta.name : 'Non fourni'}`,
        marginX,
        y
      );
      y += 7;
    });

    y += 8;
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text(
      'Ce document confirme la soumission de votre dossier. Conservez-le comme preuve de dépôt.',
      marginX,
      280
    );

    doc.save(`dossier-inscription-${record.reference}.pdf`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!files.acte || !files.photo) {
      setStatusMsg({
        type: 'error',
        text: "Merci de joindre l'acte de naissance et la photo d'identité, ils sont obligatoires.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMsg(null);

    try {
      // 1) Envoi des fichiers vers Cloudinary
      setSubmitStep('Envoi des pièces jointes…');
      const uploadedFiles = {};
      for (const key of Object.keys(files)) {
        if (files[key]) {
          const url = await uploadFileToCloudinary(files[key]);
          uploadedFiles[key] = { name: files[key].name, url };
        }
      }

      // 2) Construction et envoi de l'email via Web3Forms
      setSubmitStep("Envoi du dossier par email…");
      const reference = generateReference();
      const dateStr = new Date().toLocaleString('fr-FR');

      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Nouveau dossier d'inscription — ${formData.prenom} ${formData.nom}`,
        from_name: `${formData.prenom} ${formData.nom}`,
        to: DEST_EMAIL,
        reference,
        ...formData,
        piece_acte: uploadedFiles.acte?.url || 'Non fourni',
        piece_photo: uploadedFiles.photo?.url || 'Non fourni',
        piece_bulletin: uploadedFiles.bulletin?.url || 'Non fourni',
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!result.success) {
        throw new Error(result.message || "L'envoi de l'email a échoué.");
      }

      const record = { reference, date: dateStr, formData, uploadedFiles };
      setSubmittedRecord(record);
      setStatusMsg({
        type: 'success',
        text: `Votre dossier d'inscription a été envoyé avec succès ! Référence : ${reference}`,
      });
      formRef.current?.reset();
      setFormData({
        nom: '', prenom: '', naissance: '', sexe: '', classe: '', tel: '',
        email: '', parent: '', profession: '', adresse: '', message: '',
      });
      setFiles({ acte: null, photo: null, bulletin: null });
    } catch (err) {
      setStatusMsg({
        type: 'error',
        text: `Une erreur est survenue : ${err.message}. Merci de réessayer.`,
      });
    } finally {
      setIsSubmitting(false);
      setSubmitStep('');
    }
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
              <div
                className={`p-4 rounded-xl text-sm font-semibold text-center ${
                  statusMsg.type === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {statusMsg.text}
              </div>
            )}

            {submittedRecord && (
              <div className="p-5 rounded-xl bg-[#5B2A86]/5 border border-[#5B2A86]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#3D1B5C]">Dossier envoyé — {submittedRecord.reference}</p>
                  <p className="text-xs text-[#665F78] mt-0.5">Téléchargez une copie de votre récapitulatif pour vos archives.</p>
                </div>
                <button
                  type="button"
                  onClick={() => downloadPDF(submittedRecord)}
                  className="whitespace-nowrap px-5 py-2.5 rounded-full font-semibold text-white bg-[#3D1B5C] hover:bg-[#5B2A86] transition-colors text-sm flex items-center gap-2"
                >
                  📄 Télécharger mon dossier (PDF)
                </button>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                <span className="block text-xs text-[#665F78] mt-1">Formats acceptés : PDF, JPG, PNG — {MAX_FILE_SIZE_MB} Mo maximum par fichier.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 mt-6 rounded-full font-semibold text-white bg-gradient-to-r from-[#F2994A] to-[#D9772E] hover:from-[#5B2A86] hover:to-[#3D1B5C] shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    {submitStep || 'Envoi en cours…'}
                  </>
                ) : (
                  <>🚀 Envoyer mon dossier</>
                )}
              </button>
            </form>

          </div>
        </div>
      </section>

    </div>
  );
}
