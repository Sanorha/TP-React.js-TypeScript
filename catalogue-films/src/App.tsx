import './App.css';
import { useState } from 'react';
import { ListeFilms } from './composants/ListeFilms';
import { Bouton } from './composants/Bouton';
import FormulaireInscription from './composants/FormulaireInscription';
import { FILMS, trierPar, filtrerParGenre } from './lib/utils';
import type { Film } from './lib/utils';
import type { Inscription } from './lib/inscription';

export type InscriptionEnregistree =
  Omit<Inscription, 'motDePasse' | 'confirmation'> & { id: number };

let compteurId = 0;

function App() {
  const [inscriptions, setInscriptions] = useState<InscriptionEnregistree[]>([]);

  const handleSelection = (film: Film) => {
    alert(`Détails du film : ${film.titre}`);
  };

  const handleInscription = (donnees: Inscription) => {
    const nouvelle: InscriptionEnregistree = {
      id: ++compteurId,
      prenom: donnees.prenom,
      email: donnees.email,
      cgv: donnees.cgv,
    };
    setInscriptions((liste) => [nouvelle, ...liste]);
  };

  const supprimerInscription = (id: number) => {
    setInscriptions((liste) => liste.filter((i) => i.id !== id));
  };

  const filmsTries = trierPar(FILMS, 'titre');
  const filmsDocs = filtrerParGenre(FILMS, 'Documentaire');

  return (
    <div className="container mx-auto p-6 space-y-12">
      <header>
        <h1 className="text-3xl font-bold">Catalogue de films</h1>
        <p className="text-gray-500">5 films — composants typés et mise en forme Tailwind.</p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-4">Tous les films</h2>
        <ListeFilms
          films={filmsTries}
          onSelection={handleSelection}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Documentaires</h2>
        <ListeFilms
          films={filmsDocs}
          messageVide="Aucun documentaire dans le catalogue pour le moment."
        />
      </section>

      <section className="pt-6 border-t border-gray-200">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
          Les quatre états du composant Bouton
        </h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Bouton
            libelle="Action principale"
            onClick={() => alert('Action principale cliquée !')}
          />
          <Bouton libelle="Action secondaire" variante="secondaire" />
          <Bouton libelle="Supprimer" variante="danger" />
          <Bouton libelle="Indisponible" variante="primaire" desactive={true} />
        </div>
      </section>

      <section className="pt-6 border-t border-gray-200">
        <h2 className="text-xl font-semibold mb-6">Inscription</h2>
        <FormulaireInscription onInscription={handleInscription} />

        {inscriptions.length > 0 && (
          <div className="max-w-md mx-auto mt-8">
            <h3 className="text-lg font-semibold mb-4">
              Inscrits ({inscriptions.length})
            </h3>
            <ul className="space-y-3">
              {inscriptions.map((i) => (
                <li
                  key={i.id}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
                >
                  <div>
                    <p className="font-medium">{i.prenom}</p>
                    <p className="text-sm text-gray-500">{i.email}</p>
                  </div>
                  <Bouton
                    libelle="Supprimer"
                    variante="danger"
                    onClick={() => supprimerInscription(i.id)}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;