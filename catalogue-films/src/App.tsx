import { useState } from "react";
import FormulaireInscription from "./composants/FormulaireInscription";
import { ListeInscriptions } from "./composants/ListeInscriptions";
import type { Inscription, InscriptionEnregistree } from "./lib/inscription";

export default function App() {
  // On initialise l'état avec 2 utilisateurs en utilisant le type InscriptionEnregistree
  const [inscrits, setInscrits] = useState<InscriptionEnregistree[]>([
    {
      id: 1,
      prenom: "Grace",
      email: "grace@exemple.fr",
      cgvAcceptees: true,
    },
    {
      id: 2,
      prenom: "Alan",
      email: "alan@exemple.fr",
      cgvAcceptees: true,
    },
  ]);

  // Fonction pour ajouter un nouvel inscrit à la liste
  const handleInscription = (donnees: Inscription) => {
    // Le formulaire nous renvoie une "Inscription", mais la liste attend une "InscriptionEnregistree".
    // On fait donc la conversion ici :
    const nouvelInscrit: InscriptionEnregistree = {
      id: Date.now(), // On génère un ID unique fictif basé sur la date
      prenom: donnees.prenom,
      email: donnees.email,
      cgvAcceptees: donnees.cgv, // On mappe cgv vers cgvAcceptees
    };
    
    setInscrits([...inscrits, nouvelInscrit]);
  };

  // Fonction pour supprimer un inscrit via son id (et non plus son index)
  const supprimerInscrit = (idASupprimer: number) => {
    setInscrits(inscrits.filter((inscrit) => inscrit.id !== idASupprimer));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-8 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* EN-TÊTE */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-[#0f172a] mb-2">
            Créer un compte
          </h1>
          <p className="text-slate-500 text-lg">
            Formulaire contrôlé, typé et validé à la soumission.
          </p>
        </header>

        {/* GRILLE 2 COLONNES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* COLONNE GAUCHE : Formulaire */}
          <div>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
              Inscription
            </h2>
            
            <FormulaireInscription onInscription={handleInscription} />
            
            {/* Annotation de style */}
            <p className="text-xs font-bold text-slate-400 mt-6 uppercase tracking-wider">
              Le formulaire après une soumission invalide
            </p>
          </div>

          {/* COLONNE DROITE : Liste des inscrits */}
          <div>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
              Inscrits ({inscrits.length})
            </h2>

            {/* UTILISATION DE TON COMPOSANT ICI */}
            <ListeInscriptions 
              inscriptions={inscrits} 
              onSuppression={supprimerInscrit} 
            />

            {/* Annotation et simulation de l'état vide (pour correspondre au guide de style de ta maquette) */}
            <div className="mt-10">
              <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                Et quand la liste est vide
              </p>
              <div className="bg-[#f1f5f9] p-8 rounded-lg text-center text-slate-500 text-lg">
                Aucune inscription pour le moment.
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}