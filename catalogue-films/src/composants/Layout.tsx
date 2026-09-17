import { Outlet } from "react-router-dom";
import Entete from "./Entete";
import PiedDePage from "./PiedDePage";

export default function Layout() {
  return (
<div className="h-screen flex flex-col bg-slate-50 text-slate-800">
        <Entete />
      
     <main className="flex-1 overflow-hidden p-6 max-w-6xl w-full mx-auto">
  <Outlet />
</main>

      <PiedDePage />
    </div>
  );
}