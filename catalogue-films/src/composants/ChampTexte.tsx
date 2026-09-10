import type { ChangeEvent } from "react";

export interface ChampTexteProps {
  nom: string;
  label: string;
  valeur: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "password";
  erreur?: string;
  placeholder?: string;
}

export function ChampTexte({ nom, label, valeur, onChange, type = "text", erreur, placeholder }: ChampTexteProps) {
  return (
    <div>
      <label htmlFor={nom}>{label}</label>
      <input
        id={nom}
        name={nom}
        type={type}
        value={valeur}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!erreur}
        aria-describedby={erreur ? `${nom}-erreur` : undefined}
        className={erreur ? "border-red-500" : "border-slate-300"}
      />
      {erreur && (
        <p id={`${nom}-erreur`} className="text-sm text-red-600">
          {erreur}
        </p>
      )}
    </div>
  );
}