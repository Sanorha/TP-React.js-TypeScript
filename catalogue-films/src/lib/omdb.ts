export interface FilmOmdb {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string; // "movie" | "series" | "game" — l'API n'est pas plus précise
  Poster: string; // une URL, ou la chaîne "N/A"
}

export interface ReponseRecherche {
  Search?: FilmOmdb[]; // absent quand la recherche échoue
  totalResults?: string;
  Response: "True" | "False";
  Error?: string;
}

interface OptionsRechercheOMDb {
  apiKey: string;
  recherche: string;
  type?: "movie" | "series" | "game";
  page?: number;
}

/**
 * Construit l'URL de requête pour l'API OMDb avec encodage des paramètres.
 */
export function construireUrlOmdb({ apiKey, recherche, type, page }: OptionsRechercheOMDb): string {
  const url = new URL("https://www.omdbapi.com/");

  url.searchParams.set("apikey", apiKey);
  url.searchParams.set("s", recherche.trim());

  if (type) {
    url.searchParams.set("type", type);
  }

  if (page) {
    url.searchParams.set("page", page.toString());
  }

  return url.toString();
}