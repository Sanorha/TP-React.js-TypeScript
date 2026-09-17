import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { FilmOmdb } from "../lib/omdb";
import { construireUrlOmdb } from "../lib/omdb";
import CarteFilm from "./CarteFilm";

export default function RechercheFilms() {
  const [terme, setTerme] = useState("");
  const [films, setFilms] = useState<FilmOmdb[]>([]);
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  useEffect(() => {
    if (!terme) return;
    const charger = async () => {
      setChargement(true);
      setErreur(null);
      setFilms([]);
      try {
        const url = construireUrlOmdb({
          apiKey: import.meta.env.VITE_OMDB_API_KEY || "5a671a5a",
          recherche: terme,
        });
        const r = await fetch(url);
        const d = await r.json();
        if (d.Response === "False") throw new Error(d.Error);
        setFilms(d.Search || []);
      } catch (e: unknown) {
        setErreur(e instanceof Error ? e.message : "Erreur inconnue");
      } finally {
        setChargement(false);
      }
    };
    charger();
  }, [terme]);

  const renderContenu = () => {
    if (!terme)        return <p>Tapez un titre pour lancer la recherche.</p>;
    if (chargement)    return <p>Chargement…</p>;
    if (erreur)        return <p className="text-red-500">{erreur}</p>;
    if (!films.length) return <p>Aucun film ne correspond à « {terme} ».</p>;
    return (
      <ul className="grid grid-cols-3 gap-4">
        {films.map((film) => (
          <li key={film.imdbID}>
            <Link to={`/films/${film.imdbID}`}>
              <CarteFilm film={film} />
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <input
        value={terme}
        onChange={(e) => setTerme(e.target.value)}
        placeholder="Rechercher un film…"
        className="border p-2 mb-4 w-full"
      />
      {renderContenu()}
    </div>
  );
}