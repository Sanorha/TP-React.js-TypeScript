export type VarianteBouton = "primaire" | "secondaire" | "danger";
export type TypeBouton = "button" | "submit";
const VARIANT: Record<VarianteBouton, string> = {
    primaire: 'bg-green-500',
    secondaire: 'bg-yellow-400',
    danger: 'bg-red-500'}

export interface BoutonProps {
  libelle: string;
  variante?: VarianteBouton; 
  type?: TypeBouton;
  desactive?: boolean; 
  onClick?: () => void;
}


export function Bouton({ libelle, variante = "primaire", type="button", desactive = false, onClick }: BoutonProps) {
  return (<button 
    type = {type}
    disabled={desactive}
    onClick={onClick}
    className={`${VARIANT[variante]} ${desactive ? 'desactive' : ''}`}
  >{libelle}</button>);
};

export default function App() {
  return (
    <div>
      <Bouton 
        libelle="Valider" 
        onClick={() => alert("Action validée !")} 
      />
      
      <Bouton 
        libelle="Modifier" 
        variante="secondaire" 
      />
      
      <Bouton 
        libelle="Supprimer" 
        variante="danger" 
      />
      
      <Bouton 
        libelle="Non autorisé" 
        variante="primaire"
        desactive={true} 
      />
    </div>
  );
}