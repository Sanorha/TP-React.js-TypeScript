import type {ReactNode} from "react";
 
export interface CarteProps {
  titre: string;
  sousTitre?: string;
  children: ReactNode;
  actions?: ReactNode;
}
 
export function Carte({titre, sousTitre, children,actions}:CarteProps) {
  return(
    <div className="rounded-lg shadow-lg" >
      <h2 className="font-bold">{titre}</h2>
      <h3 className="font-medium">{sousTitre}</h3>
        <p>{children} </p>
        <p>{actions} </p>
    </div>
  )
}