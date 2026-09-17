export interface FilmOmdb {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

export interface ReponseRecherche {
  Search?: FilmOmdb[];
  totalResults?: string;
  Response: "True" | "False";
  Error?: string;
}

export interface FilmDetailOmdb {
  imdbID: string;
  Title: string;
  Year: string;
  Genre: string;
  Runtime: string;
  Plot: string;
  Poster: string;
  Response: "True" | "False";
  Error?: string;
}

interface OptionsRechercheOMDb {
  apiKey: string;
  recherche: string;
  type?: "movie" | "series" | "game";
  page?: number;
}

export function construireUrlOmdb({ apiKey, recherche, type, page }: OptionsRechercheOMDb): string {
  const url = new URL("https://www.omdbapi.com/");
  url.searchParams.set("apikey", apiKey);
  url.searchParams.set("s", recherche.trim());
  if (type) url.searchParams.set("type", type);
  if (page) url.searchParams.set("page", page.toString());
  return url.toString();
}

export function urlDetail(id: string): string {
  const url = new URL("https://www.omdbapi.com/");
  url.searchParams.set("apikey", import.meta.env.VITE_OMDB_API_KEY || "5a671a5a");
  url.searchParams.set("i", id);
  return url.toString();
}