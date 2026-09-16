import type { FilmOmdb } from "../lib/omdb";

export default function CarteFilm({ film }: { film: FilmOmdb }) {
  return (
    <div>
      <img src={film.Poster} alt={film.Title} />
      <p>{film.Title} ({film.Year})</p>
    </div>
  );
}