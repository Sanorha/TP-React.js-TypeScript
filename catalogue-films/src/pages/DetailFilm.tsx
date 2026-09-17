import { useParams } from "react-router-dom";
import { useFetch } from "../lib/useFetch";
import type { FilmDetailOmdb } from "../lib/omdb";
import { urlDetail } from "../lib/omdb";

export default function DetailFilm() {
  const { id } = useParams();
  const { donnees, chargement, erreur } = useFetch<FilmDetailOmdb>(
    id ? urlDetail(id) : null
  );

  if (!id)        return <p>Identifiant manquant.</p>;
  if (chargement) return <p>Chargement…</p>;
  if (erreur)     return <p className="text-red-500">{erreur}</p>;
  if (!donnees)   return <p>Film introuvable.</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-1">{donnees.Title}</h1>
      <p className="text-slate-500 mb-4">{donnees.Year} · {donnees.Genre} · {donnees.Runtime}</p>
      {donnees.Poster !== "N/A" && (
        <img
          src={donnees.Poster}
          alt={`Affiche de ${donnees.Title}`}
          className="w-48 rounded mb-4"
          referrerPolicy="no-referrer"
        />
      )}
      <p className="text-slate-700">{donnees.Plot}</p>
    </div>
  );
}