import RechercheFilms from "./composants/RechercheFilms";

// import { Routes, Route } from "react-router-dom";
// import Layout from "./composants/Layout";

// import Accueil from "./pages/Accueil";
// import Recherche from "./pages/Recherche";
// import DetailFilm from "./pages/DetailFilm";
// import Connexion from "./pages/Connexion";
// import PageIntrouvable from "./pages/PageIntrouvable";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Accueil />} />
//         <Route path="recherche" element={<Recherche />} />
//         <Route path="films/:id" element={<DetailFilm />} />
//         <Route path="connexion" element={<Connexion />} />
//         <Route path="*" element={<PageIntrouvable />} />
//       </Route>
//     </Routes>
//   );
// }

export default function App() {
  return (
    <div className="p-8">
      <RechercheFilms />
    </div>
  );
}