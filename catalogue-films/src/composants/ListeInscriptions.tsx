import React from 'react';

import { Carte } from './Carte';
import { Badge } from './Badge';
import { Bouton } from './Bouton';
import type { InscriptionEnregistree } from '../lib/inscription'; // Ajuste le chemin vers ton fichier inscription si besoin

export interface ListeInscriptionsProps {
  inscriptions: InscriptionEnregistree[];
  onSuppression?: (id: number) => void;
}

export const ListeInscriptions: React.FC<ListeInscriptionsProps> = ({
  inscriptions,
  onSuppression,
}) => {
  if (!inscriptions || inscriptions.length === 0) {
    return <p className="text-gray-500">Aucune inscription enregistrée.</p>;
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0">
      {inscriptions.map((inscription) => (
        <li key={inscription.id}>
          <Carte
            titre={inscription.prenom}
            sousTitre={inscription.email}
            actions={
              onSuppression ? (
                <Bouton
                  libelle="Supprimer"
                  variante="danger"
                  onClick={() => onSuppression(inscription.id)}
                />
              ) : undefined
            }
          >
            {inscription.cgvAcceptees && <Badge texte="CGV acceptées" />}
          </Carte>
        </li>
      ))}
    </ul>
  );
};