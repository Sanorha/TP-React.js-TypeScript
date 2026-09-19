import { useTheme } from "../contextes/ThemeContext";

export default function BoutonTheme() {
  const { theme, basculer } = useTheme();

  return (
    <button
      onClick={basculer}
      aria-label={theme === "sombre" ? "Mode clair" : "Mode sombre"}
      className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "sombre" ? "🌙" : "☀️"}
    </button>
  );
}