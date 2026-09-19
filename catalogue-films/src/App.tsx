import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contextes/AuthContext";
import Layout from "./composants/Layout";
import Accueil from "./pages/Accueil";
import Recherche from "./pages/Recherche";
import DetailFilm from "./pages/DetailFilm";
import Connexion from "./pages/Connexion";
import Favoris from "./pages/Favoris";
import PageIntrouvable from "./pages/PageIntrouvable";
import { RouteProtegee } from "./composants/RouteProtegee";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="recherche" element={<Recherche />} />
          <Route path="films/:id" element={<DetailFilm />} />
          <Route path="connexion" element={<Connexion />} />
          <Route path="*" element={<PageIntrouvable />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}