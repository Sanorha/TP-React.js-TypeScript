import React, { useState } from "react";
import type { Inscription, Erreurs } from "../lib/inscription";
import { valeursInitiales, valider } from "../lib/inscription";
import { ChampTexte } from "./ChampTexte";
import { Bouton } from "./Bouton";

export interface FormulaireInscriptionProps {
  onInscription: (donnees: Inscription) => void;
}
 
export default function FormulaireInscription({ onInscription }: FormulaireInscriptionProps) {
  const [donnees, setDonnees] = useState<Inscription>(valeursInitiales);
  const [erreurs, setErreurs] = useState<Erreurs>({});
  const [envoiEnCours, setEnvoiEnCours] = useState(false);

  const gererSaisie = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const valeur = type === "checkbox" ? checked : value;
    setDonnees((d) => ({ ...d, [name]: valeur }));
  };
 
  const soumettre = () => {
    const trouvees = valider(donnees);
    setErreurs(trouvees);
    if (Object.keys(trouvees).length > 0) return;
    
    setEnvoiEnCours(true);
    
    window.setTimeout(() => {
      onInscription(donnees);
      setDonnees(valeursInitiales);
      setErreurs({});
      setEnvoiEnCours(false);
    }, 800);
  };
 
const gererEnvoi = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const trouvees = valider(donnees);
  setErreurs(trouvees);
  if (Object.keys(trouvees).length > 0) return;
  setEnvoiEnCours(true);
  onInscription(donnees);
  setDonnees(valeursInitiales);
  setErreurs({});
  setEnvoiEnCours(false);
};
  return (
    <form onSubmit={gererEnvoi} noValidate className="space-y-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <ChampTexte
        nom="prenom"
        label="Prénom"
        valeur={donnees.prenom}
        onChange={gererSaisie}
        erreur={erreurs.prenom}
      />
 
      <ChampTexte
        nom="email"
        label="E-mail"
        type="email"
        valeur={donnees.email}
        onChange={gererSaisie}
        erreur={erreurs.email}
      />
 
      <ChampTexte
        nom="motDePasse"
        label="Mot de passe"
        type="password"
        valeur={donnees.motDePasse}
        onChange={gererSaisie}
        erreur={erreurs.motDePasse}
      />
 
      <ChampTexte
        nom="confirmation"
        label="Confirmer le mot de passe"
        type="password"
        valeur={donnees.confirmation}
        onChange={gererSaisie}
        erreur={erreurs.confirmation}
      />
 
      <div className="flex flex-col space-y-1">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="cgv"
            checked={donnees.cgv}
            onChange={gererSaisie}
            disabled={envoiEnCours}
          />
          <span className="text-sm font-medium">J'accepte les conditions générales (CGV)</span>
        </label>
        {erreurs.cgv && <p className="text-red-500 text-sm">{erreurs.cgv}</p>}
      </div>
      
     <button
        type="submit"
        disabled={envoiEnCours}
        className="w-full px-4 py-2 bg-green-500 text-white rounded font-medium hover:bg-green-600 disabled:opacity-50 transition"
      >
        {envoiEnCours ? "Inscription..." : "S'inscrire"}
      </button>
    </form>
  );
}