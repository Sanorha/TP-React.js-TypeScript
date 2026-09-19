export default function PiedDePage() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto border-t border-slate-800 dark:bg-black/50 dark:backdrop-blur-sm dark:border-white/10">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-slate-200">
            Recherche OMDb
          </p>
          <p className="text-xs text-slate-500 mt-1">
            © {new Date().getFullYear()} — Tous droits réservés. Données fournies par l'API OMDb.
          </p>
        </div>
      </div>
    </footer>
  );
}