export type TonBadge = "neutre" | "succes" | "info" | "attention";

export interface BadgeProps {
  texte: string;
  ton?: TonBadge; 
}

export function Badge({ texte, ton = "neutre" }: BadgeProps) {
  const couleurs = {
    neutre: "bg-gray-200 dark:bg-white/10 dark:text-slate-200",
    succes: "bg-green-100 dark:bg-green-500/20 dark:text-green-300",
    info: "bg-blue-100 dark:bg-blue-500/20 dark:text-blue-300",
    attention: "bg-yellow-100 dark:bg-yellow-500/20 dark:text-yellow-300",
  };
  return (
    <span className={`rounded-sm text-sm ${couleurs[ton]}`}>
      {texte}
    </span>
  );
}