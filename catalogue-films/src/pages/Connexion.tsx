import { useState } from "react";
import type { FormEvent } from "react";
import { useAuth } from "../contextes/AuthContext";

export default function Connexion() {
  const [saisie, setSaisie] = useState("");
  const { connecter } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const pseudoNettoye = saisie.trim();
    if (pseudoNettoye !== "") {
      connecter(pseudoNettoye);
      setSaisie("");
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-slate-100 p-8">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">
          Connexion
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="pseudo"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Pseudo
            </label>
            <input
              id="pseudo"
              type="text"
              value={saisie}
              onChange={(e) => setSaisie(e.target.value)}
              placeholder="Entrez votre pseudo"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-400 text-slate-800"
            />
          </div>

          <button
            type="submit"
            disabled={!saisie.trim()}
            className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}