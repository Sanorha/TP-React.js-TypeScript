import { NavLink } from "react-router-dom";
import { useAuth } from "../contextes/AuthContext";
import { useFavoris } from "../contextes/FavorisContext";

export default function Entete() {
  const { pseudo, deconnecter } = useAuth();
  const { favoris } = useFavoris();

  const classLien = ({ isActive }: { isActive: boolean }) =>
    isActive ? "font-bold text-blue-600" : "text-slate-600 hover:text-blue-500";

  return (
    <header className="p-4 border-b bg-white flex items-center gap-6">
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
        {pseudo ? (
          <>
            <span className="text-slate-700">
              Connecté en tant que <strong className="font-semibold text-slate-900">{pseudo}</strong>
            </span>
            <button
              onClick={deconnecter}
              className="px-3 py-1 text-sm rounded bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
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