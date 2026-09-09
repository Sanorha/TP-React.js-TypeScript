import './App.css';
import { ListeFilms } from './composants/ListeFilms';
import { Bouton } from './composants/Bouton';
import { FILMS, trierPar, filtrerParGenre } from './lib/utils';
import type { Film } from './lib/utils';

function App() {
  const handleSelection = (film: Film) => {
    alert(`Détails du film : ${film.titre}`);
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
            onClick={() => alert("Action principale cliquée !")} 
          />
          <Bouton 
            libelle="Action secondaire" 
            variante="secondaire" 
          />
          <Bouton 
            libelle="Supprimer" 
            variante="danger" 
          />
          <Bouton 
            libelle="Indisponible" 
            variante="primaire"
            desactive={true} 
          />
        </div>
      </section>
    </div>
  );
}

export default App;