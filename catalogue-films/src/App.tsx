import { useState, useEffect } from "react";
import FormulaireInscription from "./composants/FormulaireInscription";
import { ListeInscriptions } from "./composants/ListeInscriptions";
import type { Inscription, InscriptionEnregistree } from "./lib/inscription";
import { construireUrlOmdb } from "./lib/omdb";
import type { FilmOmdb, ReponseRecherche } from "./lib/omdb";
import RechercheFilms from "./composants/RechercheFilms";

export default function App() {
  return (
    <div className="p-8">
      <RechercheFilms />
    </div>
  );

  // const [inscrits, setInscrits] = useState<InscriptionEnregistree[]>([
  //   {
  //     id: 1,
  //     prenom: "Grace",
  //     email: "grace@exemple.fr",
  //     cgvAcceptees: true,
  //   },
  //   {
  //     id: 2,
  //     prenom: "Alan",
  //     email: "alan@exemple.fr",
  //     cgvAcceptees: true,
  //   },
  // ]);

  // const handleInscription = (donnees: Inscription) => {
  //   const nouvelInscrit: InscriptionEnregistree = {
  //     id: Date.now(), 
  //     prenom: donnees.prenom,
  //     email: donnees.email,
  //     cgvAcceptees: donnees.cgv,
  //   };
    
  //   setInscrits([...inscrits, nouvelInscrit]);
  // };

  // const supprimerInscrit = (idASupprimer: number) => {
  //   setInscrits(inscrits.filter((inscrit) => inscrit.id !== idASupprimer));
  // };

  // return (
  //   <div className="min-h-screen bg-[#f8fafc] p-8 font-sans text-slate-800">
  //     <div className="max-w-6xl mx-auto">
  //       <header className="mb-10">
  //         <h1 className="text-4xl font-bold text-[#0f172a] mb-2">
  //           Créer un compte
  //         </h1>
  //         <p className="text-slate-500 text-lg">
  //           Formulaire contrôlé, typé et validé à la soumission.
  //         </p>
  //       </header>

  //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  //         <div>
  //           <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
  //             Inscription
  //           </h2>
            
  //           <FormulaireInscription onInscription={handleInscription} />
            
  //           <p className="text-xs font-bold text-slate-400 mt-6 uppercase tracking-wider">
  //             Le formulaire après une soumission invalide
  //           </p>
  //         </div>

  //         <div>
  //           <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
  //             Inscrits ({inscrits.length})
  //           </h2>

  //           <ListeInscriptions 
  //             inscriptions={inscrits} 
  //             onSuppression={supprimerInscrit} 
  //           />

  //           <div className="mt-10">
  //             <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
  //               Et quand la liste est vide
  //             </p>
  //             <div className="bg-[#f1f5f9] p-8 rounded-lg text-center text-slate-500 text-lg">
  //               Aucune inscription pour le moment.
  //             </div>
  //           </div>

  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}