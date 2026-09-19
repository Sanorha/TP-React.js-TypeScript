import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./contextes/AuthContext";
import { FavorisProvider } from "./contextes/FavorisContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <FavorisProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavorisProvider>
  </AuthProvider>
);