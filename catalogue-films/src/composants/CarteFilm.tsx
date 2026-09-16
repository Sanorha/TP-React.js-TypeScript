import { useState } from "react";
import type { FilmOmdb } from "../lib/omdb";
import { Carte } from "./Carte";
import { Badge } from "./Badge";

const typeLabels: Record<string, string> = {
  movie: "Film",
  series: "Série",
  game: "Jeu",
};

export default function CarteFilm({ film }: { film: FilmOmdb }) {
  const [imgErreur, setImgErreur] = useState(false);

  const affiche =
    !film.Poster || film.Poster === "N/A" || imgErreur ? (
      <div className="w-full h-128 bg-gray-100 flex items-center justify-center text-gray-400 rounded">
        Pas d'affiche
      </div>
    ) : (
      <img
        src={film.Poster}
        alt={`Affiche de ${film.Title}`}
        className="w-full h-128 object-cover"
        referrerPolicy="no-referrer"
        onError={() => setImgErreur(true)}
      />
    );

  return (
    <Carte
      titre={film.Title}
      sousTitre={film.Year}
      actions={<Badge texte={typeLabels[film.Type] ?? film.Type} ton="info" />}
    >
      {affiche}
    </Carte>
  );
}