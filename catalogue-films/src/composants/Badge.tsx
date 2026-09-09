export type TonBadge = "neutre" | "succes" | "info" | "attention";
 
export interface BadgeProps {
  texte: string;
  ton?: TonBadge;
}
 
export function Badge({ texte, ton = "neutre" }: BadgeProps) {
  const couleurs = {
    neutre: "bg-gray-200",
    succes: "bg-green-100",
    info: "bg-blue-100",
    attention: "bg-yellow-100",
  };
 
  return (
    <span className={`rounded-sm text-sm ${couleurs[ton]}`}>
      {texte}
    </span>
  );
}