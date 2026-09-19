import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contextes/AuthContext";

interface RouteProtegeeProps {
  children: ReactNode;
}

export function RouteProtegee({ children }: RouteProtegeeProps) {
  const { pseudo } = useAuth();

  if (!pseudo) {
    return <Navigate to="/connexion" replace />;
  }

  return <>{children}</>;
}