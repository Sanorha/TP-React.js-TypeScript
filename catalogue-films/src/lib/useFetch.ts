import { useState, useEffect } from "react";

interface Etat<T> {
  donnees: T | null;
  chargement: boolean;
  erreur: string | null;
}

export function useFetch<T>(url: string | null): Etat<T> {
  const [donnees, setDonnees] = useState<T | null>(null);
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    const controleur = new AbortController();

    const charger = async () => {
      setChargement(true);
      setErreur(null);
      try {
        const r = await fetch(url, { signal: controleur.signal });
        const d = await r.json();
        if (d.Response === "False") throw new Error(d.Error || "Introuvable");
        setDonnees(d);
      } catch (e: unknown) {
        if (e instanceof Error && e.name === "AbortError") return;
        setErreur(e instanceof Error ? e.message : "Erreur inconnue");
      } finally {
        setChargement(false);
      }
    };

    charger();
    return () => controleur.abort();
  }, [url]);

  return { donnees, chargement, erreur };
}