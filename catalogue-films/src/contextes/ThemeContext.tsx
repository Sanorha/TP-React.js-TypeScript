import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Theme = "clair" | "sombre";

interface ThemeContextType {
  theme: Theme;
  basculer: () => void;
}

function lireThemeInitial(): Theme {
  const stocke = localStorage.getItem("theme");
  if (stocke === "clair" || stocke === "sombre") return stocke;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "sombre" : "clair";
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(lireThemeInitial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "sombre");
    localStorage.setItem("theme", theme);
  }, [theme]);

  function basculer() {
    setTheme((courant) => (courant === "clair" ? "sombre" : "clair"));
  }

  return (
    <ThemeContext.Provider value={{ theme, basculer }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (ctx === null) {
    throw new Error("useTheme() doit être utilisé dans un <ThemeProvider>");
  }
  return ctx;
}