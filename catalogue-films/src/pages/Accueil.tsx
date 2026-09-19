import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { FilmOmdb } from "../lib/omdb";
import { urlDetail } from "../lib/omdb";
import CarteFilm from "../composants/CarteFilm";

const IDS_POPULAIRES = [
  "tt0111161", // The Shawshank Redemption
  "tt0468569", // The Dark Knight
  "tt1375666", // Inception
  "tt0110912", // Pulp Fiction
  "tt0133093", // The Matrix
  "tt0816692", // Interstellar
  "tt0137523", // Fight Club
  "tt0109830", // Forrest Gump
];

export default function Accueil() {
  const [films, setFilms] = useState<FilmOmdb[]>([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState<string | null>(null);

  useEffect(() => {
    const controleur = new AbortController();

    const charger = async () => {
      setChargement(true);
      setErreur(null);
      try {
        const reponses = await Promise.all(
          IDS_POPULAIRES.map((id) =>
            fetch(urlDetail(id), { signal: controleur.signal }).then((r) => r.json())
          )
        );
        const valides = reponses.filter((f) => f.Response !== "False");
        setFilms(
          valides.map((f) => ({
            imdbID: f.imdbID,
            Title: f.Title,
            Year: f.Year,
            Poster: f.Poster,
            Type: "movie",
          }))
        );
      } catch (e: unknown) {
        if (e instanceof Error && e.name === "AbortError") return;
        setErreur(e instanceof Error ? e.message : "Erreur inconnue");
      } finally {
        setChargement(false);
      }
    };

    charger();
    return () => controleur.abort();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 dark:text-white">Recherche de film</h1>
      <p className="text-slate-500 dark:text-slate-300 mb-8">
        Recherchez vos films préférés via l'API OMDb.
      </p>

      <h2 className="text-xl font-semibold mb-4 dark:text-white">Films populaires</h2>

      {chargement && <p className="dark:text-slate-300">Chargement…</p>}
      {erreur && <p className="text-red-500 dark:text-red-400">{erreur}</p>}

      {!chargement && !erreur && (
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {films.map((film) => (
            <li key={film.imdbID}>
              <Link to={`/films/${film.imdbID}`}>
                <CarteFilm film={film} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
