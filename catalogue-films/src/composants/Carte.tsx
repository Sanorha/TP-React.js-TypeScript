import type {ReactNode} from "react";
 
export interface CarteProps {
  titre: string;
  sousTitre?: string;
  children: ReactNode;
  actions?: ReactNode;
}
export function Carte({ titre, sousTitre, children, actions }: CarteProps) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden dark:bg-black/40 dark:backdrop-blur-sm dark:border dark:border-white/10 dark:text-slate-100">
      <h2 className="font-bold px-4 pt-4">{titre}</h2>
      <h3 className="font-medium px-4 pb-2">{sousTitre}</h3>
      <div>{children}</div>
      <div className="px-4 py-2">{actions}</div>
    </div>
  );
}