import { NavLink } from "react-router-dom";

export default function Entete() {
  const classLien = ({ isActive }: { isActive: boolean }) =>
    isActive ? "font-bold text-blue-600" : "text-slate-600 hover:text-blue-500";

  return (
    <header className="p-4 border-b bg-white flex gap-6">
      <NavLink to="/" className={classLien}>
        Accueil
      </NavLink>
      <NavLink to="/recherche" className={classLien}>
        Recherche
      </NavLink>
      <NavLink to="/connexion" className={classLien}>
        Connexion
      </NavLink>
    </header>
  );
}