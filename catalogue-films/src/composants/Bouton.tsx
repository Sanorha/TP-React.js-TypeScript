export type VarianteBouton = "primaire" | "secondaire" | "danger";

const VARIANT: Record<VarianteBouton, string> = {
    primaire: 'bg-green-500',
    secondaire: 'bg-yellow-400',
    danger: 'bg-red-500'}

export interface BoutonProps {
  libelle: string;
  variante?: VarianteBouton; 
  desactive?: boolean; 
  onClick?: () => void;
}


export function Bouton({ libelle, variante = "primaire", desactive = false, onClick }: BoutonProps) {
  return (<button 
    type="button"
    disabled={desactive}
    onClick={onClick}
    className={`${VARIANT[variante]} ${desactive ? 'desactive' : ''}`}
  >{libelle}</button>);
};
