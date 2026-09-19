import { NavLink } from "react-router-dom";
import { useAuth } from "../contextes/AuthContext";
import { useFavoris } from "../contextes/FavorisContext";
import  BoutonTheme  from "./BoutonTheme"; 

export default function Entete() {
  const { pseudo, deconnecter } = useAuth();
  const { favoris } = useFavoris();

  const classLien = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "font-bold text-blue-600 dark:text-pink-400"
      : "text-slate-600 hover:text-blue-500 dark:text-slate-300 dark:hover:text-pink-400";

  return (
    <header className="p-4 border-b bg-white flex items-center gap-6 dark:bg-black/50 dark:border-white/10 dark:backdrop-blur-sm">
      <NavLink to="/" className={classLien}>
        Accueil
      </NavLink>
      <NavLink to="/recherche" className={classLien}>
        Recherche
      </NavLink>
      <NavLink to="/favoris" className={classLien}>
        Favoris ({favoris.length})
      </NavLink>

      <div className="ml-auto flex items-center gap-4">
        <BoutonTheme />

        {pseudo ? (
          <>
            <span className="text-slate-700 dark:text-slate-300">
              Connecté en tant que <strong className="font-semibold text-slate-900 dark:text-white">{pseudo}</strong>
            </span>
            <button
              onClick={deconnecter}
              className="px-3 py-1 text-sm rounded bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/20"
            >
              Déconnexion
            </button>
          </>
        ) : (
          <NavLink to="/connexion" className={classLien}>
            Connexion
          </NavLink>
        )}
      </div>
    </header>
  );
}