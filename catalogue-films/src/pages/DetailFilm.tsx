import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../lib/useFetch"; // Ajuste le chemin selon ton projet (ex: "../hooks/useFetch")
import { urlDetail, type FilmDetailOmdb } from "../lib/omdb";
import { useFavoris } from "../contextes/FavorisContext";
import { useAuth } from "../contextes/AuthContext";

export default function DetailFilm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { donnees: film, chargement, erreur } = useFetch<FilmDetailOmdb>(
    id ? urlDetail(id) : null
  );
  const { favoris, dispatch } = useFavoris();
  const { pseudo } = useAuth();

  if (chargement) return <p className="text-slate-600 dark:text-slate-300">Chargement…</p>;
  if (erreur) return <p className="text-red-500 dark:text-red-400">{erreur}</p>;
  if (!film || film.Response === "False") return <p className="text-slate-600 dark:text-slate-300">Film introuvable.</p>;

  const estDejaFavori = favoris.some((f) => f.imdbID === film.imdbID);

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg border border-slate-200 shadow-sm dark:bg-black/40 dark:backdrop-blur-sm dark:border-white/10">
        
        {film.Poster && film.Poster !== "N/A" && (
          <img
            src={film.Poster}
            alt={film.Title}
            className="w-full md:w-64 h-auto object-cover rounded-md shrink-0 self-start border border-slate-100 dark:border-white/10"
          />
        )}

        <div className="flex flex-col flex-1 justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-baseline justify-between flex-wrap gap-2 border-b border-slate-100 dark:border-white/10 pb-2">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{film.Title}</h1>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{film.Year}</span>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
              {film.Genre && (
                <span className="bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 dark:bg-white/10 dark:border-white/10">
                  {film.Genre}
                </span>
              )}
              {film.Runtime && (
                <span className="bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 dark:bg-white/10 dark:border-white/10">
                  {film.Runtime}
                </span>
              )}
            </div>

            <p className="text-slate-700 leading-relaxed text-sm pt-2 dark:text-slate-300">
              {film.Plot}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-white/10">
            <button
              disabled={estDejaFavori}
              onClick={() => {
                if (!pseudo) {
                  navigate("/connexion");
                  return;
                }
                dispatch({
                  type: "ajouter",
                  film: {
                    imdbID: film.imdbID,
                    Title: film.Title,
                    Year: film.Year,
                    Poster: film.Poster,
                    Type: "movie",
                  },
                });
              }}
              className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                estDejaFavori
                  ? "bg-slate-200 text-slate-500 cursor-not-allowed dark:bg-white/10 dark:text-slate-400"
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