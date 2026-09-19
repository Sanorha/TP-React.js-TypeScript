import { Link } from "react-router-dom";
import { useFavoris } from "../contextes/FavorisContext";
import CarteFilm from "../composants/CarteFilm";

export default function Favoris() {
  const { favoris, dispatch } = useFavoris();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vos films favoris ({favoris.length})</h1>
        {favoris.length > 0 && (
          <button
            onClick={() => dispatch({ type: "vider" })}
            className="text-sm bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1 rounded transition-colors dark:bg-red-500/20 dark:text-red-300 dark:hover:bg-red-500/30"
          >
            Vider les favoris
          </button>
        )}
      </div>

      {favoris.length === 0 ? (
        <p className="text-slate-500 dark:text-slate-300">Vous n'avez aucun film dans vos favoris pour le moment.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favoris.map((film) => (
            <li key={film.imdbID} className="flex flex-col gap-2">
              <Link to={`/films/${film.imdbID}`}>
                <CarteFilm film={film} />
              </Link>
              <button
                onClick={() => dispatch({ type: "retirer", id: film.imdbID })}
                className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-2 rounded transition-colors"
              >
                Retirer des favoris
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}