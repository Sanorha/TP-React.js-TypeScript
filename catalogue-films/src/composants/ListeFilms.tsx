import React from 'react';
import  Carte  from './Carte';
import { Badge } from './Badge';
import { Bouton } from './Bouton';
import type { Film, StatutFilm } from '../lib/utils';
 
export interface ListeFilmsProps {
  films: Film[];
  messageVide?: string;
  onSelection?: (film: Film) => void;
}
 
const CONFIG_STATUT: Record<StatutFilm, { libelle: string; ton: 'succes' | 'info' | 'attention' }> = {
  vu: { libelle: 'Déjà vu', ton: 'succes' },
  a_voir: { libelle: 'À voir', ton: 'info' },
  abandonne: { libelle: 'Abandonné', ton: 'attention' },
};
 
export const ListeFilms: React.FC<ListeFilmsProps> = ({
  films,
  messageVide = "Aucun film à afficher.",
  onSelection,
}) => {
  if (films.length === 0) {
    return <p className="text-gray-500 italic py-4">{messageVide}</p>;
  }
 
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
      {films.map((film) => {
        const config = CONFIG_STATUT[film.statut];
 
        return (
          <li key={film.id}>
            <Carte
              titre={film.titre}
              sousTitre={`${film.annee} — ${film.note}/10`}
              actions={
                onSelection && (
                  <Bouton
                    libelle="Détails"
                    onClick={() => onSelection(film)}
                  />
                )
              }
            >
              <div className="flex flex-wrap gap-2">
                <Badge texte={config.libelle} ton={config.ton} />
               
                {film.genres.map((genre) => (
                  <Badge key={genre} texte={genre} ton="neutre" />
                ))}
              </div>
            </Carte>
          </li>
        );
      })}
    </ul>
  );
};