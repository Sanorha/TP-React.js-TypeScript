import { useParams } from "react-router-dom";
import { useFetch } from "../lib/useFetch"; // Ajuste le chemin selon ton projet (ex: "../hooks/useFetch")
import { urlDetail, type FilmDetailOmdb } from "../lib/omdb";
import { useFavoris } from "../contextes/FavorisContext";

export default function DetailFilm() {
  const { id } = useParams();
  const { donnees: film, chargement, erreur } = useFetch<FilmDetailOmdb>(
    id ? urlDetail(id) : null
  );
  const { favoris, dispatch } = useFavoris();

  if (chargement) return <p className="text-slate-600">Chargement…</p>;
  if (erreur) return <p className="text-red-500">{erreur}</p>;
  if (!film || film.Response === "False") return <p className="text-slate-600">Film introuvable.</p>;

  const estDejaFavori = favoris.some((f) => f.imdbID === film.imdbID);

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        
        {/* Poster du film */}
        {film.Poster && film.Poster !== "N/A" && (
          <img
            src={film.Poster}
            alt={film.Title}
            className="w-full md:w-64 h-auto object-cover rounded-md shrink-0 self-start border border-slate-100"
          />
        )}

        {/* Informations détaillées */}
        <div className="flex flex-col flex-1 justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-baseline justify-between flex-wrap gap-2 border-b border-slate-100 pb-2">
              <h1 className="text-2xl font-bold text-slate-900">{film.Title}</h1>
              <span className="text-sm font-semibold text-slate-500">{film.Year}</span>
            </div>

            {/* Badges Genre et Durée */}
            <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600">
              {film.Genre && (
                <span className="bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                  {film.Genre}
                </span>
              )}
              {film.Runtime && (
                <span className="bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                  {film.Runtime}
                </span>
              )}
            </div>

            {/* Synopsis */}
            <p className="text-slate-700 leading-relaxed text-sm pt-2">
              {film.Plot}
            </p>
          </div>

          {/* Bouton d'action */}
          <div className="pt-4 border-t border-slate-100">
            <button
              disabled={estDejaFavori}
              onClick={() =>
                dispatch({
                  type: "ajouter",
                  film: {
                    imdbID: film.imdbID,
                    Title: film.Title,
                    Year: film.Year,
                    Poster: film.Poster,
                    Type: "movie",
                  },
                })
              }
              className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                estDejaFavori
                  ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
              }`}
            >
              {estDejaFavori ? "Déjà dans les favoris" : "Ajouter aux favoris"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}