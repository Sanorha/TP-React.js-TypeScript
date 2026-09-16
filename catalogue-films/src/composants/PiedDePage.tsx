import { Link } from "react-router-dom";

export default function PiedDePage() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-slate-200">
            Recherche OMDb
          </p>
          <p className="text-xs text-slate-500 mt-1">
            © {new Date().getFullYear()} — Tous droits réservés. Données fournies par l'API OMDb.
          </p>
        </div>

        <nav className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-white transition-colors">
            Accueil
          </Link>
          <Link to="/recherche" className="hover:text-white transition-colors">
            Recherche
          </Link>
          <Link to="/connexion" className="hover:text-white transition-colors">
            Connexion
          </Link>
        </nav>

      </div>
    </footer>
  );
}